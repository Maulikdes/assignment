const express = require('express');

const app = express();

app.use(express.static("./dist/assignment"));

app.get("/*", function(req, res) {
    res.sendFile("index.html", {root: "dist/assignment/"}
  );
});

app.listen(process.env.PORT || 8080);
