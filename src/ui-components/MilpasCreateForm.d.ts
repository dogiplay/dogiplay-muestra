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
export declare type MilpasCreateFormInputValues = {
    nombre?: string;
    presidenterector?: string;
    foto?: string;
    fotopais?: string;
    telefono?: string;
    pais?: string;
    sitio?: string;
    ciudad?: string;
    tipo?: string;
};
export declare type MilpasCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    presidenterector?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    fotopais?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
    sitio?: ValidationFunction<string>;
    ciudad?: ValidationFunction<string>;
    tipo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MilpasCreateFormOverridesProps = {
    MilpasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    presidenterector?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    fotopais?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
    sitio?: PrimitiveOverrideProps<TextFieldProps>;
    ciudad?: PrimitiveOverrideProps<TextFieldProps>;
    tipo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MilpasCreateFormProps = React.PropsWithChildren<{
    overrides?: MilpasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MilpasCreateFormInputValues) => MilpasCreateFormInputValues;
    onSuccess?: (fields: MilpasCreateFormInputValues) => void;
    onError?: (fields: MilpasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MilpasCreateFormInputValues) => MilpasCreateFormInputValues;
    onValidate?: MilpasCreateFormValidationValues;
} & React.CSSProperties>;
export default function MilpasCreateForm(props: MilpasCreateFormProps): React.ReactElement;
