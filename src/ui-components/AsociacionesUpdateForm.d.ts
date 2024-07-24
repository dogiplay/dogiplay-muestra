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
export declare type AsociacionesUpdateFormInputValues = {
    nombre?: string;
    pais?: string;
    foto?: string;
    fotopais?: string;
    telefono?: string;
    presidente?: string;
    sitio?: string;
};
export declare type AsociacionesUpdateFormValidationValues = {
    nombre?: ValidationFunction<string>;
    pais?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    fotopais?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    presidente?: ValidationFunction<string>;
    sitio?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AsociacionesUpdateFormOverridesProps = {
    AsociacionesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    pais?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    fotopais?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    presidente?: PrimitiveOverrideProps<TextFieldProps>;
    sitio?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AsociacionesUpdateFormProps = React.PropsWithChildren<{
    overrides?: AsociacionesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    asociaciones?: any;
    onSubmit?: (fields: AsociacionesUpdateFormInputValues) => AsociacionesUpdateFormInputValues;
    onSuccess?: (fields: AsociacionesUpdateFormInputValues) => void;
    onError?: (fields: AsociacionesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AsociacionesUpdateFormInputValues) => AsociacionesUpdateFormInputValues;
    onValidate?: AsociacionesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AsociacionesUpdateForm(props: AsociacionesUpdateFormProps): React.ReactElement;
