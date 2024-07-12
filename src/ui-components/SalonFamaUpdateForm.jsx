/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { SalonFama } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function SalonFamaUpdateForm(props) {
  const {
    id: idProp,
    salonFama: salonFamaModelProp,
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
    pais: "",
    estado: "",
    deporte: "",
    logros: "",
    foto: "",
    descripcion1: "",
    descripcion2: "",
    fotopais: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [pais, setPais] = React.useState(initialValues.pais);
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [deporte, setDeporte] = React.useState(initialValues.deporte);
  const [logros, setLogros] = React.useState(initialValues.logros);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [descripcion1, setDescripcion1] = React.useState(
    initialValues.descripcion1
  );
  const [descripcion2, setDescripcion2] = React.useState(
    initialValues.descripcion2
  );
  const [fotopais, setFotopais] = React.useState(initialValues.fotopais);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = salonFamaRecord
      ? { ...initialValues, ...salonFamaRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setPais(cleanValues.pais);
    setEstado(cleanValues.estado);
    setDeporte(cleanValues.deporte);
    setLogros(cleanValues.logros);
    setFoto(cleanValues.foto);
    setDescripcion1(cleanValues.descripcion1);
    setDescripcion2(cleanValues.descripcion2);
    setFotopais(cleanValues.fotopais);
    setErrors({});
  };
  const [salonFamaRecord, setSalonFamaRecord] =
    React.useState(salonFamaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(SalonFama, idProp)
        : salonFamaModelProp;
      setSalonFamaRecord(record);
    };
    queryData();
  }, [idProp, salonFamaModelProp]);
  React.useEffect(resetStateValues, [salonFamaRecord]);
  const validations = {
    nombre: [],
    pais: [],
    estado: [],
    deporte: [],
    logros: [],
    foto: [{ type: "URL" }],
    descripcion1: [],
    descripcion2: [],
    fotopais: [{ type: "URL" }],
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
          pais,
          estado,
          deporte,
          logros,
          foto,
          descripcion1,
          descripcion2,
          fotopais,
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
            SalonFama.copyOf(salonFamaRecord, (updated) => {
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
      {...getOverrideProps(overrides, "SalonFamaUpdateForm")}
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
              pais,
              estado,
              deporte,
              logros,
              foto,
              descripcion1,
              descripcion2,
              fotopais,
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
        label="Pais"
        isRequired={false}
        isReadOnly={false}
        value={pais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              pais: value,
              estado,
              deporte,
              logros,
              foto,
              descripcion1,
              descripcion2,
              fotopais,
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
        label="Estado"
        isRequired={false}
        isReadOnly={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              pais,
              estado: value,
              deporte,
              logros,
              foto,
              descripcion1,
              descripcion2,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.estado ?? value;
          }
          if (errors.estado?.hasError) {
            runValidationTasks("estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("estado", estado)}
        errorMessage={errors.estado?.errorMessage}
        hasError={errors.estado?.hasError}
        {...getOverrideProps(overrides, "estado")}
      ></TextField>
      <TextField
        label="Deporte"
        isRequired={false}
        isReadOnly={false}
        value={deporte}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              pais,
              estado,
              deporte: value,
              logros,
              foto,
              descripcion1,
              descripcion2,
              fotopais,
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
      ></TextField>
      <TextField
        label="Logros"
        isRequired={false}
        isReadOnly={false}
        value={logros}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              pais,
              estado,
              deporte,
              logros: value,
              foto,
              descripcion1,
              descripcion2,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.logros ?? value;
          }
          if (errors.logros?.hasError) {
            runValidationTasks("logros", value);
          }
          setLogros(value);
        }}
        onBlur={() => runValidationTasks("logros", logros)}
        errorMessage={errors.logros?.errorMessage}
        hasError={errors.logros?.hasError}
        {...getOverrideProps(overrides, "logros")}
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
              pais,
              estado,
              deporte,
              logros,
              foto: value,
              descripcion1,
              descripcion2,
              fotopais,
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
        label="Descripcion1"
        isRequired={false}
        isReadOnly={false}
        value={descripcion1}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              pais,
              estado,
              deporte,
              logros,
              foto,
              descripcion1: value,
              descripcion2,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.descripcion1 ?? value;
          }
          if (errors.descripcion1?.hasError) {
            runValidationTasks("descripcion1", value);
          }
          setDescripcion1(value);
        }}
        onBlur={() => runValidationTasks("descripcion1", descripcion1)}
        errorMessage={errors.descripcion1?.errorMessage}
        hasError={errors.descripcion1?.hasError}
        {...getOverrideProps(overrides, "descripcion1")}
      ></TextField>
      <TextField
        label="Descripcion2"
        isRequired={false}
        isReadOnly={false}
        value={descripcion2}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              pais,
              estado,
              deporte,
              logros,
              foto,
              descripcion1,
              descripcion2: value,
              fotopais,
            };
            const result = onChange(modelFields);
            value = result?.descripcion2 ?? value;
          }
          if (errors.descripcion2?.hasError) {
            runValidationTasks("descripcion2", value);
          }
          setDescripcion2(value);
        }}
        onBlur={() => runValidationTasks("descripcion2", descripcion2)}
        errorMessage={errors.descripcion2?.errorMessage}
        hasError={errors.descripcion2?.hasError}
        {...getOverrideProps(overrides, "descripcion2")}
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
              pais,
              estado,
              deporte,
              logros,
              foto,
              descripcion1,
              descripcion2,
              fotopais: value,
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
          isDisabled={!(idProp || salonFamaModelProp)}
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
              !(idProp || salonFamaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
