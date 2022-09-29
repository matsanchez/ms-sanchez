import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Button, TextField, InputAdornment, Typography, LinearProgress } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const validationSchema = yup.object({
  name: yup.string("").min(4, "Debe contener minimo 4 caracteres").required("Campo Requerido"),
  phone: yup.number().min(8, "Debe contener minimo 8 caracteres numericos").required("Campo Requerido"),
  email: yup.string().email("Ejemplo: email@email.com").required("Campo Requerido"),
});

const CheckOutForm = ({ cart, totalPriceCart, getOrderId }) => {
  const [loading, setLoading] = useState(true);
  const formik = useFormik({
    initialValues: { email: "", phone: "", name: "" },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      let order = {
        buyer: { name: values.name, phone: values.phone, email: values.email },
        items: { ...cart },
        price: totalPriceCart(),
      };
      getOrderId(order);
      setLoading(false);
      resetForm();
    },
  });

  return (
    <div className="bg-light rounded-4 p-3 w-50 m-2">
      <Typography>Complete los datos para Facturacion</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Nombre"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          className="mt-2"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountBoxIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          id="phone"
          name="phone"
          label="Telefono"
          type="number"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          className="mt-2"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactPhoneIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          className="mt-2"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ContactMailIcon />
              </InputAdornment>
            ),
          }}
        />
        {loading === true ? (
          <Button fullWidth color="success" variant="contained" type="submit" className="mt-2">
            Finalizar Compra
          </Button>
        ) : (
          <LinearProgress color="success" className="mt-2" />
        )}
      </form>
    </div>
  );
};

export default CheckOutForm;
