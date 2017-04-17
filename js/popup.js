console.log('hi from popup');

window.onload = function() {
    var data = chrome.extension.getBackgroundPage().data;

    console.log('onload', data);

    if (data) {
        document.getElementById('adressbar').innerHTML = data.host;
        document.getElementById('real').innerHTML = data.puny;
        document.getElementById('error').style.display = "block";
        document.getElementById('ok').style.display = "none";
    } else {
        document.getElementById('ok').style.display = "block";
        document.getElementById('error').style.display = "none";
    }
}