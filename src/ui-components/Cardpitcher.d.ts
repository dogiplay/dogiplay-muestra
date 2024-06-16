/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Jugadores, StatsJugadores } from "../models";
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
    "4"?: PrimitiveOverrideProps<TextProps>;
    "2440299"?: PrimitiveOverrideProps<TextProps>;
    "24402100"?: PrimitiveOverrideProps<TextProps>;
    "242182297"?: PrimitiveOverrideProps<TextProps>;
    "242182298"?: PrimitiveOverrideProps<TextProps>;
    "242182299"?: PrimitiveOverrideProps<TextProps>;
    "242182300"?: PrimitiveOverrideProps<TextProps>;
    Cardpitcher?: PrimitiveOverrideProps<ViewProps>;
    cardjugadorbeisbol?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 9"?: PrimitiveOverrideProps<ViewProps>;
    Carousel?: PrimitiveOverrideProps<FlexProps>;
    "player1 (1) 1"?: PrimitiveOverrideProps<ImageProps>;
    Header?: PrimitiveOverrideProps<ViewProps>;
    "Steven Virgen"?: PrimitiveOverrideProps<TextProps>;
    "Product info"?: PrimitiveOverrideProps<FlexProps>;
    "Product name2182710"?: PrimitiveOverrideProps<TextProps>;
    "Product name2182711"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 77"?: PrimitiveOverrideProps<ViewProps>;
    " Subheading2182712"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 10"?: PrimitiveOverrideProps<ViewProps>;
    "100MPH"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 78"?: PrimitiveOverrideProps<ViewProps>;
    "90MPH"?: PrimitiveOverrideProps<TextProps>;
    "San Diego California, EUA"?: PrimitiveOverrideProps<TextProps>;
    "52 311 7436502"?: PrimitiveOverrideProps<TextProps>;
    " Subheading2182713"?: PrimitiveOverrideProps<TextProps>;
    "Group 13"?: PrimitiveOverrideProps<ViewProps>;
    "ENTRADAS LANZADAS"?: PrimitiveOverrideProps<TextProps>;
    "HIT TOTALES"?: PrimitiveOverrideProps<TextProps>;
    "CARRERAS LIMPIAS"?: PrimitiveOverrideProps<TextProps>;
    "PONCHES TOTALES"?: PrimitiveOverrideProps<TextProps>;
    "JUEGOS GANADOS"?: PrimitiveOverrideProps<TextProps>;
    "JUEGOS PERDIDOS"?: PrimitiveOverrideProps<TextProps>;
    "Group 14"?: PrimitiveOverrideProps<ViewProps>;
    Pill?: PrimitiveOverrideProps<FlexProps>;
    ERA?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardpitcherProps = React.PropsWithChildren<Partial<ViewProps> & {
    jugadores?: Jugadores;
    statsJugadores?: StatsJugadores;
} & {
    overrides?: CardpitcherOverridesProps | undefined | null;
}>;
export default function Cardpitcher(props: CardpitcherProps): React.ReactElement;
