/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type UniversidadOverridesProps = {
    Universidad?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 105"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 106"?: PrimitiveOverrideProps<ViewProps>;
    UAN?: PrimitiveOverrideProps<TextProps>;
    "pruebauan 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 107"?: PrimitiveOverrideProps<ViewProps>;
    "file 4"?: PrimitiveOverrideProps<ImageProps>;
    "dogiplay.com"?: PrimitiveOverrideProps<TextProps>;
    "FATIMA GARC\u00CDA"?: PrimitiveOverrideProps<TextProps>;
    "Deporte: Carrera con vallas"?: PrimitiveOverrideProps<TextProps>;
    "Dos competencias nacionales"?: PrimitiveOverrideProps<TextProps>;
    "Universidad Autonoma de Nayarit"?: PrimitiveOverrideProps<TextProps>;
    "Facultad de Derecho"?: PrimitiveOverrideProps<TextProps>;
    "logo 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type UniversidadProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: UniversidadOverridesProps | undefined | null;
}>;
export default function Universidad(props: UniversidadProps): React.ReactElement;
