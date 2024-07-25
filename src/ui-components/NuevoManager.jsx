/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { Managers } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function NuevoManager(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nombre: "",
    alias: "",
    foto: "",
    deporte: "",
    telefono: "",
    idliga: "",
    idmanager: "",
    idequipo: "",
    idtorneo: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [alias, setAlias] = React.useState(initialValues.alias);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [deporte, setDeporte] = React.useState(initialValues.deporte);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [idliga, setIdliga] = React.useState(initialValues.idliga);
  const [idmanager, setIdmanager] = React.useState(initialValues.idmanager);
  const [idequipo, setIdequipo] = React.useState(initialValues.idequipo);
  const [idtorneo, setIdtorneo] = React.useState(initialValues.idtorneo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setAlias(initialValues.alias);
    setFoto(initialValues.foto);
    setDeporte(initialValues.deporte);
    setTelefono(initialValues.telefono);
    setIdliga(initialValues.idliga);
    setIdmanager(initialValues.idmanager);
    setIdequipo(initialValues.idequipo);
    setIdtorneo(initialValues.idtorneo);
    setErrors({});
  };
  const validations = {
    nombre: [],
    alias: [],
    foto: [{ type: "URL" }],
    deporte: [],
    telefono: [{ type: "Phone" }],
    idliga: [],
    idmanager: [],
    idequipo: [],
    idtorneo: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nombre,
          alias,
          foto,
          deporte,
          telefono,
          idliga,
          idmanager,
          idequipo,
          idtorneo,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Managers(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NuevoManager")}
      {...rest}
    >
      <Heading
        children="Registro de Manager/Capitán"
        {...getOverrideProps(overrides, "SectionalElement1")}
      ></Heading>
      <Divider
        orientation="horizontal"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Divider>
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre: value,
              alias,
              foto,
              deporte,
              telefono,
              idliga,
              idmanager,
              idequipo,
              idtorneo,
            };
            const result = onChange(modelFields);
            value = result?.nombre ?? value;
          }
          if (errors.nombre?.hasError) {
            runValidationTasks("nombre", value);
          }
          setNombre(value);
        }}
        onBlur={() => runValidationTasks("nombre", nombre)}
        errorMessage={errors.nombre?.errorMessage}
        hasError={errors.nombre?.hasError}
        {...getOverrideProps(overrides, "nombre")}
      ></TextField>
      <TextField
        label="Alias"
        isRequired={false}
        isReadOnly={false}
        value={alias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              alias: value,
              foto,
              deporte,
              telefono,
              idliga,
              idmanager,
              idequipo,
              idtorneo,
            };
            const result = onChange(modelFields);
            value = result?.alias ?? value;
          }
          if (errors.alias?.hasError) {
            runValidationTasks("alias", value);
          }
          setAlias(value);
        }}
        onBlur={() => runValidationTasks("alias", alias)}
        errorMessage={errors.alias?.errorMessage}
        hasError={errors.alias?.hasError}
        {...getOverrideProps(overrides, "alias")}
      ></TextField>
      <TextField
        label="Foto"
        isRequired={false}
        isReadOnly={false}
        value={foto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              alias,
              foto: value,
              deporte,
              telefono,
              idliga,
              idmanager,
              idequipo,
              idtorneo,
            };
            const result = onChange(modelFields);
            value = result?.foto ?? value;
          }
          if (errors.foto?.hasError) {
            runValidationTasks("foto", value);
          }
          setFoto(value);
        }}
        onBlur={() => runValidationTasks("foto", foto)}
        errorMessage={errors.foto?.errorMessage}
        hasError={errors.foto?.hasError}
        {...getOverrideProps(overrides, "foto")}
      ></TextField>
      <SelectField
        label="Deporte"
        placeholder="Deporte"
        isDisabled={false}
        value={deporte}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              alias,
              foto,
              deporte: value,
              telefono,
              idliga,
              idmanager,
              idequipo,
              idtorneo,
            };
            const result = onChange(modelFields);
            value = result?.deporte ?? value;
          }
          if (errors.deporte?.hasError) {
            runValidationTasks("deporte", value);
          }
          setDeporte(value);
        }}
        onBlur={() => runValidationTasks("deporte", deporte)}
        errorMessage={errors.deporte?.errorMessage}
        hasError={errors.deporte?.hasError}
        {...getOverrideProps(overrides, "deporte")}
      >
        <option
          children="Futbol"
          value="Futbol"
          {...getOverrideProps(overrides, "deporteoption0")}
        ></option>
        <option
          children="Beisbol"
          value="Beisbol"
          {...getOverrideProps(overrides, "deporteoption1")}
        ></option>
        <option
          children="Softbol"
          value="Softbol"
          {...getOverrideProps(overrides, "deporteoption2")}
        ></option>
        <option
          children="Bascketbol"
          value="Bascketbol"
          {...getOverrideProps(overrides, "deporteoption3")}
        ></option>
      </SelectField>
      <TextField
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              alias,
              foto,
              deporte,
              telefono: value,
              idliga,
              idmanager,
              idequipo,
              idtorneo,
            };
            const result = onChange(modelFields);
            value = result?.telefono ?? value;
          }
          if (errors.telefono?.hasError) {
            runValidationTasks("telefono", value);
          }
          setTelefono(value);
        }}
        onBlur={() => runValidationTasks("telefono", telefono)}
        errorMessage={errors.telefono?.errorMessage}
        hasError={errors.telefono?.hasError}
        {...getOverrideProps(overrides, "telefono")}
      ></TextField>
      <TextField
        label="Idliga"
        isRequired={false}
        isReadOnly={false}
        value={idliga}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              alias,
              foto,
              deporte,
              telefono,
              idliga: value,
              idmanager,
              idequipo,
              idtorneo,
            };
            const result = onChange(modelFields);
            value = result?.idliga ?? value;
          }
          if (errors.idliga?.hasError) {
            runValidationTasks("idliga", value);
          }
          setIdliga(value);
        }}
        onBlur={() => runValidationTasks("idliga", idliga)}
        errorMessage={errors.idliga?.errorMessage}
        hasError={errors.idliga?.hasError}
        {...getOverrideProps(overrides, "idliga")}
      ></TextField>
      <TextField
        label="Idmanager"
        isRequired={false}
        isReadOnly={false}
        value={idmanager}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              alias,
              foto,
              deporte,
              telefono,
              idliga,
              idmanager: value,
              idequipo,
              idtorneo,
            };
            const result = onChange(modelFields);
            value = result?.idmanager ?? value;
          }
          if (errors.idmanager?.hasError) {
            runValidationTasks("idmanager", value);
          }
          setIdmanager(value);
        }}
        onBlur={() => runValidationTasks("idmanager", idmanager)}
        errorMessage={errors.idmanager?.errorMessage}
        hasError={errors.idmanager?.hasError}
        {...getOverrideProps(overrides, "idmanager")}
      ></TextField>
      <TextField
        label="Idequipo"
        isRequired={false}
        isReadOnly={false}
        value={idequipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              alias,
              foto,
              deporte,
              telefono,
              idliga,
              idmanager,
              idequipo: value,
              idtorneo,
            };
            const result = onChange(modelFields);
            value = result?.idequipo ?? value;
          }
          if (errors.idequipo?.hasError) {
            runValidationTasks("idequipo", value);
          }
          setIdequipo(value);
        }}
        onBlur={() => runValidationTasks("idequipo", idequipo)}
        errorMessage={errors.idequipo?.errorMessage}
        hasError={errors.idequipo?.hasError}
        {...getOverrideProps(overrides, "idequipo")}
      ></TextField>
      <TextField
        label="Idtorneo"
        isRequired={false}
        isReadOnly={false}
        value={idtorneo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              alias,
              foto,
              deporte,
              telefono,
              idliga,
              idmanager,
              idequipo,
              idtorneo: value,
            };
            const result = onChange(modelFields);
            value = result?.idtorneo ?? value;
          }
          if (errors.idtorneo?.hasError) {
            runValidationTasks("idtorneo", value);
          }
          setIdtorneo(value);
        }}
        onBlur={() => runValidationTasks("idtorneo", idtorneo)}
        errorMessage={errors.idtorneo?.errorMessage}
        hasError={errors.idtorneo?.hasError}
        {...getOverrideProps(overrides, "idtorneo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Registrar"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
