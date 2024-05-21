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
export declare type CampeonatosCreateFormInputValues = {
    clave_liga?: string;
    equipo?: string;
    logo?: string;
    manager?: string;
    temporada?: string;
    numero_campeonato?: number;
    categoria?: string;
    anoc?: number;
};
export declare type CampeonatosCreateFormValidationValues = {
    clave_liga?: ValidationFunction<string>;
    equipo?: ValidationFunction<string>;
    logo?: ValidationFunction<string>;
    manager?: ValidationFunction<string>;
    temporada?: ValidationFunction<string>;
    numero_campeonato?: ValidationFunction<number>;
    categoria?: ValidationFunction<string>;
    anoc?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CampeonatosCreateFormOverridesProps = {
    CampeonatosCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    clave_liga?: PrimitiveOverrideProps<TextFieldProps>;
    equipo?: PrimitiveOverrideProps<TextFieldProps>;
    logo?: PrimitiveOverrideProps<TextFieldProps>;
    manager?: PrimitiveOverrideProps<TextFieldProps>;
    temporada?: PrimitiveOverrideProps<TextFieldProps>;
    numero_campeonato?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
    anoc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CampeonatosCreateFormProps = React.PropsWithChildren<{
    overrides?: CampeonatosCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CampeonatosCreateFormInputValues) => CampeonatosCreateFormInputValues;
    onSuccess?: (fields: CampeonatosCreateFormInputValues) => void;
    onError?: (fields: CampeonatosCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CampeonatosCreateFormInputValues) => CampeonatosCreateFormInputValues;
    onValidate?: CampeonatosCreateFormValidationValues;
} & React.CSSProperties>;
export default function CampeonatosCreateForm(props: CampeonatosCreateFormProps): React.ReactElement;
