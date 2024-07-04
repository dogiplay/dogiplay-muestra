/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type CardBasketOverridesProps = {
    CardBasket?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 93"?: PrimitiveOverrideProps<ViewProps>;
    "WhatsApp Image 2024-06-28 at 10.20.18 AM 1"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 94"?: PrimitiveOverrideProps<ViewProps>;
    "PORFIRIO LOPEZ"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 95"?: PrimitiveOverrideProps<ViewProps>;
    "10 A\u00D1OS"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 96"?: PrimitiveOverrideProps<ViewProps>;
    "1.60 CM"?: PrimitiveOverrideProps<TextProps>;
    "dogiplay.com"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 97"?: PrimitiveOverrideProps<ViewProps>;
    "EQUIPO CORAS"?: PrimitiveOverrideProps<TextProps>;
    "CATEGOR\u00CDA: MICRO"?: PrimitiveOverrideProps<TextProps>;
    "PROMEDIO POR PARTIDO: 12 PUNTOS, 5 REBOTES Y 8 ASISTENCIAS"?: PrimitiveOverrideProps<TextProps>;
    "Campe\u00F3n Copa Elite Estatal 2023"?: PrimitiveOverrideProps<TextProps>;
    "Campe\u00F3n Copa Piratas 2023 Tuxpan, Nayarit"?: PrimitiveOverrideProps<TextProps>;
    "Campe\u00F3n Copa Halcones Sim\u00F3n Bolivar Nayarit468131"?: PrimitiveOverrideProps<TextProps>;
    "Campe\u00F3n Copa Halcones Sim\u00F3n Bolivar Nayarit468132"?: PrimitiveOverrideProps<TextProps>;
    "1 Gustavo Ay\u00F3n y 2 Elite Nacionales"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardBasketProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CardBasketOverridesProps | undefined | null;
}>;
export default function CardBasket(props: CardBasketProps): React.ReactElement;
