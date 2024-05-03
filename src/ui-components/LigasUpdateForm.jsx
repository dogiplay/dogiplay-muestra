/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Ligas } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function LigasUpdateForm(props) {
  const {
    id: idProp,
    ligas: ligasModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    idliga: "",
    idpresidente: "",
    clave: "",
    foto: "",
    descripcion: "",
    nombre: "",
  };
  const [idliga, setIdliga] = React.useState(initialValues.idliga);
  const [idpresidente, setIdpresidente] = React.useState(
    initialValues.idpresidente
  );
  const [clave, setClave] = React.useState(initialValues.clave);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [descripcion, setDescripcion] = React.useState(
    initialValues.descripcion
  );
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = ligasRecord
      ? { ...initialValues, ...ligasRecord }
      : initialValues;
    setIdliga(cleanValues.idliga);
    setIdpresidente(cleanValues.idpresidente);
    setClave(cleanValues.clave);
    setFoto(cleanValues.foto);
    setDescripcion(cleanValues.descripcion);
    setNombre(cleanValues.nombre);
    setErrors({});
  };
  const [ligasRecord, setLigasRecord] = React.useState(ligasModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Ligas, idProp)
        : ligasModelProp;
      setLigasRecord(record);
    };
    queryData();
  }, [idProp, ligasModelProp]);
  React.useEffect(resetStateValues, [ligasRecord]);
  const validations = {
    idliga: [],
    idpresidente: [],
    clave: [],
    foto: [{ type: "URL" }],
    descripcion: [],
    nombre: [],
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
          idliga,
          idpresidente,
          clave,
          foto,
          descripcion,
          nombre,
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
          await DataStore.save(
            Ligas.copyOf(ligasRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "LigasUpdateForm")}
      {...rest}
    >
      <TextField
        label="Idliga"
        isRequired={false}
        isReadOnly={false}
        value={idliga}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga: value,
              idpresidente,
              clave,
              foto,
              descripcion,
              nombre,
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
        label="Idpresidente"
        isRequired={false}
        isReadOnly={false}
        value={idpresidente}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idpresidente: value,
              clave,
              foto,
              descripcion,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.idpresidente ?? value;
          }
          if (errors.idpresidente?.hasError) {
            runValidationTasks("idpresidente", value);
          }
          setIdpresidente(value);
        }}
        onBlur={() => runValidationTasks("idpresidente", idpresidente)}
        errorMessage={errors.idpresidente?.errorMessage}
        hasError={errors.idpresidente?.hasError}
        {...getOverrideProps(overrides, "idpresidente")}
      ></TextField>
      <TextField
        label="Clave"
        isRequired={false}
        isReadOnly={false}
        value={clave}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idpresidente,
              clave: value,
              foto,
              descripcion,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.clave ?? value;
          }
          if (errors.clave?.hasError) {
            runValidationTasks("clave", value);
          }
          setClave(value);
        }}
        onBlur={() => runValidationTasks("clave", clave)}
        errorMessage={errors.clave?.errorMessage}
        hasError={errors.clave?.hasError}
        {...getOverrideProps(overrides, "clave")}
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
              idliga,
              idpresidente,
              clave,
              foto: value,
              descripcion,
              nombre,
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
        label="Descripcion"
        isRequired={false}
        isReadOnly={false}
        value={descripcion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idpresidente,
              clave,
              foto,
              descripcion: value,
              nombre,
            };
            const result = onChange(modelFields);
            value = result?.descripcion ?? value;
          }
          if (errors.descripcion?.hasError) {
            runValidationTasks("descripcion", value);
          }
          setDescripcion(value);
        }}
        onBlur={() => runValidationTasks("descripcion", descripcion)}
        errorMessage={errors.descripcion?.errorMessage}
        hasError={errors.descripcion?.hasError}
        {...getOverrideProps(overrides, "descripcion")}
      ></TextField>
      <TextField
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idpresidente,
              clave,
              foto,
              descripcion,
              nombre: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || ligasModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || ligasModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
