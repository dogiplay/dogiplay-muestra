/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Tablabeisbol from "./Tablabeisbol";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Tablafutbol(props) {
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
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Tablafutbol")}
      {...rest}
    >
      <Tablabeisbol
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
        border="3px SOLID rgba(163,158,158,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "tablabeisbol")}
      ></Tablabeisbol>
      <View
        width="930px"
        height="54px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
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
          border="2px SOLID rgba(149,141,141,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 12")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="22px"
          fontWeight="600"
          color="rgba(0,82,141,1)"
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
          left="67.2%"
          right="29.25%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={equipos?.partidosjugados}
          {...getOverrideProps(overrides, "PJ")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="22px"
          fontWeight="600"
          color="rgba(0,82,141,1)"
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
          left="72.69%"
          right="23.44%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={equipos?.partidosganados}
          {...getOverrideProps(overrides, "PG")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="22px"
          fontWeight="600"
          color="rgba(0,82,141,1)"
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
          left="78.6%"
          right="17.74%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={equipos?.partidosperdidos}
          {...getOverrideProps(overrides, "PP")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="22px"
          fontWeight="600"
          color="rgba(0,82,141,1)"
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
          left="83.66%"
          right="12.37%"
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
          top="7.41%"
          bottom="14.81%"
          left="91.4%"
          right="4.3%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={equipos?.puntos}
          {...getOverrideProps(overrides, "30")}
        ></Text>
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
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          fontStyle="italic"
          lineHeight="21px"
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
          bottom="31.48%"
          left="30.22%"
          right="50.32%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={equipos?.manager}
          {...getOverrideProps(overrides, "MANAGER")}
        ></Text>
      </View>
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
        left="50.97%"
        right="45.81%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.futgolesfavor}
        {...getOverrideProps(overrides, "GF")}
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
        left="55.81%"
        right="40.65%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.futgolescontra}
        {...getOverrideProps(overrides, "GC")}
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
        left="60.97%"
        right="35.48%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.futdifgoles}
        {...getOverrideProps(overrides, "DG")}
      ></Text>
    </View>
  );
}
