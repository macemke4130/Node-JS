const rp = require("request-promise");
const path = require("path");
const fs = require("fs");

rp("https://student-fun-api.herokuapp.com/api/hiphop").then((json) => {
  const albums = JSON.parse(json);
  const scraped = albums.map((album) => {
    return {
      title: album.title,
    };
  });
  console.log(scraped);

  fs.writeFile(
    path.join(__dirname, "./luke-albums.json"),
    JSON.stringify(scraped),
    (err) => {
      if (err) console.log("SHit");

      console.log("I rote a thing");
    }
  );
});
