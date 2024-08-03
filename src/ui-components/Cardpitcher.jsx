/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
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
            children={jugadores?.posicion}
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
          children={`${"EQUIPO "}${jugadores?.equipo}`}
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
          children={`${"Pa\u00EDs: "}${jugadores?.pais}`}
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
          children={`${jugadores?.edad}${" a\u00F1os"}`}
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
          children={`${"Lanzamientos: "}${jugadores?.beilanzamientos}`}
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
          children={`${"Perfil "}${jugadores?.perfil}`}
          {...getOverrideProps(overrides, "Perfil derecho")}
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
      <Icon
        width="26px"
        height="24px"
        viewBox={{ minX: 0, minY: 0, width: 26, height: 24 }}
        paths={[
          {
            d: "M25 12C25 18.0013 19.7043 23 13 23L13 25C20.6551 25 27 19.2536 27 12L25 12ZM13 23C6.29571 23 1 18.0013 1 12L-1 12C-1 19.2536 5.34488 25 13 25L13 23ZM1 12C1 5.99873 6.29571 1 13 1L13 -1C5.34488 -1 -1 4.74644 -1 12L1 12ZM13 1C19.7043 1 25 5.99873 25 12L27 12C27 4.74644 20.6551 -1 13 -1L13 1Z",
            stroke: "rgba(0,82,141,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M26 12C26 18.6274 20.1797 24 13 24C5.8203 24 0 18.6274 0 12C0 5.37258 5.8203 0 13 0C20.1797 0 26 5.37258 26 12Z",
            fill: "rgba(255,245,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="356px"
        left="231px"
        {...getOverrideProps(overrides, "Ellipse 4")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="362px"
        left="233px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="MPH"
        {...getOverrideProps(overrides, "MPH")}
      ></Text>
    </View>
  );
}
