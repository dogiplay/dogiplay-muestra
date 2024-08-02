/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Asociaciones(props) {
  const { muilpasPray, overrides, ...rest } = props;
  const buttonLigaOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: muilpasPray?.sitio,
  });
  return (
    <View
      width="260px"
      height="478px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="2px SOLID rgba(243,219,0,1)"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Asociaciones")}
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
        border="1px SOLID rgba(243,219,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 111")}
      ></View>
      <View
        width="243px"
        height="140px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="69.04%"
        bottom="1.67%"
        left="3.46%"
        right="3.08%"
        border="1px SOLID rgba(243,219,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(40,35,35,1)"
        {...getOverrideProps(overrides, "Rectangle 112")}
      ></View>
      <Image
        width="93.46%"
        height="66.11%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="1.67%"
        bottom="32.22%"
        left="3.46%"
        right="3.08%"
        border="3px SOLID rgba(182,165,17,1)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={muilpasPray?.foto}
        {...getOverrideProps(
          overrides,
          "WhatsApp Image 2024-06-26 at 2.38.00 PM 1"
        )}
      ></Image>
      <Text
        fontFamily="Inika"
        fontSize="12px"
        fontWeight="700"
        color="rgba(217,217,217,1)"
        lineHeight="15.63599967956543px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="233px"
        height="29px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="76.15%"
        bottom="17.78%"
        left="5.77%"
        right="4.62%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={muilpasPray?.presidenterector}
        {...getOverrideProps(overrides, "Presidente: Arturo Gonzalez")}
      ></Text>
      <Text
        fontFamily="Inika"
        fontSize="12px"
        fontWeight="700"
        color="rgba(217,217,217,1)"
        lineHeight="15.63599967956543px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="233px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="82.22%"
        bottom="14.44%"
        left="5.38%"
        right="5%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={muilpasPray?.telefono}
        {...getOverrideProps(overrides, "Contacto: 52 311553344")}
      ></Text>
      <Text
        fontFamily="Inika"
        fontSize="12px"
        fontWeight="700"
        color="rgba(217,217,217,1)"
        lineHeight="15.63599967956543px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="233px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="85.56%"
        bottom="11.09%"
        left="5.77%"
        right="4.62%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={muilpasPray?.paisciudad}
        {...getOverrideProps(overrides, "Tepic, Nayarit, M\u00E9xico")}
      ></Text>
      <Text
        fontFamily="Inika"
        fontSize="12px"
        fontWeight="700"
        color="rgba(217,217,217,1)"
        lineHeight="15.63599967956543px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="233px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="69.67%"
        bottom="23.64%"
        left="5.38%"
        right="5%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={muilpasPray?.nombre}
        {...getOverrideProps(
          overrides,
          "Asociaci\u00F3n de Fisicoculturismo del Estado de Nayarit"
        )}
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
        left="80.38%"
        right="6.54%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={muilpasPray?.fotopais}
        {...getOverrideProps(overrides, "file 4")}
      ></Image>
      <Flex
        gap="8px"
        direction="row"
        width="79px"
        height="28px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="90.79%"
        bottom="3.35%"
        left="35.38%"
        right="34.23%"
        borderRadius="8px"
        padding="0px 16px 0px 16px"
        backgroundColor="rgba(182,165,17,1)"
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
          children="Ver sitio"
          {...getOverrideProps(overrides, "Ver sitio")}
        ></Text>
      </Flex>
    </View>
  );
}
