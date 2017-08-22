        javascript: void ((
        function () {
            'use strict';
            var a = window.location.search.split('&');
            var fbid;
            var id;
            for (var ele in a) {
                console.log(a[ele]);
                if (a[ele].includes('fbid')) {
                    fbid = a[ele].split('=')[1];
                }
                if (a[ele].includes('id')) {
                    id = a[ele].split('=')[1];
                }
            }
            console.log("fbid:" + fbid + "; " + "id:" + id);
            var desktopURI = "https://www.facebook.com/" + id +"/posts/" + fbid;
            console.log(desktopURI);
            document.location.href = desktopURI;
        })(document)
    );