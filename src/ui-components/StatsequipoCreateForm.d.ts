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
export declare type StatsequipoCreateFormInputValues = {
    idtorneo?: string;
    idequipo?: string;
    partidosg?: number;
    partidosp?: number;
    partidose?: number;
    puntos?: number;
    partigosj?: number;
    posiciontabla?: number;
};
export declare type StatsequipoCreateFormValidationValues = {
    idtorneo?: ValidationFunction<string>;
    idequipo?: ValidationFunction<string>;
    partidosg?: ValidationFunction<number>;
    partidosp?: ValidationFunction<number>;
    partidose?: ValidationFunction<number>;
    puntos?: ValidationFunction<number>;
    partigosj?: ValidationFunction<number>;
    posiciontabla?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatsequipoCreateFormOverridesProps = {
    StatsequipoCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idtorneo?: PrimitiveOverrideProps<TextFieldProps>;
    idequipo?: PrimitiveOverrideProps<TextFieldProps>;
    partidosg?: PrimitiveOverrideProps<TextFieldProps>;
    partidosp?: PrimitiveOverrideProps<TextFieldProps>;
    partidose?: PrimitiveOverrideProps<TextFieldProps>;
    puntos?: PrimitiveOverrideProps<TextFieldProps>;
    partigosj?: PrimitiveOverrideProps<TextFieldProps>;
    posiciontabla?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatsequipoCreateFormProps = React.PropsWithChildren<{
    overrides?: StatsequipoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StatsequipoCreateFormInputValues) => StatsequipoCreateFormInputValues;
    onSuccess?: (fields: StatsequipoCreateFormInputValues) => void;
    onError?: (fields: StatsequipoCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatsequipoCreateFormInputValues) => StatsequipoCreateFormInputValues;
    onValidate?: StatsequipoCreateFormValidationValues;
} & React.CSSProperties>;
export default function StatsequipoCreateForm(props: StatsequipoCreateFormProps): React.ReactElement;
