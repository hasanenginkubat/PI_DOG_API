const { Router } = require("express");
const { allInfo } = require("../controllers/dogControllers");

const router = Router();

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const idInfo = await allInfo();
        let dogId = idInfo.find((el) => el.id === id);
        if (dogId) {
            res.status(200).send(dogId);
        } else {
            res.status(404).send({ error: "The Dog id doesn't exist" });
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
