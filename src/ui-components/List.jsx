/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function List(props) {
  const { equipos, overrides, ...rest } = props;
  return (
    <View
      width="1480px"
      height="1121px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "List")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="1061px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="134px"
        left="336px"
        right="83px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "List182739")}
      >
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Header182740")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Task"
            {...getOverrideProps(overrides, "Task182741")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Title"
            {...getOverrideProps(overrides, "Title")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="120px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Project"
            {...getOverrideProps(overrides, "Project")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="64px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Priority"
            {...getOverrideProps(overrides, "Priority")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Date"
            {...getOverrideProps(overrides, "Date")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="center"
            display="block"
            direction="column"
            justifyContent="unset"
            width="84px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Owner"
            {...getOverrideProps(overrides, "Owner")}
          ></Text>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182747")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-123"
            {...getOverrideProps(overrides, "FIG-123")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={equipos?.nombre}
            {...getOverrideProps(overrides, "Task 1")}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Pill182750")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182751")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Project 1"
                {...getOverrideProps(overrides, "Label182752")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Pill182753")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182754")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="High"
                {...getOverrideProps(overrides, "Label182755")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182756")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Avatar182757")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182758")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182759")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Dot182760")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182761")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182762")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182763")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182764")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182765")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-122"
            {...getOverrideProps(overrides, "FIG-122")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={equipos?.nombre}
            {...getOverrideProps(overrides, "Task 2")}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Pill182768")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182769")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Acme GTM"
                {...getOverrideProps(overrides, "Label182770")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Pill182771")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182772")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Low"
                {...getOverrideProps(overrides, "Label182773")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182774")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Avatar182775")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182776")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182777")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Dot182778")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182779")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182780")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182781")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182782")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182783")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-121"
            {...getOverrideProps(overrides, "FIG-121")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Write blog post for demo day"
            {...getOverrideProps(overrides, "Write blog post for demo day")}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Pill182786")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182787")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Acme GTM"
                {...getOverrideProps(overrides, "Label182788")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Pill182789")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182790")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="High"
                {...getOverrideProps(overrides, "Label182791")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182792")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Avatar182793")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182794")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182795")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Dot182796")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182797")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182798")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182799")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182800")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182801")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-120"
            {...getOverrideProps(overrides, "FIG-120")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Publish blog page"
            {...getOverrideProps(overrides, "Publish blog page")}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Pill182804")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182805")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Website launch"
                {...getOverrideProps(overrides, "Label182806")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Pill182807")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182808")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Low"
                {...getOverrideProps(overrides, "Label182809")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182810")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Avatar182811")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182812")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182813")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Dot182814")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182815")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182816")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182817")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182818")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182819")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-119"
            {...getOverrideProps(overrides, "FIG-119")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Add gradients to design system"
            {...getOverrideProps(overrides, "Add gradients to design system")}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610417")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182823")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Design backlog"
                {...getOverrideProps(overrides, "Label182824")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610418182825")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182826")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Medium"
                {...getOverrideProps(overrides, "Label182827")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182828")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610442")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182830")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182831")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610430182832")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182833")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182834")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182835")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182836")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182837")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-118"
            {...getOverrideProps(overrides, "FIG-118")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Responsive behavior doesn’t work on Android"
            {...getOverrideProps(
              overrides,
              "Responsive behavior doesn\u2019t work on Android"
            )}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610418182840")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182841")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Bug fixes"
                {...getOverrideProps(overrides, "Label182842")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610419182843")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182844")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Medium"
                {...getOverrideProps(overrides, "Label182845")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182846")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610441")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182848")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182849")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610430182850")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182851")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182852")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182853")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182854")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182855")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-117"
            {...getOverrideProps(overrides, "FIG-117")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Confirmation states not rendering properly"
            {...getOverrideProps(
              overrides,
              "Confirmation states not rendering properly"
            )}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610419182858")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182859")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Bug fixes"
                {...getOverrideProps(overrides, "Label182860")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610420182861")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182862")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Medium"
                {...getOverrideProps(overrides, "Label182863")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182864")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610440")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182866")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182867")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610430182868")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182869")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182870")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182871")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182872")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182873")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-116"
            {...getOverrideProps(overrides, "FIG-116")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Text wrapping is awkward on older iPhones"
            {...getOverrideProps(
              overrides,
              "Text wrapping is awkward on older iPhones"
            )}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610420182876")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182877")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Bug fixes"
                {...getOverrideProps(overrides, "Label182878")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610421182879")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182880")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Low"
                {...getOverrideProps(overrides, "Label182881")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182882")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610439")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182884")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182885")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610430182886")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182887")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182888")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182889")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182890")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182891")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-115"
            {...getOverrideProps(overrides, "FIG-115")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Revise copy on About page"
            {...getOverrideProps(overrides, "Revise copy on About page")}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610421182894")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182895")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Website launch"
                {...getOverrideProps(overrides, "Label182896")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610422182897")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182898")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Low"
                {...getOverrideProps(overrides, "Label182899")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182900")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610438")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182902")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182903")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610430182904")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182905")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182906")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182907")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182908")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182909")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-114"
            {...getOverrideProps(overrides, "FIG-114")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Publish HackerNews post"
            {...getOverrideProps(overrides, "Publish HackerNews post")}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610422182912")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182913")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Acme GTM"
                {...getOverrideProps(overrides, "Label182914")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610423182915")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182916")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Low"
                {...getOverrideProps(overrides, "Label182917")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182918")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610437")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182920")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182921")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610430182922")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182923")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182924")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182925")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182926")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182927")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-113"
            {...getOverrideProps(overrides, "FIG-113")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Review image licensing for header section images"
            {...getOverrideProps(
              overrides,
              "Review image licensing for header section images"
            )}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610423182930")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182931")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Website Launch"
                {...getOverrideProps(overrides, "Label182932")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610424182933")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182934")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="High"
                {...getOverrideProps(overrides, "Label182935")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182936")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610436")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182938")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182939")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610430182940")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182941")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182942")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182943")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182944")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182945")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-112"
            {...getOverrideProps(overrides, "FIG-112")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Accessibility focused state for input fields"
            {...getOverrideProps(
              overrides,
              "Accessibility focused state for input fields"
            )}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610424182948")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182949")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Design backlog"
                {...getOverrideProps(overrides, "Label182950")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610425182951")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182952")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="High"
                {...getOverrideProps(overrides, "Label182953")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182954")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610435")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182956")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182957")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610430182958")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182959")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182960")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182961")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182962")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182963")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-111"
            {...getOverrideProps(overrides, "FIG-111")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Header IA revision to support addition of blog page"
            {...getOverrideProps(
              overrides,
              "Header IA revision to support addition of blog page"
            )}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610425182966")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182967")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Design backlog"
                {...getOverrideProps(overrides, "Label182968")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610426182969")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182970")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="High"
                {...getOverrideProps(overrides, "Label182971")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182972")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610434")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182974")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182975")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610430182976")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182977")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182978")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182979")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182980")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182981")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-110"
            {...getOverrideProps(overrides, "FIG-110")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Press outbound"
            {...getOverrideProps(overrides, "Press outbound")}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610426182984")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182985")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Acme GTM"
                {...getOverrideProps(overrides, "Label182986")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610427182987")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag182988")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Medium"
                {...getOverrideProps(overrides, "Label182989")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 5182990")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610433")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar182992")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 1182993")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610430182994")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal182995")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector182996")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector182997")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector182998")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task182999")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-109"
            {...getOverrideProps(overrides, "FIG-109")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="GIFs flicker when looping back more than 3 times on the header images"
            {...getOverrideProps(
              overrides,
              "GIFs flicker when looping back more than 3 times on the header images"
            )}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26104271821002")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag1821003")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Bug fixes"
                {...getOverrideProps(overrides, "Label1821004")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26104281821005")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag1821006")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Low"
                {...getOverrideProps(overrides, "Label1821007")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 51821008")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610432")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar1821010")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 11821011")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26104301821012")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal1821013")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector1821014")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector1821015")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector1821016")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Flex
          gap="20px"
          direction="row"
          width="unset"
          height="56px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          border="1px SOLID rgba(224,224,224,1)"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Task1821017")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="70px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="FIG-108"
            {...getOverrideProps(overrides, "FIG-108")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(0,0,0,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="522px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Editorial format for blog posts on website"
            {...getOverrideProps(
              overrides,
              "Editorial format for blog posts on website"
            )}
          ></Text>
          <View
            width="120px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26104281821020")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag1821021")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="Design backlog"
                {...getOverrideProps(overrides, "Label1821022")}
              ></Text>
            </Flex>
          </View>
          <View
            width="64px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610429")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              position="absolute"
              top="0px"
              left="0px"
              border="1px SOLID rgba(224,224,224,1)"
              borderRadius="8px"
              padding="5px 7px 5px 7px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Tag1821024")}
            >
              <Text
                fontFamily="Inter"
                fontSize="12px"
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
                children="High"
                {...getOverrideProps(overrides, "Label1821025")}
              ></Text>
            </Flex>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(130,130,130,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="48px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Dec 5"
            {...getOverrideProps(overrides, "Dec 51821026")}
          ></Text>
          <View
            width="84px"
            height="28px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 2610431")}
          >
            <View
              width="28px"
              height="28px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="calc(50% - 14px - 0px)"
              left="calc(50% - 14px - 0px)"
              borderRadius="1000px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(247,247,247,1)"
              {...getOverrideProps(overrides, "Avatar1821028")}
            >
              <Image
                width="100%"
                height="100%"
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
                objectFit="cover"
                {...getOverrideProps(overrides, "Rectangle 11821029")}
              ></Image>
            </View>
          </View>
          <View
            width="unset"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 26104301821030")}
          >
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="0px"
              right="0px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "more-horizontal1821031")}
            >
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="45.83%"
                right="45.83%"
                {...getOverrideProps(overrides, "Vector1821032")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="75%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector1821033")}
              ></Icon>
              <Icon
                width="2px"
                height="2px"
                viewBox={{ minX: 0, minY: 0, width: 2, height: 2 }}
                paths={[
                  {
                    d: "M1 1L1 3C2.10457 3 3 2.10457 3 1L1 1ZM1 1L-1 1C-1 2.10457 -0.10457 3 1 3L1 1ZM1 1L1 -1C-0.10457 -1 -1 -0.10457 -1 1L1 1ZM1 1L3 1C3 -0.10457 2.10457 -1 1 -1L1 1Z",
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
                top="45.83%"
                bottom="45.83%"
                left="16.67%"
                right="75%"
                {...getOverrideProps(overrides, "Vector1821034")}
              ></Icon>
            </View>
          </View>
        </Flex>
      </Flex>
      <View
        width="1480px"
        height="134px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        right="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Header1821035")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          position="absolute"
          top="70px"
          right="64px"
          borderRadius="8px"
          padding="4px 4px 4px 4px"
          backgroundColor="rgba(247,247,247,1)"
          {...getOverrideProps(overrides, "Segmented control")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="32px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            boxShadow="0px 1px 2px rgba(0, 0, 0, 0.05000000074505806)"
            borderRadius="4px"
            padding="0px 12px 0px 12px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "Item 1")}
          >
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
              {...getOverrideProps(overrides, "list")}
            >
              <Icon
                width="13px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 13, height: 1 }}
                paths={[
                  {
                    d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM13 1C13.5523 1 14 0.552285 14 0C14 -0.552285 13.5523 -1 13 -1L13 1ZM0 1L13 1L13 -1L0 -1L0 1Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="25%"
                bottom="75%"
                left="33.33%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector1821039")}
              ></Icon>
              <Icon
                width="13px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 13, height: 1 }}
                paths={[
                  {
                    d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM13 1C13.5523 1 14 0.552285 14 0C14 -0.552285 13.5523 -1 13 -1L13 1ZM0 1L13 1L13 -1L0 -1L0 1Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="50%"
                bottom="50%"
                left="33.33%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector1821040")}
              ></Icon>
              <Icon
                width="13px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 13, height: 1 }}
                paths={[
                  {
                    d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM13 1C13.5523 1 14 0.552285 14 0C14 -0.552285 13.5523 -1 13 -1L13 1ZM0 1L13 1L13 -1L0 -1L0 1Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="75%"
                bottom="25%"
                left="33.33%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector1821041")}
              ></Icon>
              <Icon
                width="0.01px"
                height="0px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 0.009999990463256836,
                  height: 1,
                }}
                paths={[
                  {
                    d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM0.00999999 1C0.562285 1 1.01 0.552285 1.01 0C1.01 -0.552285 0.562285 -1 0.00999999 -1L0.00999999 1ZM0 1L0.00999999 1L0.00999999 -1L0 -1L0 1Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="25%"
                bottom="75%"
                left="12.5%"
                right="87.46%"
                {...getOverrideProps(overrides, "Vector1821042")}
              ></Icon>
              <Icon
                width="0.01px"
                height="0px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 0.009999990463256836,
                  height: 1,
                }}
                paths={[
                  {
                    d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM0.00999999 1C0.562285 1 1.01 0.552285 1.01 0C1.01 -0.552285 0.562285 -1 0.00999999 -1L0.00999999 1ZM0 1L0.00999999 1L0.00999999 -1L0 -1L0 1Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="50%"
                bottom="50%"
                left="12.5%"
                right="87.46%"
                {...getOverrideProps(overrides, "Vector1821043")}
              ></Icon>
              <Icon
                width="0.01px"
                height="0px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 0.009999990463256836,
                  height: 1,
                }}
                paths={[
                  {
                    d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM0.00999999 1C0.562285 1 1.01 0.552285 1.01 0C1.01 -0.552285 0.562285 -1 0.00999999 -1L0.00999999 1ZM0 1L0.00999999 1L0.00999999 -1L0 -1L0 1Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="75%"
                bottom="25%"
                left="12.5%"
                right="87.46%"
                {...getOverrideProps(overrides, "Vector1821044")}
              ></Icon>
            </View>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="32px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 12px 0px 12px"
            {...getOverrideProps(overrides, "Item 2")}
          >
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
              {...getOverrideProps(overrides, "grid")}
            >
              <Icon
                width="7px"
                height="7px"
                viewBox={{ minX: 0, minY: 0, width: 7, height: 7 }}
                paths={[
                  {
                    d: "M0 0L0 -1C-0.552285 -1 -1 -0.552285 -1 2.22045e-16L0 0ZM7 0L8 0C8 -0.552285 7.55228 -1 7 -1L7 0ZM7 7L7 8C7.55228 8 8 7.55228 8 7L7 7ZM0 7L-1 7C-1 7.55228 -0.552285 8 2.22045e-16 8L0 7ZM0 1L7 1L7 -1L0 -1L0 1ZM6 0L6 7L8 7L8 0L6 0ZM7 6L0 6L0 8L7 8L7 6ZM1 7L1 0L-1 0L-1 7L1 7Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="12.5%"
                bottom="58.33%"
                left="12.5%"
                right="58.33%"
                {...getOverrideProps(overrides, "Vector1821047")}
              ></Icon>
              <Icon
                width="7px"
                height="7px"
                viewBox={{ minX: 0, minY: 0, width: 7, height: 7 }}
                paths={[
                  {
                    d: "M0 0L0 -1C-0.552285 -1 -1 -0.552285 -1 2.22045e-16L0 0ZM7 0L8 0C8 -0.552285 7.55228 -1 7 -1L7 0ZM7 7L7 8C7.55228 8 8 7.55228 8 7L7 7ZM0 7L-1 7C-1 7.55228 -0.552285 8 2.22045e-16 8L0 7ZM0 1L7 1L7 -1L0 -1L0 1ZM6 0L6 7L8 7L8 0L6 0ZM7 6L0 6L0 8L7 8L7 6ZM1 7L1 0L-1 0L-1 7L1 7Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="12.5%"
                bottom="58.33%"
                left="58.33%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector1821048")}
              ></Icon>
              <Icon
                width="7px"
                height="7px"
                viewBox={{ minX: 0, minY: 0, width: 7, height: 7 }}
                paths={[
                  {
                    d: "M0 0L0 -1C-0.552285 -1 -1 -0.552285 -1 2.22045e-16L0 0ZM7 0L8 0C8 -0.552285 7.55228 -1 7 -1L7 0ZM7 7L7 8C7.55228 8 8 7.55228 8 7L7 7ZM0 7L-1 7C-1 7.55228 -0.552285 8 2.22045e-16 8L0 7ZM0 1L7 1L7 -1L0 -1L0 1ZM6 0L6 7L8 7L8 0L6 0ZM7 6L0 6L0 8L7 8L7 6ZM1 7L1 0L-1 0L-1 7L1 7Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="58.33%"
                bottom="12.5%"
                left="58.33%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector1821049")}
              ></Icon>
              <Icon
                width="7px"
                height="7px"
                viewBox={{ minX: 0, minY: 0, width: 7, height: 7 }}
                paths={[
                  {
                    d: "M0 0L0 -1C-0.552285 -1 -1 -0.552285 -1 2.22045e-16L0 0ZM7 0L8 0C8 -0.552285 7.55228 -1 7 -1L7 0ZM7 7L7 8C7.55228 8 8 7.55228 8 7L7 7ZM0 7L-1 7C-1 7.55228 -0.552285 8 2.22045e-16 8L0 7ZM0 1L7 1L7 -1L0 -1L0 1ZM6 0L6 7L8 7L8 0L6 0ZM7 6L0 6L0 8L7 8L7 6ZM1 7L1 0L-1 0L-1 7L1 7Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="58.33%"
                bottom="12.5%"
                left="12.5%"
                right="58.33%"
                {...getOverrideProps(overrides, "Vector1821050")}
              ></Icon>
            </View>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="32px"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            borderRadius="4px"
            padding="0px 12px 0px 12px"
            {...getOverrideProps(overrides, "Item 3")}
          >
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
              {...getOverrideProps(overrides, "calendar")}
            >
              <Icon
                width="18px"
                height="18px"
                viewBox={{ minX: 0, minY: 0, width: 18, height: 18 }}
                paths={[
                  {
                    d: "M2 1L16 1L16 -1L2 -1L2 1ZM16 1C16.5523 1 17 1.44772 17 2L19 2C19 0.343146 17.6569 -1 16 -1L16 1ZM17 2L17 16L19 16L19 2L17 2ZM17 16C17 16.5523 16.5523 17 16 17L16 19C17.6569 19 19 17.6569 19 16L17 16ZM16 17L2 17L2 19L16 19L16 17ZM2 17C1.44772 17 1 16.5523 1 16L-1 16C-1 17.6569 0.343146 19 2 19L2 17ZM1 16L1 2L-1 2L-1 16L1 16ZM1 2C1 1.44772 1.44772 1 2 1L2 -1C0.343146 -1 -1 0.343146 -1 2L1 2Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="16.67%"
                bottom="8.33%"
                left="12.5%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector1821053")}
              ></Icon>
              <Icon
                width="0px"
                height="4px"
                viewBox={{ minX: 0, minY: 0, width: 1, height: 4 }}
                paths={[
                  {
                    d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 4C-1 4.55228 -0.552285 5 0 5C0.552285 5 1 4.55228 1 4L-1 4ZM-1 0L-1 4L1 4L1 0L-1 0Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="8.33%"
                bottom="75%"
                left="66.67%"
                right="33.33%"
                {...getOverrideProps(overrides, "Vector1821054")}
              ></Icon>
              <Icon
                width="0px"
                height="4px"
                viewBox={{ minX: 0, minY: 0, width: 1, height: 4 }}
                paths={[
                  {
                    d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 4C-1 4.55228 -0.552285 5 0 5C0.552285 5 1 4.55228 1 4L-1 4ZM-1 0L-1 4L1 4L1 0L-1 0Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="8.33%"
                bottom="75%"
                left="33.33%"
                right="66.67%"
                {...getOverrideProps(overrides, "Vector1821055")}
              ></Icon>
              <Icon
                width="18px"
                height="0px"
                viewBox={{ minX: 0, minY: 0, width: 18, height: 1 }}
                paths={[
                  {
                    d: "M0 -1C-0.552285 -1 -1 -0.552285 -1 0C-1 0.552285 -0.552285 1 0 1L0 -1ZM18 1C18.5523 1 19 0.552285 19 0C19 -0.552285 18.5523 -1 18 -1L18 1ZM0 1L18 1L18 -1L0 -1L0 1Z",
                    stroke: "rgba(0,0,0,1)",
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
                top="41.67%"
                bottom="58.33%"
                left="12.5%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vector1821056")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="unset"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="70px"
          left="485px"
          border="1px SOLID rgba(224,224,224,1)"
          borderRadius="8px"
          padding="7px 15px 7px 11px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter")}
        >
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
            {...getOverrideProps(overrides, "filter")}
          >
            <Icon
              width="20px"
              height="18px"
              viewBox={{ minX: 0, minY: 0, width: 20, height: 18 }}
              paths={[
                {
                  d: "M20 0L20.7636 0.645725C21.015 0.348448 21.071 -0.0677126 20.9071 -0.420877C20.7433 -0.774041 20.3893 -1 20 -1L20 0ZM0 0L0 -1C-0.389326 -1 -0.743259 -0.774041 -0.907118 -0.420877C-1.07098 -0.0677126 -1.01497 0.348448 -0.76357 0.645725L0 0ZM8 9.46L9 9.46C9 9.22358 8.91623 8.9948 8.76357 8.81427L8 9.46ZM8 16L7 16C7 16.3788 7.214 16.725 7.55279 16.8944L8 16ZM12 18L11.5528 18.8944C11.8628 19.0494 12.2309 19.0329 12.5257 18.8507C12.8205 18.6684 13 18.3466 13 18L12 18ZM12 9.46L11.2364 8.81427C11.0838 8.9948 11 9.22358 11 9.46L12 9.46ZM20 -1L0 -1L0 1L20 1L20 -1ZM-0.76357 0.645725L7.23643 10.1057L8.76357 8.81427L0.76357 -0.645725L-0.76357 0.645725ZM7 9.46L7 16L9 16L9 9.46L7 9.46ZM7.55279 16.8944L11.5528 18.8944L12.4472 17.1056L8.44721 15.1056L7.55279 16.8944ZM13 18L13 9.46L11 9.46L11 18L13 18ZM12.7636 10.1057L20.7636 0.645725L19.2364 -0.645725L11.2364 8.81427L12.7636 10.1057Z",
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
              top="12.5%"
              bottom="12.5%"
              left="8.33%"
              right="8.33%"
              {...getOverrideProps(overrides, "Vector1821063")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
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
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Filter"
            {...getOverrideProps(overrides, "Label1821064")}
          ></Text>
        </Flex>
        <Flex
          gap="12px"
          direction="row"
          width="405px"
          height="40px"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="70px"
          left="64px"
          border="1px SOLID rgba(224,224,224,1)"
          borderRadius="8px"
          padding="7px 15px 7px 11px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Search")}
        >
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
            {...getOverrideProps(overrides, "search")}
          >
            <Icon
              width="16px"
              height="16px"
              viewBox={{ minX: 0, minY: 0, width: 16, height: 16 }}
              paths={[
                {
                  d: "M15 8C15 11.866 11.866 15 8 15L8 17C12.9706 17 17 12.9706 17 8L15 8ZM8 15C4.13401 15 1 11.866 1 8L-1 8C-1 12.9706 3.02944 17 8 17L8 15ZM1 8C1 4.13401 4.13401 1 8 1L8 -1C3.02944 -1 -1 3.02944 -1 8L1 8ZM8 1C11.866 1 15 4.13401 15 8L17 8C17 3.02944 12.9706 -1 8 -1L8 1Z",
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
              top="12.5%"
              bottom="20.83%"
              left="12.5%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector1821067")}
            ></Icon>
            <Icon
              width="4.35px"
              height="4.35px"
              viewBox={{
                minX: 0,
                minY: 0,
                width: 4.350000381469727,
                height: 4.350000381469727,
              }}
              paths={[
                {
                  d: "M3.64289 5.05711C4.03342 5.44763 4.66658 5.44763 5.05711 5.05711C5.44763 4.66658 5.44763 4.03342 5.05711 3.64289L3.64289 5.05711ZM0.707107 -0.707107C0.316583 -1.09763 -0.316583 -1.09763 -0.707107 -0.707107C-1.09763 -0.316583 -1.09763 0.316583 -0.707107 0.707107L0.707107 -0.707107ZM5.05711 3.64289L0.707107 -0.707107L-0.707107 0.707107L3.64289 5.05711L5.05711 3.64289Z",
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
              top="69.37%"
              bottom="12.5%"
              left="69.37%"
              right="12.5%"
              {...getOverrideProps(overrides, "Vector1821068")}
            ></Icon>
          </View>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
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
            children="Search tickets..."
            {...getOverrideProps(overrides, "Label1821069")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="20px"
          fontWeight="600"
          color="rgba(0,0,0,1)"
          lineHeight="30px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.05px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="24px"
          left="64px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Active issues"
          {...getOverrideProps(overrides, "Active issues")}
        ></Text>
      </View>
    </View>
  );
}
