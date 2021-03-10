import React, { useState } from "react";
import { Overlay, Button } from "react-native-elements";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Keyboard,
  Alert,
  ToastAndroid,
} from "react-native";

import { buysellfetch } from "../../api";

import Selector from "../../components/Selector";
import DatePicker from "../../components/DatePicker";

import getFormattedMarket from "../../helpers/getFormattedMarket";

const windowWidth = Dimensions.get("window").width;

const BuySellOverlay = ({
  visible,
  setVisible,
  market,
  tickerName,
  access_token,
  operationType,
}) => {
  const currentDate = new Date();
  const endDate = new Date();
  endDate.setDate(endDate.getDate() + 7);
  const [errorMessage, setErrorMessage] = useState(null);
  const [formValues, setFormValues] = useState({
    term: "t0",
    validity: currentDate,
    price: "",
    quantity: "",
  });

  const { term, validity, price, quantity } = formValues;

  const formattedMarket = getFormattedMarket(market);

  const handleSubmit = () => {
    Keyboard.dismiss();
    if (price.length < 1 || quantity.length < 1) {
      return setErrorMessage("Complete correctamente los campos");
    }
    setErrorMessage(null);

    Alert.alert(
      `CONFIRMAR ${operationType.toUpperCase()}`,
      `Vas a ${operationType.toLowerCase()} ${quantity} unidad/es de ${tickerName.toUpperCase()}(${formattedMarket}) por un monto de $${price} c/u con un plazo ${term} y validez hasta el ${validity.getDate()}/${
        validity.getMonth() + 1
      }/${validity.getFullYear()}`,
      [
        {
          text: "Cancel",
        },
        {
          text: "Confirmar",
          onPress: () => handleFetch(),
        },
      ],
      { cancelable: false }
    );
  };

  const handleFetch = async () => {
    setVisible();
    const formattedMarket = getFormattedMarket(market);
    const response = await buysellfetch(
      formattedMarket,
      tickerName,
      quantity,
      price,
      term,
      validity,
      access_token,
      operationType
    );
    console.log("response ", response);
    ToastAndroid.showWithGravity(
      response.message.join("\n"),
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );
  };

  return (
    <Overlay
      isVisible={visible}
      onBackdropPress={setVisible}
      overlayStyle={styles.overlayStyle}
    >
      <View style={{}}>
        <View style={{}}>
          <Text style={[styles.label, { marginVertical: 5 }]}>Plazo</Text>
          <Selector
            options={[
              { label: "T0 = Inmediato", value: "t0" },
              { label: "T+1 = 24 Horas", value: "t1" },
              { label: "T+2 = 72 Horas", value: "t2" },
            ]}
            selected={term}
            setSelected={(value) =>
              setFormValues({ ...formValues, term: value })
            }
          />
          <Text style={[styles.label, { marginTop: 5 }]}>Validez</Text>
          <DatePicker
            date={validity}
            setDate={(value) =>
              setFormValues({ ...formValues, validity: value })
            }
            minDate={currentDate}
            maxDate={endDate}
          />
          <Text style={[styles.label, { marginVertical: 5 }]}>Precio</Text>
          <TextInput
            placeholder="0.00"
            autoCompleteType="cc-number"
            keyboardType="numeric"
            style={styles.textInputStyle}
            placeholderTextColor="rgba(255,255,255,0.5)"
            value={price}
            onChangeText={(value) =>
              setFormValues({ ...formValues, price: value })
            }
          />
          <Text style={[styles.label, { marginVertical: 5 }]}>Cantidad</Text>
          <TextInput
            placeholder="0"
            autoCompleteType="cc-number"
            keyboardType="numeric"
            style={styles.textInputStyle}
            placeholderTextColor="rgba(255,255,255,0.5)"
            value={quantity}
            onChangeText={(value) =>
              setFormValues({ ...formValues, quantity: value })
            }
          />
        </View>

        <View style={{ justifyContent: "flex-end", marginTop: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              title="Cancelar"
              buttonStyle={{ backgroundColor: "grey" }}
              onPress={setVisible}
            />
            <Button
              title="Aceptar"
              buttonStyle={{ backgroundColor: "green" }}
              onPress={handleSubmit}
            />
          </View>
          {errorMessage !== null ? (
            <View
              style={{
                height: 60,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.errorStyle}>{errorMessage}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </Overlay>
  );
};

export default BuySellOverlay;

const styles = StyleSheet.create({
  overlayStyle: {
    backgroundColor: "#2b5a7f",
    width: windowWidth / 1.2,
    borderRadius: 10,
  },
  label: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  textInputStyle: {
    backgroundColor: "#131e31",
    height: 50,
    borderRadius: 10,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.5)",
    color: "white",
  },
  errorStyle: {
    color: "red",
    fontSize: 15,
    height: 30,
  },
});
