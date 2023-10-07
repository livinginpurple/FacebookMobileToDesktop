javascript: (function () {
    let uri = location.href;
    if (uri.includes("googleusercontent.com") && uri.includes("=s100")) {
        let replaceUri = uri.replace("=s100", "=s5000");
        let clip = document.createElement("textarea");
        clip.textContent = replaceUri;
        document.body.appendChild(clip);
        clip.select();
        document.execCommand("copy");
        clip.remove();
        console.log(replaceUri + " copied.");
    }
})();