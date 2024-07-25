/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { SalonFama } from "../models";
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
export declare type SalondelaFamaOverridesProps = {
    SalondelaFama?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 100"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 101"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 102"?: PrimitiveOverrideProps<ViewProps>;
    "mexfutramirezramon 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 103"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 104"?: PrimitiveOverrideProps<ViewProps>;
    "RAM\u00D3N RAM\u00CDREZ"?: PrimitiveOverrideProps<TextProps>;
    "Pa\u00EDs: M\u00E9xico"?: PrimitiveOverrideProps<TextProps>;
    "Estado: Nayarit"?: PrimitiveOverrideProps<TextProps>;
    "Deporte: Futbol"?: PrimitiveOverrideProps<TextProps>;
    "Star 11"?: PrimitiveOverrideProps<IconProps>;
    "Copas del mundo: 1994 y 1998"?: PrimitiveOverrideProps<TextProps>;
    "Equipo principal: Chivas"?: PrimitiveOverrideProps<TextProps>;
    "Otros equipos: America y Coras de Tepic"?: PrimitiveOverrideProps<TextProps>;
    "file 3"?: PrimitiveOverrideProps<ImageProps>;
    "dogiplay.com"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SalondelaFamaProps = React.PropsWithChildren<Partial<ViewProps> & {
    salonFama?: SalonFama;
} & {
    overrides?: SalondelaFamaOverridesProps | undefined | null;
}>;
export default function SalondelaFama(props: SalondelaFamaProps): React.ReactElement;
