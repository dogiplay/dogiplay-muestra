/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CardAtletismo(props) {
  const { atletas, overrides, ...rest } = props;
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
      {...getOverrideProps(overrides, "CardAtletismo")}
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
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(182,165,17,1)"
        {...getOverrideProps(overrides, "Rectangle 79")}
      ></View>
      <Image
        width="86.15%"
        height="69.87%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="3.56%"
        bottom="26.57%"
        left="6.92%"
        right="6.92%"
        border="1px SOLID rgba(255,255,255,1)"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={atletas?.foto}
        {...getOverrideProps(overrides, "61575e8493b26 1")}
      ></Image>
      <Icon
        width="213px"
        height="30px"
        viewBox={{ minX: 0, minY: 0, width: 213, height: 30 }}
        paths={[
          {
            d: "M9.5 0L9.5 -1L8.76772 -1L8.54666 -0.301892L9.5 0ZM201 0L201.928 -0.371391L201.677 -1L201 -1L201 0ZM213 30L213 31L214.477 31L213.928 29.6286L213 30ZM0 30L-0.953342 29.6981L-1.36561 31L0 31L0 30ZM9.5 1L201 1L201 -1L9.5 -1L9.5 1ZM200.072 0.371391L212.072 30.3714L213.928 29.6286L201.928 -0.371391L200.072 0.371391ZM213 29L0 29L0 31L213 31L213 29ZM0.953342 30.3019L10.4533 0.301892L8.54666 -0.301892L-0.953342 29.6981L0.953342 30.3019Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M9.5 0L201 0L213 30L0 30L9.5 0Z",
            fill: "rgba(255,245,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="65.9%"
        bottom="27.82%"
        left="8.85%"
        right="9.23%"
        {...getOverrideProps(overrides, "Rectangle 80")}
      ></Icon>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="14.522727012634277px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="184px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="67.57%"
        bottom="29.29%"
        left="14.62%"
        right="14.62%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.nombre}
        {...getOverrideProps(overrides, "VICTOR LOPEZ")}
      ></Text>
      <View
        width="224px"
        height="104px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="75.94%"
        bottom="2.3%"
        left="6.92%"
        right="6.92%"
        border="1px SOLID rgba(255,245,0,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(163,216,255,1)"
        {...getOverrideProps(overrides, "Rectangle 81")}
      ></View>
      <View
        width="189px"
        height="94px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="44.98%"
        bottom="35.36%"
        left="12.69%"
        right="14.62%"
        border="1px SOLID rgba(255,255,255,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,219,0,0.8)"
        {...getOverrideProps(overrides, "Rectangle 82")}
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
        top="50.42%"
        bottom="47.07%"
        left="15%"
        right="65.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Disciplina:"
        {...getOverrideProps(overrides, "Disciplina:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="9.681818008422852px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="177px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="46.03%"
        bottom="51.88%"
        left="15.77%"
        right="16.15%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.equipoclub}
        {...getOverrideProps(overrides, "Equipo Venados Velocity")}
      ></Text>
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
        top="53.77%"
        bottom="43.72%"
        left="14.62%"
        right="65.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Categoría:"
        {...getOverrideProps(overrides, "Categor\u00EDa:")}
      ></Text>
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
        top="57.11%"
        bottom="40.38%"
        left="15%"
        right="74.23%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Edad:"
        {...getOverrideProps(overrides, "Edad:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="8px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="9.681818008422852px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="61.09%"
        bottom="36.82%"
        left="15%"
        right="63.08%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Record actual:"
        {...getOverrideProps(overrides, "Record actual:")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="11px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="13.3125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="122px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="50.42%"
        bottom="46.86%"
        left="36.92%"
        right="16.15%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.disciplina}
        {...getOverrideProps(overrides, "Velocidad")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="11px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="13.3125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="122px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="53.77%"
        bottom="43.51%"
        left="36.92%"
        right="16.15%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.categoria}
        {...getOverrideProps(overrides, "Juvenil")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="11px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="13.3125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="122px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="57.11%"
        bottom="40.17%"
        left="36.92%"
        right="16.15%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.edad}
        {...getOverrideProps(overrides, "27")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="122px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="60.88%"
        bottom="36.82%"
        left="36.92%"
        right="16.15%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.recordActual}
        {...getOverrideProps(overrides, "400m/53.3 seg")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="11px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="13.3125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="205px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="77.2%"
        bottom="20.08%"
        left="10.38%"
        right="10.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Pa\u00EDs: "}${atletas?.pais}`}
        {...getOverrideProps(overrides, "Pa\u00EDs: M\u00E9xico")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="11px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="13.3125px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="205px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="80.54%"
        bottom="16.74%"
        left="10.38%"
        right="10.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Ciudad: "}${atletas?.ciudad}`}
        {...getOverrideProps(overrides, "Ciudad: Tepic, Nayarit")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="205px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="84.1%"
        bottom="13.6%"
        left="10.38%"
        right="10.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio1}
        {...getOverrideProps(overrides, "Record 2023: 400m/54.0 seg")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="205px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="86.82%"
        bottom="10.88%"
        left="10.38%"
        right="10.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio2}
        {...getOverrideProps(overrides, "Record 2022: 400m/56.0 seg")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="205px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="89.33%"
        bottom="8.37%"
        left="10.38%"
        right="10.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio3}
        {...getOverrideProps(overrides, "Record 2021: 400m/56.2 seg")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="205px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="91.84%"
        bottom="5.86%"
        left="10.38%"
        right="10.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio4}
        {...getOverrideProps(overrides, "Medalla de oro en carrera CDMX 2019")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="9px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="10.892045021057129px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="205px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="94.35%"
        bottom="3.35%"
        left="10.38%"
        right="10.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio5}
        {...getOverrideProps(
          overrides,
          "Cuarto lugar en carrera Salsa Huichol"
        )}
      ></Text>
      <Icon
        width="15px"
        height="15px"
        viewBox={{ minX: 0, minY: 0, width: 15, height: 15 }}
        paths={[
          {
            d: "M7.5 0L9.18386 5.18237L14.6329 5.18237L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237L5.81614 5.18237L7.5 0Z",
            fill: "rgba(255,199,0,0.9)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="77.2%"
        bottom="19.67%"
        left="8.85%"
        right="85.38%"
        {...getOverrideProps(overrides, "Star 8")}
      ></Icon>
      <Icon
        width="15px"
        height="15px"
        viewBox={{ minX: 0, minY: 0, width: 15, height: 15 }}
        paths={[
          {
            d: "M7.5 0L9.18386 5.18237L14.6329 5.18237L10.2245 8.38525L11.9084 13.5676L7.5 10.3647L3.09161 13.5676L4.77547 8.38525L0.367076 5.18237L5.81614 5.18237L7.5 0Z",
            fill: "rgba(255,199,0,0.9)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="76.99%"
        bottom="19.87%"
        left="85%"
        right="9.23%"
        {...getOverrideProps(overrides, "Star 9")}
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
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="4.6%"
        bottom="91.63%"
        left="8.85%"
        right="45.77%"
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
        top="4.39%"
        bottom="91.42%"
        left="77.69%"
        right="9.23%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={atletas?.fotopais}
        {...getOverrideProps(overrides, "file 2")}
      ></Image>
    </View>
  );
}
