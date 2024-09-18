import * as yup from "yup";

const phoneRegex = ``
  // /^\+998([- ])([- ])?(\d{3})([- ])?(\d{2})([- ])?(\d{2})$/;

export const formSchema = yup.object().shape({
  phone: yup
    .string()
    .nullable()
    .matches(phoneRegex, "Phone number is not valid")
    .required("Ushbu maydon to`ldirilishi shart!"),
  password: yup
    .string()
    .nullable()
    .required("Ushbu maydon to`ldirilishi shart!"),
});
