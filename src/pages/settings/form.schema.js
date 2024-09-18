import * as yup from "yup";

export const formSchema = yup.object().shape({
  firstname: yup
    .string()
    .nullable()
    .required("Ushbu maydon to`ldirilshi shart!"),
  password: yup.string().nullable(),
  confirm_password: yup
    .string()
    .nullable()
    .oneOf([yup.ref("password")], "Parollar mos emas!"),
});
