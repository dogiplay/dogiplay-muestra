/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardFisioculturismo(props) {
  const { atletas, overrides, ...rest } = props;
  return (
    <View
      width="260px"
      height="450px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="2px SOLID rgba(243,219,0,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CardFisioculturismo")}
      {...rest}
    >
      <View
        width="260px"
        height="450px"
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
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 83")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="900"
        color="rgba(217,217,217,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="105px"
        height="8px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="87.33%"
        bottom="10.89%"
        left="4.23%"
        right="55.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${atletas?.edad}${" a\u00F1os"}`}
        {...getOverrideProps(overrides, "EDAD: 23")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="900"
        color="rgba(217,217,217,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="101px"
        height="8px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="87.56%"
        bottom="10.67%"
        left="56.15%"
        right="5%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.pais}
        {...getOverrideProps(overrides, "M\u00C9XICO")}
      ></Text>
      <Image
        width="94.62%"
        height="83.56%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2%"
        bottom="14.44%"
        left="2.69%"
        right="2.69%"
        border="1px SOLID rgba(243,219,0,1)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={atletas?.foto}
        {...getOverrideProps(
          overrides,
          "WhatsApp Image 2024-06-25 at 12.23.43 PM 1"
        )}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="68px"
        height="20.71px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="79.11%"
        bottom="16.29%"
        left="2.69%"
        right="71.15%"
        {...getOverrideProps(overrides, "Group 20")}
      >
        <View
          width="68px"
          height="20.71px"
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
          backgroundColor="rgba(243,219,0,0.66)"
          {...getOverrideProps(overrides, "Rectangle 89")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="900"
          color="rgba(0,0,0,1)"
          lineHeight="12.102272033691406px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="61px"
          height="11.3px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="22.73%"
          bottom="22.73%"
          left="2.94%"
          right="7.35%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={atletas?.estado}
          {...getOverrideProps(overrides, "NAYARIT")}
        ></Text>
      </View>
      <View
        width="247px"
        height="39px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="90.44%"
        bottom="0.89%"
        left="2.31%"
        right="2.69%"
        border="1px SOLID rgba(175,173,173,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 90")}
      ></View>
      <View
        width="242px"
        height="31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="91.33%"
        bottom="1.78%"
        left="3.08%"
        right="3.85%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(52,45,45,1)"
        {...getOverrideProps(overrides, "Rectangle 92")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="18.83px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="92.44%"
        bottom="3.37%"
        left="3.85%"
        right="5.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.recordActual}
        {...getOverrideProps(
          overrides,
          "\u20601er lugar clasificados en 12o campeonato selectivo 2024"
        )}
      ></Text>
      <Icon
        width="17px"
        height="16px"
        viewBox={{ minX: 0, minY: 0, width: 17, height: 16.00418472290039 }}
        paths={[
          {
            d: "M16 8.00209C16 11.8132 12.6999 15.0042 8.5 15.0042L8.5 17.0042C13.689 17.0042 18 13.0298 18 8.00209L16 8.00209ZM8.5 15.0042C4.30014 15.0042 1 11.8132 1 8.00209L-1 8.00209C-1 13.0298 3.31102 17.0042 8.5 17.0042L8.5 15.0042ZM1 8.00209C1 4.19095 4.30014 1 8.5 1L8.5 -1C3.31102 -1 -1 2.97436 -1 8.00209L1 8.00209ZM8.5 1C12.6999 1 16 4.19095 16 8.00209L18 8.00209C18 2.97436 13.689 -1 8.5 -1L8.5 1Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M17 8.00209C17 12.4215 13.1944 16.0042 8.5 16.0042C3.80558 16.0042 0 12.4215 0 8.00209C0 3.58266 3.80558 0 8.5 0C13.1944 0 17 3.58266 17 8.00209Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="88.44%"
        bottom="8%"
        left="46.15%"
        right="47.31%"
        {...getOverrideProps(overrides, "Ellipse 3")}
      ></Icon>
      <Icon
        width="11px"
        height="10.36px"
        viewBox={{ minX: 0, minY: 0, width: 11, height: 10.3556489944458 }}
        paths={[
          {
            d: "M5.5 0L6.73483 3.57779L10.7308 3.57779L7.49799 5.78898L8.73282 9.36677L5.5 7.15558L2.26718 9.36677L3.50201 5.78898L0.269189 3.57779L4.26517 3.57779L5.5 0Z",
            fill: "rgba(243,219,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="89.07%"
        bottom="8.63%"
        left="47.31%"
        right="48.46%"
        {...getOverrideProps(overrides, "Star 10")}
      ></Icon>
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
        width="118px"
        height="16.95px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="2.72%"
        bottom="93.51%"
        left="5%"
        right="49.62%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="dogiplay.com"
        {...getOverrideProps(overrides, "dogiplay.com")}
      ></Text>
      <Image
        width="13.08%"
        height="4.18%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="3.56%"
        bottom="92.26%"
        left="81.15%"
        right="5.77%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={atletas?.fotopais}
        {...getOverrideProps(overrides, "file 1")}
      ></Image>
      <View
        width="122.43px"
        height="30px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="47.11%"
        bottom="46.22%"
        left="3.2%"
        right="49.71%"
        transformOrigin="top left"
        transform="rotate(0.54deg)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(16,0,0,0.7)"
        {...getOverrideProps(overrides, "Rectangle 85")}
      ></View>
      <View
        width="232px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="71.33%"
        bottom="23.33%"
        left="5%"
        right="5.77%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,219,0,0.66)"
        {...getOverrideProps(overrides, "Rectangle 84")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="900"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="232px"
        height="14.12px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="72.2%"
        bottom="24.66%"
        left="5%"
        right="5.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.nombre}
        {...getOverrideProps(overrides, "ABRAHAM ARREOLA")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="120px"
        height="18.02px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="48.66%"
        bottom="47.33%"
        left="3.85%"
        right="50%"
        {...getOverrideProps(overrides, "Group 21")}
      >
        <Text
          fontFamily="Inter"
          fontSize="12px"
          fontWeight="900"
          color="rgba(255,255,255,1)"
          lineHeight="14.522727012634277px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="119.93px"
          height="17.43px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="3.28%"
          bottom="0%"
          left="0%"
          right="0.06%"
          transformOrigin="top left"
          transform="rotate(-0.28deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={atletas?.tipo}
          {...getOverrideProps(overrides, "ATLETA")}
        ></Text>
      </View>
    </View>
  );
}
