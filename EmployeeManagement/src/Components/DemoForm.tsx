import  { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Box,
  Container,
  Typography,
//   Select,
  MenuItem,
  InputLabel,
  Checkbox,
  Grid,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Resolver } from "react-hook-form";
import Switch from "@mui/material/Switch";
import Slider from "@mui/material/Slider";
import Autocomplete from "@mui/material/Autocomplete";
import Rating from "@mui/material/Rating";
import Input from "@mui/material/Input";




interface InnerFormData {
  country: string;
  state: string;
}

interface FormData {
  username: string;
  password: string;
  email: string;
  phoneNumber: string;
  address: InnerFormData;
  gender: string;
  termsAndConditions?: boolean;
  switch?: boolean;
  slider: number;
  autocomplete: string | null;
  rating: number;
  input: string;
  date:string |null;
}

const initialValues: FormData = {
  username: "JohnDoe",
  password: "examplepassword",
  email: "example@example.com",
  phoneNumber: "1234567890",
  address: {
    country: "USA",
    state: "California",
  },
  gender: "male",
  termsAndConditions: false,
  switch: true,
  slider: 5,
  autocomplete: "Option 1",
  rating: 3,
  input: "Some input text",
  date: "2000-12-01",
};

const schema = yup.object().shape({
  username: yup
    .string()
    .required("Username is required")
    .matches(/^[A-Za-z]+$/, "Username should contain letters only"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password should be at least 8 characters long"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  phoneNumber: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{10}$/, "Invalid phone number"),
  address: yup.object().shape({
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
  }),
  // switch: yup.boolean().required("Switch is required"),
  slider: yup.number().required("Slider value is required"),
  autocomplete: yup.string().required("Autocomplete is required"),
  rating: yup.number().required("Rating is required"),
  input: yup.string().required("Input is required"),
  gender: yup.string().required("Gender is required"),
  date: yup.string().required("Date is required"),
  // termsAndConditions: yup.boolean().required("checkbox is required"),
});
function DemoForms() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(schema) as Resolver<FormData, unknown>,
  });

  const onSubmit = () => {
    reset();
    setValue("switch", false);
  };

  useEffect(() => {
    Object.keys(initialValues).forEach((key) => {
      setValue(key as keyof FormData, initialValues[key as keyof FormData]);
    });
  }, [setValue]);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 5,
          background: "#E0F2F1",
          padding: "20px",
          borderRadius: 2,
        }}
      >
        <Typography component="h2" variant="h5" sx={{ marginBottom: 3 }}>
          Demo Form
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                // rules={{
                //   required: "Username is required",
                //   pattern: {
                //     value: /^[A-Za-z]+$/,
                //     message: "Username should contain letters only",
                //   },
                // }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    label="Username"
                    variant="outlined"
                    error={!!errors.username}
                    helperText={errors.username ? errors.username.message : ""}
                    inputProps={{ style: { height: "20px" } }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                // rules={{
                //   required: "Password is required",
                //   minLength: {
                //     value: 8,
                //     message: "Password should be at least 8 characters long",
                //   },
                // }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    margin="normal"
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ""}
                    inputProps={{ style: { height: "20px" } }}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} container spacing={2}>
              <Grid item xs={6}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  //   rules={{
                  //     required: "Email is required",
                  //     pattern: {
                  //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  //       message: "Invalid email address",
                  //     },
                  //   }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      label="Email"
                      variant="outlined"
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                      inputProps={{
                        style: { height: "20px" },
                        autoComplete: "email",
                      }}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="phoneNumber"
                  control={control}
                  defaultValue={""}
                  //   rules={{
                  //     required: "Phone number is required",
                  //     pattern: {
                  //       value: /^\d{10}$/,
                  //       message: "Invalid phone number",
                  //     },
                  //   }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      error={!!errors.phoneNumber}
                      helperText={
                        errors.phoneNumber ? errors.phoneNumber.message : ""
                      }
                      inputProps={{ style: { height: "20px" } }}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} container spacing={2}>
              <Grid item xs={6}>
                <Controller
                  name="address.country"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      margin="normal"
                      label="Country"
                      variant="outlined"
                      error={!!errors.address?.country}
                      helperText={
                        errors.address?.country
                          ? errors.address.country.message
                          : ""
                      }
                      inputProps={{ style: { height: "30px" } }}
                    >
                      <MenuItem value="">Select Country</MenuItem>
                      <MenuItem value="India">India</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                      <MenuItem value="Canada">Canada</MenuItem>
                      <MenuItem value="UK">UK</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={6}>
                <Controller
                  name="address.state"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      margin="normal"
                      fullWidth
                      label="State"
                      variant="outlined"
                      error={!!errors.address?.state}
                      helperText={
                        errors.address?.state
                          ? errors.address.state.message
                          : ""
                      }
                      inputProps={{ style: { height: "20px" } }}
                    />
                  )}
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="switch"
                control={control}
                // defaultValue={false}
                defaultValue={initialValues.switch || false}
                render={({ field }) => (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Switch
                      {...field}
                      color="primary"
                      checked={field.value || false}
                      data-testid="switch-component"
                    />
                    <Typography>Switch</Typography>
                  </Box>
                )}
              />
              {errors.switch && (
                <Typography color="error">{errors.switch.message}</Typography>
              )}
            </Grid>
            
            
            <Grid item xs={6}>
  <Controller
    name="date"
    control={control}
    defaultValue=""
    render={({ field }) => (
      <TextField
        {...field}
        margin="normal"
        fullWidth
        label="Date"
        variant="outlined"
        type="date"
        error={!!errors.date}
        helperText={errors.date ? errors.date.message : ""}
        InputLabelProps={{ shrink: true }} // Ensures the label doesn't overlap the input when a value is selected
      />
    )}
  />
