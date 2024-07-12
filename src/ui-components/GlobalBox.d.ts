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
export declare type GlobalBoxOverridesProps = {
    GlobalBox?: PrimitiveOverrideProps<ViewProps>;
    "dogiplay.com424186"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 72"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 74"?: PrimitiveOverrideProps<ViewProps>;
    "PA\u00CDS : M\u00C9XICO"?: PrimitiveOverrideProps<TextProps>;
    "CIUDAD: GUADALAJARA"?: PrimitiveOverrideProps<TextProps>;
    "GIMNASIO NI\u00D1OS HEROES"?: PrimitiveOverrideProps<TextProps>;
    "CATEGORIA: PESO MOSCA"?: PrimitiveOverrideProps<TextProps>;
    "PELEAS: 24"?: PrimitiveOverrideProps<TextProps>;
    "VICTORIAS: 10"?: PrimitiveOverrideProps<TextProps>;
    "DERROTAS: 8"?: PrimitiveOverrideProps<TextProps>;
    "EMPATES: 6"?: PrimitiveOverrideProps<TextProps>;
    "KNOCK OUTS: 5"?: PrimitiveOverrideProps<TextProps>;
    "boxeador 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 22"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 73"?: PrimitiveOverrideProps<ViewProps>;
    "EL GALLO LOPEZ"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 98"?: PrimitiveOverrideProps<ViewProps>;
    RECORD?: PrimitiveOverrideProps<TextProps>;
    "dogiplay.com477157"?: PrimitiveOverrideProps<TextProps>;
    "file 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type GlobalBoxProps = React.PropsWithChildren<Partial<ViewProps> & {
    jugadores?: Jugadores;
} & {
    overrides?: GlobalBoxOverridesProps | undefined | null;
}>;
export default function GlobalBox(props: GlobalBoxProps): React.ReactElement;
