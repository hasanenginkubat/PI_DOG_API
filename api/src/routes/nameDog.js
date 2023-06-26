const { Router } = require("express");
const { allInfo } = require("../controllers/dogControllers");

const router = Router();

router.get("/", async (req, res) => {
    try {
        const { name } = req.query;
        const nameInfo = await allInfo();
        let nameDog = nameInfo.filter((el) => el.name === name);
        if (nameDog.length > 0) {
            res.status(200).send(nameDog);
        } else {
            res.status(404).send({ error: "The Dog name doesn't exist" });
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