</Grid>

            <Grid item xs={6}>
              <Controller
                name="slider"
                control={control}
                render={({ field }) => (
                  <Slider
                    {...field}
                    // defaultValue={5}
                    value={field.value || 0 } // If field.value is undefined, default to 0
                    valueLabelDisplay="auto"
                    min={0}
                    max={10}
                    step={1}
                    onChange={( newValue) => {
                      field.onChange(newValue); // Update the field value
                    }}
                    data-testid="slider-component"
                  />
                )}
              />
              {errors.slider && (
                <Typography color="error">{errors.slider.message}</Typography>
              )}
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="autocomplete"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Autocomplete
                    {...field}
                    options={["Option 1", "Option 2", "Option 3"]}
                    value={field.value || null} // Ensure value is null if undefined
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Autocomplete"
                        variant="outlined"
                        error={!!errors.autocomplete}
                        helperText={
                          errors.autocomplete ? errors.autocomplete.message : ""
                        }
                        disabled={false}
                        fullWidth={true}
                        size="medium"
                        InputLabelProps={{ className: "" }} // Ensure className is always provided
                      />
                    )}
                    onChange={( newValue) => field.onChange(newValue)} // Handle onChange event
                  />
                )}
              />
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="rating"
                control={control}
                // defaultValue={0}
                render={({ field }) => (
                  <Rating
                    {...field}
                    name="rating"
                    defaultValue={0}
                    value={field.value ?? 0} // Ensure field.value is never undefined
                    precision={1}
                    data-testid="rating-input"
                  />
                )}
              />
              {errors.rating && (
                <Typography color="error">{errors.rating.message}</Typography>
              )}
            </Grid>

            <Grid item xs={6}>
              <Controller
                name="input"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Input
                    {...field}
                    fullWidth
                    placeholder="Input"
                    inputProps={{ style: { height: "20px" } }}
                  />
                )}
              />
              {errors.input && (
                <Typography color="error">{errors.input.message}</Typography>
              )}
            </Grid>


            <Grid item xs={6}>
              <Controller
                name="gender"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <InputLabel>Gender:</InputLabel>
                    <RadioGroup {...field} row>
                      <FormControlLabel
                        value="male"
                        control={<Radio color="primary" />}
                        label="Male"
                      />
                      <FormControlLabel
                        value="female"
                        control={<Radio color="primary" />}
                        label="Female"
                      />
                    </RadioGroup>
                  </Box>
                )}
              />
              {errors.gender && (
                <Typography color="error">{errors.gender.message}</Typography>
              )}
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Controller
              name="termsAndConditions"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Checkbox
                    {...field}
                    color="primary"
                    id="termsAndConditions"
                    checked={field.value || false}
                    data-testid="termsAndConditions-checkbox"
                  />
                  <Typography>CheckBox</Typography>
                </Box>
              )}
            />
            {errors.termsAndConditions && (
              <Typography color="error">
                {errors.termsAndConditions.message}
              </Typography>
            )}
          </Grid>
          <Box
            mt={2}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default DemoForms;
