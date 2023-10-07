javascript: void(function () {
    let uri = window.location.href;
    if (uri.includes('www.youtube.com')){
        let replaceUri = uri.replace("www.youtube.com", "m.youtube.com");
        let clip = document.createElement("textarea");
        clip.textContent = replaceUri;
        document.body.appendChild(clip);
        clip.select();
        document.execCommand("copy");
        clip.remove();
        console.log(`${replaceUri} copied.`);
    }
})();