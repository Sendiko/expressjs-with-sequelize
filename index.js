const express = require("express");
const router = require("./router/route");

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/images', express.static('public/images'))

app.use(router);

app.listen(PORT, () => {
  console.log(`server is running on: ` + PORT, '10.212.79.11:3000');
});
