import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        currentCount: state.currentCount + 1,
        MonthCounter: state.MonthCounter.map((d, idx) =>
          idx === action.payload ? { ...d, count: d.count + 1 } : d
        ),
      };
    case "set":
      return { ...state, ...action.payload };
    case "reset":
      return {
        currentCount: 0,
        MonthCounter: [
          { name: "Enero", count: 0 },
          { name: "Febrero", count: 0 },
          { name: "Marzo", count: 0 },
          { name: "Abril", count: 0 },
          { name: "Mayo", count: 0 },
          { name: "Junio", count: 0 },
          { name: "Julio", count: 0 },
          { name: "Agosto", count: 0 },
          { name: "Septiembre", count: 0 },
          { name: "Octubre", count: 0 },
          { name: "Noviembre", count: 0 },
          { name: "Diciembre", count: 0 },
        ],
      };
    default:
      return state;
  }
};
const setFetchCounter = (dispatch) => {
  return async () => {
    const fetchCounterData = await AsyncStorage.getItem("counterData");
    // reset the currentCount to 0, before sending the data to the Context
    const aux = { ...JSON.parse(fetchCounterData), currentCount: 0 };
    if (fetchCounterData !== null) {
      dispatch({ type: "set", payload: aux });
    }
  };
};

const incrementFetchCounter = (dispatch) => {
  return async (currentFetchData) => {
    const currentMonth = new Date().getMonth();
    const aux = {
      ...currentFetchData,
      currentCount: currentFetchData.currentCount + 1,
      MonthCounter: currentFetchData.MonthCounter.map((d, idx) =>
        idx === currentMonth ? { ...d, count: d.count + 1 } : d
      ),
    };
    await AsyncStorage.setItem("counterData", JSON.stringify(aux));
    dispatch({
      type: "increment",
      payload: currentMonth,
    });
  };
};

// removed from context, the fetchCounterData keep in device memory
const resetFetchCounter = (dispatch) => {
  return () => {
    dispatch({ type: "reset" });
  };
};

// remove from memory and context
const hardResetFetchCounter = (dispatch) => {
  return async () => {
    await AsyncStorage.removeItem("counterData");
    dispatch({ type: "reset" });
  };
};

export const { Provider, Context } = createDataContext(
  fetchReducer,
  {
    incrementFetchCounter,
    setFetchCounter,
    resetFetchCounter,
    hardResetFetchCounter,
  },
  {
    currentCount: 0,
    MonthCounter: [
      { name: "Enero", count: 0 },
      { name: "Febrero", count: 0 },
      { name: "Marzo", count: 0 },
      { name: "Abril", count: 0 },
      { name: "Mayo", count: 0 },
      { name: "Junio", count: 0 },
      { name: "Julio", count: 0 },
      { name: "Agosto", count: 0 },
      { name: "Septiembre", count: 0 },
      { name: "Octubre", count: 0 },
      { name: "Noviembre", count: 0 },
      { name: "Diciembre", count: 0 },
    ],
  }
);
