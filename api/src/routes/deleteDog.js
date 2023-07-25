const { Router } = require("express");
const router = Router();
const { Dog } = require("../db");

router.delete("/", async function (req, res) {

  try {
    const { name } = req.query;
    if (name) {
      await Dog.destroy({
        where: { name: name },
      });
      res.send({ msg: "Dog deleted" });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;