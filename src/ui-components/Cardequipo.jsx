/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Cardequipo(props) {
  const { equipos, overrides, ...rest } = props;
  return (
    <View
      width="309px"
      height="213px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="2px SOLID rgba(134,133,133,1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Cardequipo")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="174px"
        left="10px"
        borderRadius="41px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Carousel")}
      >
        <Flex
          gap="8px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "05 Tab list")}
        >
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,148,255,1)"
            borderRadius="20px"
            padding="5px 15px 5px 15px"
            backgroundColor="rgba(246,246,246,0.9)"
            {...getOverrideProps(overrides, "Pill52719")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="16.799999237060547px"
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
              children={`${"PJ "}${equipos?.partidosjugados}`}
              {...getOverrideProps(overrides, "PJ:")}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,148,255,1)"
            borderRadius="20px"
            padding="5px 15px 5px 15px"
            backgroundColor="rgba(246,246,246,0.9)"
            {...getOverrideProps(overrides, "Pill52721")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="16.799999237060547px"
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
              children={`${"PG "}${equipos?.partidosganados}`}
              {...getOverrideProps(overrides, "PG:")}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,148,255,1)"
            borderRadius="20px"
            padding="5px 15px 5px 15px"
            backgroundColor="rgba(246,246,246,0.9)"
            {...getOverrideProps(overrides, "Pill52723")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="16.799999237060547px"
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
              children={`${"PP "}${equipos?.partidosperdidos}`}
              {...getOverrideProps(overrides, "PP:")}
            ></Text>
          </Flex>
          <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            border="1px SOLID rgba(0,148,255,1)"
            borderRadius="20px"
            padding="5px 15px 5px 15px"
            backgroundColor="rgba(246,246,246,0.9)"
            {...getOverrideProps(overrides, "Pill52725")}
          >
            <Text
              fontFamily="Inter"
              fontSize="12px"
              fontWeight="500"
              color="rgba(0,0,0,1)"
              lineHeight="16.799999237060547px"
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
              children={`${"PE "}${equipos?.partidosempatados}`}
              {...getOverrideProps(overrides, "PE:")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <View
        width="168px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 15.5px - 80px)"
        left="calc(50% - 84px - 63.5px)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,251,251,1)"
        {...getOverrideProps(overrides, "Header")}
      >
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="28px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.25px"
          width="163px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="calc(50% - 14px - 1.5px)"
          left="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={equipos?.nombre}
          {...getOverrideProps(overrides, "Equipo")}
        ></Text>
      </View>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.799999237060547px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="168px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="146px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.patrocinador}
        {...getOverrideProps(overrides, " Subheading")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="16.799999237060547px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="55px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="57px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Manager "
        {...getOverrideProps(overrides, "Product name52677")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="600"
        color="rgba(0,82,141,1)"
        lineHeight="14px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="108px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="59px"
        left="69px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.manager}
        {...getOverrideProps(overrides, "Product name1921953")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="22.399999618530273px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="92px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="86px"
        left="48px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Home runs"
        {...getOverrideProps(overrides, "Product name1921950")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="22.399999618530273px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="84px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="114px"
        left="49px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Carreras"
        {...getOverrideProps(overrides, "Product name1921949")}
      ></Text>
      <Image
        width="119px"
        height="139px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="11px"
        left="181px"
        borderRadius="11px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={equipos?.logo}
        {...getOverrideProps(overrides, "logoequipo")}
      ></Image>
      <Flex
        gap="8px"
        direction="row"
        width="119px"
        height="35px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="124px"
        left="192px"
        border="2px SOLID rgba(243,219,0,1)"
        borderRadius="8px"
        padding="4px 6px 4px 6px"
        backgroundColor="rgba(255,255,255,0.9)"
        {...getOverrideProps(overrides, "05 Tag")}
      >
        <Text
          fontFamily="Inter"
          fontSize="15px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="16px"
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
          children={`${equipos?.puntos}${" PUNTOS"}`}
          {...getOverrideProps(overrides, "Label")}
        ></Text>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="22.399999618530273px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="86px"
        left="17px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.beihr}
        {...getOverrideProps(overrides, "13")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="22.399999618530273px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="114px"
        left="16px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={equipos?.futgolesfavor}
        {...getOverrideProps(overrides, "33")}
      ></Text>
    </View>
  );
}
