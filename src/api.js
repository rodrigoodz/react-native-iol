//TODO todas estas operaciones no las estoy contando en el context de cant. de Fetchs... deberia implementar un customHook

export const buysellfetch = async (
  market,
  asset,
  quantity,
  price,
  term,
  validity,
  token,
  operationType
) => {
  try {
    const url =
      operationType === "Comprar"
        ? "https://api.invertironline.com/api/v2/operar/Comprar"
        : "https://api.invertironline.com/api/v2/operar/Vender";

    const response = await fetch(url, {
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
    });
    let data = await response.json();
    // dependiendo del tipo, diferente respuesta tiene la API..
    if (operationType === "Vender") {
      if (data.numeroOperacion) {
        return {
          ok: true,
          message: [`Nro. de Operacion: ${data.numeroOperacion}`],
        };
      }
      if (!data.ok) {
        return { ok: false, message: data.map((m) => m.description) };
      }
    }
    if (operationType === "Comprar") {
      if (data.ok === false) {
        return { ok: false, message: data.messages.map((m) => m.description) };
      }
      if (data.numeroOperacion) {
        return {
          ok: true,
          message: [`Nro. de Operacion: ${data.numeroOperacion}`],
        };
      }
      if (!data.ok) {
        return { ok: false, message: [data.message] };
      }
    }
  } catch (error) {
    return {
      ok: false,
      message: ["Hubo un error en el servidor con la solicitud"],
    };
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
    return { ok: false, message: [error.message] };
  }
};
