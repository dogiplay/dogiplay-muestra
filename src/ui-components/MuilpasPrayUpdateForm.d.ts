/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { MuilpasPray } from "../models";
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
export declare type MuilpasPrayUpdateFormInputValues = {
    nombre?: string;
    presidenterector?: string;
    foto?: string;
    fotopais?: string;
    telefono?: string;
    paisciudad?: string;
    sitio?: string;
    tipo?: string;
};
export declare type MuilpasPrayUpdateFormValidationValues = {
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
export declare type MuilpasPrayUpdateFormOverridesProps = {
    MuilpasPrayUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    presidenterector?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    fotopais?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    paisciudad?: PrimitiveOverrideProps<TextFieldProps>;
    sitio?: PrimitiveOverrideProps<TextFieldProps>;
    tipo?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type MuilpasPrayUpdateFormProps = React.PropsWithChildren<{
    overrides?: MuilpasPrayUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    muilpasPray?: MuilpasPray;
    onSubmit?: (fields: MuilpasPrayUpdateFormInputValues) => MuilpasPrayUpdateFormInputValues;
    onSuccess?: (fields: MuilpasPrayUpdateFormInputValues) => void;
    onError?: (fields: MuilpasPrayUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MuilpasPrayUpdateFormInputValues) => MuilpasPrayUpdateFormInputValues;
    onValidate?: MuilpasPrayUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MuilpasPrayUpdateForm(props: MuilpasPrayUpdateFormProps): React.ReactElement;
