/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Cardjugadorbeisbol(props) {
  const { jugadores, overrides, ...rest } = props;
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
      border="2px SOLID rgba(120,107,107,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Cardjugadorbeisbol")}
      {...rest}
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
        gap="5px"
        direction="column"
        width="260px"
        height="156px"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="293px"
        left="calc(50% - 130px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Product Info")}
      ></Flex>
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
      <Icon
        width="229px"
        height="51px"
        viewBox={{ minX: 0, minY: 0, width: 229, height: 51 }}
        paths={[
          {
            d: "M0 5C0 2.23858 2.23858 0 5 0L224 0C226.761 0 229 2.23858 229 5L229 46C229 48.7614 226.761 51 224 51L5 51C2.23858 51 0 48.7614 0 46L0 5Z",
            fill: "rgba(217,217,217,0.5)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="252px"
        left="14px"
        {...getOverrideProps(overrides, "Rectangle 6")}
      ></Icon>
      <View
        padding="0px 0px 0px 0px"
        width="215px"
        height="47px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="256px"
        left="20px"
        {...getOverrideProps(overrides, "Group 1")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="42.81px"
          height="44px"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="0px"
          left="0px"
          border="2px SOLID rgba(243,219,0,1)"
          borderRadius="5px"
          padding="4px 14px 4px 14px"
          backgroundColor="rgba(15,14,14,0.7)"
          {...getOverrideProps(overrides, "Pill84183")}
        ></Flex>
        <Flex
          gap="8px"
          direction="row"
          width="80.86px"
          height="44px"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="3px"
          left="134.14px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "05 Tab list")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="38px"
            height="39px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="2px SOLID rgba(255,255,255,1)"
            borderRadius="5px"
            padding="4px 14px 4px 14px"
            backgroundColor="rgba(3,3,3,0.7)"
            {...getOverrideProps(overrides, "Pill67336")}
          ></Flex>
          <Flex
            gap="10px"
            direction="row"
            width="39px"
            height="39px"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="2px SOLID rgba(255,255,255,1)"
            borderRadius="5px"
            padding="4px 14px 4px 14px"
            backgroundColor="rgba(0,0,0,0.7)"
            {...getOverrideProps(overrides, "Pill67338")}
          ></Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="row"
          width="38.05px"
          height="39px"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="3px"
          left="86.57px"
          border="2px SOLID rgba(243,250,255,1)"
          borderRadius="5px"
          padding="4px 14px 4px 14px"
          backgroundColor="rgba(0,0,0,0.7)"
          {...getOverrideProps(overrides, "Pill84312")}
        ></Flex>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="22.399999618530273px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="29px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="259px"
        left="calc(50% - 14.5px - 3.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.beihits}
        {...getOverrideProps(overrides, "5")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="14px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="280px"
        left="114px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="HITS"
        {...getOverrideProps(overrides, "HITS")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="22.399999618530273px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="27px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="259px"
        left="159px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.beirolas}
        {...getOverrideProps(overrides, "3")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="500"
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
        top="282px"
        left="159px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ROLAS"
        {...getOverrideProps(overrides, "ROLAS")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="22.399999618530273px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="31px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="259px"
        left="204px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.beifly}
        {...getOverrideProps(overrides, "2")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="500"
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
        top="282px"
        left="210px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="FLYS"
        {...getOverrideProps(overrides, "FLYS")}
      ></Text>
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
          children="Posición: Fielder Central"
          {...getOverrideProps(overrides, "Product name170686")}
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
          {...getOverrideProps(overrides, "Product name170687")}
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
          children="7 Carreras producidas"
          {...getOverrideProps(overrides, " Subheading170688")}
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
          children="6 Carreras anotadas"
          {...getOverrideProps(overrides, " Subheading170689")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,0,0,1)"
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
          children={`${"AVG "}${jugadores?.beiporcentajebateo}`}
          {...getOverrideProps(overrides, " Subheading170690")}
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
          children="Alias"
          {...getOverrideProps(overrides, " Subheading170691")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="800"
        color="rgba(255,255,255,1)"
        lineHeight="28px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="27px"
        height="21px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="258px"
        left="27px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={jugadores?.beihr}
        {...getOverrideProps(overrides, "4")}
      ></Text>
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
        top="280px"
        left="33px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="HR"
        {...getOverrideProps(overrides, "HR")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="600"
        color="rgba(243,219,0,1)"
        lineHeight="28px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="246px"
        height="16px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="449px"
        left="7px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${jugadores?.mvp}${" veces MVP"}`}
        {...getOverrideProps(overrides, "Product name1841886")}
      ></Text>
    </View>
  );
}
