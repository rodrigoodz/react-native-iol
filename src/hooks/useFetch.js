import { useState, useEffect, useRef, useContext } from "react";
import { reset } from "../../RootNavigation";
import { Context as AuthContext } from "../context/AuthContext";

export const useFetch = (url, token, method) => {
  const isMounted = useRef(true);
  const { logOutWithError } = useContext(AuthContext);

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
      try {
        const response = await fetch(url, {
          method: method,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let data = await response.json();
        if (!data.message) {
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
  }, [url]);

  return state;
};
