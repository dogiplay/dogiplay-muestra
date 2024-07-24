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
export declare type CardAtletismoOverridesProps = {
    "27"?: PrimitiveOverrideProps<TextProps>;
    CardAtletismo?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 79"?: PrimitiveOverrideProps<ViewProps>;
    "61575e8493b26 1"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 80"?: PrimitiveOverrideProps<IconProps>;
    "VICTOR LOPEZ"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 81"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 82"?: PrimitiveOverrideProps<ViewProps>;
    "Disciplina:"?: PrimitiveOverrideProps<TextProps>;
    "Equipo Venados Velocity"?: PrimitiveOverrideProps<TextProps>;
    "Categor\u00EDa:"?: PrimitiveOverrideProps<TextProps>;
    "Edad:"?: PrimitiveOverrideProps<TextProps>;
    "Record actual:"?: PrimitiveOverrideProps<TextProps>;
    Velocidad?: PrimitiveOverrideProps<TextProps>;
    Juvenil?: PrimitiveOverrideProps<TextProps>;
    "400m/53.3 seg"?: PrimitiveOverrideProps<TextProps>;
    "Pa\u00EDs: M\u00E9xico"?: PrimitiveOverrideProps<TextProps>;
    "Ciudad: Tepic, Nayarit"?: PrimitiveOverrideProps<TextProps>;
    "Record 2023: 400m/54.0 seg"?: PrimitiveOverrideProps<TextProps>;
    "Record 2022: 400m/56.0 seg"?: PrimitiveOverrideProps<TextProps>;
    "Record 2021: 400m/56.2 seg"?: PrimitiveOverrideProps<TextProps>;
    "Medalla de oro en carrera CDMX 2019"?: PrimitiveOverrideProps<TextProps>;
    "Cuarto lugar en carrera Salsa Huichol"?: PrimitiveOverrideProps<TextProps>;
    "Star 8"?: PrimitiveOverrideProps<IconProps>;
    "Star 9"?: PrimitiveOverrideProps<IconProps>;
    "dogiplay.com"?: PrimitiveOverrideProps<TextProps>;
    "file 2"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CardAtletismoProps = React.PropsWithChildren<Partial<ViewProps> & {
    atletas?: any;
} & {
    overrides?: CardAtletismoOverridesProps | undefined | null;
}>;
export default function CardAtletismo(props: CardAtletismoProps): React.ReactElement;
