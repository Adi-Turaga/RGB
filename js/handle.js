window.addEventListener("load", function() {
    function sendData() {
        const XHR = new XMLHttpRequest();
        const FD = new FormData(form);
        XHR.addEventListener("load", function(event) {});
        XHR.addEventListener("error", function(event) {});
        XHR.open("POST", "../backend/form.php");
        XHR.send(FD);
    }

    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        sendData();
    });
});