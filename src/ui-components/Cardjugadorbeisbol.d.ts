/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Jugadores } from "../models";
import { FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CardjugadorbeisbolOverridesProps = {
    "2"?: PrimitiveOverrideProps<TextProps>;
    "3"?: PrimitiveOverrideProps<TextProps>;
    "4"?: PrimitiveOverrideProps<TextProps>;
    "5"?: PrimitiveOverrideProps<TextProps>;
    Cardjugadorbeisbol?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    "Product Info"?: PrimitiveOverrideProps<FlexProps>;
    Carousel?: PrimitiveOverrideProps<FlexProps>;
    "player1 (1) 1"?: PrimitiveOverrideProps<ImageProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Steven Virgen"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 6"?: PrimitiveOverrideProps<IconProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    Pill84183?: PrimitiveOverrideProps<FlexProps>;
    "05 Tab list"?: PrimitiveOverrideProps<FlexProps>;
    Pill67336?: PrimitiveOverrideProps<FlexProps>;
    Pill67338?: PrimitiveOverrideProps<FlexProps>;
    Pill84312?: PrimitiveOverrideProps<FlexProps>;
    HITS?: PrimitiveOverrideProps<TextProps>;
    ROLAS?: PrimitiveOverrideProps<TextProps>;
    FLYS?: PrimitiveOverrideProps<TextProps>;
    "Product info"?: PrimitiveOverrideProps<FlexProps>;
    "Product name170686"?: PrimitiveOverrideProps<TextProps>;
    "Product name170687"?: PrimitiveOverrideProps<TextProps>;
    " Subheading170688"?: PrimitiveOverrideProps<TextProps>;
    " Subheading170689"?: PrimitiveOverrideProps<TextProps>;
    " Subheading170690"?: PrimitiveOverrideProps<TextProps>;
    " Subheading170691"?: PrimitiveOverrideProps<TextProps>;
    HR?: PrimitiveOverrideProps<TextProps>;
    "Product name1841886"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardjugadorbeisbolProps = React.PropsWithChildren<Partial<ViewProps> & {
    jugadores?: Jugadores;
} & {
    overrides?: CardjugadorbeisbolOverridesProps | undefined | null;
}>;
export default function Cardjugadorbeisbol(props: CardjugadorbeisbolProps): React.ReactElement;
