import * as React from "react";

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function reset(index, name, params) {
  navigationRef.current?.reset({
    index,
    routes: [{ name, params }],
  });
}
