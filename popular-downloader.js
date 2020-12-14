const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

const goodFiles = [".jpg", ".jpeg", ".png", ".gif", ".gifv", ".tiff", ".svg", ".eps", ".ico", ".webp", ".webm", ".bmp", ".raw"];
const checkFiles = (fileExt) => {
  return goodFiles.includes(fileExt)
}

let dataPath = path.join(__dirname, "./downloads/");
rp("https://reddit.com/r/popular.json", (err, res) => {
  if (err) console.log(err);

  JSON.parse(res.body).data.children.forEach((item) => {
    const url = item.data.url;
    let ext = path.extname(url);

    if (checkFiles(ext)) {
      let imgTitle = item.data.title.substring(0, 25);
      let newFileName = path.join(dataPath, imgTitle + ext);
      rp(url).pipe(fs.createWriteStream(newFileName));
      if (err) console.log(err);
    }
  });
});
