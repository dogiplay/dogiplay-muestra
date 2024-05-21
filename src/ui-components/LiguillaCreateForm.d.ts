/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LiguillaCreateFormInputValues = {
    clave_liga?: string;
    posicion_cuartos?: number;
    posicion_semi?: number;
    posicion_final?: number;
    logo?: string;
    equipo?: string;
    categoria?: string;
    nombre_liga?: string;
    clave_final?: string;
    clave_semi?: string;
    clave_cuartos?: string;
};
export declare type LiguillaCreateFormValidationValues = {
    clave_liga?: ValidationFunction<string>;
    posicion_cuartos?: ValidationFunction<number>;
    posicion_semi?: ValidationFunction<number>;
    posicion_final?: ValidationFunction<number>;
    logo?: ValidationFunction<string>;
    equipo?: ValidationFunction<string>;
    categoria?: ValidationFunction<string>;
    nombre_liga?: ValidationFunction<string>;
    clave_final?: ValidationFunction<string>;
    clave_semi?: ValidationFunction<string>;
    clave_cuartos?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type LiguillaCreateFormOverridesProps = {
    LiguillaCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    clave_liga?: PrimitiveOverrideProps<TextFieldProps>;
    posicion_cuartos?: PrimitiveOverrideProps<TextFieldProps>;
    posicion_semi?: PrimitiveOverrideProps<TextFieldProps>;
    posicion_final?: PrimitiveOverrideProps<TextFieldProps>;
    logo?: PrimitiveOverrideProps<TextFieldProps>;
    equipo?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
    nombre_liga?: PrimitiveOverrideProps<TextFieldProps>;
    clave_final?: PrimitiveOverrideProps<TextFieldProps>;
    clave_semi?: PrimitiveOverrideProps<TextFieldProps>;
    clave_cuartos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type LiguillaCreateFormProps = React.PropsWithChildren<{
    overrides?: LiguillaCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: LiguillaCreateFormInputValues) => LiguillaCreateFormInputValues;
    onSuccess?: (fields: LiguillaCreateFormInputValues) => void;
    onError?: (fields: LiguillaCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LiguillaCreateFormInputValues) => LiguillaCreateFormInputValues;
    onValidate?: LiguillaCreateFormValidationValues;
} & React.CSSProperties>;
export default function LiguillaCreateForm(props: LiguillaCreateFormProps): React.ReactElement;
