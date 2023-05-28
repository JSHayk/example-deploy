import express from "express";
import dotenv from "dotenv";
dotenv.config();


const router = express();
router.get("/", (req, res) => {
  res.status(200).send("OK");
});
router.get("/users", (req, res) => {
  res.status(200).send([
    {
      id: 1,
      name: "Mike Smith",
    },
    {
      id: 2,
      name: "Clark Smith",
    },
  ]);
});

let port = process.env.PORT;
router.listen(port, () => {
    console.log(`Server run ${port}`)
});