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
import { createPresidentes as createPresidentesMutations} from "../graphql/mutations";
const client = generateClient();
export default function PresidentesCreateForm(props) {
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
    nombre: "",
    alias: "",
    user: "",
    clave: "",
    telefono: "",
    foto: "",
    notorneos: "",
  };
  const [idliga, setIdliga] = React.useState(initialValues.idliga);
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [alias, setAlias] = React.useState(initialValues.alias);
  const [user, setUser] = React.useState(initialValues.user);
  const [clave, setClave] = React.useState(initialValues.clave);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [notorneos, setNotorneos] = React.useState(initialValues.notorneos);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIdliga(initialValues.idliga);
    setNombre(initialValues.nombre);
    setAlias(initialValues.alias);
    setUser(initialValues.user);
    setClave(initialValues.clave);
    setTelefono(initialValues.telefono);
    setFoto(initialValues.foto);
    setNotorneos(initialValues.notorneos);
    setErrors({});
  };
  const validations = {
    idliga: [],
    nombre: [],
    alias: [],
    user: [],
    clave: [],
    telefono: [{ type: "Phone" }],
    foto: [{ type: "URL" }],
    notorneos: [],
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
          nombre,
          alias,
          user,
          clave,
          telefono,
          foto,
          notorneos,
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
            query: createPresidentes.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "PresidentesCreateForm")}
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
              nombre,
              alias,
              user,
              clave,
              telefono,
              foto,
              notorneos,
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
        label="Nombre"
        isRequired={false}
        isReadOnly={false}
        value={nombre}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              nombre: value,
              alias,
              user,
              clave,
              telefono,
              foto,
              notorneos,
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
              idliga,
              nombre,
              alias: value,
              user,
              clave,
              telefono,
              foto,
              notorneos,
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
        label="User"
        isRequired={false}
        isReadOnly={false}
        value={user}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              nombre,
              alias,
              user: value,
              clave,
              telefono,
              foto,
              notorneos,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          if (errors.user?.hasError) {
            runValidationTasks("user", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("user", user)}
        errorMessage={errors.user?.errorMessage}
        hasError={errors.user?.hasError}
        {...getOverrideProps(overrides, "user")}
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
              nombre,
              alias,
              user,
              clave: value,
              telefono,
              foto,
              notorneos,
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
        label="Telefono"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={telefono}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              nombre,
              alias,
              user,
              clave,
              telefono: value,
              foto,
              notorneos,
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
              idliga,
              nombre,
              alias,
              user,
              clave,
              telefono,
              foto: value,
              notorneos,
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
        label="Notorneos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={notorneos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idliga,
              nombre,
              alias,
              user,
              clave,
              telefono,
              foto,
              notorneos: value,
            };
            const result = onChange(modelFields);
            value = result?.notorneos ?? value;
          }
          if (errors.notorneos?.hasError) {
            runValidationTasks("notorneos", value);
          }
          setNotorneos(value);
        }}
        onBlur={() => runValidationTasks("notorneos", notorneos)}
        errorMessage={errors.notorneos?.errorMessage}
        hasError={errors.notorneos?.hasError}
        {...getOverrideProps(overrides, "notorneos")}
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
