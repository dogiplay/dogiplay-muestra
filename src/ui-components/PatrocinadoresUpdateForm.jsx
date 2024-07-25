/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Patrocinadores } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function PatrocinadoresUpdateForm(props) {
  const {
    id: idProp,
    patrocinadores: patrocinadoresModelProp,
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
    telefono: "",
    foto: "",
    sitio: "",
    pais: "",
    contacto: "",
    textoboton: "",
  };
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [sitio, setSitio] = React.useState(initialValues.sitio);
  const [pais, setPais] = React.useState(initialValues.pais);
  const [contacto, setContacto] = React.useState(initialValues.contacto);
  const [textoboton, setTextoboton] = React.useState(initialValues.textoboton);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = patrocinadoresRecord
      ? { ...initialValues, ...patrocinadoresRecord }
      : initialValues;
    setNombre(cleanValues.nombre);
    setTelefono(cleanValues.telefono);
    setFoto(cleanValues.foto);
    setSitio(cleanValues.sitio);
    setPais(cleanValues.pais);
    setContacto(cleanValues.contacto);
    setTextoboton(cleanValues.textoboton);
    setErrors({});
  };
  const [patrocinadoresRecord, setPatrocinadoresRecord] = React.useState(
    patrocinadoresModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Patrocinadores, idProp)
        : patrocinadoresModelProp;
      setPatrocinadoresRecord(record);
    };
    queryData();
  }, [idProp, patrocinadoresModelProp]);
  React.useEffect(resetStateValues, [patrocinadoresRecord]);
  const validations = {
    nombre: [],
    telefono: [],
    foto: [{ type: "URL" }],
    sitio: [{ type: "URL" }],
    pais: [],
    contacto: [],
    textoboton: [],
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
          telefono,
          foto,
          sitio,
          pais,
          contacto,
          textoboton,
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
            Patrocinadores.copyOf(patrocinadoresRecord, (updated) => {
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
      {...getOverrideProps(overrides, "PatrocinadoresUpdateForm")}
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
              telefono,
              foto,
              sitio,
              pais,
              contacto,
              textoboton,
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
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              telefono: value,
              foto,
              sitio,
              pais,
              contacto,
              textoboton,
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
        label="Foto"
        isRequired={false}
        isReadOnly={false}
        value={foto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              telefono,
              foto: value,
              sitio,
              pais,
              contacto,
              textoboton,
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
        label="Sitio"
        isRequired={false}
        isReadOnly={false}
        value={sitio}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              telefono,
              foto,
              sitio: value,
              pais,
              contacto,
              textoboton,
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
        label="Pais"
        isRequired={false}
        isReadOnly={false}
        value={pais}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              telefono,
              foto,
              sitio,
              pais: value,
              contacto,
              textoboton,
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
        label="Contacto"
        isRequired={false}
        isReadOnly={false}
        value={contacto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              telefono,
              foto,
              sitio,
              pais,
              contacto: value,
              textoboton,
            };
            const result = onChange(modelFields);
            value = result?.contacto ?? value;
          }
          if (errors.contacto?.hasError) {
            runValidationTasks("contacto", value);
          }
          setContacto(value);
        }}
        onBlur={() => runValidationTasks("contacto", contacto)}
        errorMessage={errors.contacto?.errorMessage}
        hasError={errors.contacto?.hasError}
        {...getOverrideProps(overrides, "contacto")}
      ></TextField>
      <TextField
        label="Textoboton"
        isRequired={false}
        isReadOnly={false}
        value={textoboton}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nombre,
              telefono,
              foto,
              sitio,
              pais,
              contacto,
              textoboton: value,
            };
            const result = onChange(modelFields);
            value = result?.textoboton ?? value;
          }
          if (errors.textoboton?.hasError) {
            runValidationTasks("textoboton", value);
          }
          setTextoboton(value);
        }}
        onBlur={() => runValidationTasks("textoboton", textoboton)}
        errorMessage={errors.textoboton?.errorMessage}
        hasError={errors.textoboton?.hasError}
        {...getOverrideProps(overrides, "textoboton")}
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
          isDisabled={!(idProp || patrocinadoresModelProp)}
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
              !(idProp || patrocinadoresModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
