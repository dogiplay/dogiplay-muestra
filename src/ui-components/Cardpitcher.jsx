/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Cardpitcher(props) {
  const { jugadores, statsJugadores, overrides, ...rest } = props;
  return (
    <View
      width="260px"
      height="422px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Cardpitcher")}
      {...rest}
    >
      <View
        width="260px"
        height="422px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="2px SOLID rgba(120,107,107,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "cardjugadorbeisbol")}
      >
        <View
          width="260px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="446px"
          left="0px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(9,8,8,1)"
          {...getOverrideProps(overrides, "Rectangle 9")}
        ></View>
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="271px"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="37px"
          left="8px"
          borderRadius="10px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Carousel")}
        >
          <Image
            width="242px"
            height="271px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            border="2px SOLID rgba(243,219,0,1)"
            borderRadius="11px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={jugadores?.foto}
            {...getOverrideProps(overrides, "player1 (1) 1")}
          ></Image>
        </Flex>
        <View
          width="238px"
          height="26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="9px"
          left="9px"
          border="1px SOLID rgba(243,219,0,1)"
          borderRadius="9px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,0,0,1)"
          {...getOverrideProps(overrides, "Header")}
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
            left="calc(50% - 72.5px - 0.5px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={jugadores?.nombre}
            {...getOverrideProps(overrides, "Steven Virgen")}
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
          top="304px"
          left="6px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Product info")}
        >
          <Text
            fontFamily="Inter"
            fontSize="18px"
            fontWeight="600"
            color="rgba(0,82,141,1)"
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
            children="Posición: PITCHER"
            {...getOverrideProps(overrides, "Product name2182710")}
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
            children={jugadores?.equipo}
            {...getOverrideProps(overrides, "Product name2182711")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="400"
            color="rgba(0,0,0,1)"
            lineHeight="21px"
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
            children={`${jugadores?.beipitjuegosganados}${" juegos ganados"}`}
            {...getOverrideProps(overrides, " Subheading2182712")}
          ></Text>
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
            width="261px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${jugadores?.beipitjuegosperdidos}${" juegos perdidos"}`}
            {...getOverrideProps(overrides, " Subheading2182713")}
          ></Text>
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
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={jugadores?.alias}
            {...getOverrideProps(overrides, " Subheading2182715")}
          ></Text>
        </Flex>
        <View
          width="188px"
          height="53px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="249px"
          left="38px"
          borderRadius="7px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(52,37,37,0.6)"
          {...getOverrideProps(overrides, "Rectangle 10")}
        ></View>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="115px"
        height="51px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="251px"
        left="106px"
        {...getOverrideProps(overrides, "Group 13")}
      >
        <Text
          fontFamily="Inter"
          fontSize="8px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="11.199999809265137px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="3.92%"
          bottom="74.51%"
          left="20.87%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ENTRADAS LANZADAS"
          {...getOverrideProps(overrides, "ENTRADAS LANZADAS")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="8px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="11.199999809265137px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="52.94%"
          bottom="25.49%"
          left="20.87%"
          right="33.91%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="HIT TOTALES"
          {...getOverrideProps(overrides, "HIT TOTALES")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="8px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="11.199999809265137px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="29.41%"
          bottom="49.02%"
          left="20.87%"
          right="10.43%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="CARRERAS LIMPIAS"
          {...getOverrideProps(overrides, "CARRERAS LIMPIAS")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="8px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="11.199999809265137px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="76.47%"
          bottom="1.96%"
          left="20.87%"
          right="11.3%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="PONCHES TOTALES"
          {...getOverrideProps(overrides, "PONCHES TOTALES")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(255,251,251,1)"
          lineHeight="14px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="20px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="72.55%"
          left="0%"
          right="82.61%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.beipitentradaslanzadas}
          {...getOverrideProps(overrides, "242182297")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(255,251,251,1)"
          lineHeight="14px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="20px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="25.49%"
          bottom="47.06%"
          left="0%"
          right="82.61%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.beipitcarreraslimpias}
          {...getOverrideProps(overrides, "242182298")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(255,251,251,1)"
          lineHeight="14px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="20px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="49.02%"
          bottom="23.53%"
          left="0%"
          right="82.61%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.beipithitstotales}
          {...getOverrideProps(overrides, "242182299")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(255,251,251,1)"
          lineHeight="14px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="20px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="72.55%"
          bottom="0%"
          left="0%"
          right="82.61%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.beipitponchestotales}
          {...getOverrideProps(overrides, "242182300")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="42.81px"
        height="44px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="255px"
        left="55px"
        {...getOverrideProps(overrides, "Group 14")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="42.81px"
          height="44px"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="2px SOLID rgba(243,219,0,1)"
          borderRadius="5px"
          padding="4px 14px 4px 14px"
          backgroundColor="rgba(15,14,14,0.7)"
          {...getOverrideProps(overrides, "Pill")}
        ></Flex>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="800"
          color="rgba(255,255,255,1)"
          lineHeight="16.799999237060547px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="47.73%"
          bottom="13.64%"
          left="21.02%"
          right="20.58%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="ERA"
          {...getOverrideProps(overrides, "ERA")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="800"
          color="rgba(255,255,255,1)"
          lineHeight="19.600000381469727px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="33px"
          height="21px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="6.82%"
          bottom="45.45%"
          left="11.68%"
          right="11.24%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.beipitera}
          {...getOverrideProps(overrides, "4")}
        ></Text>
      </View>
    </View>
  );
}
