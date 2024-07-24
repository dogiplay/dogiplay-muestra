/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function SalondelaFama(props) {
  const { salonFama, overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "SalondelaFama")}
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
        left="0px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 100")}
      ></View>
      <View
        width="242px"
        height="458px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="10px"
        left="9px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,219,0,1)"
        {...getOverrideProps(overrides, "Rectangle 101")}
      ></View>
      <View
        width="232px"
        height="447px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="16px"
        left="14px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 102")}
      ></View>
      <Image
        width="224px"
        height="361px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="20px"
        left="18px"
        border="2px SOLID rgba(255,199,0,1)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={salonFama?.foto}
        {...getOverrideProps(overrides, "mexfutramirezramon 1")}
      ></Image>
      <View
        width="224px"
        height="67px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="226px"
        left="18px"
        border="1px SOLID rgba(243,219,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        opacity="0.5"
        {...getOverrideProps(overrides, "Rectangle 103")}
      ></View>
      <View
        width="224px"
        height="37px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="178px"
        left="18px"
        border="2px SOLID rgba(243,219,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(26,20,20,1)"
        opacity="0.699999988079071"
        {...getOverrideProps(overrides, "Rectangle 104")}
      ></View>
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
        width="200px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="189px"
        left="29px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={salonFama?.nombre}
        {...getOverrideProps(overrides, "RAM\u00D3N RAM\u00CDREZ")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="700"
        color="rgba(41,36,36,1)"
        lineHeight="12.102272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="200px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="234px"
        left="29px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Pa\u00EDs/Country: "}${salonFama?.pais}`}
        {...getOverrideProps(overrides, "Pa\u00EDs: M\u00E9xico")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="700"
        color="rgba(41,36,36,1)"
        lineHeight="12.102272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="200px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="251px"
        left="29px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Estado/Cd/City: "}${salonFama?.estado}`}
        {...getOverrideProps(overrides, "Estado: Nayarit")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="700"
        color="rgba(41,36,36,1)"
        lineHeight="12.102272033691406px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="200px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="268px"
        left="29px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Deporte/Sport: "}${salonFama?.deporte}`}
        {...getOverrideProps(overrides, "Deporte: Futbol")}
      ></Text>
      <Icon
        width="44px"
        height="44px"
        viewBox={{ minX: 0, minY: 0, width: 44, height: 44 }}
        paths={[
          {
            d: "M22 0L26.9393 15.2016L42.9232 15.2016L29.992 24.5967L34.9313 39.7984L22 30.4033L9.06872 39.7984L14.008 24.5967L1.07676 15.2016L17.0607 15.2016L22 0Z",
            fill: "rgba(243,219,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="359px"
        left="107px"
        {...getOverrideProps(overrides, "Star 11")}
      ></Icon>
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
        width="224px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="404px"
        left="18px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={salonFama?.logros}
        {...getOverrideProps(overrides, "Copas del mundo: 1994 y 1998")}
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
        width="224px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="430px"
        left="18px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={salonFama?.descripcion1}
        {...getOverrideProps(overrides, "Equipo principal: Chivas")}
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
        width="224px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="444px"
        left="18px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={salonFama?.descripcion2}
        {...getOverrideProps(
          overrides,
          "Otros equipos: America y Coras de Tepic"
        )}
      ></Text>
      <Image
        width="13.08%"
        height="3.97%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="74.06%"
        bottom="21.97%"
        left="9.62%"
        right="77.31%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={salonFama?.fotopais}
        {...getOverrideProps(overrides, "file 3")}
      ></Image>
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
        top="5.02%"
        bottom="91.4%"
        left="11.15%"
        right="43.46%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="dogiplay.com"
        {...getOverrideProps(overrides, "dogiplay.com")}
      ></Text>
    </View>
  );
}
