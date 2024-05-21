/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function Partidosfutbol(props) {
  const { partidos, overrides, ...rest } = props;
  return (
    <View
      width="324px"
      height="26px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Partidosfutbol")}
      {...rest}
    >
      <View
        width="324px"
        height="26px"
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
        {...getOverrideProps(overrides, "partidos")}
      >
        <View
          width="324px"
          height="26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(166,154,154,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 14")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="11px"
          fontWeight="800"
          color="rgba(39,139,210,1)"
          fontStyle="italic"
          lineHeight="16.5px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="34.62%"
          left="46.6%"
          right="48.46%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="VS"
          {...getOverrideProps(overrides, "VS")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="15px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="104px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="23.08%"
          bottom="19.23%"
          left="12.04%"
          right="55.86%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={partidos?.equipo1}
          {...getOverrideProps(overrides, "EQUIPO1283138")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="500"
          color="rgba(0,0,0,1)"
          lineHeight="15px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="103px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="23.08%"
          bottom="19.23%"
          left="54.32%"
          right="13.89%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={partidos?.equipo2}
          {...getOverrideProps(overrides, "EQUIPO1283139")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="9px"
          fontWeight="700"
          color="rgba(250,0,0,1)"
          lineHeight="13.5px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="50%"
          bottom="-3.85%"
          left="46.91%"
          right="48.77%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"J "}${partidos?.jornada}`}
          {...getOverrideProps(overrides, "J11")}
        ></Text>
        <View
          width="30px"
          height="26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="90.74%"
          border="1px SOLID rgba(175,154,154,1)"
          borderRadius="15px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(249,244,244,1)"
          {...getOverrideProps(overrides, "Rectangle 15")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="600"
          color="rgba(13,13,13,1)"
          fontStyle="italic"
          lineHeight="22.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="30px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="7.69%"
          bottom="3.85%"
          left="0%"
          right="90.74%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={partidos?.resultado_equipo1}
          {...getOverrideProps(overrides, "3283142")}
        ></Text>
        <View
          width="30px"
          height="26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="90.74%"
          right="0%"
          border="1px SOLID rgba(175,154,154,1)"
          borderRadius="15px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(249,244,244,1)"
          {...getOverrideProps(overrides, "Rectangle 16")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          fontStyle="italic"
          lineHeight="22.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="30px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="7.69%"
          bottom="3.85%"
          left="90.74%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={partidos?.resultado_equipo2}
          {...getOverrideProps(overrides, "3283144")}
        ></Text>
      </View>
    </View>
  );
}
