import { useState, useEffect, useRef, useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { Context as FetchContext } from "../context/FetchContext";

// this hook will be called everytime i change 'url' or the variable 'doFetch'
export const useFetch = (url, token, method, doFetch) => {
  const isMounted = useRef(true);
  const { logOutWithError } = useContext(AuthContext);
  const { incrementFetchCounter } = useContext(FetchContext);

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
          incrementFetchCounter();
          if (isMounted.current) {
            setState({ error: null, data });
          }
        } else {
          logOutWithError({ error: data.message });
          setState({ error: data.message, data: null });
        }
      } catch (error) {
        console.log(error);
        setState({ error: error.message, data: null });
      }
    };

    getData();
  }, [url, doFetch]);

  return state;
};
