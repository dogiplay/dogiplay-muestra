/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function GlobalBox(props) {
  const { jugadores, overrides, ...rest } = props;
  return (
    <View
      width="260px"
      height="454px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "GlobalBox")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="900"
        color="rgba(253,249,249,1)"
        lineHeight="15px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0px"
        width="92.58px"
        height="34.05px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="50%"
        bottom="42.5%"
        left="5.68%"
        right="58.71%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="dogiplay.com"
        {...getOverrideProps(overrides, "dogiplay.com424186")}
      ></Text>
      <View
        width="260px"
        height="454px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="-0.38%"
        right="0.38%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 72")}
      ></View>
      <View
        width="240px"
        height="183.31px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="57.53%"
        bottom="2.09%"
        left="3.46%"
        right="4.23%"
        border="1px SOLID rgba(255,255,255,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(22,21,21,1)"
        {...getOverrideProps(overrides, "Rectangle 74")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="12.102272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="226px"
        height="11.4px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="66.32%"
        bottom="31.17%"
        left="5.77%"
        right="7.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Pa\u00EDs: "}${jugadores?.pais}`}
        {...getOverrideProps(overrides, "PA\u00CDS : M\u00C9XICO")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="12.102272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="226px"
        height="11.4px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="69.67%"
        bottom="27.82%"
        left="5.77%"
        right="7.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Ciudad: "}${jugadores?.ciudad}`}
        {...getOverrideProps(overrides, "CIUDAD: GUADALAJARA")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="12.102272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="226px"
        height="11.4px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="62.97%"
        bottom="34.52%"
        left="5.77%"
        right="7.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Gimnasio: "}${jugadores?.boxgimnasio}`}
        {...getOverrideProps(overrides, "GIMNASIO NI\u00D1OS HEROES")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="12.102272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="226px"
        height="11.4px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="59.62%"
        bottom="37.87%"
        left="5.77%"
        right="7.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Categor\u00EDa: "}${jugadores?.categoria}`}
        {...getOverrideProps(overrides, "CATEGORIA: PESO MOSCA")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(243,219,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="226px"
        height="14.25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="77.82%"
        bottom="19.04%"
        left="5.77%"
        right="7.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Peleas: "}${jugadores?.boxajecombates}`}
        {...getOverrideProps(overrides, "PELEAS: 24")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(243,219,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="226px"
        height="14.25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="81.38%"
        bottom="15.48%"
        left="5.77%"
        right="7.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Victorias: "}${jugadores?.boxajetriunfos}`}
        {...getOverrideProps(overrides, "VICTORIAS: 10")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(243,219,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="226px"
        height="14.25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="84.94%"
        bottom="11.92%"
        left="5.77%"
        right="7.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Derrotas: "}${jugadores?.boxajederrotas}`}
        {...getOverrideProps(overrides, "DERROTAS: 8")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(243,219,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="226px"
        height="14.25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="88.7%"
        bottom="8.16%"
        left="5.77%"
        right="7.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Empates: "}${jugadores?.boxajeempates}`}
        {...getOverrideProps(overrides, "EMPATES: 6")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(243,219,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="226px"
        height="14.25px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="92.68%"
        bottom="4.18%"
        left="5.77%"
        right="7.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Knock Outs: "}${jugadores?.boxKO}`}
        {...getOverrideProps(overrides, "KNOCK OUTS: 5")}
      ></Text>
      <Image
        width="93.46%"
        height="56.49%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1.05%"
        bottom="42.47%"
        left="2.69%"
        right="3.85%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={jugadores?.foto}
        {...getOverrideProps(overrides, "boxeador 1")}
      ></Image>
      <View
        padding="0px 0px 0px 0px"
        width="243px"
        height="23.74px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="232.7px"
        left="7px"
        {...getOverrideProps(overrides, "Group 22")}
      >
        <View
          width="243px"
          height="23.74px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1px SOLID rgba(255,255,255,1)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(188,12,12,0.8)"
          {...getOverrideProps(overrides, "Rectangle 73")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="12.102272033691406px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="243px"
          height="15.2px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="24%"
          bottom="12%"
          left="0%"
          right="0%"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={jugadores?.nombre}
          {...getOverrideProps(overrides, "EL GALLO LOPEZ")}
        ></Text>
      </View>
      <View
        width="240px"
        height="15px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="334px"
        left="9px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 98")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="12.102272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="336px"
        left="109px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="RECORD"
        {...getOverrideProps(overrides, "RECORD")}
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
        width="118px"
        height="17.1px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="6.49%"
        bottom="89.75%"
        left="4.23%"
        right="50.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="dogiplay.com"
        {...getOverrideProps(overrides, "dogiplay.com477157")}
      ></Text>
      <Image
        width="13.08%"
        height="4.19%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="45.37%"
        bottom="50.44%"
        left="43.46%"
        right="43.46%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={jugadores?.fotopais}
        {...getOverrideProps(overrides, "file 2")}
      ></Image>
    </View>
  );
}
