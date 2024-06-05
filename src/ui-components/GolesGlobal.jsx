/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function GolesGlobal(props) {
  const { jugadores, overrides, ...rest } = props;
  return (
    <View
      width="132px"
      height="181px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "GolesGlobal")}
      {...rest}
    >
      <View
        width="132px"
        height="181px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(255,199,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 70")}
      ></View>
      <Image
        width="87.59%"
        height="62.77%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="3.19%"
        bottom="34.04%"
        left="6.57%"
        right="5.84%"
        border="2px SOLID rgba(243,219,0,1)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={jugadores?.foto}
        {...getOverrideProps(overrides, "pexels-tima-miroshnichenko-5184682 2")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="600"
        color="rgba(0,82,141,1)"
        lineHeight="14.522727012634277px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="115.62px"
        height="14.44px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="71.81%"
        bottom="20.21%"
        left="6.57%"
        right="5.84%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.nombre}
        {...getOverrideProps(overrides, "ALFONSO LOPEZ")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="9.681818008422852px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="115.62px"
        height="9.63px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="80.85%"
        bottom="13.83%"
        left="6.57%"
        right="5.84%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.posicion}
        {...getOverrideProps(overrides, "SEGUNDA BASE")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="9.681818008422852px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="112.73px"
        height="9.63px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="87.23%"
        bottom="7.45%"
        left="8.76%"
        right="5.84%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.equipo}
        {...getOverrideProps(overrides, "EQUIPO COLEGIO")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="9.681818008422852px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="112.73px"
        height="9.63px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="93.62%"
        bottom="1.06%"
        left="8.76%"
        right="5.84%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.clave_liga}
        {...getOverrideProps(overrides, "LIGA DE TEPIC")}
      ></Text>
      <Icon
        width="39.5px"
        height="39.47px"
        viewBox={{
          minX: 0,
          minY: 0,
          width: 39.5036506652832,
          height: 39.47340393066406,
        }}
        paths={[
          {
            d: "M38.5037 19.7367C38.5037 30.084 30.1089 38.4734 19.7518 38.4734L19.7518 40.4734C31.212 40.4734 40.5037 31.19 40.5037 19.7367L38.5037 19.7367ZM19.7518 38.4734C9.39476 38.4734 1 30.084 1 19.7367L-1 19.7367C-1 31.19 8.29163 40.4734 19.7518 40.4734L19.7518 38.4734ZM1 19.7367C1 9.38943 9.39476 1 19.7518 1L19.7518 -1C8.29163 -1 -1 8.28342 -1 19.7367L1 19.7367ZM19.7518 1C30.1089 1 38.5037 9.38943 38.5037 19.7367L40.5037 19.7367C40.5037 8.28342 31.212 -1 19.7518 -1L19.7518 1Z",
            stroke: "rgba(243,219,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M39.5037 19.7367C39.5037 30.637 30.6605 39.4734 19.7518 39.4734C8.84319 39.4734 0 30.637 0 19.7367C0 8.83642 8.84319 0 19.7518 0C30.6605 0 39.5037 8.83642 39.5037 19.7367Z",
            fill: "rgba(0,82,141,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="50%"
        bottom="28.19%"
        left="35.04%"
        right="35.04%"
        {...getOverrideProps(overrides, "Ellipse 2")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="600"
        color="rgba(255,253,253,1)"
        lineHeight="14.522727012634277px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="20.23px"
        height="14.44px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="56.91%"
        bottom="35.11%"
        left="42.34%"
        right="42.34%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.futgoles}
        {...getOverrideProps(overrides, "23")}
      ></Text>
    </View>
  );
}
