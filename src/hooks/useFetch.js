import { useState, useEffect, useRef, useContext } from "react";
import { reset } from "../../RootNavigation";
import { Context as AuthContext } from "../context/AuthContext";
import { Context as FetchContext } from "../context/FetchContext";

// this hook will be called everytime i change 'url' or the variable 'doFetch'
export const useFetch = (url, token, method, doFetch) => {
  const isMounted = useRef(true);
  const { logOutWithError } = useContext(AuthContext);
  const { state: currentFetchData, incrementFetchCounter } = useContext(
    FetchContext
  );

  const [state, setState] = useState({
    data: null,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, error: null });
    const getData = async () => {
      if (url.length > 0) {
        console.log("se hizo una peticion");
        try {
          const response = await fetch(url, {
            method: method,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          let data = await response.json();
          if (!data.message) {
            incrementFetchCounter(currentFetchData);
            if (isMounted.current) {
              setState({ error: null, data });
            }
          } else {
            if (
              data.message === "Authorization has been denied for this request."
            ) {
              //token 'vencido'
              reset(0, "Solicitar");
              setState({ error: data.message, data: null });
            } else {
              //otro caso, como el error que ocurre a medianoche cuando IOL actualiza
              logOutWithError({ error: data.message });
              setState({ error: data.message, data: null });
            }
          }
        } catch (error) {
          console.log(error);
          setState({ error: error.message, data: null });
        }
      }
    };

    getData();
  }, [url, doFetch]);

  return state;
};
