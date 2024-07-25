/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Presidentes } from "../models";
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
export declare type PresidentesUpdateFormInputValues = {
    idliga?: string;
    nombre?: string;
    alias?: string;
    user?: string;
    clave?: string;
    telefono?: string;
    foto?: string;
    notorneos?: number;
};
export declare type PresidentesUpdateFormValidationValues = {
    idliga?: ValidationFunction<string>;
    nombre?: ValidationFunction<string>;
    alias?: ValidationFunction<string>;
    user?: ValidationFunction<string>;
    clave?: ValidationFunction<string>;
    telefono?: ValidationFunction<string>;
    foto?: ValidationFunction<string>;
    notorneos?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PresidentesUpdateFormOverridesProps = {
    PresidentesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idliga?: PrimitiveOverrideProps<TextFieldProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    alias?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    clave?: PrimitiveOverrideProps<TextFieldProps>;
    telefono?: PrimitiveOverrideProps<TextFieldProps>;
    foto?: PrimitiveOverrideProps<TextFieldProps>;
    notorneos?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PresidentesUpdateFormProps = React.PropsWithChildren<{
    overrides?: PresidentesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    presidentes?: Presidentes;
    onSubmit?: (fields: PresidentesUpdateFormInputValues) => PresidentesUpdateFormInputValues;
    onSuccess?: (fields: PresidentesUpdateFormInputValues) => void;
    onError?: (fields: PresidentesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PresidentesUpdateFormInputValues) => PresidentesUpdateFormInputValues;
    onValidate?: PresidentesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PresidentesUpdateForm(props: PresidentesUpdateFormProps): React.ReactElement;
