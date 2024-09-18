import * as yup from "yup";

export const formSchema = yup.object().shape({
  card_number: yup
    .string()
    .nullable()
    .min(16)
    .required("Ushbu maydon to`ldirilishi shart!"),
  card_name: yup
    .string()
    .nullable()
    .required("Ushbu maydon to`ldirilishi shart!"),
});
