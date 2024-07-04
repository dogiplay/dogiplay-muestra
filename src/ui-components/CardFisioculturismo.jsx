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
      height="478px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CardFisioculturismo")}
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
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 83")}
      ></View>
      <View
        width="247px"
        height="26px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="66.95%"
        bottom="27.62%"
        left="2.31%"
        right="2.69%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(243,219,0,1)"
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
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="68.2%"
        bottom="28.66%"
        left="5%"
        right="5.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.nombre}
        {...getOverrideProps(overrides, "ABRAHAM ARREOLA")}
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
        width="44px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="59%"
        bottom="39.33%"
        left="81.54%"
        right="1.54%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${"Edad: "}${atletas?.edad}`}
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
        width="39px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="61.92%"
        bottom="36.4%"
        left="82.31%"
        right="2.69%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.pais}
        {...getOverrideProps(overrides, "M\u00C9XICO")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="44px"
        height="258px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2.72%"
        bottom="43.31%"
        left="81.54%"
        right="1.54%"
        {...getOverrideProps(overrides, "Group 21")}
      >
        <View
          width="257.97px"
          height="30px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="100%"
          bottom="-11.63%"
          left="0.75%"
          right="-487.06%"
          transformOrigin="top left"
          transform="rotate(-90.07deg)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(16,0,0,0.7)"
          {...getOverrideProps(overrides, "Rectangle 85")}
        ></View>
        <Text
          fontFamily="Inter"
          fontSize="28px"
          fontWeight="900"
          color="rgba(255,255,255,1)"
          lineHeight="33.8863639831543px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="243.09px"
          height="40px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="97.71%"
          bottom="-13.21%"
          left="9.09%"
          right="-461.56%"
          transformOrigin="top left"
          transform="rotate(-90deg)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={atletas?.tipo}
          {...getOverrideProps(overrides, "ATLETA")}
        ></Text>
      </View>
      <Image
        width="76.54%"
        height="62.34%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="2.09%"
        bottom="35.56%"
        left="2.69%"
        right="20.77%"
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
        height="22px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="58.79%"
        bottom="36.61%"
        left="3.08%"
        right="70.77%"
        {...getOverrideProps(overrides, "Group 20")}
      >
        <View
          width="68px"
          height="22px"
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
          backgroundColor="rgba(243,219,0,1)"
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
          height="unset"
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
        height="118px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="74.06%"
        bottom="1.26%"
        left="2.31%"
        right="2.69%"
        border="1px SOLID rgba(175,173,173,1)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        {...getOverrideProps(overrides, "Rectangle 90")}
      ></View>
      <View
        width="242px"
        height="112px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="74.69%"
        bottom="1.88%"
        left="3.08%"
        right="3.85%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(52,45,45,1)"
        {...getOverrideProps(overrides, "Rectangle 92")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="9px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="95.61%"
        bottom="2.51%"
        left="3.85%"
        right="5.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio8fiscul}
        {...getOverrideProps(
          overrides,
          "1er lugar juvenil en 11o cl\u00E1sico juvenil y veteranos"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="9px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="86.4%"
        bottom="11.72%"
        left="4.23%"
        right="5.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio4}
        {...getOverrideProps(
          overrides,
          "1er lugar juvenil en 12 Cl\u00E1sico Juvenil y Veteranos Nayarit 2024"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="9px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="81.8%"
        bottom="16.32%"
        left="4.23%"
        right="5.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio2}
        {...getOverrideProps(
          overrides,
          "1er lugar juvenil en 12o campeonato selectivo 2024"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="9px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="79.5%"
        bottom="18.62%"
        left="4.23%"
        right="5.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio1}
        {...getOverrideProps(
          overrides,
          "\u20601er lugar classic physique en 12o campeonato selectivo 2024"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="9px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="77.2%"
        bottom="20.92%"
        left="4.23%"
        right="5.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.recordActual}
        {...getOverrideProps(
          overrides,
          "\u20601er lugar clasificados en 12o campeonato selectivo 2024"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="9px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="84.1%"
        bottom="14.02%"
        left="4.23%"
        right="5.38%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio3}
        {...getOverrideProps(
          overrides,
          "2do lugar clasificados en 12 Cl\u00E1sico Juvenil y Veteranos Nayarit 2024"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="9px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="93.51%"
        bottom="4.6%"
        left="3.85%"
        right="5.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio7fiscul}
        {...getOverrideProps(
          overrides,
          "1er lugar novatos en 11o cl\u00E1sico juvenil y veteranos"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="9px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="91.21%"
        bottom="6.9%"
        left="3.85%"
        right="5.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio6fiscul}
        {...getOverrideProps(
          overrides,
          "2do lugar juvenil en 12o cl\u00E1sico Mr y Miss Nayarit"
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="7px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="8.471590995788574px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="235px"
        height="9px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="88.7%"
        bottom="9.41%"
        left="3.85%"
        right="5.77%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={atletas?.espacio5}
        {...getOverrideProps(
          overrides,
          "2do lugar novatos en 12o cl\u00E1sico Mr y Miss Nayarit"
        )}
      ></Text>
      <Icon
        width="17px"
        height="17px"
        viewBox={{ minX: 0, minY: 0, width: 17, height: 17 }}
        paths={[
          {
            d: "M16 8.5C16 12.6421 12.6421 16 8.5 16L8.5 18C13.7467 18 18 13.7467 18 8.5L16 8.5ZM8.5 16C4.35786 16 1 12.6421 1 8.5L-1 8.5C-1 13.7467 3.25329 18 8.5 18L8.5 16ZM1 8.5C1 4.35786 4.35786 1 8.5 1L8.5 -1C3.25329 -1 -1 3.25329 -1 8.5L1 8.5ZM8.5 1C12.6421 1 16 4.35786 16 8.5L18 8.5C18 3.25329 13.7467 -1 8.5 -1L8.5 1Z",
            stroke: "rgba(255,255,255,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M17 8.5C17 13.1944 13.1944 17 8.5 17C3.80558 17 0 13.1944 0 8.5C0 3.80558 3.80558 0 8.5 0C13.1944 0 17 3.80558 17 8.5Z",
            fill: "rgba(0,0,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="73.01%"
        bottom="23.43%"
        left="45.77%"
        right="47.69%"
        {...getOverrideProps(overrides, "Ellipse 3")}
      ></Icon>
      <Icon
        width="11px"
        height="11px"
        viewBox={{ minX: 0, minY: 0, width: 11, height: 11 }}
        paths={[
          {
            d: "M5.5 0L6.73483 3.80041L10.7308 3.80041L7.49799 6.14919L8.73282 9.94959L5.5 7.60081L2.26718 9.94959L3.50201 6.14919L0.269189 3.80041L4.26517 3.80041L5.5 0Z",
            fill: "rgba(243,219,0,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="73.64%"
        bottom="24.06%"
        left="46.92%"
        right="48.85%"
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
        height="unset"
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
    </View>
  );
}
