import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, fetchCounter: state.fetchCounter + 1 };
    case "set":
      return { ...state, fetchCounter: action.payload };
    case "reset":
      return { ...state, fetchCounter: 0 };
    default:
      return state;
  }
};
const setFetchCounter = (dispatch) => {
  return async () => {
    const fetchCounterData = await AsyncStorage.getItem("counterData");
    if (fetchCounterData !== null) {
      dispatch({ type: "set", payload: Number(fetchCounterData) });
    } else {
      dispatch({ type: "set", payload: 0 });
    }
  };
};

const incrementFetchCounter = (dispatch) => {
  return async (currentCount) => {
    await AsyncStorage.setItem("counterData", JSON.stringify(currentCount + 1));
    dispatch({ type: "increment" });
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
    fetchCounter: 0,
  }
);
