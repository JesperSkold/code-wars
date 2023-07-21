// https://www.codewars.com/kata/563fbac924106b8bf7000046
const generateBC = (url, seperator) => {
  let breadcrumb = `<a href="/">HOME</a>${seperator}`
  const links = url
    .split(/\/|index\..*|\.html*|\.asp|\?.*|https*:|#.*|\.php/i)
    .filter((x) => x !== "")
  let prevLink = "/"
  for (let i = 0; i < links.length; i++) {
    if (i !== 0 && i !== links.length - 1) {
      prevLink += `${links[i]}/`
      breadcrumb += `<a href="${prevLink}">${
        links[i].length > 30 ? acronymizer(links[i]) : urlHandler(links[i])
      }</a>${seperator}`
    } else if (i === links.length - 1) {
      if (links.length === 1) {
        breadcrumb = `<span class="active">HOME</span>`
      } else {
        breadcrumb += `<span class="active">${
          links[i].length > 30 ? acronymizer(links[i]) : urlHandler(links[i])
        }</span>`
      }
    }
  }
  return breadcrumb
}
const urlHandler = (url) => {
  if (url.includes("-")) {
    return url.toUpperCase().replace(/-/g, " ")
  } else {
    return url.toUpperCase()
  }
}
const acronymizer = (url) => {
  const ignoredWords = [
    "the",
    "of",
    "in",
    "from",
    "by",
    "with",
    "and",
    "or",
    "for",
    "to",
    "at",
    "a",
  ]
  const acronym = url.split("-").map((word) => {
    if (!ignoredWords.some((x) => x.includes(word))) {
      return word[0]
    } else {
      return ""
    }
  })
  return acronym.join("").toUpperCase()
}