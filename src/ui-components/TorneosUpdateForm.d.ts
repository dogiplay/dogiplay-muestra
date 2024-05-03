/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Torneos } from "../models";
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
export declare type TorneosUpdateFormInputValues = {
    idliga?: string;
    iddeporte?: string;
    idtorneo?: number;
    nombretorneo?: string;
    nombredeporte?: string;
};
export declare type TorneosUpdateFormValidationValues = {
    idliga?: ValidationFunction<string>;
    iddeporte?: ValidationFunction<string>;
    idtorneo?: ValidationFunction<number>;
    nombretorneo?: ValidationFunction<string>;
    nombredeporte?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TorneosUpdateFormOverridesProps = {
    TorneosUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idliga?: PrimitiveOverrideProps<TextFieldProps>;
    iddeporte?: PrimitiveOverrideProps<TextFieldProps>;
    idtorneo?: PrimitiveOverrideProps<TextFieldProps>;
    nombretorneo?: PrimitiveOverrideProps<TextFieldProps>;
    nombredeporte?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type TorneosUpdateFormProps = React.PropsWithChildren<{
    overrides?: TorneosUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    torneos?: Torneos;
    onSubmit?: (fields: TorneosUpdateFormInputValues) => TorneosUpdateFormInputValues;
    onSuccess?: (fields: TorneosUpdateFormInputValues) => void;
    onError?: (fields: TorneosUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TorneosUpdateFormInputValues) => TorneosUpdateFormInputValues;
    onValidate?: TorneosUpdateFormValidationValues;
} & React.CSSProperties>;
export default function TorneosUpdateForm(props: TorneosUpdateFormProps): React.ReactElement;
