const axios = require('axios');
const { Dog, Temperament } = require("../db");

const ApiUrl = async function(){
    const getUrl = await axios.get("https://api.thedogapi.com/v1/breeds");
    const saveInformation = await getUrl.data.map((ax) => {
        const weight = ax.weight.metric.split("-");
        const height = ax.height.metric.split("-");
        const weightMaxx = parseInt(weight[1]);
        const weightMinn = parseInt(weight[0]);
        const heightMaxx = parseInt(height[1]);
        const heightMinn = parseInt(height[0]);

        return {
            id: `${ax.id}`,
            name: ax.name,
            weightMax: weightMaxx ? weightMaxx : undefined,
            weightMin: weightMinn ? weightMinn : undefined,
            heightMax: heightMaxx ? heightMaxx : undefined,
            heightMin: heightMinn ? heightMinn : undefined,
            life_span: ax.life_span,
            image: ax.image.url
                ? ax.image.url
                : 'https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg',
            temperement: ax.temperement,
        };
    });
    return saveInformation;
};

const getInfodb = async () => {
    return await Dog.findAll({
        include: {
            model: Temperament
        }
    });
};

const allInfo = async () => {
    const allApiUrl = await ApiUrl();
    const allGetInfo = await getInfodb();
    let aux = await allGetInfo.map((e) => {
        return {
            id: e.id,
            name: e.name,
            heightMin: e.heightMin,
            heightMax: e.heightMax,
            weightMin: e.weightMin,
            weightMax: e.weightMax,
            life_span: e.life_span,
            image: e.image
                ? e.image
                : 'https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg',
            temperement: e.temperament.map((e) => {
                return e.name;
            }).join(", ")
        };    
    });
    const allApi = allApiUrl.concat(aux);
    return allApi;
};

module.exports = { allInfo };
