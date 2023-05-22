// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// Extract the domain name from a URL
//! https://developer.mozilla.org/en-US/docs/Web/API/URL

function domainName(url) {
  const urlObj = new URL(url);
  const domainName = urlObj.hostname;
  return domainName;
}

console.log(domainName("http://google.com"));
