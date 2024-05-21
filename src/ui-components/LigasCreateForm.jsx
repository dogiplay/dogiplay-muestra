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
export default function LigasCreateForm(props) {
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
    idliga: "",
    idpresidente: "",
    clave: "",
    foto: "",
    descripcion: "",
    nombre: "",
    estado: "",
    municipio: "",
    telefono: "",
    equipos: "",
    presidente: "",
    deporte: "",
    categoria: "",
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
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [municipio, setMunicipio] = React.useState(initialValues.municipio);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [equipos, setEquipos] = React.useState(initialValues.equipos);
  const [presidente, setPresidente] = React.useState(initialValues.presidente);
  const [deporte, setDeporte] = React.useState(initialValues.deporte);
  const [categoria, setCategoria] = React.useState(initialValues.categoria);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIdliga(initialValues.idliga);
    setIdpresidente(initialValues.idpresidente);
    setClave(initialValues.clave);
    setFoto(initialValues.foto);
    setDescripcion(initialValues.descripcion);
    setNombre(initialValues.nombre);
    setEstado(initialValues.estado);
    setMunicipio(initialValues.municipio);
    setTelefono(initialValues.telefono);
    setEquipos(initialValues.equipos);
    setPresidente(initialValues.presidente);
    setDeporte(initialValues.deporte);
    setCategoria(initialValues.categoria);
    setErrors({});
  };
  const validations = {
    idliga: [],
    idpresidente: [],
    clave: [],
    foto: [{ type: "URL" }],
    descripcion: [],
    nombre: [],
    estado: [],
    municipio: [],
    telefono: [],
    equipos: [],
    presidente: [],
    deporte: [],
    categoria: [],
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
          estado,
          municipio,
          telefono,
          equipos,
          presidente,
          deporte,
          categoria,
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
          await DataStore.save(new Ligas(modelFields));
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
      {...getOverrideProps(overrides, "LigasCreateForm")}
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
              estado,
              municipio,
              telefono,
              equipos,
              presidente,
              deporte,
              categoria,
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
              estado,
              municipio,
              telefono,
              equipos,
              presidente,
              deporte,
              categoria,
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
              estado,
              municipio,
              telefono,
              equipos,
              presidente,
              deporte,
              categoria,
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
              estado,
              municipio,
              telefono,
              equipos,
              presidente,
              deporte,
              categoria,
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
              estado,
              municipio,
              telefono,
              equipos,
              presidente,
              deporte,
              categoria,
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
              estado,
              municipio,
              telefono,
              equipos,
              presidente,
              deporte,
              categoria,
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
        label="Estado"
        isRequired={false}
        isReadOnly={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idpresidente,
              clave,
              foto,
              descripcion,
              nombre,
              estado: value,
              municipio,
              telefono,
              equipos,
              presidente,
              deporte,
              categoria,
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
        label="Municipio"
        isRequired={false}
        isReadOnly={false}
        value={municipio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idpresidente,
              clave,
              foto,
              descripcion,
              nombre,
              estado,
              municipio: value,
              telefono,
              equipos,
              presidente,
              deporte,
              categoria,
            };
            const result = onChange(modelFields);
            value = result?.municipio ?? value;
          }
          if (errors.municipio?.hasError) {
            runValidationTasks("municipio", value);
          }
          setMunicipio(value);
        }}
        onBlur={() => runValidationTasks("municipio", municipio)}
        errorMessage={errors.municipio?.errorMessage}
        hasError={errors.municipio?.hasError}
        {...getOverrideProps(overrides, "municipio")}
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
              idliga,
              idpresidente,
              clave,
              foto,
              descripcion,
              nombre,
              estado,
              municipio,
              telefono: value,
              equipos,
              presidente,
              deporte,
              categoria,
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
        label="Equipos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={equipos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idliga,
              idpresidente,
              clave,
              foto,
              descripcion,
              nombre,
              estado,
              municipio,
              telefono,
              equipos: value,
              presidente,
              deporte,
              categoria,
            };
            const result = onChange(modelFields);
            value = result?.equipos ?? value;
          }
          if (errors.equipos?.hasError) {
            runValidationTasks("equipos", value);
          }
          setEquipos(value);
        }}
        onBlur={() => runValidationTasks("equipos", equipos)}
        errorMessage={errors.equipos?.errorMessage}
        hasError={errors.equipos?.hasError}
        {...getOverrideProps(overrides, "equipos")}
      ></TextField>
      <TextField
        label="Presidente"
        isRequired={false}
        isReadOnly={false}
        value={presidente}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idpresidente,
              clave,
              foto,
              descripcion,
              nombre,
              estado,
              municipio,
              telefono,
              equipos,
              presidente: value,
              deporte,
              categoria,
            };
            const result = onChange(modelFields);
            value = result?.presidente ?? value;
          }
          if (errors.presidente?.hasError) {
            runValidationTasks("presidente", value);
          }
          setPresidente(value);
        }}
        onBlur={() => runValidationTasks("presidente", presidente)}
        errorMessage={errors.presidente?.errorMessage}
        hasError={errors.presidente?.hasError}
        {...getOverrideProps(overrides, "presidente")}
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
              idliga,
              idpresidente,
              clave,
              foto,
              descripcion,
              nombre,
              estado,
              municipio,
              telefono,
              equipos,
              presidente,
              deporte: value,
              categoria,
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
        label="Categoria"
        isRequired={false}
        isReadOnly={false}
        value={categoria}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idpresidente,
              clave,
              foto,
              descripcion,
              nombre,
              estado,
              municipio,
              telefono,
              equipos,
              presidente,
              deporte,
              categoria: value,
            };
            const result = onChange(modelFields);
            value = result?.categoria ?? value;
          }
          if (errors.categoria?.hasError) {
            runValidationTasks("categoria", value);
          }
          setCategoria(value);
        }}
        onBlur={() => runValidationTasks("categoria", categoria)}
        errorMessage={errors.categoria?.errorMessage}
        hasError={errors.categoria?.hasError}
        {...getOverrideProps(overrides, "categoria")}
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
