import axios from "axios";

export function getAllDogs() {
  return async function (dispatch) {
    try {
      let dog = await axios.get("http://localhost:3001/dogs");
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
    let temperaments = await axios.get("http://localhost:3001/temperament");
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
    let postDog = await axios.post("http://localhost:3001/dog", payload);
    return dispatch({
      type: "CREATE_DOG",
      payload: postDog
    })
  };
}

export function getDogsByQuery(payload) {
  return async function (dispatch) {
    try {
      let dogNames = await axios.get(`http://localhost:3001/dogs?name=${payload}`);
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
      const details = await axios.get(`http://localhost:3001/dogs/${payload}`);
      return dispatch({
        type: "GET_DOGS_BY_ID",
        payload: details.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteDog(id) {
  return async function (dispatch) {
    try {
      const deleteDog = await axios.delete(`http://localhost:3001/doggos/${id}`);
      return dispatch({
        type: "DELETE_DOG",
        payload: deleteDog,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function cleanDog() {
  return {
    type: "CLEAN_DOG",
    payload: {},
  };
}

export function cleaner() {
  return {
    type: "CLEANER",
    payload: {},
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
