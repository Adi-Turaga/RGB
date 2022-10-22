function send_data(str) {
    const XHR = new XMLHttpRequest();
    const FD = new FormData();
    XHR.open("POST", "../backend/handler.php")
    FD.append("data", str);
    XHR.send(FD);
}

function getRGB(str) {
    var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
    return match ? {
        red: match[1],
        green: match[2],
        blue: match[3]
    } : {};
}

var btns = document.querySelectorAll('.btn');

for(var i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        var raw_rgb = window.getComputedStyle(this).backgroundColor;
        var rgb = getRGB(raw_rgb);
        console.log('Button color: ', rgb);
        send_data(JSON.stringify(rgb));
        
        document.getElementById("_red").value = rgb.red;
        document.getElementById("_green").value = rgb.green;
        document.getElementById("_blue").value = rgb.blue;

        document.getElementById("rrng").value = rgb.red;
        document.getElementById("grng").value = rgb.green;
        document.getElementById("brng").value = rgb.blue;
    })
}