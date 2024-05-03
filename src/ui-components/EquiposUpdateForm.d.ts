/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Equipos } from "../models";
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
export declare type EquiposUpdateFormInputValues = {
    idliga?: string;
    idtorneo?: string;
    club?: string;
    categoria?: string;
    torneo?: string;
    nombre?: string;
    logo?: string;
    idmanager?: string;
    idcategoria?: number;
    manager?: string;
    futgolesfavor?: number;
    futgolescontra?: number;
    partidosjugados?: number;
    partidosganados?: number;
    partidosperdidos?: number;
    partidosempatados?: number;
    puntos?: number;
    posiciontabla?: number;
    patrocinador?: string;
    beicarreras?: number;
    beihr?: number;
};
export declare type EquiposUpdateFormValidationValues = {
    idliga?: ValidationFunction<string>;
    idtorneo?: ValidationFunction<string>;
    club?: ValidationFunction<string>;
    categoria?: ValidationFunction<string>;
    torneo?: ValidationFunction<string>;
    nombre?: ValidationFunction<string>;
    logo?: ValidationFunction<string>;
    idmanager?: ValidationFunction<string>;
    idcategoria?: ValidationFunction<number>;
    manager?: ValidationFunction<string>;
    futgolesfavor?: ValidationFunction<number>;
    futgolescontra?: ValidationFunction<number>;
    partidosjugados?: ValidationFunction<number>;
    partidosganados?: ValidationFunction<number>;
    partidosperdidos?: ValidationFunction<number>;
    partidosempatados?: ValidationFunction<number>;
    puntos?: ValidationFunction<number>;
    posiciontabla?: ValidationFunction<number>;
    patrocinador?: ValidationFunction<string>;
    beicarreras?: ValidationFunction<number>;
    beihr?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type EquiposUpdateFormOverridesProps = {
    EquiposUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    idliga?: PrimitiveOverrideProps<TextFieldProps>;
    idtorneo?: PrimitiveOverrideProps<TextFieldProps>;
    club?: PrimitiveOverrideProps<TextFieldProps>;
    categoria?: PrimitiveOverrideProps<TextFieldProps>;
    torneo?: PrimitiveOverrideProps<TextFieldProps>;
    nombre?: PrimitiveOverrideProps<TextFieldProps>;
    logo?: PrimitiveOverrideProps<TextFieldProps>;
    idmanager?: PrimitiveOverrideProps<TextFieldProps>;
    idcategoria?: PrimitiveOverrideProps<TextFieldProps>;
    manager?: PrimitiveOverrideProps<TextFieldProps>;
    futgolesfavor?: PrimitiveOverrideProps<TextFieldProps>;
    futgolescontra?: PrimitiveOverrideProps<TextFieldProps>;
    partidosjugados?: PrimitiveOverrideProps<TextFieldProps>;
    partidosganados?: PrimitiveOverrideProps<TextFieldProps>;
    partidosperdidos?: PrimitiveOverrideProps<TextFieldProps>;
    partidosempatados?: PrimitiveOverrideProps<TextFieldProps>;
    puntos?: PrimitiveOverrideProps<TextFieldProps>;
    posiciontabla?: PrimitiveOverrideProps<TextFieldProps>;
    patrocinador?: PrimitiveOverrideProps<TextFieldProps>;
    beicarreras?: PrimitiveOverrideProps<TextFieldProps>;
    beihr?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type EquiposUpdateFormProps = React.PropsWithChildren<{
    overrides?: EquiposUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    equipos?: Equipos;
    onSubmit?: (fields: EquiposUpdateFormInputValues) => EquiposUpdateFormInputValues;
    onSuccess?: (fields: EquiposUpdateFormInputValues) => void;
    onError?: (fields: EquiposUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: EquiposUpdateFormInputValues) => EquiposUpdateFormInputValues;
    onValidate?: EquiposUpdateFormValidationValues;
} & React.CSSProperties>;
export default function EquiposUpdateForm(props: EquiposUpdateFormProps): React.ReactElement;
