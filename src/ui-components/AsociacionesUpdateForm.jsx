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
import { getAsociaciones } from "../graphql/queries";
import { updateAsociaciones } from "../graphql/mutations";
const client = generateClient();
export default function AsociacionesUpdateForm(props) {
  const {
    id: idProp,
    asociaciones: asociacionesModelProp,
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
    foto: "",
    fotopais: "",
    telefono: "",
    presidente: "",
    sitio: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [pais, setPais] = React.useState(initialValues.pais);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [fotopais, setFotopais] = React.useState(initialValues.fotopais);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [presidente, setPresidente] = React.useState(initialValues.presidente);
  const [sitio, setSitio] = React.useState(initialValues.sitio);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = asociacionesRecord
      ? { ...initialValues, ...asociacionesRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setPais(cleanValues.pais);
    setFoto(cleanValues.foto);
    setFotopais(cleanValues.fotopais);
    setTelefono(cleanValues.telefono);
    setPresidente(cleanValues.presidente);
    setSitio(cleanValues.sitio);
    setErrors({});
  };
  const [asociacionesRecord, setAsociacionesRecord] = React.useState(
    asociacionesModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAsociaciones.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAsociaciones
        : asociacionesModelProp;
      setAsociacionesRecord(record);
    };
    queryData();
  }, [idProp, asociacionesModelProp]);
  React.useEffect(resetStateValues, [asociacionesRecord]);
  const validations = {
    nombre: [],
    pais: [],
    foto: [{ type: "URL" }],
    fotopais: [{ type: "URL" }],
    telefono: [],
    presidente: [],
    sitio: [{ type: "URL" }],
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
          nombre: nombre ?? null,
          pais: pais ?? null,
          foto: foto ?? null,
          fotopais: fotopais ?? null,
          telefono: telefono ?? null,
          presidente: presidente ?? null,
          sitio: sitio ?? null,
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
            query: updateAsociaciones.replaceAll("__typename", ""),
            variables: {
              input: {
                id: asociacionesRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AsociacionesUpdateForm")}
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
              foto,
              fotopais,
              telefono,
              presidente,
              sitio,
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
              foto,
              fotopais,
              telefono,
              presidente,
              sitio,
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
              foto: value,
              fotopais,
              telefono,
              presidente,
              sitio,
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
              pais,
              foto,
              fotopais: value,
              telefono,
              presidente,
              sitio,
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
              pais,
              foto,
              fotopais,
              telefono: value,
              presidente,
              sitio,
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
        label="Presidente"
        isRequired={false}
        isReadOnly={false}
        value={presidente}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              pais,
              foto,
              fotopais,
              telefono,
              presidente: value,
              sitio,
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
        label="Sitio"
        isRequired={false}
        isReadOnly={false}
        value={sitio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              pais,
              foto,
              fotopais,
              telefono,
              presidente,
              sitio: value,
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
          isDisabled={!(idProp || asociacionesModelProp)}
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
              !(idProp || asociacionesModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
