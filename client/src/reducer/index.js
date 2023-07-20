const initialState = {
  dog: [],
  allDogs: [],
  temperaments: [],
  fav: [],
  detail: [],
  loading: true,
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
        loading: false,
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
      return {
        ...state,
      };
    case "ORDER_WEIGHT":
      let dogKg;
      if (action.payload === "weightMin") {
        dogKg = state.allDogs.sort((a, b) => a.weightMin - b.weightMin);
      } else if (action.payload === "weightMax") {
        dogKg = state.allDogs.sort((a, b) => b.weightMax - a.weightMax);
      }
      return {
        ...state,
        allDogs: dogKg,
      };

    case "ORDER_ATOZ":
      let orderedDogs;
      if (action.payload === "alphabetical") {
        orderedDogs = state.allDogs.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload === "reverseAlphabetical") {
        orderedDogs = state.allDogs.sort((a, b) => b.name.localeCompare(a.name));
      }
      return {
        ...state,
        allDogs: orderedDogs,
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

    case "CLEANER":
      return {
        ...state,
        loading: true,
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
