// https://www.codewars.com/kata/514a024011ea4fb54200004b
const domainName = (url) => {
  if (url.includes("www")) {
    return url.match(/\.([^\.]*)/)[1];
  } else if (url.includes("http")) {
    return url.match(/\/+([^\.]*)/)[1];
  } else {
    return url.match(/[^\.]*/)[0];
  }
};