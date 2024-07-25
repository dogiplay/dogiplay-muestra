/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Milpas } from "../models";
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
export declare type MilpasUpdateFormInputValues = {
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
export declare type MilpasUpdateFormValidationValues = {
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
export declare type MilpasUpdateFormOverridesProps = {
    MilpasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type MilpasUpdateFormProps = React.PropsWithChildren<{
    overrides?: MilpasUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    milpas?: Milpas;
    onSubmit?: (fields: MilpasUpdateFormInputValues) => MilpasUpdateFormInputValues;
    onSuccess?: (fields: MilpasUpdateFormInputValues) => void;
    onError?: (fields: MilpasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MilpasUpdateFormInputValues) => MilpasUpdateFormInputValues;
    onValidate?: MilpasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MilpasUpdateForm(props: MilpasUpdateFormProps): React.ReactElement;
