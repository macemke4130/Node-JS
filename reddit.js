const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

let dataPath = path.join(__dirname, "popular-articles.json");
let scrapedList = [];

rp("https://reddit.com/r/popular.json", (err, res) => {
  if (err) console.log(err);

  JSON.parse(res.body).data.children.forEach((item) => {
    const i = item.data;
    let temp = {
      title: i.title,
      url: i.url,
      author: i.author,
    };
    scrapedList.push(temp);
  });

  let myFile = JSON.stringify(scrapedList);

  fs.writeFile(dataPath, myFile, (err) => {
    if (err) console.log(err);
    console.log("File Written Successfully.");
  });
});
