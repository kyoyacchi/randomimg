const express = require("express");
const cors = require("cors");
const request = require("request");
const got = require("got");
const zc = require('./api')
const fs = require('fs')

const keyword = require("./lib/endpoints.js").keyword
const desc = require("./lib/endpoints.js").desc

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  endpoint =
      keyword.keyword[Math.floor(Math.random() * keyword.keyword.length)];
    zerochan(desc[endpoint].key, desc[endpoint].pg, res);
});


app.get("/:endpoint", async (req, res) => {
  let endpoint = req.params.endpoint.toLocaleLowerCase();
  res.set("Cache-Control", "no-cache");
  if (keyword.keyword.includes(endpoint)) {
    const anu = desc[endpoint].key
    const length = desc[endpoint].pg
    zerochan(anu, length, res);
  } else if (endpoint === "random") {
    endpoint =
      keyword.keyword[Math.floor(Math.random() * keyword.keyword.length)];
    zerochan(desc[endpoint].key, desc[endpoint].pg, res);
  } else {
    res.status(400).json({
      message: "Bad endpoint",
    });
  }
})

async function zerochan(charname, length, res) {
  const img = await zc.getSearch(charname, Math.floor(Math.random() * length) + 1)
      const num = Math.floor(Math.random() * 23) + 1;
      if (img[num] && img[num].image) {
        const images = img[num].image;
         request({
          url: images,
          encoding: null
        }, 
        (err, resp, buffer) => {
          if (!err && resp.statusCode === 200){
            res.set("Content-Type", "image/jpeg");
            res.send(resp.body);
          } else {
            zerochan(charname,length, res);
          }
        })
        } else {
        zerochan(charname,10, res);
        }           
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server is listening in port" + PORT);
});
