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
      width="309px"
      height="213px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      border="2px SOLID rgba(134,133,133,1)"
      borderRadius="11px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Cardliga")}
      {...rest}
    >
      <View
        width="290px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 10px - 85.5px)"
        left="calc(50% - 145px - 2.5px)"
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
          width="290px"
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
        width="54px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="139px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Clave"
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
        width="116px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="36px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Presidente"
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
        width="175px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="56px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={ligas?.presidente}
        {...getOverrideProps(overrides, "Product name1921953")}
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
        width="92px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="95px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Estado"
        {...getOverrideProps(overrides, "Product name1921950")}
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
        width="84px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="117px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Municipio"
        {...getOverrideProps(overrides, "Product name1921949")}
      ></Text>
      <Image
        width="117px"
        height="111px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="45px"
        left="187px"
        border="2px SOLID rgba(0,148,255,1)"
        borderRadius="58px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={ligas?.foto}
        {...getOverrideProps(overrides, "logoequipo")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="19.600000381469727px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="106px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="93px"
        left="82px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={ligas?.estado}
        {...getOverrideProps(overrides, "Nayarit")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="19.600000381469727px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="115px"
        left="82px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={ligas?.municipio}
        {...getOverrideProps(overrides, "Xalisco")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="600"
        color="rgba(0,82,141,1)"
        lineHeight="16.799999237060547px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="105px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="74px"
        left="82px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={ligas?.telefono}
        {...getOverrideProps(overrides, "3117436503")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="19.600000381469727px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="138px"
        left="82px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={ligas?.clave}
        {...getOverrideProps(overrides, "30")}
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
        top="160px"
        left="82px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="FUTBOL"
        {...getOverrideProps(overrides, "FUTBOL")}
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="73px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Contacto"
        {...getOverrideProps(overrides, "Contacto")}
      ></Text>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="40px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="162px"
        left="201px"
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
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="162px"
        left="12px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Deporte"
        {...getOverrideProps(overrides, "Deporte")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="11px"
        fontWeight="600"
        color="rgba(0,0,0,1)"
        lineHeight="15.399999618530273px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="86.85%"
        bottom="6.1%"
        left="3.88%"
        right="78.96%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Categoria"
        {...getOverrideProps(overrides, "Categoria")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="19.600000381469727px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="85.92%"
        bottom="4.69%"
        left="26.54%"
        right="56.31%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={ligas?.categoria}
        {...getOverrideProps(overrides, "Primera")}
      ></Text>
    </View>
  );
}
