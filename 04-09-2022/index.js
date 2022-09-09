console.log("");
const fs = require("fs");
const { dirname } = require("path");
const path = require("path");
const dirPath = path.join(__dirname, "./videos");

let fileAmount = 5;
for (var i = 1; i <= fileAmount; i++) {
  fs.writeFileSync(
    `${dirPath}/file${i}.txt`,
    `Now, I create many files using Node.js ! I'm  Trying to makes some files using Vanila JavaScript, but I'm FAILED! \n The file number is ${i} !`
  );
}

fs.readdir(dirPath, (err, files) => {
  const filePathArray = [];
  console.log(files);

  for (var fo = 0; fo < files.length; fo++) {
    filePathArray.push(`${dirPath}/${files[fo]}`);
  }
  console.log(filePathArray);
});
