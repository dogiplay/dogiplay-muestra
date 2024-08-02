/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Cardliga(props) {
  const { ligas, nayaritfutbolliga1, overrides, ...rest } = props;
  const buttonLigaOnClick = useNavigateAction({
    type: "url",
    url: "ligasdefutbol",
  });
  return (
    <View
      width="260px"
      height="478px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="2px SOLID rgba(227,220,220,1)"
      borderRadius="11px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Cardliga")}
      {...rest}
    >
      <Image
        width="216px"
        height="205px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43px"
        left="22px"
        border="2px SOLID rgba(0,148,255,1)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={ligas?.foto}
        {...getOverrideProps(overrides, "logoequipo")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="600"
        color="rgba(0,82,141,1)"
        lineHeight="16.799999237060547px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="216px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="250px"
        left="22px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Presidente: "}${ligas?.presidente}`}
        {...getOverrideProps(overrides, "Product name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="600"
        color="rgba(0,82,141,1)"
        lineHeight="16.799999237060547px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="216px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="271px"
        left="22px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Contacto: "}${ligas?.telefono}`}
        {...getOverrideProps(overrides, "Contacto: 311 1122111")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="19.600000381469727px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="216px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="311px"
        left="22px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Estado: "}${ligas?.estado}`}
        {...getOverrideProps(overrides, "Estado: Nayarit")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="19.600000381469727px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="216px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="288px"
        left="22px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="País: México"
        {...getOverrideProps(overrides, "Pa\u00EDs: M\u00E9xico")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="19.600000381469727px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="216px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="334px"
        left="22px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Ciudad: "}${ligas?.ciudad}`}
        {...getOverrideProps(overrides, "Ciudad: Xalisco")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="19.600000381469727px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="216px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="360px"
        left="22px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Clave: "}${ligas?.clave}`}
        {...getOverrideProps(overrides, "Clave: AMEMEXNAYFUT001")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="19.600000381469727px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="216px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="80.75%"
        bottom="15.06%"
        left="8.46%"
        right="8.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Categor\u00EDa: "}${ligas?.categoria}`}
        {...getOverrideProps(overrides, "Categor\u00EDa: Primera")}
      ></Text>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="40px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="420px"
        left="85px"
        borderRadius="8px"
        padding="0px 16px 0px 16px"
        backgroundColor="rgba(0,82,141,1)"
        onClick={() => {
          buttonLigaOnClick();
        }}
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
          children="Ver liga"
          {...getOverrideProps(overrides, "Ver liga")}
        ></Text>
      </Flex>
      <View
        width="260px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 10px - 212px)"
        left="calc(50% - 130px - 0px)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(203,0,0,1)"
        {...getOverrideProps(overrides, "Header")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="600"
          color="rgba(255,255,255,1)"
          lineHeight="19.600000381469727px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.13px"
          width="260px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 10px - 0px)"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={ligas?.nombre}
          {...getOverrideProps(overrides, "LIGA MUNICIPAL DE FUTBOL")}
        ></Text>
      </View>
    </View>
  );
}
