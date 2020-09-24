import React, { useState, useCallback, useEffect } from "react";
import { Card, Typography, Grid, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { styles } from "./styles";
import { useFormFields, useValidation } from "../../hooks";
import { FIELDS, VALIDATION_SCHEMA } from "./formFields";
import { useDispatch, useSelector } from "react-redux";
import { submitRegistrationForm } from "../../redux/actions";
import Button from "../../components/button";
import { ROUTES } from "../../constants/routes";

const Registration = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, data, error } = useSelector((store) => store.registration);
  const { formFields, createChangeHandler } = useFormFields({
    [FIELDS.NAME]: "",
    [FIELDS.EMAIL]: "",
    [FIELDS.PHONE_NUMBER]: "",
    [FIELDS.ADDRESS]: "",
    [FIELDS.GENDER]: "",
    [FIELDS.PASSWORD]: "",
    [FIELDS.CONFIRM_PASSWORD]: "",
    [FIELDS.PHOTO]: "",
  });

  const { errors, validateOnSubmit, validateOnBlur } = useValidation({
    validationSchema: VALIDATION_SCHEMA,
    values: formFields,
  });

  const getHelperText = useCallback(
    (field) => {
      if (errors[field] && errors[field].error) {
        return errors[field].message;
      }
      return null;
    },
    [errors]
  );

  const checkError = useCallback(
    (field) => {
      return errors[field] && errors[field].error;
    },
    [errors]
  );

  const onSubmit = () => {
    let canSubmit = validateOnSubmit();
    if (canSubmit) {
      dispatch(submitRegistrationForm(formFields));
    }
  };

  useEffect(() => {
    if (data && !loading && !error) {
      history.push(ROUTES.LOGIN);
    }
  }, [data, loading, error]);
  return (
    <Grid container style={styles.root} justify="center" alignItems="center">
      <Grid item md={5} sm={8} xs={11}>
        <Card style={styles.card}>
          <Typography variant={"h5"}>Registration form</Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="text"
                error={checkError(FIELDS.NAME)}
                helperText={getHelperText(FIELDS.NAME)}
                label="Name"
                variant="outlined"
                value={formFields[FIELDS.NAME]}
                onChange={createChangeHandler(FIELDS.NAME)}
                onBlur={validateOnBlur(FIELDS.NAME)}
                style={styles.input}
                inputProps={{
                  maxLength: 100,
                }}
              />
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="text"
                error={checkError(FIELDS.EMAIL)}
                helperText={getHelperText(FIELDS.EMAIL)}
                label="Email"
                variant="outlined"
                value={formFields[FIELDS.EMAIL]}
                onChange={createChangeHandler(FIELDS.EMAIL)}
                onBlur={validateOnBlur(FIELDS.EMAIL)}
                style={styles.input}
                inputProps={{
                  maxLength: 100,
                }}
              />
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="text"
                error={checkError(FIELDS.PHONE_NUMBER)}
                helperText={getHelperText(FIELDS.PHONE_NUMBER)}
                label="Phone Number"
                variant="outlined"
                value={formFields[FIELDS.PHONE_NUMBER]}
                onChange={createChangeHandler(FIELDS.PHONE_NUMBER)}
                onBlur={validateOnBlur(FIELDS.PHONE_NUMBER)}
                style={styles.input}
                inputProps={{
                  maxLength: 10,
                }}
              />
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="text"
                error={checkError(FIELDS.ADDRESS)}
                helperText={getHelperText(FIELDS.ADDRESS)}
                label="Address"
                variant="outlined"
                value={formFields[FIELDS.ADDRESS]}
                onChange={createChangeHandler(FIELDS.ADDRESS)}
                onBlur={validateOnBlur(FIELDS.ADDRESS)}
                style={styles.input}
                inputProps={{
                  maxLength: 210,
                }}
              />
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="text"
                error={checkError(FIELDS.GENDER)}
                helperText={getHelperText(FIELDS.GENDER)}
                label="Gender"
                variant="outlined"
                value={formFields[FIELDS.GENDER]}
                onChange={createChangeHandler(FIELDS.GENDER)}
                onBlur={validateOnBlur(FIELDS.GENDER)}
                style={styles.input}
                inputProps={{
                  maxLength: 15,
                }}
              />
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="text"
                error={checkError(FIELDS.PASSWORD)}
                helperText={getHelperText(FIELDS.PASSWORD)}
                label="Password"
                variant="outlined"
                value={formFields[FIELDS.PASSWORD]}
                onChange={createChangeHandler(FIELDS.PASSWORD)}
                onBlur={validateOnBlur(FIELDS.PASSWORD)}
                style={styles.input}
                inputProps={{
                  maxLength: 30,
                }}
              />
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="text"
                error={checkError(FIELDS.CONFIRM_PASSWORD)}
                helperText={getHelperText(FIELDS.CONFIRM_PASSWORD)}
                label="Confirm Password"
                variant="outlined"
                value={formFields[FIELDS.CONFIRM_PASSWORD]}
                onChange={createChangeHandler(FIELDS.CONFIRM_PASSWORD)}
                onBlur={validateOnBlur(FIELDS.CONFIRM_PASSWORD)}
                style={styles.input}
                inputProps={{
                  maxLength: 30,
                }}
              />
            </Grid>

            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="file"
                error={checkError(FIELDS.PHOTO)}
                helperText={getHelperText(FIELDS.PHOTO)}
                variant="outlined"
                value={formFields[FIELDS.PHOTO]}
                onChange={createChangeHandler(FIELDS.PHOTO)}
                onBlur={validateOnBlur(FIELDS.PHOTO)}
                style={styles.input}
              />
            </Grid>
          </Grid>
          <br />
          <Button
            onClick={onSubmit}
            color="primary"
            variant="contained"
            loading={loading}
          >
            Submit
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Registration;
