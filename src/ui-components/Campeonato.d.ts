/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Campeonatos } from "../models";
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
export declare type CampeonatoOverridesProps = {
    "2023"?: PrimitiveOverrideProps<TextProps>;
    Campeonato?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 24"?: PrimitiveOverrideProps<ViewProps>;
    "NOMBRE DE EQUIPO"?: PrimitiveOverrideProps<TextProps>;
    "bulldog 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 19"?: PrimitiveOverrideProps<ViewProps>;
    "Polygon 6"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 66"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 67"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 68"?: PrimitiveOverrideProps<IconProps>;
    "A\u00D1O"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CampeonatoProps = React.PropsWithChildren<Partial<ViewProps> & {
    campeonatos?: Campeonatos;
} & {
    overrides?: CampeonatoOverridesProps | undefined | null;
}>;
export default function Campeonato(props: CampeonatoProps): React.ReactElement;
