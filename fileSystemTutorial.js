const event = require("events");
const fs = require("fs");
const emitter = new event.EventEmitter();

// emitter.on("load", (msg) => {
//   console.log(`msg`, msg);
// });

// emitter.emit("load", "Welcome to Event Emmitter");

// const readMe = fs.readFileSync("readme.txt", "utf8");
// console.log(`readMe`, readMe);

// fs.writeFileSync("writeme.txt", readMe);

// fs.unlink("readMe.txt", (err) => {
//   if (err) {
//     console.log(`err`, err);
//   } else console.log(`file deleted successfully`);
// });

//createing a folder than create a file
// fs.mkdir("test", (err) => {
//   if (err) {
//     console.log(`err`, err);
//   } else {
//     fs.writeFile(`./test/text.txt`, "testing file", "utf8", (err) => {
//       console.log(`err`, err);
//     });
//     console.log(`file removed successfully`);
//   }
// });

//removing folder containg files
// fs.unlink("./test/text.txt", () => {
//   fs.rmdir("test", () => {
//     console.log(`folder deleted successfully`);
//   });
// });
