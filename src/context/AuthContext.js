import createDataContext from "./createDataContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { navigate, reset } from "../../RootNavigation";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return {
        ...state,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        expires: action.payload[".expires"],
        refresh_expires: action.payload[".refreshexpires"],
      };
    case "logout":
      return {
        access_token: null,
        refresh_token: null,
        expires: null,
        refresh_expires: null,
        errorMessage: "",
      };
    case "logoutwitherror":
      return {
        access_token: null,
        refresh_token: null,
        expires: null,
        refresh_expires: null,
        errorMessage: action.payload,
      };
    case "setError":
      return { ...state, errorMessage: action.payload };
    case "clearError":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => {
  return async () => {
    const deviceData = await AsyncStorage.getItem("IOLdata");
    if (deviceData) {
      const jsonData = JSON.parse(deviceData);

      if (new Date(jsonData[".expires"]) < new Date()) {
        if (new Date(jsonData[".refreshexpires"]) < new Date()) {
          try {
            console.log("va a solicitar otro token");
            const response = await fetch(
              "https://api.invertironline.com/token",
              {
                method: "POST",
                body: `refresh_token=${jsonData.refresh_token}&grant_type=refresh_token`,
              }
            );
            let data = await response.json();
            if (!data.error) {
              console.log("token solicitado con exito");
              await AsyncStorage.setItem("IOLdata", JSON.stringify(data));
              dispatch({
                type: "signin",
                payload: data,
              });

              reset(0, "Home");
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          await AsyncStorage.removeItem("IOLdata");
          dispatch({ type: "logout" });
          reset(0, "SignIn");
        }
      } else {
        console.log("el token sigue siendo valido");
        dispatch({
          type: "signin",
          payload: jsonData,
        });
        reset(0, "Home");
      }
    } else {
      console.log("no hay nada guardado o fallo");
    }
  };
};

const startSignIn = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await fetch("https://api.invertironline.com/token", {
        method: "POST",
        body: `grant_type=password&username=${email}&password=${password}`,
      });
      let data = await response.json();

      if (data.error) {
        dispatch({ type: "setError", payload: data.error_description });
      } else {
        dispatch({ type: "clearError" });
        await AsyncStorage.setItem("IOLdata", JSON.stringify(data));
        dispatch({
          type: "signin",
          payload: data,
        });
        navigate("Home");
      }
    } catch (error) {
      //   dispatch({ type: "setError", payload: error.message });
      console.log(error);
    }
  };
};

const logOut = (dispatch) => {
  return async () => {
    try {
      await AsyncStorage.removeItem("IOLdata");
      // await AsyncStorage.clear();
      dispatch({ type: "logout" });
      reset(0, "SignIn");
    } catch (e) {
      console.log(e);
    }
  };
};

const logOutWithError = (dispatch) => {
  return async ({ error }) => {
    try {
      await AsyncStorage.removeItem("IOLdata");
      dispatch({
        type: "logoutwitherror",
        payload: error,
      });
      reset(0, "SignIn");
    } catch (e) {
      console.log(e);
    }
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { startSignIn, tryLocalSignIn, logOut, logOutWithError },
  {
    access_token: null,
    refresh_token: null,
    expires: null,
    refresh_expires: null,
    errorMessage: "",
  }
);
