async function search(param) {
  let url = ("https://cors-anywhere.9pfs.repl.co/scratchdb.lefty.one/v3/forum/search?q=" + param + "&o=relevance&page=0");
  fetch(url)
  .then(res => res.json())
  .then((res) => {return res});
}

let paramara = window.prompt("insert search parameters","");
const results = JSON.parse(search(paramara));

document.getElementById("searchresults").innerHTML = results.username[1] + ": " + results.content[1];
