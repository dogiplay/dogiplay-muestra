/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Statsequipo } from "../models";
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
export declare type StatsequipoUpdateFormInputValues = {
    idtorneo?: string;
    idequipo?: string;
    partidosg?: number;
    partidosp?: number;
    partidose?: number;
    puntos?: number;
    partigosj?: number;
    posiciontabla?: number;
};
export declare type StatsequipoUpdateFormValidationValues = {
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
export declare type StatsequipoUpdateFormOverridesProps = {
    StatsequipoUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idtorneo?: PrimitiveOverrideProps<TextFieldProps>;
    idequipo?: PrimitiveOverrideProps<TextFieldProps>;
    partidosg?: PrimitiveOverrideProps<TextFieldProps>;
    partidosp?: PrimitiveOverrideProps<TextFieldProps>;
    partidose?: PrimitiveOverrideProps<TextFieldProps>;
    puntos?: PrimitiveOverrideProps<TextFieldProps>;
    partigosj?: PrimitiveOverrideProps<TextFieldProps>;
    posiciontabla?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatsequipoUpdateFormProps = React.PropsWithChildren<{
    overrides?: StatsequipoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    statsequipo?: Statsequipo;
    onSubmit?: (fields: StatsequipoUpdateFormInputValues) => StatsequipoUpdateFormInputValues;
    onSuccess?: (fields: StatsequipoUpdateFormInputValues) => void;
    onError?: (fields: StatsequipoUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatsequipoUpdateFormInputValues) => StatsequipoUpdateFormInputValues;
    onValidate?: StatsequipoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StatsequipoUpdateForm(props: StatsequipoUpdateFormProps): React.ReactElement;
