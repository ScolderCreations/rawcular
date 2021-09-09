async function search(param) {
  let site = await fetch("https://scratchdb.lefty.one/v3/forum/search?q=", param, "&o=relevance&page=0");
  let result = await site.json();
  return result
}

let paramara = window.prompt("insert search parameters","");
const results = JSON.parse(search(paramara));

document.getElementById("searchresults").innerHTML = results.username[1] + ": " + results.content[1];
