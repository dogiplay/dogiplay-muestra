/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createUniversidades } from "../graphql/mutations";
const client = generateClient();
export default function UniversidadesCreateForm(props) {
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
    nombreuniversidad: "",
    pais: "",
    estado: "",
    telefono: "",
    fotopais: "",
    foto: "",
    nombredeportista: "",
    logouniversidad: "",
    carrera: "",
    deporte: "",
    descripcion: "",
    tipo: "",
  };
  const [nombreuniversidad, setNombreuniversidad] = React.useState(
    initialValues.nombreuniversidad
  );
  const [pais, setPais] = React.useState(initialValues.pais);
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [fotopais, setFotopais] = React.useState(initialValues.fotopais);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [nombredeportista, setNombredeportista] = React.useState(
    initialValues.nombredeportista
  );
  const [logouniversidad, setLogouniversidad] = React.useState(
    initialValues.logouniversidad
  );
  const [carrera, setCarrera] = React.useState(initialValues.carrera);
  const [deporte, setDeporte] = React.useState(initialValues.deporte);
  const [descripcion, setDescripcion] = React.useState(
    initialValues.descripcion
  );
  const [tipo, setTipo] = React.useState(initialValues.tipo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNombreuniversidad(initialValues.nombreuniversidad);
    setPais(initialValues.pais);
    setEstado(initialValues.estado);
    setTelefono(initialValues.telefono);
    setFotopais(initialValues.fotopais);
    setFoto(initialValues.foto);
    setNombredeportista(initialValues.nombredeportista);
    setLogouniversidad(initialValues.logouniversidad);
    setCarrera(initialValues.carrera);
    setDeporte(initialValues.deporte);
    setDescripcion(initialValues.descripcion);
    setTipo(initialValues.tipo);
    setErrors({});
  };
  const validations = {
    nombreuniversidad: [],
    pais: [],
    estado: [],
    telefono: [],
    fotopais: [{ type: "URL" }],
    foto: [{ type: "URL" }],
    nombredeportista: [],
    logouniversidad: [{ type: "URL" }],
    carrera: [],
    deporte: [],
    descripcion: [],
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
          nombreuniversidad,
          pais,
          estado,
          telefono,
          fotopais,
          foto,
          nombredeportista,
          logouniversidad,
          carrera,
          deporte,
          descripcion,
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
          await client.graphql({
            query: createUniversidades.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "UniversidadesCreateForm")}
      {...rest}
    >
      <TextField
        label="Nombreuniversidad"
        isRequired={false}
        isReadOnly={false}
        value={nombreuniversidad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreuniversidad: value,
              pais,
              estado,
              telefono,
              fotopais,
              foto,
              nombredeportista,
              logouniversidad,
              carrera,
              deporte,
              descripcion,
              tipo,
            };
            const result = onChange(modelFields);
            value = result?.nombreuniversidad ?? value;
          }
          if (errors.nombreuniversidad?.hasError) {
            runValidationTasks("nombreuniversidad", value);
          }
          setNombreuniversidad(value);
        }}
        onBlur={() =>
          runValidationTasks("nombreuniversidad", nombreuniversidad)
        }
        errorMessage={errors.nombreuniversidad?.errorMessage}
        hasError={errors.nombreuniversidad?.hasError}
        {...getOverrideProps(overrides, "nombreuniversidad")}
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
              nombreuniversidad,
              pais: value,
              estado,
              telefono,
              fotopais,
              foto,
              nombredeportista,
              logouniversidad,
              carrera,
              deporte,
              descripcion,
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
        label="Estado"
        isRequired={false}
        isReadOnly={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreuniversidad,
              pais,
              estado: value,
              telefono,
              fotopais,
              foto,
              nombredeportista,
              logouniversidad,
              carrera,
              deporte,
              descripcion,
              tipo,
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
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreuniversidad,
              pais,
              estado,
              telefono: value,
              fotopais,
              foto,
              nombredeportista,
              logouniversidad,
              carrera,
              deporte,
              descripcion,
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
        label="Fotopais"
        isRequired={false}
        isReadOnly={false}
        value={fotopais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreuniversidad,
              pais,
              estado,
              telefono,
              fotopais: value,
              foto,
              nombredeportista,
              logouniversidad,
              carrera,
              deporte,
              descripcion,
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
        label="Foto"
        isRequired={false}
        isReadOnly={false}
        value={foto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreuniversidad,
              pais,
              estado,
              telefono,
              fotopais,
              foto: value,
              nombredeportista,
              logouniversidad,
              carrera,
              deporte,
              descripcion,
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
        label="Nombredeportista"
        isRequired={false}
        isReadOnly={false}
        value={nombredeportista}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreuniversidad,
              pais,
              estado,
              telefono,
              fotopais,
              foto,
              nombredeportista: value,
              logouniversidad,
              carrera,
              deporte,
              descripcion,
              tipo,
            };
            const result = onChange(modelFields);
            value = result?.nombredeportista ?? value;
          }
          if (errors.nombredeportista?.hasError) {
            runValidationTasks("nombredeportista", value);
          }
          setNombredeportista(value);
        }}
        onBlur={() => runValidationTasks("nombredeportista", nombredeportista)}
        errorMessage={errors.nombredeportista?.errorMessage}
        hasError={errors.nombredeportista?.hasError}
        {...getOverrideProps(overrides, "nombredeportista")}
      ></TextField>
      <TextField
        label="Logouniversidad"
        isRequired={false}
        isReadOnly={false}
        value={logouniversidad}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreuniversidad,
              pais,
              estado,
              telefono,
              fotopais,
              foto,
              nombredeportista,
              logouniversidad: value,
              carrera,
              deporte,
              descripcion,
              tipo,
            };
            const result = onChange(modelFields);
            value = result?.logouniversidad ?? value;
          }
          if (errors.logouniversidad?.hasError) {
            runValidationTasks("logouniversidad", value);
          }
          setLogouniversidad(value);
        }}
        onBlur={() => runValidationTasks("logouniversidad", logouniversidad)}
        errorMessage={errors.logouniversidad?.errorMessage}
        hasError={errors.logouniversidad?.hasError}
        {...getOverrideProps(overrides, "logouniversidad")}
      ></TextField>
      <TextField
        label="Carrera"
        isRequired={false}
        isReadOnly={false}
        value={carrera}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreuniversidad,
              pais,
              estado,
              telefono,
              fotopais,
              foto,
              nombredeportista,
              logouniversidad,
              carrera: value,
              deporte,
              descripcion,
              tipo,
            };
            const result = onChange(modelFields);
            value = result?.carrera ?? value;
          }
          if (errors.carrera?.hasError) {
            runValidationTasks("carrera", value);
          }
          setCarrera(value);
        }}
        onBlur={() => runValidationTasks("carrera", carrera)}
        errorMessage={errors.carrera?.errorMessage}
        hasError={errors.carrera?.hasError}
        {...getOverrideProps(overrides, "carrera")}
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
              nombreuniversidad,
              pais,
              estado,
              telefono,
              fotopais,
              foto,
              nombredeportista,
              logouniversidad,
              carrera,
              deporte: value,
              descripcion,
              tipo,
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
        label="Descripcion"
        isRequired={false}
        isReadOnly={false}
        value={descripcion}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombreuniversidad,
              pais,
              estado,
              telefono,
              fotopais,
              foto,
              nombredeportista,
              logouniversidad,
              carrera,
              deporte,
              descripcion: value,
              tipo,
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
        label="Tipo"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={tipo}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nombreuniversidad,
              pais,
              estado,
              telefono,
              fotopais,
              foto,
              nombredeportista,
              logouniversidad,
              carrera,
              deporte,
              descripcion,
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
