import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Slider, Icon } from "react-native-elements";

const UpdateController = () => {
  const [value, setValue] = useState(0);
  return (
    <View style={{ flex: 1, margin: 15 }}>
      <Slider
        value={value}
        onValueChange={setValue}
        maximumValue={10}
        minimumValue={0}
        step={1}
        trackStyle={{ height: 10, backgroundColor: "transparent" }}
        thumbStyle={{ height: 20, width: 20, backgroundColor: "transparent" }}
        thumbProps={{
          children: (
            <Icon
              name="clock-o"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#130F40"
            />
          ),
        }}
      />
      {value === 0 ? (
        <Text>Actualizacion Continua</Text>
      ) : (
        <Text>Actualizacion: {value} minuto/s</Text>
      )}
    </View>
  );
};

export default UpdateController;

const styles = StyleSheet.create({});
