const { Router } = require("express");
const router = Router();
const { Dog } = require("../db");

router.delete("/:id", async function (req, res) {
    try {
        const { id } = req.params;
        if (id) {
            await Dog.destroy({
                where: { id: id },
            });
            res.send({ msg: "Dog deleted" });
        } else {
            res.status(400).send({ error: "Invalid id parameter" });
        }
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
