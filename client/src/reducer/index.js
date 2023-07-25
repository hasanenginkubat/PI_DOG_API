const initialState = {
  dog: [],
  allDogs: [],
  temperaments: [],
  fav: [],
  detail: [],
  email: "",
  password: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DOGS":
      return {
        ...state,
        dog: action.payload,
        allDogs: action.payload,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: action.payload,
      };
    case "CREATE_DOG":
      return {
        ...state,
        dog: [...state.dog, action.payload],
      };
    case "DOGS_BY_NAME":
      return {
        ...state,
        dog: action.payload,
      };
    case "GET_DOGS_BY_ID":
      return {
        ...state,
        detail: action.payload,
      };
      case "DELETE_DOG":
        console.log(action.payload.name)
        return {
          ...state,
          dog: state.dog.filter((dog) => dog.name !== action.payload.name),
        };
      
      case "ORDER_WEIGHT":
        let filteredDogs;
        if (action.payload === "weightMin") {
          let weightMin = state.dog.sort((a, b) => {
            if (a.weightMin > b.weightMin) {
              return 1;
            }
            if (b.weightMin > a.weightMin) {
              return -1;
            }
            return 0;
          });
          filteredDogs = weightMin;
        }
        if (action.payload === "weightMax") {
          let weightMax = state.dog.sort((a, b) => {
            if (a.weightMax > b.weightMax) {
              return -1;
            }
            if (b.weightMax > a.weightMax) {
              return 1;
            }
            return 0;
          });
          filteredDogs = weightMax;
        }
        return {
          ...state,
          dog: filteredDogs,
        };
      case "ORDER_ATOZ":
        let orderedDogs;
        if (action.payload === "ascendente") {
          let orderedAToZ = state.dog.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          });
          orderedDogs = orderedAToZ;
        } else {
          let orderedZToA = state.dog.sort((a, b) => {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          });
          orderedDogs = orderedZToA;
        }
        return {
          ...state,
          dog: orderedDogs,
        };
    case "FILTERED_BY_TEMP":
      let filteredDogies = state.allDogs.filter((el) =>
        el.temperament?.includes(action.payload) ? el : null
      );
      return {
        ...state,
        dog: filteredDogies,
      };

    case "ADD_FAV":
      if (!state.fav.includes(action.payload) && state.dog.id !== action.payload.id) {
        return {
          ...state,
          fav: [...state.fav, action.payload],
        };
      }
      return state;

    case "DELETE_FAV":
      return {
        ...state,
        fav: state.fav.filter((dog) => dog.id !== action.payload.id),
      };

    case "CLEAN_DOG":
      return {
        ...state,
        dog: state.dog.filter((d) => d.id !== action.payload.id),
      };

      case "USER_DATAPE":
        return {
          ...state,
          email: action.email,
          password: action.password
        };
      
    default:
      return state;
  }
};

export default rootReducer;
