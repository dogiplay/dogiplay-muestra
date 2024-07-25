/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Milpas } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function MilpasCreateForm(props) {
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
    presidenterector: "",
    foto: "",
    fotopais: "",
    telefono: "",
    pais: "",
    sitio: "",
    ciudad: "",
    tipo: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [presidenterector, setPresidenterector] = React.useState(
    initialValues.presidenterector
  );
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [fotopais, setFotopais] = React.useState(initialValues.fotopais);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [pais, setPais] = React.useState(initialValues.pais);
  const [sitio, setSitio] = React.useState(initialValues.sitio);
  const [ciudad, setCiudad] = React.useState(initialValues.ciudad);
  const [tipo, setTipo] = React.useState(initialValues.tipo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombre(initialValues.nombre);
    setPresidenterector(initialValues.presidenterector);
    setFoto(initialValues.foto);
    setFotopais(initialValues.fotopais);
    setTelefono(initialValues.telefono);
    setPais(initialValues.pais);
    setSitio(initialValues.sitio);
    setCiudad(initialValues.ciudad);
    setTipo(initialValues.tipo);
    setErrors({});
  };
  const validations = {
    nombre: [],
    presidenterector: [],
    foto: [{ type: "URL" }],
    fotopais: [{ type: "URL" }],
    telefono: [],
    pais: [],
    sitio: [{ type: "URL" }],
    ciudad: [],
    tipo: [],
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
          presidenterector,
          foto,
          fotopais,
          telefono,
          pais,
          sitio,
          ciudad,
          tipo,
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
          await DataStore.save(new Milpas(modelFields));
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
      {...getOverrideProps(overrides, "MilpasCreateForm")}
      {...rest}
    >
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
              presidenterector,
              foto,
              fotopais,
              telefono,
              pais,
              sitio,
              ciudad,
              tipo,
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
        label="Presidenterector"
        isRequired={false}
        isReadOnly={false}
        value={presidenterector}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              presidenterector: value,
              foto,
              fotopais,
              telefono,
              pais,
              sitio,
              ciudad,
              tipo,
            };
            const result = onChange(modelFields);
            value = result?.presidenterector ?? value;
          }
          if (errors.presidenterector?.hasError) {
            runValidationTasks("presidenterector", value);
          }
          setPresidenterector(value);
        }}
        onBlur={() => runValidationTasks("presidenterector", presidenterector)}
        errorMessage={errors.presidenterector?.errorMessage}
        hasError={errors.presidenterector?.hasError}
        {...getOverrideProps(overrides, "presidenterector")}
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
              presidenterector,
              foto: value,
              fotopais,
              telefono,
              pais,
              sitio,
              ciudad,
              tipo,
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
      <TextField
        label="Fotopais"
        isRequired={false}
        isReadOnly={false}
        value={fotopais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              presidenterector,
              foto,
              fotopais: value,
              telefono,
              pais,
              sitio,
              ciudad,
              tipo,
            };
            const result = onChange(modelFields);
            value = result?.fotopais ?? value;
          }
          if (errors.fotopais?.hasError) {
            runValidationTasks("fotopais", value);
          }
          setFotopais(value);
        }}
        onBlur={() => runValidationTasks("fotopais", fotopais)}
        errorMessage={errors.fotopais?.errorMessage}
        hasError={errors.fotopais?.hasError}
        {...getOverrideProps(overrides, "fotopais")}
      ></TextField>
      <TextField
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              presidenterector,
              foto,
              fotopais,
              telefono: value,
              pais,
              sitio,
              ciudad,
              tipo,
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
        label="Pais"
        isRequired={false}
        isReadOnly={false}
        value={pais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              presidenterector,
              foto,
              fotopais,
              telefono,
              pais: value,
              sitio,
              ciudad,
              tipo,
            };
            const result = onChange(modelFields);
            value = result?.pais ?? value;
          }
          if (errors.pais?.hasError) {
            runValidationTasks("pais", value);
          }
          setPais(value);
        }}
        onBlur={() => runValidationTasks("pais", pais)}
        errorMessage={errors.pais?.errorMessage}
        hasError={errors.pais?.hasError}
        {...getOverrideProps(overrides, "pais")}
      ></TextField>
      <TextField
        label="Sitio"
        isRequired={false}
        isReadOnly={false}
        value={sitio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              presidenterector,
              foto,
              fotopais,
              telefono,
              pais,
              sitio: value,
              ciudad,
              tipo,
            };
            const result = onChange(modelFields);
            value = result?.sitio ?? value;
          }
          if (errors.sitio?.hasError) {
            runValidationTasks("sitio", value);
          }
          setSitio(value);
        }}
        onBlur={() => runValidationTasks("sitio", sitio)}
        errorMessage={errors.sitio?.errorMessage}
        hasError={errors.sitio?.hasError}
        {...getOverrideProps(overrides, "sitio")}
      ></TextField>
      <TextField
        label="Ciudad"
        isRequired={false}
        isReadOnly={false}
        value={ciudad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              presidenterector,
              foto,
              fotopais,
              telefono,
              pais,
              sitio,
              ciudad: value,
              tipo,
            };
            const result = onChange(modelFields);
            value = result?.ciudad ?? value;
          }
          if (errors.ciudad?.hasError) {
            runValidationTasks("ciudad", value);
          }
          setCiudad(value);
        }}
        onBlur={() => runValidationTasks("ciudad", ciudad)}
        errorMessage={errors.ciudad?.errorMessage}
        hasError={errors.ciudad?.hasError}
        {...getOverrideProps(overrides, "ciudad")}
      ></TextField>
      <TextField
        label="Tipo"
        isRequired={false}
        isReadOnly={false}
        value={tipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              presidenterector,
              foto,
              fotopais,
              telefono,
              pais,
              sitio,
              ciudad,
              tipo: value,
            };
            const result = onChange(modelFields);
            value = result?.tipo ?? value;
          }
          if (errors.tipo?.hasError) {
            runValidationTasks("tipo", value);
          }
          setTipo(value);
        }}
        onBlur={() => runValidationTasks("tipo", tipo)}
        errorMessage={errors.tipo?.errorMessage}
        hasError={errors.tipo?.hasError}
        {...getOverrideProps(overrides, "tipo")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
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
