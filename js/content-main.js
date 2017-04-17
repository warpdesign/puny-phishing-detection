var host = document.location.host,
    puny = punycode.toASCII(host);

chrome.runtime.sendMessage(
    {
    host: host,
    puny: puny
});