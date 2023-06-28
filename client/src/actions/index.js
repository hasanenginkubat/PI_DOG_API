const axios = require("axios")

export function getAllDogs(){
    return async function(dispatch){
        try{
        let dogs = await axios.get("/dogs");
        return dispatch({
          type: "GET_DOGS",
          payload: dogs.data,
        });
    }
    catch(error){
        console.log(error)
    }
    }
}

export function getTemperement(){
    return async function(dispatch){
        let temperements = await axios.get("/temperement");
        return dispatch({
            type: "GET_TEMPEREMENT",
            payload: temperements.data,
        });
    }
}

export function createDog(payload){
    return async function(dispatch){
        try{
        let create = await axios.get("/dog", payload)
        dispatch({
            type: "CREATE_DOG",
            payload: create.data,
        });
        return create.data
    }
    catch(error){
        console.log(error)
    }
    }
} 

export const getDogsByName = (payload) => {
    return async function (dispatch) {
      try {
        let byName = await axios.get(`/dogs?name=${payload}`);
        dispatch({
          type: "DOGS_BY_NAME",
          payload: byName.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  };
  