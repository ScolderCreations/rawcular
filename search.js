async function search(param) {
  let url = "https://scratchdb.lefty.one/v3/forum/search?q=", param, "&o=relevance&page=0";
  fetch(url)
  .then(result => result.json());
  return result
}

let paramara = window.prompt("insert search parameters","");
const results = JSON.parse(search(paramara));

document.getElementById("searchresults").innerHTML = results.username[1] + ": " + results.content[1];
