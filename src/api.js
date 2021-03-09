//TODO todas estas operaciones no las estoy contando en el context de cant. de Fetchs... deberia implementar un customHook

export const buy = async (
  market,
  asset,
  quantity,
  price,
  term,
  validity,
  token
) => {
  try {
    const response = await fetch(
      "https://api.invertironline.com/api/v2/operar/Comprar",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mercado: market,
          simbolo: asset,
          cantidad: quantity,
          precio: price,
          plazo: term,
          validez: validity,
        }),
      }
    );
    let data = await response.json();
    if (!data.ok) {
      if (data.message) {
        return { ok: false, message: data.message };
      }
      if (data.messages) {
        return {
          ok: false,
          message: data.messages.map((mes) => mes.description),
        };
      }
      if (data.numeroOperacion) {
        return {
          ok: true,
          message: `Operacion Existosa Nro: ${data.numeroOperacion}`,
        };
      }
    }
  } catch (error) {
    console.log(error);
    return { ok: false, message: error.message };
  }
};

export const cancelOperation = async (operationNumber, token) => {
  try {
    const response = await fetch(
      `https://api.invertironline.com/api/v2/operaciones/${operationNumber}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    let data = await response.json();
    if (data.ok) {
      return { ok: true, message: data.messages.map((mes) => mes.description) };
    }
  } catch (error) {
    console.log(error);
    return { ok: false, message: error.message };
  }
};
