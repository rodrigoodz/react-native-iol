import React from "react";
import { Text, View } from "react-native";
import GradientContainer from "../../components/GradientContainer";
import ThreeColumnHeader from "../../components/ThreeColumnHeader";
import ThreeColumnItem from "../../components/ThreeColumnItem";

const Commisions = ({ aranceles }) => {
  return (
    <View>
      <Text
        style={{
          color: "white",
          alignSelf: "center",
          marginTop: 30,
          fontFamily: "SairaSemiBold",
          fontSize: 18,
        }}
      >
        Comisiones
      </Text>
      <GradientContainer
        firstColor="#132b38"
        secondColor="#050f17"
        padding={10}
        borderRadius={20}
        marginHorizontal={15}
      >
        <ThreeColumnHeader
          firstTitle="Arancel"
          secondTitle="Imp. Neto"
          thirdTitle="Impuesto IVA"
        />

        {aranceles.map((arancel) => {
          return (
            <ThreeColumnItem
              firstText={`${arancel.tipo}`}
              secondText={`$${arancel.neto.toFixed(2)}`}
              thirdText={`$${arancel.iva.toFixed(2)}`}
              key={arancel.tipo}
            />
          );
        })}
      </GradientContainer>
    </View>
  );
};

export default Commisions;
