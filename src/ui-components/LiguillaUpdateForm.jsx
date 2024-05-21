/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Liguilla } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function LiguillaUpdateForm(props) {
  const {
    id: idProp,
    liguilla: liguillaModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    clave_liga: "",
    posicion_cuartos: "",
    posicion_semi: "",
    posicion_final: "",
    logo: "",
    equipo: "",
    categoria: "",
    nombre_liga: "",
    clave_final: "",
    clave_semi: "",
    clave_cuartos: "",
  };
  const [clave_liga, setClave_liga] = React.useState(initialValues.clave_liga);
  const [posicion_cuartos, setPosicion_cuartos] = React.useState(
    initialValues.posicion_cuartos
  );
  const [posicion_semi, setPosicion_semi] = React.useState(
    initialValues.posicion_semi
  );
  const [posicion_final, setPosicion_final] = React.useState(
    initialValues.posicion_final
  );
  const [logo, setLogo] = React.useState(initialValues.logo);
  const [equipo, setEquipo] = React.useState(initialValues.equipo);
  const [categoria, setCategoria] = React.useState(initialValues.categoria);
  const [nombre_liga, setNombre_liga] = React.useState(
    initialValues.nombre_liga
  );
  const [clave_final, setClave_final] = React.useState(
    initialValues.clave_final
  );
  const [clave_semi, setClave_semi] = React.useState(initialValues.clave_semi);
  const [clave_cuartos, setClave_cuartos] = React.useState(
    initialValues.clave_cuartos
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = liguillaRecord
      ? { ...initialValues, ...liguillaRecord }
      : initialValues;
    setClave_liga(cleanValues.clave_liga);
    setPosicion_cuartos(cleanValues.posicion_cuartos);
    setPosicion_semi(cleanValues.posicion_semi);
    setPosicion_final(cleanValues.posicion_final);
    setLogo(cleanValues.logo);
    setEquipo(cleanValues.equipo);
    setCategoria(cleanValues.categoria);
    setNombre_liga(cleanValues.nombre_liga);
    setClave_final(cleanValues.clave_final);
    setClave_semi(cleanValues.clave_semi);
    setClave_cuartos(cleanValues.clave_cuartos);
    setErrors({});
  };
  const [liguillaRecord, setLiguillaRecord] = React.useState(liguillaModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Liguilla, idProp)
        : liguillaModelProp;
      setLiguillaRecord(record);
    };
    queryData();
  }, [idProp, liguillaModelProp]);
  React.useEffect(resetStateValues, [liguillaRecord]);
  const validations = {
    clave_liga: [],
    posicion_cuartos: [],
    posicion_semi: [],
    posicion_final: [],
    logo: [{ type: "URL" }],
    equipo: [],
    categoria: [],
    nombre_liga: [],
    clave_final: [],
    clave_semi: [],
    clave_cuartos: [],
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
          clave_liga,
          posicion_cuartos,
          posicion_semi,
          posicion_final,
          logo,
          equipo,
          categoria,
          nombre_liga,
          clave_final,
          clave_semi,
          clave_cuartos,
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
            Liguilla.copyOf(liguillaRecord, (updated) => {
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
      {...getOverrideProps(overrides, "LiguillaUpdateForm")}
      {...rest}
    >
      <TextField
        label="Clave liga"
        isRequired={false}
        isReadOnly={false}
        value={clave_liga}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga: value,
              posicion_cuartos,
              posicion_semi,
              posicion_final,
              logo,
              equipo,
              categoria,
              nombre_liga,
              clave_final,
              clave_semi,
              clave_cuartos,
            };
            const result = onChange(modelFields);
            value = result?.clave_liga ?? value;
          }
          if (errors.clave_liga?.hasError) {
            runValidationTasks("clave_liga", value);
          }
          setClave_liga(value);
        }}
        onBlur={() => runValidationTasks("clave_liga", clave_liga)}
        errorMessage={errors.clave_liga?.errorMessage}
        hasError={errors.clave_liga?.hasError}
        {...getOverrideProps(overrides, "clave_liga")}
      ></TextField>
      <TextField
        label="Posicion cuartos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={posicion_cuartos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              clave_liga,
              posicion_cuartos: value,
              posicion_semi,
              posicion_final,
              logo,
              equipo,
              categoria,
              nombre_liga,
              clave_final,
              clave_semi,
              clave_cuartos,
            };
            const result = onChange(modelFields);
            value = result?.posicion_cuartos ?? value;
          }
          if (errors.posicion_cuartos?.hasError) {
            runValidationTasks("posicion_cuartos", value);
          }
          setPosicion_cuartos(value);
        }}
        onBlur={() => runValidationTasks("posicion_cuartos", posicion_cuartos)}
        errorMessage={errors.posicion_cuartos?.errorMessage}
        hasError={errors.posicion_cuartos?.hasError}
        {...getOverrideProps(overrides, "posicion_cuartos")}
      ></TextField>
      <TextField
        label="Posicion semi"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={posicion_semi}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              clave_liga,
              posicion_cuartos,
              posicion_semi: value,
              posicion_final,
              logo,
              equipo,
              categoria,
              nombre_liga,
              clave_final,
              clave_semi,
              clave_cuartos,
            };
            const result = onChange(modelFields);
            value = result?.posicion_semi ?? value;
          }
          if (errors.posicion_semi?.hasError) {
            runValidationTasks("posicion_semi", value);
          }
          setPosicion_semi(value);
        }}
        onBlur={() => runValidationTasks("posicion_semi", posicion_semi)}
        errorMessage={errors.posicion_semi?.errorMessage}
        hasError={errors.posicion_semi?.hasError}
        {...getOverrideProps(overrides, "posicion_semi")}
      ></TextField>
      <TextField
        label="Posicion final"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={posicion_final}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              clave_liga,
              posicion_cuartos,
              posicion_semi,
              posicion_final: value,
              logo,
              equipo,
              categoria,
              nombre_liga,
              clave_final,
              clave_semi,
              clave_cuartos,
            };
            const result = onChange(modelFields);
            value = result?.posicion_final ?? value;
          }
          if (errors.posicion_final?.hasError) {
            runValidationTasks("posicion_final", value);
          }
          setPosicion_final(value);
        }}
        onBlur={() => runValidationTasks("posicion_final", posicion_final)}
        errorMessage={errors.posicion_final?.errorMessage}
        hasError={errors.posicion_final?.hasError}
        {...getOverrideProps(overrides, "posicion_final")}
      ></TextField>
      <TextField
        label="Logo"
        isRequired={false}
        isReadOnly={false}
        value={logo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              posicion_cuartos,
              posicion_semi,
              posicion_final,
              logo: value,
              equipo,
              categoria,
              nombre_liga,
              clave_final,
              clave_semi,
              clave_cuartos,
            };
            const result = onChange(modelFields);
            value = result?.logo ?? value;
          }
          if (errors.logo?.hasError) {
            runValidationTasks("logo", value);
          }
          setLogo(value);
        }}
        onBlur={() => runValidationTasks("logo", logo)}
        errorMessage={errors.logo?.errorMessage}
        hasError={errors.logo?.hasError}
        {...getOverrideProps(overrides, "logo")}
      ></TextField>
      <TextField
        label="Equipo"
        isRequired={false}
        isReadOnly={false}
        value={equipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              posicion_cuartos,
              posicion_semi,
              posicion_final,
              logo,
              equipo: value,
              categoria,
              nombre_liga,
              clave_final,
              clave_semi,
              clave_cuartos,
            };
            const result = onChange(modelFields);
            value = result?.equipo ?? value;
          }
          if (errors.equipo?.hasError) {
            runValidationTasks("equipo", value);
          }
          setEquipo(value);
        }}
        onBlur={() => runValidationTasks("equipo", equipo)}
        errorMessage={errors.equipo?.errorMessage}
        hasError={errors.equipo?.hasError}
        {...getOverrideProps(overrides, "equipo")}
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
              clave_liga,
              posicion_cuartos,
              posicion_semi,
              posicion_final,
              logo,
              equipo,
              categoria: value,
              nombre_liga,
              clave_final,
              clave_semi,
              clave_cuartos,
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
      <TextField
        label="Nombre liga"
        isRequired={false}
        isReadOnly={false}
        value={nombre_liga}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              posicion_cuartos,
              posicion_semi,
              posicion_final,
              logo,
              equipo,
              categoria,
              nombre_liga: value,
              clave_final,
              clave_semi,
              clave_cuartos,
            };
            const result = onChange(modelFields);
            value = result?.nombre_liga ?? value;
          }
          if (errors.nombre_liga?.hasError) {
            runValidationTasks("nombre_liga", value);
          }
          setNombre_liga(value);
        }}
        onBlur={() => runValidationTasks("nombre_liga", nombre_liga)}
        errorMessage={errors.nombre_liga?.errorMessage}
        hasError={errors.nombre_liga?.hasError}
        {...getOverrideProps(overrides, "nombre_liga")}
      ></TextField>
      <TextField
        label="Clave final"
        isRequired={false}
        isReadOnly={false}
        value={clave_final}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              posicion_cuartos,
              posicion_semi,
              posicion_final,
              logo,
              equipo,
              categoria,
              nombre_liga,
              clave_final: value,
              clave_semi,
              clave_cuartos,
            };
            const result = onChange(modelFields);
            value = result?.clave_final ?? value;
          }
          if (errors.clave_final?.hasError) {
            runValidationTasks("clave_final", value);
          }
          setClave_final(value);
        }}
        onBlur={() => runValidationTasks("clave_final", clave_final)}
        errorMessage={errors.clave_final?.errorMessage}
        hasError={errors.clave_final?.hasError}
        {...getOverrideProps(overrides, "clave_final")}
      ></TextField>
      <TextField
        label="Clave semi"
        isRequired={false}
        isReadOnly={false}
        value={clave_semi}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              posicion_cuartos,
              posicion_semi,
              posicion_final,
              logo,
              equipo,
              categoria,
              nombre_liga,
              clave_final,
              clave_semi: value,
              clave_cuartos,
            };
            const result = onChange(modelFields);
            value = result?.clave_semi ?? value;
          }
          if (errors.clave_semi?.hasError) {
            runValidationTasks("clave_semi", value);
          }
          setClave_semi(value);
        }}
        onBlur={() => runValidationTasks("clave_semi", clave_semi)}
        errorMessage={errors.clave_semi?.errorMessage}
        hasError={errors.clave_semi?.hasError}
        {...getOverrideProps(overrides, "clave_semi")}
      ></TextField>
      <TextField
        label="Clave cuartos"
        isRequired={false}
        isReadOnly={false}
        value={clave_cuartos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clave_liga,
              posicion_cuartos,
              posicion_semi,
              posicion_final,
              logo,
              equipo,
              categoria,
              nombre_liga,
              clave_final,
              clave_semi,
              clave_cuartos: value,
            };
            const result = onChange(modelFields);
            value = result?.clave_cuartos ?? value;
          }
          if (errors.clave_cuartos?.hasError) {
            runValidationTasks("clave_cuartos", value);
          }
          setClave_cuartos(value);
        }}
        onBlur={() => runValidationTasks("clave_cuartos", clave_cuartos)}
        errorMessage={errors.clave_cuartos?.errorMessage}
        hasError={errors.clave_cuartos?.hasError}
        {...getOverrideProps(overrides, "clave_cuartos")}
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
          isDisabled={!(idProp || liguillaModelProp)}
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
              !(idProp || liguillaModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
