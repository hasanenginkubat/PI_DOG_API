const { Router } = require("express");
const { allTemperaments } = require("../controllers/TemperControllers");
const { Temperament } = require("../db")
const router = Router();

router.get("/", async (req, res) => {
    try {
        let infoTemperament = await allTemperaments();
        res.status(200).json(infoTemperament);
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve temperaments" });
    }
});

router.post("/", async (req, res) => {
    const { name } = req.body;
    try {
        let createTemp = await Temperament.findOrCreate({
            where: {
                name: name
            },
        });
        res.status(200).json(createTemp);
    } catch (error) {
        res.status(500).json({ error: "Failed to create temperament" });
    }
});

module.exports = router;
