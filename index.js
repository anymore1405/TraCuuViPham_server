/**
 * @author anymore1405
 * @github github.com/anymore1405
 * @email khactai14052000@gmail.com
 */

const app = require("express")();
const bodyParser = require("body-parser");
const { loadHost } = require("./loadHost");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(process.env.PORT || 3000);

app.post("/check", (req, res) => {
  const dataClient = req.body;
  console.log(dataClient);
  loadHost(dataClient, data => {
    res.send({ data });
  });
});
