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
  const { jugadores, overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "Cardpitcher")}
      {...rest}
    >
      <View
        width="260px"
        height="478px"
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
        border="2px SOLID rgba(219,204,69,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(21,57,84,1)"
        {...getOverrideProps(overrides, "cardjugadorbeisbol")}
      >
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
            border="2px SOLID rgba(255,255,255,1)"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={jugadores?.foto}
            {...getOverrideProps(overrides, "images 2")}
          ></Image>
        </Flex>
        <View
          width="242px"
          height="26px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="9px"
          left="8px"
          border="1px SOLID rgba(243,219,0,1)"
          borderRadius="2px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,82,141,1)"
          {...getOverrideProps(overrides, "Header")}
        >
          <Text
            fontFamily="Inter"
            fontSize="15px"
            fontWeight="600"
            color="rgba(255,255,255,1)"
            lineHeight="21px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.15px"
            width="217px"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="calc(50% - 10.5px - 0.5px)"
            left="calc(50% - 108.5px - -2.5px)"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={jugadores?.nombre}
            {...getOverrideProps(overrides, "Oliver Torres el Gato")}
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
          top="309px"
          left="6px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Product info")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="700"
            color="rgba(217,217,217,1)"
            lineHeight="19.600000381469727px"
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
            {...getOverrideProps(overrides, "Product name410114")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="11px"
          fontWeight="600"
          color="rgba(217,217,217,1)"
          lineHeight="11px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="251px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="330px"
          left="6px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Equipo: Tepic"
          {...getOverrideProps(overrides, "Product name410116")}
        ></Text>
        <View
          width="260px"
          height="16px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="348px"
          left="0px"
          border="1px SOLID rgba(0,82,141,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(243,219,0,1)"
          {...getOverrideProps(overrides, "Rectangle 77")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="11px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="16.5px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="234px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="347px"
          left="16px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Velocidad m\u00E1xima "}${jugadores?.beipitchervelmax}`}
          {...getOverrideProps(overrides, "90MPH")}
        ></Text>
        <View
          width="260px"
          height="18px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="369px"
          left="0px"
          border="1px SOLID rgba(0,82,141,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(243,219,0,1)"
          {...getOverrideProps(overrides, "Rectangle 78")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="18px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="234px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="369px"
          left="16px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${"Velocidad promedio "}${jugadores?.beipitchervelprom}`}
          {...getOverrideProps(overrides, "88MPH")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(217,217,217,1)"
          lineHeight="15px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="242px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="440px"
          left="8px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.pais}
          {...getOverrideProps(overrides, "Pais: M\u00E9xico")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(217,217,217,1)"
          lineHeight="15px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="242px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="424px"
          left="8px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.edad}
          {...getOverrideProps(overrides, "Edad: 16 a\u00F1os")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(217,217,217,1)"
          lineHeight="15px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="242px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="456px"
          left="8px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.ciudad}
          {...getOverrideProps(overrides, "Ciudad: San Diego California")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="700"
          color="rgba(217,217,217,1)"
          lineHeight="18px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="242px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="390px"
          left="8px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.beilanzamientos}
          {...getOverrideProps(overrides, "Lanzamientos: Recta y curva")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="900"
          color="rgba(253,249,249,1)"
          lineHeight="18px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="43px"
          left="19px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="dogiplay.com"
          {...getOverrideProps(overrides, "dogiplay.com")}
        ></Text>
        <View
          width="188px"
          height="94px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="208px"
          left="38px"
          border="1px SOLID rgba(0,82,141,1)"
          borderRadius="7px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(52,37,37,0.6)"
          {...getOverrideProps(overrides, "Rectangle 10")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(217,217,217,1)"
          lineHeight="15px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="242px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="408px"
          left="8px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.perfil}
          {...getOverrideProps(overrides, "Perfil derecho")}
        ></Text>
      </View>
      <View
        padding="0px 0px 0px 0px"
        width="116px"
        height="77px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="217px"
        left="105px"
        {...getOverrideProps(overrides, "Group 13")}
      >
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
          width="116px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="0%"
          bottom="81.82%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${
            jugadores?.beipitentradaslanzadas
          }${" entradas lanzadas"}`}
          {...getOverrideProps(overrides, "24")}
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
          width="116px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="16.88%"
          bottom="64.94%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${jugadores?.beipitcarreraslimpias}${" carreras limpias"}`}
          {...getOverrideProps(overrides, "14")}
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
          width="116px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="32.47%"
          bottom="49.35%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${jugadores?.beipithitstotales}${" hit totales"}`}
          {...getOverrideProps(overrides, "11")}
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
          width="116px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="48.05%"
          bottom="33.77%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${jugadores?.beipitponchestotales}${" ponches totales"}`}
          {...getOverrideProps(overrides, "9")}
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
          width="116px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="64.94%"
          bottom="16.88%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${jugadores?.beipitjuegosganados}${" juegos ganados"}`}
          {...getOverrideProps(overrides, "16")}
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
          width="116px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="81.82%"
          bottom="0%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={`${jugadores?.beipitjuegosperdidos}${" juegos perdidos"}`}
          {...getOverrideProps(overrides, "8")}
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
        top="233px"
        left="51px"
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
          {...getOverrideProps(overrides, "1.2")}
        ></Text>
      </View>
      <Image
        width="34px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="43px"
        left="211px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={jugadores?.fotopais}
        {...getOverrideProps(overrides, "file 3")}
      ></Image>
    </View>
  );
}
