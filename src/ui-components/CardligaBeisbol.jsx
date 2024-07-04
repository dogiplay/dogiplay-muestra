/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardligaBeisbol(props) {
  const { ligas, overrides, ...rest } = props;
  const botonLigaBeisOnClick = useNavigateAction({
    type: "url",
    url: "ligasbeisbol",
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
      borderRadius="11px"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CardligaBeisbol")}
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
        top="0px"
        left="-2px"
        border="2px SOLID rgba(149,148,133,1)"
        borderRadius="11px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Rectangle 99")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="257px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="17px"
        left="1px"
        {...getOverrideProps(overrides, "Group 23")}
      >
        <View
          width="257px"
          height="20px"
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
          borderRadius="2px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(0,82,141,1)"
          {...getOverrideProps(overrides, "Header")}
        >
          <Text
            fontFamily="Inter"
            fontSize="14px"
            fontWeight="600"
            color="rgba(255,253,253,1)"
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
            {...getOverrideProps(overrides, "LIGA MUNICIPAL DE BEISBOL")}
          ></Text>
        </View>
      </View>
      <Image
        width="83.46%"
        height="43.72%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="9.41%"
        bottom="46.86%"
        left="8.08%"
        right="8.46%"
        border="2px SOLID rgba(0,82,141,1)"
        borderRadius="2px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={ligas?.foto}
        {...getOverrideProps(overrides, "logoequipo")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="11px"
        fontWeight="600"
        color="rgba(0,82,141,1)"
        lineHeight="15.399999618530273px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="217px"
        height="15px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="54.39%"
        bottom="42.47%"
        left="8.08%"
        right="8.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Presidente: "}${ligas?.presidente}`}
        {...getOverrideProps(overrides, "Product name")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="11px"
        fontWeight="600"
        color="rgba(0,82,141,1)"
        lineHeight="15.399999618530273px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="217px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="57.74%"
        bottom="39.12%"
        left="8.08%"
        right="8.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Contacto: "}${ligas?.telefono}`}
        {...getOverrideProps(overrides, "Contacto: 3117436503")}
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
        width="217px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="61.09%"
        bottom="34.73%"
        left="8.08%"
        right="8.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Pa\u00EDs: M\u00E9xico"}${""}`}
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
        width="217px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="65.48%"
        bottom="30.33%"
        left="8.08%"
        right="8.46%"
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
        width="217px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="69.87%"
        bottom="25.94%"
        left="8.08%"
        right="8.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Ciudad: "}${ligas?.ciudad}`}
        {...getOverrideProps(overrides, "Ciudad: Tepic")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        color="rgba(203,0,0,1)"
        lineHeight="22.399999618530273px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="217px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="75.1%"
        bottom="20.29%"
        left="8.08%"
        right="8.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Clave: "}${ligas?.clave}`}
        {...getOverrideProps(overrides, "Clave: AMEMEXNAYBEI001")}
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
        width="214px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="80.54%"
        bottom="15.27%"
        left="9.23%"
        right="8.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Categor\u00EDa: "}${ligas?.categoria}`}
        {...getOverrideProps(overrides, "Categor\u00EDa: Segunda")}
      ></Text>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="40px"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="88.08%"
        bottom="3.56%"
        left="31.92%"
        right="31.15%"
        borderRadius="8px"
        padding="0px 16px 0px 16px"
        backgroundColor="rgba(191,14,14,1)"
        onClick={() => {
          botonLigaBeisOnClick();
        }}
        {...getOverrideProps(overrides, "botonLigaBeis")}
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
          children="Ver Liga"
          {...getOverrideProps(overrides, "Ver Liga")}
        ></Text>
      </Flex>
    </View>
  );
}
