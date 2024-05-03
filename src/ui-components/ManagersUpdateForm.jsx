/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Managers } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function ManagersUpdateForm(props) {
  const {
    id: idProp,
    managers: managersModelProp,
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
    idmanager: "",
    idequipo: "",
    alias: "",
    foto: "",
    deporte: "",
    telefono: "",
    clave: "",
    usuario: "",
    nombre: "",
    idtorneo: "",
  };
  const [idliga, setIdliga] = React.useState(initialValues.idliga);
  const [idmanager, setIdmanager] = React.useState(initialValues.idmanager);
  const [idequipo, setIdequipo] = React.useState(initialValues.idequipo);
  const [alias, setAlias] = React.useState(initialValues.alias);
  const [foto, setFoto] = React.useState(initialValues.foto);
  const [deporte, setDeporte] = React.useState(initialValues.deporte);
  const [telefono, setTelefono] = React.useState(initialValues.telefono);
  const [clave, setClave] = React.useState(initialValues.clave);
  const [usuario, setUsuario] = React.useState(initialValues.usuario);
  const [nombre, setNombre] = React.useState(initialValues.nombre);
  const [idtorneo, setIdtorneo] = React.useState(initialValues.idtorneo);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = managersRecord
      ? { ...initialValues, ...managersRecord }
      : initialValues;
    setIdliga(cleanValues.idliga);
    setIdmanager(cleanValues.idmanager);
    setIdequipo(cleanValues.idequipo);
    setAlias(cleanValues.alias);
    setFoto(cleanValues.foto);
    setDeporte(cleanValues.deporte);
    setTelefono(cleanValues.telefono);
    setClave(cleanValues.clave);
    setUsuario(cleanValues.usuario);
    setNombre(cleanValues.nombre);
    setIdtorneo(cleanValues.idtorneo);
    setErrors({});
  };
  const [managersRecord, setManagersRecord] = React.useState(managersModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Managers, idProp)
        : managersModelProp;
      setManagersRecord(record);
    };
    queryData();
  }, [idProp, managersModelProp]);
  React.useEffect(resetStateValues, [managersRecord]);
  const validations = {
    idliga: [],
    idmanager: [],
    idequipo: [],
    alias: [],
    foto: [{ type: "URL" }],
    deporte: [],
    telefono: [{ type: "Phone" }],
    clave: [],
    usuario: [],
    nombre: [],
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
          idliga,
          idmanager,
          idequipo,
          alias,
          foto,
          deporte,
          telefono,
          clave,
          usuario,
          nombre,
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
          await DataStore.save(
            Managers.copyOf(managersRecord, (updated) => {
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
      {...getOverrideProps(overrides, "ManagersUpdateForm")}
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
              idmanager,
              idequipo,
              alias,
              foto,
              deporte,
              telefono,
              clave,
              usuario,
              nombre,
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
              idliga,
              idmanager: value,
              idequipo,
              alias,
              foto,
              deporte,
              telefono,
              clave,
              usuario,
              nombre,
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
              idliga,
              idmanager,
              idequipo: value,
              alias,
              foto,
              deporte,
              telefono,
              clave,
              usuario,
              nombre,
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
        label="Alias"
        isRequired={false}
        isReadOnly={false}
        value={alias}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idmanager,
              idequipo,
              alias: value,
              foto,
              deporte,
              telefono,
              clave,
              usuario,
              nombre,
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
              idliga,
              idmanager,
              idequipo,
              alias,
              foto: value,
              deporte,
              telefono,
              clave,
              usuario,
              nombre,
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
              idmanager,
              idequipo,
              alias,
              foto,
              deporte: value,
              telefono,
              clave,
              usuario,
              nombre,
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
              idmanager,
              idequipo,
              alias,
              foto,
              deporte,
              telefono: value,
              clave,
              usuario,
              nombre,
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
        label="Clave"
        isRequired={false}
        isReadOnly={false}
        value={clave}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idmanager,
              idequipo,
              alias,
              foto,
              deporte,
              telefono,
              clave: value,
              usuario,
              nombre,
              idtorneo,
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
        label="Usuario"
        isRequired={false}
        isReadOnly={false}
        value={usuario}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idmanager,
              idequipo,
              alias,
              foto,
              deporte,
              telefono,
              clave,
              usuario: value,
              nombre,
              idtorneo,
            };
            const result = onChange(modelFields);
            value = result?.usuario ?? value;
          }
          if (errors.usuario?.hasError) {
            runValidationTasks("usuario", value);
          }
          setUsuario(value);
        }}
        onBlur={() => runValidationTasks("usuario", usuario)}
        errorMessage={errors.usuario?.errorMessage}
        hasError={errors.usuario?.hasError}
        {...getOverrideProps(overrides, "usuario")}
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
              idmanager,
              idequipo,
              alias,
              foto,
              deporte,
              telefono,
              clave,
              usuario,
              nombre: value,
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
        label="Idtorneo"
        isRequired={false}
        isReadOnly={false}
        value={idtorneo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idliga,
              idmanager,
              idequipo,
              alias,
              foto,
              deporte,
              telefono,
              clave,
              usuario,
              nombre,
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
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || managersModelProp)}
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
              !(idProp || managersModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
