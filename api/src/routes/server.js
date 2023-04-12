const http = require("http");
const PORT = 3001;
const getCharDetail = require("../controllers/index");
const getCharById = require("../controllers/index");
const getApiData = require("../controllers/index");

const { sequelize } = require("../DB_connection");

const server = http.createServer((req, res) => {
  const allUrl = req.url.split("/");
  const id = Number(allUrl.pop());
  const url = allUrl.join("/");

  switch (url) {
    case "/onsearch":
      return getCharById(res, id);

    case "/detail":
      return getCharDetail(res, id);

    case "/":
      return getApiData(res, id);

    default:
      res.writeHead(404, { "Content-type": "text/plain" });
      res.end("Route not found");
  }
});

sequelize.sync({ force: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
  });
});
