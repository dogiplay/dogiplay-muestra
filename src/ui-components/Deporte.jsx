/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Deporte(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="152px"
      height="40px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      border="1px SOLID rgba(224,224,224,1)"
      borderRadius="8px"
      padding="7px 15px 7px 15px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Deporte")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="700"
        color="rgba(130,130,130,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Deporte"
        {...getOverrideProps(overrides, "Label")}
      ></Text>
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "chevron-down")}
      >
        <Icon
          width="12px"
          height="6px"
          viewBox={{ minX: 0, minY: 0, width: 12, height: 6 }}
          paths={[
            {
              d: "M0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM6 6L5.29289 6.70711C5.68342 7.09763 6.31658 7.09763 6.70711 6.70711L6 6ZM12.7071 0.707107C13.0976 0.316583 13.0976 -0.316583 12.7071 -0.707107C12.3166 -1.09763 11.6834 -1.09763 11.2929 -0.707107L12.7071 0.707107ZM-0.707107 0.707107L5.29289 6.70711L6.70711 5.29289L0.707107 -0.707107L-0.707107 0.707107ZM6.70711 6.70711L12.7071 0.707107L11.2929 -0.707107L5.29289 5.29289L6.70711 6.70711Z",
              stroke: "rgba(130,130,130,1)",
              fillRule: "nonzero",
              strokeLinejoin: "round",
              strokeWidth: 2,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="37.5%"
          bottom="37.5%"
          left="25%"
          right="25%"
          {...getOverrideProps(overrides, "Vector")}
        ></Icon>
      </View>
    </Flex>
  );
}
