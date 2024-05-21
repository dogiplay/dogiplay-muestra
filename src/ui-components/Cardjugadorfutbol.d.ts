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
export declare type CardjugadorfutbolOverridesProps = {
    "4"?: PrimitiveOverrideProps<TextProps>;
    "3267381"?: PrimitiveOverrideProps<TextProps>;
    "3267382"?: PrimitiveOverrideProps<TextProps>;
    Cardjugadorfutbol?: PrimitiveOverrideProps<ViewProps>;
    Headerf?: PrimitiveOverrideProps<ViewProps>;
    Arturo?: PrimitiveOverrideProps<TextProps>;
    "Product info"?: PrimitiveOverrideProps<FlexProps>;
    "Product name267443"?: PrimitiveOverrideProps<TextProps>;
    "Product name267444"?: PrimitiveOverrideProps<TextProps>;
    " Subheading"?: PrimitiveOverrideProps<TextProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "mp200220_guillermo_pulido_02 (1) 1"?: PrimitiveOverrideProps<ImageProps>;
    Pill?: PrimitiveOverrideProps<FlexProps>;
    "7 Goles anotados"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 19"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 20"?: PrimitiveOverrideProps<ViewProps>;
    "veces goleador de la semana"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardjugadorfutbolProps = React.PropsWithChildren<Partial<ViewProps> & {
    jugadores?: Jugadores;
} & {
    overrides?: CardjugadorfutbolOverridesProps | undefined | null;
}>;
export default function Cardjugadorfutbol(props: CardjugadorfutbolProps): React.ReactElement;
