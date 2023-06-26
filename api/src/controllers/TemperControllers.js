const axios = require('axios');
const { Temperament } = require('../db');

const allTemperaments = async () => {
    const urlTemperaments = await axios.get("https://api.thedogapi.com/v1/breeds");
    let dataTemperaments = urlTemperaments.data.map((el) => el.temperament);
    dataTemperaments = dataTemperaments.join().split(",").sort();
    dataTemperaments = [...new Set(dataTemperaments)];
    let formattedTemperaments = dataTemperaments
        .map((e) => e.trim())
        .filter((e) => e !== "undefined");

    for (let i = 0; i < formattedTemperaments.length; i++) {
        const temperament = formattedTemperaments[i];
        await Temperament.findOrCreate({
            where: { name: temperament },
        });
    }

    const finishTemperaments = await Temperament.findAll();
    return finishTemperaments;
};

module.exports = {
    allTemperaments
};
