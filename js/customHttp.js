class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.addEventListener("load", () => {
            callback(JSON.parse(xhr.responseText));
        });

        xhr.send();
    }
}