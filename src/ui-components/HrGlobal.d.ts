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
export declare type HrGlobalOverridesProps = {
    "23"?: PrimitiveOverrideProps<TextProps>;
    HrGlobal?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 69"?: PrimitiveOverrideProps<ViewProps>;
    "pexels-tima-miroshnichenko-5184682 1"?: PrimitiveOverrideProps<ImageProps>;
    "ALFONSO LOPEZ"?: PrimitiveOverrideProps<TextProps>;
    "SEGUNDA BASE"?: PrimitiveOverrideProps<TextProps>;
    "EQUIPO COLEGIO"?: PrimitiveOverrideProps<TextProps>;
    "LIGA MEXICANA DE BEISBOL"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 1"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type HrGlobalProps = React.PropsWithChildren<Partial<ViewProps> & {
    jugadores?: Jugadores;
} & {
    overrides?: HrGlobalOverridesProps | undefined | null;
}>;
export default function HrGlobal(props: HrGlobalProps): React.ReactElement;
