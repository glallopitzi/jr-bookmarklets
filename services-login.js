javascript: (function(e, a, g, h, f, c, b, d) {
    if (!(f = e.jQuery) || g > f.fn.jquery || h(f)) {
        c = a.createElement("script");
        c.type = "text/javascript";
        c.src = "https://ajax.googleapis.com/ajax/libs/jquery/" + g + "/jquery.min.js";
        c.onload = c.onreadystatechange = function() {
            if (!b && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                h((f = e.jQuery).noConflict(1), b = 1);
                f(c).remove()
            }
        };
        a.documentElement.childNodes[0].appendChild(c);
    }

})(window, document, "2.1.1", function($, L) {
    
    /*
        1) try to retrieve user credential from local storage, if there aren't stored yet, then ask to the user
        2) login to jr service requested
        3) do something usefull
    */

    var username, password, websiteBaseUrlLocal, service, country, _env, _domain;

    if(typeof(Storage) !== "undefined") {
        console.log("storage present, try to retrieve values");

        username = localStorage.getItem("username");
        if(username === '' || username === 'undefined' || username === null){
            username = prompt('username?');
            localStorage.setItem("username", username);
        } else {
            console.log("username: " + username);
        }

        password = localStorage.getItem("password");
        if(password === '' || password === 'undefined' || password === null){
            password = prompt('password?');
            localStorage.setItem("password", password);
        } else {
            console.log("password: " + password);
        }

        websiteBaseUrlLocal = localStorage.getItem("websiteBaseUrlLocal");
        if(websiteBaseUrlLocal === '' || websiteBaseUrlLocal === 'undefined' || websiteBaseUrlLocal === null){
            websiteBaseUrlLocal = prompt('your local websiteBaseuUrl?');
            localStorage.setItem("websiteBaseUrlLocal", websiteBaseUrlLocal);
        } else {
            console.log("websiteBaseUrlLocal: " + websiteBaseUrlLocal);
        }

    } else {
        console.log("no storage present, we must prompt credentials if needed for each request");

        username = prompt('username?');
        password = prompt('password?');
        websiteBaseUrlLocal = prompt('your local websiteBaseuUrl?');
    }

    var _env = prompt('which env? (loc for local, CN for a country, hq for HQ)');
    if (_env === "loc") {
        _domain = websiteBaseUrlLocal + "Service/Terminal.jsp";

    } else if (_env === "hq") {
        _domain = "http://www.jobrapido.net/Service/SuperTerminalSql.jsp";

    } else {
        _domain = "http://" + _env + ".jobrapido.com/Service/Terminal.jsp";

    }

    if (_domain !== "") {
        window.open(_domain);
    };
   
});