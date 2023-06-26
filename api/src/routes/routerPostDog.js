const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("../db");

router.post("/", async (req, res) => {
    try {
        const {
            name,
            heightMin,
            heightMax,
            weightMin,
            weightMax,
            life_span,
            image,
            temperament
        } = req.body;

        const createDog = await Dog.create({
            name,
            heightMin,
            heightMax,
            weightMin,
            weightMax,
            life_span,
            image
        });

        const temperamentPromises = temperament.map(async (el) => {
            try {
                let temps = await Temperament.findAll({
                    where: {
                        name: el
                    }
                });
                await createDog.addTemperament(temps);
            } catch (error) {
                res.send(error);
            }
        });

        await Promise.all(temperamentPromises);

        res.status(200).send("Dog successfully created!");
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;
