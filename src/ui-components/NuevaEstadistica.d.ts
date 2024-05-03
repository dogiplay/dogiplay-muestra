/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type NuevaEstadisticaInputValues = {
    partigosj?: number;
    partidosg?: number;
    partidosp?: number;
    partidose?: number;
    puntos?: number;
};
export declare type NuevaEstadisticaValidationValues = {
    partigosj?: ValidationFunction<number>;
    partidosg?: ValidationFunction<number>;
    partidosp?: ValidationFunction<number>;
    partidose?: ValidationFunction<number>;
    puntos?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NuevaEstadisticaOverridesProps = {
    NuevaEstadisticaGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    partigosj?: PrimitiveOverrideProps<TextFieldProps>;
    partidosg?: PrimitiveOverrideProps<TextFieldProps>;
    partidosp?: PrimitiveOverrideProps<TextFieldProps>;
    partidose?: PrimitiveOverrideProps<TextFieldProps>;
    puntos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NuevaEstadisticaProps = React.PropsWithChildren<{
    overrides?: NuevaEstadisticaOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NuevaEstadisticaInputValues) => NuevaEstadisticaInputValues;
    onSuccess?: (fields: NuevaEstadisticaInputValues) => void;
    onError?: (fields: NuevaEstadisticaInputValues, errorMessage: string) => void;
    onChange?: (fields: NuevaEstadisticaInputValues) => NuevaEstadisticaInputValues;
    onValidate?: NuevaEstadisticaValidationValues;
} & React.CSSProperties>;
export default function NuevaEstadistica(props: NuevaEstadisticaProps): React.ReactElement;
