const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
    try {
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username,first_name: username},
        {headers: {"private-key": "5748e6a9-6d9a-40ae-b480-e347079b7843"}}
    );
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
});

app.listen(2002);