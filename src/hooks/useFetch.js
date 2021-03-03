import { useState, useEffect, useRef } from "react";
import { reset } from "../../RootNavigation";

export const useFetch = (url, token, method) => {
  const isMounted = useRef(true);

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
          console.log("Error");
          reset(0, "SignIn");
          //TODO deberia ver si vale la pena borrar la data y el context antes de ir a signin (sino quizas puedo entrar en un bucle infinito)
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
