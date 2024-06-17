import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo debe tener un @"],
  password: [
    (value) => value.length >= 8,
    "La contraseña debe tener al menos 8 caracteres",
  ],
  displayName: [
    (value) => value.length >= 3,
    "El nombre debe tener al menos 3 caracteres",
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(() => status === "checking", [status]);

  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Nombre"
              type="text"
              placeholder="Nombre Completo"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="mail"
              placeholder="correo@correo.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              onChange={onInputChange}
              value={password}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid 
          item xs={12}
          display={!!errorMessage ? "block" : "none"}
          >
            <Alert severity="error">
              {errorMessage}
            </Alert>
          </Grid>

          <Grid item xs={12} >
            <Button 
            variant="contained"
             sx={{ mt: 2 }} 
             fullWidth type="submit"
            disabled={isCheckingAuthentication}
            >
              Register
            </Button>
          </Grid>





          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
