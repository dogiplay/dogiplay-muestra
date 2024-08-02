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
export declare type MuilpasPrayCreateFormInputValues = {
    nombre?: string;
    presidenterector?: string;
    foto?: string;
    fotopais?: string;
    telefono?: string;
    paisciudad?: string;
    sitio?: string;
    tipo?: string;
};
export declare type MuilpasPrayCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    presidenterector?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    fotopais?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    paisciudad?: ValidationFunction<string>;
    sitio?: ValidationFunction<string>;
    tipo?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MuilpasPrayCreateFormOverridesProps = {
    MuilpasPrayCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    presidenterector?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    fotopais?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    paisciudad?: PrimitiveOverrideProps<TextFieldProps>;
    sitio?: PrimitiveOverrideProps<TextFieldProps>;
    tipo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MuilpasPrayCreateFormProps = React.PropsWithChildren<{
    overrides?: MuilpasPrayCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MuilpasPrayCreateFormInputValues) => MuilpasPrayCreateFormInputValues;
    onSuccess?: (fields: MuilpasPrayCreateFormInputValues) => void;
    onError?: (fields: MuilpasPrayCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MuilpasPrayCreateFormInputValues) => MuilpasPrayCreateFormInputValues;
    onValidate?: MuilpasPrayCreateFormValidationValues;
} & React.CSSProperties>;
export default function MuilpasPrayCreateForm(props: MuilpasPrayCreateFormProps): React.ReactElement;
