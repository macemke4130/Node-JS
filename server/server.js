const path = require("path");
const fs = require("fs");

let chirps = [
  {
    user: "Mike",
    msg: "I blew a fuse because I needed to warm up vegetables.",
  },
  {
    user: "Stephen",
    msg: "I just kicked Eric out of my house.",
  },
  {
    user: "Dave",
    msg: "Why don't we just buy a new building?",
  },
  {
    user: "Ryan",
    msg: "Ovens don't get hot on the bottom.",
  },
  {
    user: "Lucas",
    msg: "Oh yeah, I forgot. Ovens don't get hot on the bottom.",
  },
];

chirps = JSON.stringify(chirps);

let dataPath = path.join(__dirname, "../chirps.json");

fs.writeFile(dataPath, chirps, (err) => {
  if (err) console.log(err);
  console.log("File Written Successfully.");
});

fs.readFile(dataPath, (err, data) => {
  if (err) console.log(err);
  let output = JSON.parse(data);
  console.log(output);
});