import React, { useState, useCallback, useEffect } from "react";
import { Card, Typography, Grid, TextField } from "@material-ui/core";
import { styles } from "./styles";
import { useFormFields, useValidation } from "../../hooks";
import { FIELDS, VALIDATION_SCHEMA } from "./formFields";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions";
import Button from "../../components/button";
import { ROUTES } from "../../constants/routes";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { data: registrationData } = useSelector((store) => store.registration);
  const { loading, data, error } = useSelector((store) => store.login);

  const { formFields, createChangeHandler } = useFormFields({
    [FIELDS.EMAIL]: "",
    [FIELDS.PASSWORD]: "",
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
      dispatch(login(formFields, registrationData));
    }
  };

  useEffect(() => {
    if (data && !loading && !error) {
      history.push(ROUTES.HOME);
    }
  }, [data, loading, error]);

  return (
    <Grid container style={styles.root} justify="center" alignItems="center">
      <Grid item md={5} sm={8} xs={11}>
        <Card style={styles.card}>
          <Typography variant={"h5"}>Login</Typography>
          <br />
          <Grid container spacing={2}>
            <Grid item md={6} sm={12} xs={12}>
              <TextField
                type="text"
                error={checkError(FIELDS.EMAIL)}
                helperText={getHelperText(FIELDS.EMAIL)}
                label="Email"
                variant="outlined"
                value={formFields[FIELDS.EMAIL]}
                onChange={createChangeHandler(FIELDS.EMAIL)}
                style={styles.input}
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
                style={styles.input}
                inputProps={{
                  maxLength: 30,
                }}
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
          <br />
          {error && error.responseObject && error.responseObject.message ? (
            <Typography style={{ color: "red" }}>
              {error.responseObject.message}
            </Typography>
          ) : null}
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
