/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Jugadores } from "../models";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type GolesGlobalOverridesProps = {
    "23"?: PrimitiveOverrideProps<TextProps>;
    GolesGlobal?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 70"?: PrimitiveOverrideProps<ViewProps>;
    "pexels-tima-miroshnichenko-5184682 2"?: PrimitiveOverrideProps<ImageProps>;
    "ALFONSO LOPEZ"?: PrimitiveOverrideProps<TextProps>;
    "SEGUNDA BASE"?: PrimitiveOverrideProps<TextProps>;
    "EQUIPO COLEGIO"?: PrimitiveOverrideProps<TextProps>;
    "LIGA DE TEPIC"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type GolesGlobalProps = React.PropsWithChildren<Partial<ViewProps> & {
    jugadores?: Jugadores;
} & {
    overrides?: GolesGlobalOverridesProps | undefined | null;
}>;
export default function GolesGlobal(props: GolesGlobalProps): React.ReactElement;
