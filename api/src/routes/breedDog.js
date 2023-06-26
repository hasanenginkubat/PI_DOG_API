const { Router } = require("express");
const { allInfo } = require("../controllers/dogControllers");

const router = Router();

router.get("/", async (req, res) => {
    try {
        const { name } = req.query;
        const breedInfo = await allInfo();
        if (name) {
            let dogBreed = breedInfo.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()));
            if (dogBreed.length !== 0) {
                res.status(200).send(dogBreed);
            } else {
                res.status(404).send("That Breed doesn't exist");
            }
        } else {
            res.status(200).send(breedInfo);
        }
    } catch (error) {
        res.send(error);
    }
});


module.exports = router;
