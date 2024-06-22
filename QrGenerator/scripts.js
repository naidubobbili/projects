function genQR() {
    var gapi = "https://quickchart.io/qr?text=";
    var myimg = document.getElementById("img");
    var mytext = document.getElementById("qrtext").value;
    var mysize = document.getElementById("size").value;

    if (mytext !== "") {
        myimg.src = gapi + mytext + "&size=" + mysize;
    } else {
        alert("Please Enter Text");
    }
}
