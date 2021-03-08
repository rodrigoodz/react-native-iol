import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        currentCount: state.currentCount + 1,
        MonthCounter: {
          ...state.MonthCounter,
          [action.payload]: state.MonthCounter[action.payload] + 1,
        },
      };
    case "set":
      return { ...state };
    case "reset":
      return {
        currentCount: 0,
        currentDate: new Date(),
        MonthCounter: {
          jan: 0,
          feb: 0,
          mar: 0,
          apr: 0,
          may: 0,
          jun: 0,
          jul: 0,
          aug: 0,
          sep: 0,
          oct: 0,
          nov: 0,
          dec: 0,
        },
      };
    default:
      return state;
  }
};
const setFetchCounter = (dispatch) => {
  return async () => {
    const fetchCounterData = await AsyncStorage.getItem("counterData");
    // TODO aca cuando seteo el context, deberia ver si la fecha de currentDate es igual a la de hoy, y si no es igual, reseteo esa parte...
    console.log("set ", fetchCounterData);
    if (fetchCounterData !== null) {
      dispatch({ type: "set", payload: JSON.parse(fetchCounterData) });
    }
  };
};

const incrementFetchCounter = (dispatch) => {
  return async (currentFetchData) => {
    const monthNames = [
      "jan",
      "feb",
      "mar",
      "apr",
      "may",
      "jun",
      "jul",
      "aug",
      "sep",
      "oct",
      "nov",
      "dec",
    ];
    const currentMonth = monthNames[new Date().getMonth()];
    console.log(currentFetchData);
    const aux = {
      ...currentFetchData,
      currentCount: currentFetchData.currentCount + 1,
      MonthCounter: {
        ...currentFetchData.MonthCounter,
        [currentMonth]: [currentMonth] + 1,
      },
    };

    await AsyncStorage.setItem("counterData", JSON.stringify(aux));
    dispatch({
      type: "increment",
      payload: currentMonth,
    });
  };
};

const resetFetchCounter = (dispatch) => {
  return () => {
    dispatch({ type: "reset" });
  };
};

export const { Provider, Context } = createDataContext(
  fetchReducer,
  { incrementFetchCounter, setFetchCounter, resetFetchCounter },
  {
    currentCount: 0,
    currentDate: null,
    MonthCounter: {
      jan: 0,
      feb: 0,
      mar: 0,
      apr: 0,
      may: 0,
      jun: 0,
      jul: 0,
      aug: 0,
      sep: 0,
      oct: 0,
      nov: 0,
      dec: 0,
    },
  }
);
