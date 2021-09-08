async function search(param) {
  let site = await fetch("https://scratchdb.lefty.one/v3/forum/search?q=", param, "&o=relevance&page=0");
  let result = await site.json();
  return result
}

let paramara = window.prompt("insert search parameters","");
const results = JSON.parse(search(paramara));

document.getElementById("searchresults").innerHTML = obj.results[1].username + ": " + obj.results[1].content;
