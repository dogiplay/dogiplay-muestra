/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Deportes(props) {
  const { overrides, ...rest } = props;
  const botonBeisbolOnClick = useNavigateAction({
    type: "url",
    url: "nayaritbeisbolliga1",
  });
  const botonFutbolOnClick = useNavigateAction({ type: "url", url: "futbol" });
  return (
    <View
      width="704px"
      height="387px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Deportes")}
      {...rest}
    >
      <View
        width="704px"
        height="387px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 8")}
      ></View>
      <Icon
        width="267px"
        height="273px"
        viewBox={{ minX: 0, minY: 0, width: 267, height: 273 }}
        paths={[
          {
            d: "M133.5 0L163.473 94.3192L260.466 94.3192L181.997 152.612L211.969 246.931L133.5 188.638L55.0307 246.931L85.0033 152.612L6.53396 94.3192L103.527 94.3192L133.5 0Z",
            fill: "rgba(255,245,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="15.76%"
        bottom="13.7%"
        left="3.69%"
        right="58.38%"
        {...getOverrideProps(overrides, "Star 4")}
      ></Icon>
      <Icon
        width="228px"
        height="228px"
        viewBox={{ minX: 0, minY: 0, width: 228, height: 228 }}
        paths={[
          {
            d: "M114 0L139.595 78.7721L222.42 78.7721L155.413 127.456L181.008 206.228L114 157.544L46.9925 206.228L72.5871 127.456L5.57956 78.7721L88.4054 78.7721L114 0Z",
            fill: "rgba(0,148,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="36.43%"
        bottom="4.65%"
        left="67.61%"
        right="0%"
        {...getOverrideProps(overrides, "Star 5")}
      ></Icon>
      <Flex
        gap="8px"
        direction="row"
        width="231px"
        height="89px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="48.84%"
        bottom="28.17%"
        left="13.49%"
        right="53.69%"
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.05000000074505806)"
        borderRadius="8px"
        padding="14px 24px 14px 24px"
        backgroundColor="rgba(0,0,0,1)"
        onClick={() => {
          botonBeisbolOnClick();
        }}
        {...getOverrideProps(overrides, "botonBeisbol")}
      >
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="45px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Beisbol"
          {...getOverrideProps(overrides, "Beisbol")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(83,75,75,1)"
        lineHeight="33px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.07px"
        width="485px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="82.17%"
        bottom="9.3%"
        left="20.6%"
        right="10.51%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Jugador que se respeta debe estar aquí"
        {...getOverrideProps(
          overrides,
          "Jugador que se respeta debe estar aqu\u00ED"
        )}
      ></Text>
      <Flex
        gap="8px"
        direction="row"
        width="234px"
        height="90px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="48.58%"
        bottom="28.17%"
        left="53.27%"
        right="13.49%"
        boxShadow="0px 1px 2px rgba(0, 0, 0, 0.05000000074505806)"
        borderRadius="8px"
        padding="14px 24px 14px 24px"
        backgroundColor="rgba(0,0,0,1)"
        onClick={() => {
          botonFutbolOnClick();
        }}
        {...getOverrideProps(overrides, "botonFutbol")}
      >
        <Text
          fontFamily="Inter"
          fontSize="30px"
          fontWeight="500"
          color="rgba(255,255,255,1)"
          lineHeight="45px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Futbol"
          {...getOverrideProps(overrides, "Futbol")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(149,148,133,1)"
        lineHeight="33px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.07px"
        width="562px"
        height="117px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12.14%"
        bottom="57.62%"
        left="9.66%"
        right="10.51%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Estadísticas por equipo y jugador, tablas de posiciones, lider de goleo, lider de HR, y mucho más."
        {...getOverrideProps(
          overrides,
          "Estad\u00EDsticas por equipo y jugador, tablas de posiciones, lider de goleo, lider de HR, y mucho m\u00E1s.20012073"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(149,148,133,1)"
        lineHeight="33px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="-0.07px"
        width="562px"
        height="117px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12.14%"
        bottom="57.62%"
        left="9.66%"
        right="10.51%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Estadísticas por equipo y jugador, tablas de posiciones, lider de goleo, lider de HR, y mucho más."
        {...getOverrideProps(
          overrides,
          "Estad\u00EDsticas por equipo y jugador, tablas de posiciones, lider de goleo, lider de HR, y mucho m\u00E1s.26133"
        )}
      ></Text>
    </View>
  );
}
