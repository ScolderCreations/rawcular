async function search(param) {
  let site = await fetch("https://scratchdb.lefty.one/v3/forum/search?q=", param, "&o=&page=:page");
  let result = await site.json();
  return result
}

let paramara = window.prompt("insert search parameters","");
const results = JSON.parse(search(paramara));
