import React, { useContext, useState } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import { Text } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

import { Context as AuthContext } from "../../context/AuthContext";
import { useFetch } from "../../hooks/useFetch";

import ActivoItem from "./ActivoItem";
import GradientContainer from "../../components/GradientContainer";
import LoadingComponent from "../../components/LoadingComponent";
import Title from "../../components/Title";

const PortfolioScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [doFetch, setDoFetch] = useState(0);
  const {
    state: { access_token },
  } = useContext(AuthContext);

  const { data, error } = useFetch(
    "https://api.invertironline.com/api/v2/portafolio/{{pais}}",
    access_token,
    "GET",
    doFetch
  );

  const onRefresh = () => {
    setRefreshing(true);

    setDoFetch(doFetch + 1);
    setRefreshing(false);
  };

  if (!data && doFetch == 0) {
    return <LoadingComponent />;
  }

  if (data) {
    return (
      <View style={{ flex: 1, backgroundColor: "#131e31" }}>
        <GradientContainer
          firstColor="#2b5a7f"
          secondColor="#193952"
          padding={10}
          borderBottomLeftRadius={30}
          borderBottomRightRadius={30}
          marginBottom={20}
        >
          <Title textTitle="Portafolio Argentina" />
        </GradientContainer>
        <Text
          style={{
            color: "rgba(235,255,255,0.8)",
            alignSelf: "center",
            fontFamily: "SairaBold",
            fontSize: 24,
          }}
        >
          Activos
        </Text>
        <LinearGradient
          colors={["#132b38", "#050f17"]}
          style={{
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 15,
            marginBottom: 5,
            flex: 1,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            {data.activos.map((activo) => {
              const {
                titulo: { simbolo },
                cantidad,
                valorizado,
                ultimoPrecio,
                variacionDiaria,
                gananciaPorcentaje,
                gananciaDinero,
                ppc,
              } = activo;
              return (
                <ActivoItem
                  simbolo={simbolo}
                  cantidad={cantidad}
                  valorizado={valorizado}
                  ultimoPrecio={ultimoPrecio}
                  variacionDiaria={variacionDiaria}
                  gananciaPorcentaje={gananciaPorcentaje}
                  gananciaDinero={gananciaDinero}
                  ppc={ppc}
                  key={simbolo}
                />
              );
            })}
          </ScrollView>
        </LinearGradient>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, backgroundColor: "#131e31" }}>
        <GradientContainer
          firstColor="#2b5a7f"
          secondColor="#193952"
          padding={10}
          borderBottomLeftRadius={30}
          borderBottomRightRadius={30}
          marginBottom={20}
        >
          <Title textTitle="Portafolio Argentina" />
        </GradientContainer>
        <Text
          style={{
            color: "rgba(235,255,255,0.8)",
            alignSelf: "center",
            fontFamily: "SairaBold",
            fontSize: 24,
          }}
        >
          Activos
        </Text>
        <LinearGradient
          colors={["#132b38", "#050f17"]}
          style={{
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 15,
            marginBottom: 5,
            flex: 1,
          }}
        ></LinearGradient>
      </View>
    );
  }
};

export default PortfolioScreen;
