import axios from "axios";

export function getAllDogs() {
  return async function (dispatch) {
    try {
      let dog = await axios.get("https://dogs-nuwb.onrender.com/dogs");
      return dispatch({
        type: "GET_DOGS",
        payload: dog.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function orderAlphabetically(payload) {
  return {
    type: "ORDER_ATOZ",
    payload,
  };
}

export function orderByWeight(payload) {
  return {
    type: "ORDER_WEIGHT",
    payload,
  };
}

export function createdInDb(payload) {
  return {
    type: "ORDER_BY_CREATION",
    payload,
  };
}

export function getTemperaments() {
  return async function (dispatch) {
    let temperaments = await axios.get("https://dogs-nuwb.onrender.com/temperament");
    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: temperaments.data,
    });
  };
}

export function filteredByTemperament(payload) {
  return {
    type: "FILTERED_BY_TEMP",
    payload,
  };
}

export function getCreatedDogs(payload) {
  return async function (dispatch) {
    let postDog = await axios.post("https://dogs-nuwb.onrender.com/dog", payload);
    return dispatch({
      type: "CREATE_DOG",
      payload: postDog
    })
  };
}

export function getDogsByQuery(payload) {
  return async function (dispatch) {
    try {
      let dogNames = await axios.get(`https://dogs-nuwb.onrender.com/dogs?name=${payload}`);
      return dispatch({
        type: "DOGS_BY_NAME",
        payload: dogNames.data,
      });
    } catch (error) {
      console.log(error);
      alert("Dog not found");
    }
  };
}

export function getDetails(payload) {
  return async function (dispatch) {
    try {
      const details = await axios.get(`https://dogs-nuwb.onrender.com/dogs/${payload}`);
      return dispatch({
        type: "GET_DOGS_BY_ID",
        payload: details.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteDog(payload) {
  return async function (dispatch) {
    try {
      await axios.delete(`https://dogs-nuwb.onrender.com/doggos/?name=${payload}`);
      return dispatch({
        type: "DELETE_DOG",
        payload: { name: payload },
      });
    } catch (error) {
      console.log(error);
    }
  };
}


export function cleanDog(payload) {
  return {
    type: "CLEAN_DOG",
    payload
  };
}


export const addFav = (payload) => {
  return { 
    type: "ADD_FAV", 
    payload 
  };
};

export const deleteFav = (id) => {
  return { 
    type: "DELETE_FAV",
     payload: id 
    };
};
export const login = (email, password) => {
  return {
    type: "USER_DATAPE",
    email,
    password,
  };
}
