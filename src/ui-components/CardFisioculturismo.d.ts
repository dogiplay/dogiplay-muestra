/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Atletas } from "../models";
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
export declare type CardFisioculturismoOverridesProps = {
    CardFisioculturismo?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 83"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 84"?: PrimitiveOverrideProps<ViewProps>;
    "ABRAHAM ARREOLA"?: PrimitiveOverrideProps<TextProps>;
    "EDAD: 23"?: PrimitiveOverrideProps<TextProps>;
    "M\u00C9XICO"?: PrimitiveOverrideProps<TextProps>;
    "Group 21"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 85"?: PrimitiveOverrideProps<ViewProps>;
    ATLETA?: PrimitiveOverrideProps<TextProps>;
    "WhatsApp Image 2024-06-25 at 12.23.43 PM 1"?: PrimitiveOverrideProps<ImageProps>;
    "Group 20"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 89"?: PrimitiveOverrideProps<ViewProps>;
    NAYARIT?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 90"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 92"?: PrimitiveOverrideProps<ViewProps>;
    "1er lugar juvenil en 11o cl\u00E1sico juvenil y veteranos"?: PrimitiveOverrideProps<TextProps>;
    "1er lugar juvenil en 12 Cl\u00E1sico Juvenil y Veteranos Nayarit 2024"?: PrimitiveOverrideProps<TextProps>;
    "1er lugar juvenil en 12o campeonato selectivo 2024"?: PrimitiveOverrideProps<TextProps>;
    "\u20601er lugar classic physique en 12o campeonato selectivo 2024"?: PrimitiveOverrideProps<TextProps>;
    "\u20601er lugar clasificados en 12o campeonato selectivo 2024"?: PrimitiveOverrideProps<TextProps>;
    "2do lugar clasificados en 12 Cl\u00E1sico Juvenil y Veteranos Nayarit 2024"?: PrimitiveOverrideProps<TextProps>;
    "1er lugar novatos en 11o cl\u00E1sico juvenil y veteranos"?: PrimitiveOverrideProps<TextProps>;
    "2do lugar juvenil en 12o cl\u00E1sico Mr y Miss Nayarit"?: PrimitiveOverrideProps<TextProps>;
    "2do lugar novatos en 12o cl\u00E1sico Mr y Miss Nayarit"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    "Star 10"?: PrimitiveOverrideProps<IconProps>;
    "dogiplay.com"?: PrimitiveOverrideProps<TextProps>;
    "file 1"?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type CardFisioculturismoProps = React.PropsWithChildren<Partial<ViewProps> & {
    atletas?: Atletas;
} & {
    overrides?: CardFisioculturismoOverridesProps | undefined | null;
}>;
export default function CardFisioculturismo(props: CardFisioculturismoProps): React.ReactElement;
