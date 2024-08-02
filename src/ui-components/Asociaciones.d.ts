/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { MuilpasPray } from "../models";
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
export declare type AsociacionesOverridesProps = {
    Asociaciones?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 111"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 112"?: PrimitiveOverrideProps<ViewProps>;
    "WhatsApp Image 2024-06-26 at 2.38.00 PM 1"?: PrimitiveOverrideProps<ImageProps>;
    "Presidente: Arturo Gonzalez"?: PrimitiveOverrideProps<TextProps>;
    "Contacto: 52 311553344"?: PrimitiveOverrideProps<TextProps>;
    "Tepic, Nayarit, M\u00E9xico"?: PrimitiveOverrideProps<TextProps>;
    "Asociaci\u00F3n de Fisicoculturismo del Estado de Nayarit"?: PrimitiveOverrideProps<TextProps>;
    "file 4"?: PrimitiveOverrideProps<ImageProps>;
    buttonLiga?: PrimitiveOverrideProps<FlexProps>;
    "Ver sitio"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type AsociacionesProps = React.PropsWithChildren<Partial<ViewProps> & {
    muilpasPray?: MuilpasPray;
} & {
    overrides?: AsociacionesOverridesProps | undefined | null;
}>;
export default function Asociaciones(props: AsociacionesProps): React.ReactElement;
