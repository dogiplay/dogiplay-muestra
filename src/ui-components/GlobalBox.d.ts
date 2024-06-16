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
export declare type GlobalBoxOverridesProps = {
    "5"?: PrimitiveOverrideProps<TextProps>;
    "6"?: PrimitiveOverrideProps<TextProps>;
    "8"?: PrimitiveOverrideProps<TextProps>;
    "10"?: PrimitiveOverrideProps<TextProps>;
    "24"?: PrimitiveOverrideProps<TextProps>;
    GlobalBox?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 72"?: PrimitiveOverrideProps<ViewProps>;
    buttonRecord?: PrimitiveOverrideProps<FlexProps>;
    Record?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 74"?: PrimitiveOverrideProps<ViewProps>;
    "CAM01731 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 73"?: PrimitiveOverrideProps<ViewProps>;
    "EL GALLO LOPEZ"?: PrimitiveOverrideProps<TextProps>;
    COMBATES?: PrimitiveOverrideProps<TextProps>;
    VICTORIAS?: PrimitiveOverrideProps<TextProps>;
    DERROTAS?: PrimitiveOverrideProps<TextProps>;
    EMPATES?: PrimitiveOverrideProps<TextProps>;
    "KNOCK OUTS"?: PrimitiveOverrideProps<TextProps>;
    CATEGORIA?: PrimitiveOverrideProps<TextProps>;
    GIMNASIO?: PrimitiveOverrideProps<TextProps>;
    CIUDAD?: PrimitiveOverrideProps<TextProps>;
    GUADALAJARA?: PrimitiveOverrideProps<TextProps>;
    "NI\u00D1OS HEROES"?: PrimitiveOverrideProps<TextProps>;
    "PESO MOSCA"?: PrimitiveOverrideProps<TextProps>;
    "boxeador 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type GlobalBoxProps = React.PropsWithChildren<Partial<ViewProps> & {
    jugadores?: Jugadores;
} & {
    overrides?: GlobalBoxOverridesProps | undefined | null;
}>;
export default function GlobalBox(props: GlobalBoxProps): React.ReactElement;
