/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Liguilla } from "../models";
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
export declare type LiguillaUpdateFormInputValues = {
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
export declare type LiguillaUpdateFormValidationValues = {
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
export declare type LiguillaUpdateFormOverridesProps = {
    LiguillaUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type LiguillaUpdateFormProps = React.PropsWithChildren<{
    overrides?: LiguillaUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    liguilla?: Liguilla;
    onSubmit?: (fields: LiguillaUpdateFormInputValues) => LiguillaUpdateFormInputValues;
    onSuccess?: (fields: LiguillaUpdateFormInputValues) => void;
    onError?: (fields: LiguillaUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: LiguillaUpdateFormInputValues) => LiguillaUpdateFormInputValues;
    onValidate?: LiguillaUpdateFormValidationValues;
} & React.CSSProperties>;
export default function LiguillaUpdateForm(props: LiguillaUpdateFormProps): React.ReactElement;
