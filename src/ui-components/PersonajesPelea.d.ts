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
export declare type PersonajesPeleaOverridesProps = {
    PersonajesPelea?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 71"?: PrimitiveOverrideProps<ViewProps>;
    "PUEDEN UBICAR LOS TEXTOS AQUI"?: PrimitiveOverrideProps<TextProps>;
    "images 1"?: PrimitiveOverrideProps<ImageProps>;
    "OTRO TEXTO PARA CAMPO"?: PrimitiveOverrideProps<TextProps>;
    INFORMACION?: PrimitiveOverrideProps<TextProps>;
    "MAS INFORMACION"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PersonajesPeleaProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PersonajesPeleaOverridesProps | undefined | null;
}>;
export default function PersonajesPelea(props: PersonajesPeleaProps): React.ReactElement;
