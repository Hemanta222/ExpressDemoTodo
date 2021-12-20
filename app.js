const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  console.log(`req.url`, req.url);
  if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        name: "Sunu",
        address: "Latakta",
      })
    );
  }
  res.writeHead(200, { "Content-Type": "text/html" });
  const rightStream = fs.createReadStream(
    __dirname + "/public/index.html",
    "utf8"
  );
  rightStream.pipe(res);
  //   res.end("hi google");
});

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});

// const strem = fs.createReadStream(__dirname + "/readme.html", "utf8");
// const wrStream = fs.createWriteStream(__dirname + "/writeFile.html");
// strem.on("data", (chunk) => {
//   console.log(`new data read`);
//   console.log(chunk);
//   wrStream.write(chunk);
// });

function getDate() {
  console.log(`call first`);

  setInterval(() => {
    console.log(`call inside callback`);
    console.log(`object`, new Date());
  }, 2000);
  console.log(`call last`);
}

// getDate();
