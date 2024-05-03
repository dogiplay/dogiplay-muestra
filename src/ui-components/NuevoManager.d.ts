/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { DividerProps, GridProps, HeadingProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type NuevoManagerInputValues = {
    nombre?: string;
    alias?: string;
    foto?: string;
    deporte?: string;
    telefono?: string;
    idliga?: string;
    idmanager?: string;
    idequipo?: string;
    idtorneo?: string;
};
export declare type NuevoManagerValidationValues = {
    nombre?: ValidationFunction<string>;
    alias?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    deporte?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    idliga?: ValidationFunction<string>;
    idmanager?: ValidationFunction<string>;
    idequipo?: ValidationFunction<string>;
    idtorneo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NuevoManagerOverridesProps = {
    NuevoManagerGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement1?: PrimitiveOverrideProps<HeadingProps>;
    SectionalElement0?: PrimitiveOverrideProps<DividerProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    deporte?: PrimitiveOverrideProps<SelectFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    idliga?: PrimitiveOverrideProps<TextFieldProps>;
    idmanager?: PrimitiveOverrideProps<TextFieldProps>;
    idequipo?: PrimitiveOverrideProps<TextFieldProps>;
    idtorneo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type NuevoManagerProps = React.PropsWithChildren<{
    overrides?: NuevoManagerOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NuevoManagerInputValues) => NuevoManagerInputValues;
    onSuccess?: (fields: NuevoManagerInputValues) => void;
    onError?: (fields: NuevoManagerInputValues, errorMessage: string) => void;
    onChange?: (fields: NuevoManagerInputValues) => NuevoManagerInputValues;
    onValidate?: NuevoManagerValidationValues;
} & React.CSSProperties>;
export default function NuevoManager(props: NuevoManagerProps): React.ReactElement;
