/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Jugadores } from "../models";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CardpitcherOverridesProps = {
    "8"?: PrimitiveOverrideProps<TextProps>;
    "9"?: PrimitiveOverrideProps<TextProps>;
    "11"?: PrimitiveOverrideProps<TextProps>;
    "14"?: PrimitiveOverrideProps<TextProps>;
    "16"?: PrimitiveOverrideProps<TextProps>;
    "24"?: PrimitiveOverrideProps<TextProps>;
    Cardpitcher?: PrimitiveOverrideProps<ViewProps>;
    cardjugadorbeisbol?: PrimitiveOverrideProps<ViewProps>;
    Carousel?: PrimitiveOverrideProps<FlexProps>;
    "images 2"?: PrimitiveOverrideProps<ImageProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Oliver Torres el Gato"?: PrimitiveOverrideProps<TextProps>;
    "Product info"?: PrimitiveOverrideProps<FlexProps>;
    "Product name410114"?: PrimitiveOverrideProps<TextProps>;
    "Product name410116"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 77"?: PrimitiveOverrideProps<ViewProps>;
    "90MPH"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 78"?: PrimitiveOverrideProps<ViewProps>;
    "88MPH"?: PrimitiveOverrideProps<TextProps>;
    "Pais: M\u00E9xico"?: PrimitiveOverrideProps<TextProps>;
    "Edad: 16 a\u00F1os"?: PrimitiveOverrideProps<TextProps>;
    "Ciudad: San Diego California"?: PrimitiveOverrideProps<TextProps>;
    "Lanzamientos: Recta y curva"?: PrimitiveOverrideProps<TextProps>;
    "dogiplay.com"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "Perfil derecho"?: PrimitiveOverrideProps<TextProps>;
    "Group 13"?: PrimitiveOverrideProps<ViewProps>;
    "Group 14"?: PrimitiveOverrideProps<ViewProps>;
    Pill?: PrimitiveOverrideProps<FlexProps>;
    ERA?: PrimitiveOverrideProps<TextProps>;
    "1.2"?: PrimitiveOverrideProps<TextProps>;
    "file 3"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CardpitcherProps = React.PropsWithChildren<Partial<ViewProps> & {
    jugadores?: Jugadores;
} & {
    overrides?: CardpitcherOverridesProps | undefined | null;
}>;
export default function Cardpitcher(props: CardpitcherProps): React.ReactElement;
