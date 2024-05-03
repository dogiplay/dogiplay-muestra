/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Cardjugadorbeisbol from "./Cardjugadorbeisbol";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Cardjugadorfutbol(props) {
  const { statsJugadores, jugadores, overrides, ...rest } = props;
  return (
    <View
      width="271px"
      height="522px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Cardjugadorfutbol")}
      {...rest}
    >
      <Cardjugadorbeisbol
        width="260px"
        height="478px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0.57%"
        bottom="7.85%"
        left="-2.21%"
        right="6.27%"
        border="2px SOLID rgba(120,107,107,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "cardjugadorfutbol")}
      ></Cardjugadorbeisbol>
      <View
        padding="0px 0px 0px 0px"
        width="234px"
        height="260.23px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.24%"
        bottom="41.91%"
        left="2.58%"
        right="11.07%"
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
          top="84.92%"
          bottom="0.15%"
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
            fontSize="20px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="28px"
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
            children="7 Goles anotados"
            {...getOverrideProps(overrides, "7 Goles anotados")}
          ></Text>
        </Flex>
      </View>
    </View>
  );
}
