/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Jugadores } from "../models";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type GlobalAjedrezOverridesProps = {
    "2"?: PrimitiveOverrideProps<TextProps>;
    "10"?: PrimitiveOverrideProps<TextProps>;
    "90"?: PrimitiveOverrideProps<TextProps>;
    "112"?: PrimitiveOverrideProps<TextProps>;
    "1230"?: PrimitiveOverrideProps<TextProps>;
    GlobalAjedrez?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 75"?: PrimitiveOverrideProps<ViewProps>;
    "ajedrecista 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 76"?: PrimitiveOverrideProps<ViewProps>;
    "Fernando Gutierrez"?: PrimitiveOverrideProps<TextProps>;
    Ciudad?: PrimitiveOverrideProps<TextProps>;
    Guanajuato?: PrimitiveOverrideProps<TextProps>;
    Partidas?: PrimitiveOverrideProps<TextProps>;
    Ganadas?: PrimitiveOverrideProps<TextProps>;
    Perdidas?: PrimitiveOverrideProps<TextProps>;
    Empatadas?: PrimitiveOverrideProps<TextProps>;
    ELO?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type GlobalAjedrezProps = React.PropsWithChildren<Partial<ViewProps> & {
    jugadores?: Jugadores;
} & {
    overrides?: GlobalAjedrezOverridesProps | undefined | null;
}>;
export default function GlobalAjedrez(props: GlobalAjedrezProps): React.ReactElement;
