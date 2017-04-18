var host = document.location.host,
    puny = punycode.toUnicode(host);

chrome.runtime.sendMessage(
    {
    host: host,
    puny: puny
});
