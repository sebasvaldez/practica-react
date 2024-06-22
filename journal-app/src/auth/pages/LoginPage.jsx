import { useDispatch, useSelector } from "react-redux";

import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import {
  Button,
  Grid,
  Link,
  TextField,
  Alert,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth";
import { useMemo } from "react";


const formData= {
  email: "",
  password: "",
};



export const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector((state) => state.auth);

  const { email, password, onInputChange } = useForm(formData);

  const isAuthtenticated = useMemo(() => status === "checking", [status]);

  const onSubmint = (e) => {
    e.preventDefault();

    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    console.log("Google Sign In");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmint} className="animate__animated animate__fadeIn animate__faster">
        <Grid container>
          <Grid item xs={12}>
            <TextField
              label="Correo"
              type="mail"
              placeholder="correo@correo.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </Grid>
        </Grid>

        <Grid container
          sx={{ mt: 2, mb: 2}}
        >
          <Grid item xs={12} display={errorMessage ? "block" : "none"}>
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthtenticated}
              variant="contained"
              sx={{ mt: 2 }}
              fullWidth
              type="submit"
            >
              Login
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              disabled={isAuthtenticated}
              variant="contained"
              sx={{ mt: 2 }}
              fullWidth
              onClick={onGoogleSignIn}
            >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear una cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
