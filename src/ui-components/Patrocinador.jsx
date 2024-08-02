/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Patrocinador(props) {
  const { patrocinadores, overrides, ...rest } = props;
  return (
    <View
      width="260px"
      height="478px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Patrocinador")}
      {...rest}
    >
      <View
        width="260px"
        height="478px"
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
        backgroundColor="rgba(182,165,17,1)"
        {...getOverrideProps(overrides, "Rectangle 113")}
      ></View>
      <Image
        width="96.15%"
        height="98.33%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1.05%"
        bottom="0.63%"
        left="1.92%"
        right="1.92%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={patrocinadores?.foto}
        {...getOverrideProps(overrides, "ANUANCIATE AQUI 1")}
      ></Image>
      <Flex
        gap="8px"
        direction="row"
        width="79px"
        height="28px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="67.78%"
        bottom="26.36%"
        left="69.62%"
        right="0%"
        borderRadius="8px"
        padding="0px 16px 0px 16px"
        backgroundColor="rgba(182,165,17,1)"
        {...getOverrideProps(overrides, "buttonLiga")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
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
          children={patrocinadores?.textoboton}
          {...getOverrideProps(overrides, "Ver sitio")}
        ></Text>
      </Flex>
    </View>
  );
}
