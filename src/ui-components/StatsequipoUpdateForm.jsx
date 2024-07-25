/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { Statsequipo } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function StatsequipoUpdateForm(props) {
  const {
    id: idProp,
    statsequipo: statsequipoModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    idtorneo: "",
    idequipo: "",
    partidosg: "",
    partidosp: "",
    partidose: "",
    puntos: "",
    partigosj: "",
    posiciontabla: "",
  };
  const [idtorneo, setIdtorneo] = React.useState(initialValues.idtorneo);
  const [idequipo, setIdequipo] = React.useState(initialValues.idequipo);
  const [partidosg, setPartidosg] = React.useState(initialValues.partidosg);
  const [partidosp, setPartidosp] = React.useState(initialValues.partidosp);
  const [partidose, setPartidose] = React.useState(initialValues.partidose);
  const [puntos, setPuntos] = React.useState(initialValues.puntos);
  const [partigosj, setPartigosj] = React.useState(initialValues.partigosj);
  const [posiciontabla, setPosiciontabla] = React.useState(
    initialValues.posiciontabla
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = statsequipoRecord
      ? { ...initialValues, ...statsequipoRecord }
      : initialValues;
    setIdtorneo(cleanValues.idtorneo);
    setIdequipo(cleanValues.idequipo);
    setPartidosg(cleanValues.partidosg);
    setPartidosp(cleanValues.partidosp);
    setPartidose(cleanValues.partidose);
    setPuntos(cleanValues.puntos);
    setPartigosj(cleanValues.partigosj);
    setPosiciontabla(cleanValues.posiciontabla);
    setErrors({});
  };
  const [statsequipoRecord, setStatsequipoRecord] =
    React.useState(statsequipoModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Statsequipo, idProp)
        : statsequipoModelProp;
      setStatsequipoRecord(record);
    };
    queryData();
  }, [idProp, statsequipoModelProp]);
  React.useEffect(resetStateValues, [statsequipoRecord]);
  const validations = {
    idtorneo: [],
    idequipo: [],
    partidosg: [],
    partidosp: [],
    partidose: [],
    puntos: [],
    partigosj: [],
    posiciontabla: [],
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
          idtorneo,
          idequipo,
          partidosg,
          partidosp,
          partidose,
          puntos,
          partigosj,
          posiciontabla,
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
            Statsequipo.copyOf(statsequipoRecord, (updated) => {
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
      {...getOverrideProps(overrides, "StatsequipoUpdateForm")}
      {...rest}
    >
      <TextField
        label="Idtorneo"
        isRequired={false}
        isReadOnly={false}
        value={idtorneo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idtorneo: value,
              idequipo,
              partidosg,
              partidosp,
              partidose,
              puntos,
              partigosj,
              posiciontabla,
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
      <TextField
        label="Idequipo"
        isRequired={false}
        isReadOnly={false}
        value={idequipo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              idtorneo,
              idequipo: value,
              partidosg,
              partidosp,
              partidose,
              puntos,
              partigosj,
              posiciontabla,
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
        label="Partidosg"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partidosg}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idtorneo,
              idequipo,
              partidosg: value,
              partidosp,
              partidose,
              puntos,
              partigosj,
              posiciontabla,
            };
            const result = onChange(modelFields);
            value = result?.partidosg ?? value;
          }
          if (errors.partidosg?.hasError) {
            runValidationTasks("partidosg", value);
          }
          setPartidosg(value);
        }}
        onBlur={() => runValidationTasks("partidosg", partidosg)}
        errorMessage={errors.partidosg?.errorMessage}
        hasError={errors.partidosg?.hasError}
        {...getOverrideProps(overrides, "partidosg")}
      ></TextField>
      <TextField
        label="Partidosp"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partidosp}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idtorneo,
              idequipo,
              partidosg,
              partidosp: value,
              partidose,
              puntos,
              partigosj,
              posiciontabla,
            };
            const result = onChange(modelFields);
            value = result?.partidosp ?? value;
          }
          if (errors.partidosp?.hasError) {
            runValidationTasks("partidosp", value);
          }
          setPartidosp(value);
        }}
        onBlur={() => runValidationTasks("partidosp", partidosp)}
        errorMessage={errors.partidosp?.errorMessage}
        hasError={errors.partidosp?.hasError}
        {...getOverrideProps(overrides, "partidosp")}
      ></TextField>
      <TextField
        label="Partidose"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partidose}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idtorneo,
              idequipo,
              partidosg,
              partidosp,
              partidose: value,
              puntos,
              partigosj,
              posiciontabla,
            };
            const result = onChange(modelFields);
            value = result?.partidose ?? value;
          }
          if (errors.partidose?.hasError) {
            runValidationTasks("partidose", value);
          }
          setPartidose(value);
        }}
        onBlur={() => runValidationTasks("partidose", partidose)}
        errorMessage={errors.partidose?.errorMessage}
        hasError={errors.partidose?.hasError}
        {...getOverrideProps(overrides, "partidose")}
      ></TextField>
      <TextField
        label="Puntos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={puntos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idtorneo,
              idequipo,
              partidosg,
              partidosp,
              partidose,
              puntos: value,
              partigosj,
              posiciontabla,
            };
            const result = onChange(modelFields);
            value = result?.puntos ?? value;
          }
          if (errors.puntos?.hasError) {
            runValidationTasks("puntos", value);
          }
          setPuntos(value);
        }}
        onBlur={() => runValidationTasks("puntos", puntos)}
        errorMessage={errors.puntos?.errorMessage}
        hasError={errors.puntos?.hasError}
        {...getOverrideProps(overrides, "puntos")}
      ></TextField>
      <TextField
        label="Partigosj"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={partigosj}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idtorneo,
              idequipo,
              partidosg,
              partidosp,
              partidose,
              puntos,
              partigosj: value,
              posiciontabla,
            };
            const result = onChange(modelFields);
            value = result?.partigosj ?? value;
          }
          if (errors.partigosj?.hasError) {
            runValidationTasks("partigosj", value);
          }
          setPartigosj(value);
        }}
        onBlur={() => runValidationTasks("partigosj", partigosj)}
        errorMessage={errors.partigosj?.errorMessage}
        hasError={errors.partigosj?.hasError}
        {...getOverrideProps(overrides, "partigosj")}
      ></TextField>
      <TextField
        label="Posiciontabla"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={posiciontabla}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              idtorneo,
              idequipo,
              partidosg,
              partidosp,
              partidose,
              puntos,
              partigosj,
              posiciontabla: value,
            };
            const result = onChange(modelFields);
            value = result?.posiciontabla ?? value;
          }
          if (errors.posiciontabla?.hasError) {
            runValidationTasks("posiciontabla", value);
          }
          setPosiciontabla(value);
        }}
        onBlur={() => runValidationTasks("posiciontabla", posiciontabla)}
        errorMessage={errors.posiciontabla?.errorMessage}
        hasError={errors.posiciontabla?.hasError}
        {...getOverrideProps(overrides, "posiciontabla")}
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
          isDisabled={!(idProp || statsequipoModelProp)}
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
              !(idProp || statsequipoModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
