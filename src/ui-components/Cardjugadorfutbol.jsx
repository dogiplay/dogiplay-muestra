/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Cardjugadorfutbol(props) {
  const { jugadores, overrides, ...rest } = props;
  return (
    <View
      width="267px"
      height="404px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="2px SOLID rgba(175,181,186,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Cardjugadorfutbol")}
      {...rest}
    >
      <View
        width="238px"
        height="26px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="2.23%"
        bottom="91.34%"
        left="4.49%"
        right="6.37%"
        border="1px SOLID rgba(243,219,0,1)"
        borderRadius="9px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Headerf")}
      >
        <Text
          fontFamily="Inter"
          fontSize="22px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="30.799999237060547px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.29px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 15.5px - 2.5px)"
          left="calc(50% - 77px - 1px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.nombre}
          {...getOverrideProps(overrides, "Arturo")}
        ></Text>
      </View>
      <Flex
        gap="3px"
        direction="column"
        width="244px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="75.25%"
        bottom="14.36%"
        left="3.37%"
        right="5.24%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Product info")}
      >
        <Text
          fontFamily="Inter"
          fontSize="18px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="25.19999885559082px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="251px"
          height="23px"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.posicion}
          {...getOverrideProps(overrides, "Product name267443")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="261px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Equipo "}${jugadores?.equipo}`}
          {...getOverrideProps(overrides, "Product name267444")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.600000381469727px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="244px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="87.13%"
        bottom="7.92%"
        left="3.37%"
        right="5.24%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Le dicen "}${jugadores?.alias}`}
        {...getOverrideProps(overrides, " Subheading")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="234px"
        height="260.23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10.15%"
        bottom="25.44%"
        left="5.99%"
        right="6.37%"
        {...getOverrideProps(overrides, "Group 2")}
      >
        <Image
          width="100%"
          height="100%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="2px SOLID rgba(243,219,0,1)"
          borderRadius="11px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={jugadores?.foto}
          {...getOverrideProps(overrides, "mp200220_guillermo_pulido_02 (1) 1")}
        ></Image>
        <Flex
          gap="10px"
          direction="row"
          width="171.27px"
          height="38.84px"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="83.39%"
          bottom="1.69%"
          left="13.68%"
          right="13.13%"
          border="2px SOLID rgba(243,219,0,1)"
          borderRadius="5px"
          padding="4px 14px 4px 14px"
          backgroundColor="rgba(0,0,0,0.7)"
          {...getOverrideProps(overrides, "Pill")}
        >
          <Text
            fontFamily="Lalezar"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="22.399999618530273px"
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
            children={`${jugadores?.futgoles}${" goles en el torneo"}`}
            {...getOverrideProps(overrides, "7 Goles anotados")}
          ></Text>
        </Flex>
      </View>
      <View
        width="21px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="42.08%"
        bottom="51.98%"
        left="83.15%"
        right="8.99%"
        border="1px SOLID rgba(214,212,212,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 19")}
      ></View>
      <View
        width="21px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="48.76%"
        bottom="45.3%"
        left="83.15%"
        right="8.99%"
        border="1px SOLID rgba(214,212,212,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,245,0,1)"
        {...getOverrideProps(overrides, "Rectangle 20")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="14px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="191px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="93.81%"
        bottom="2.72%"
        left="23.22%"
        right="5.24%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="veces goleador de la semana"
        {...getOverrideProps(overrides, "veces goleador de la semana")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="19.600000381469727px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="22px"
        height="22px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="42.33%"
        bottom="52.23%"
        left="83.15%"
        right="8.61%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.futtarjetasrojas}
        {...getOverrideProps(overrides, "3267381")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="19.600000381469727px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="22px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="49.26%"
        bottom="45.79%"
        left="83.15%"
        right="8.61%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.futtarjetasallas}
        {...getOverrideProps(overrides, "3267382")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="18px"
        fontWeight="700"
        color="rgba(11,104,172,1)"
        lineHeight="25.19999885559082px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="25px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="92.08%"
        bottom="1.73%"
        left="13.11%"
        right="77.53%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.futgoleadorsemana}
        {...getOverrideProps(overrides, "4")}
      ></Text>
    </View>
  );
}
