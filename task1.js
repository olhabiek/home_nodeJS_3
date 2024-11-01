const fs = require("fs");

const path = "./myFolder";

fs.mkdir(path, (err) => {
  if (err) {
    console.error("Error creating the folder");
    return;
  }
  console.log("The folder was successfully created");
});

fs.rmdir(path, (err) => {
  if (err) {
    console.error("Error removing the folder");
    return;
  }
  console.log("The folder was successfully removed");
});
