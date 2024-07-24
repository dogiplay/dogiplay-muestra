/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
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
export declare type SalondelaFamaUniversidadOverridesProps = {
    SalondelaFamaUniversidad?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 108"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 109"?: PrimitiveOverrideProps<ViewProps>;
    UAN?: PrimitiveOverrideProps<TextProps>;
    "pruebauan 2"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 110"?: PrimitiveOverrideProps<ViewProps>;
    "file 5"?: PrimitiveOverrideProps<ImageProps>;
    "dogiplay.com"?: PrimitiveOverrideProps<TextProps>;
    "FATIMA GARC\u00CDA"?: PrimitiveOverrideProps<TextProps>;
    "Deporte: Carrera con vallas"?: PrimitiveOverrideProps<TextProps>;
    "Medalla de Oro en 2023"?: PrimitiveOverrideProps<TextProps>;
    "Universidad Autonoma de Nayarit"?: PrimitiveOverrideProps<TextProps>;
    "Facultad de Derecho"?: PrimitiveOverrideProps<TextProps>;
    "logo 2"?: PrimitiveOverrideProps<ImageProps>;
    "Star 14"?: PrimitiveOverrideProps<IconProps>;
    "Star 17"?: PrimitiveOverrideProps<IconProps>;
    "Star 18"?: PrimitiveOverrideProps<IconProps>;
    "Star 19"?: PrimitiveOverrideProps<IconProps>;
    "Star 20"?: PrimitiveOverrideProps<IconProps>;
    "Star 21"?: PrimitiveOverrideProps<IconProps>;
    "Star 22"?: PrimitiveOverrideProps<IconProps>;
} & EscapeHatchProps;
export declare type SalondelaFamaUniversidadProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SalondelaFamaUniversidadOverridesProps | undefined | null;
}>;
export default function SalondelaFamaUniversidad(props: SalondelaFamaUniversidadProps): React.ReactElement;
