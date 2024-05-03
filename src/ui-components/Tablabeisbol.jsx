/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Tablabeisbol(props) {
  const { equipos, overrides, ...rest } = props;
  return (
    <View
      width="930px"
      height="54px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="2px SOLID rgba(210,145,145,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Tablabeisbol")}
      {...rest}
    >
      <View
        width="930px"
        height="54px"
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
        backgroundImage="linear-gradient(-90deg, rgba(255,255,255,1), rgba(153,198,231,0.62))"
        {...getOverrideProps(overrides, "Rectangle 12")}
      ></View>
      <Image
        width="3.87%"
        height="66.67%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16.67%"
        bottom="16.67%"
        left="0.97%"
        right="95.16%"
        borderRadius="11px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={equipos?.logo}
        {...getOverrideProps(overrides, "logotipo 1")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="17px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="25.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="197px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="25.93%"
        bottom="25.93%"
        left="6.88%"
        right="71.94%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.nombre}
        {...getOverrideProps(overrides, "EQUIPO")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="15px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="22.5px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="181px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="29.63%"
        bottom="27.78%"
        left="30.22%"
        right="50.32%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.manager}
        {...getOverrideProps(overrides, "MANAGER")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="33px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14.81%"
        bottom="24.07%"
        left="52.37%"
        right="44.62%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.beicarreras}
        {...getOverrideProps(overrides, "22")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="33px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14.81%"
        bottom="24.07%"
        left="59.89%"
        right="37.74%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.beihr}
        {...getOverrideProps(overrides, "11")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="33px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="33px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14.81%"
        bottom="24.07%"
        left="65.81%"
        right="30.65%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.partidosjugados}
        {...getOverrideProps(overrides, "PJ")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="33px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="36px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14.81%"
        bottom="24.07%"
        left="71.4%"
        right="24.73%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.partidosganados}
        {...getOverrideProps(overrides, "PG")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="33px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="34px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14.81%"
        bottom="24.07%"
        left="77.31%"
        right="19.03%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.partidosperdidos}
        {...getOverrideProps(overrides, "PP")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="22px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        fontStyle="italic"
        lineHeight="33px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="37px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="14.81%"
        bottom="24.07%"
        left="82.47%"
        right="13.55%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.partidosempatados}
        {...getOverrideProps(overrides, "PE")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="28px"
        fontWeight="900"
        color="rgba(170,0,0,1)"
        lineHeight="42px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="11.11%"
        bottom="11.11%"
        left="90.97%"
        right="4.73%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.puntos}
        {...getOverrideProps(overrides, "30")}
      ></Text>
    </View>
  );
}
