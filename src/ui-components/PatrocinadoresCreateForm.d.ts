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
export declare type PatrocinadoresCreateFormInputValues = {
    nombre?: string;
    telefono?: string;
    foto?: string;
    sitio?: string;
    pais?: string;
    contacto?: string;
    textoboton?: string;
};
export declare type PatrocinadoresCreateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    sitio?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
    contacto?: ValidationFunction<string>;
    textoboton?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PatrocinadoresCreateFormOverridesProps = {
    PatrocinadoresCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    sitio?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
    contacto?: PrimitiveOverrideProps<TextFieldProps>;
    textoboton?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PatrocinadoresCreateFormProps = React.PropsWithChildren<{
    overrides?: PatrocinadoresCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PatrocinadoresCreateFormInputValues) => PatrocinadoresCreateFormInputValues;
    onSuccess?: (fields: PatrocinadoresCreateFormInputValues) => void;
    onError?: (fields: PatrocinadoresCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PatrocinadoresCreateFormInputValues) => PatrocinadoresCreateFormInputValues;
    onValidate?: PatrocinadoresCreateFormValidationValues;
} & React.CSSProperties>;
export default function PatrocinadoresCreateForm(props: PatrocinadoresCreateFormProps): React.ReactElement;
