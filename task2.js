const fs = require("fs");

const path = "./info.txt";
const content = "Node.js is awesome!";

fs.writeFile(path, content, (err) => {
  if (err) {
    console.error("Error creating the file");
    return;
  }
  console.log("The file was successfully created");
});

fs.readFile(path, "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading the file");
    return;
  }
  console.log("Content of the file: ", data);
});
