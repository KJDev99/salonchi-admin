import { Error, FormGroupProvider, Label } from "@/styles/global";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";
import { CustomSelect } from "./style";

export const Select = ({ name, control, options, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{
        pattern: /^[a-zA-Z0-9_.,-@'`"?! ]*$/,
      }}
      render={({ field, formState: { errors } }) => (
        <FormGroupProvider>
          <Label>{props.label}</Label>
          <CustomSelect
            {...field}
            {...props}
            style={{ width: "100%" }}
            status={errors[name] ? "error" : ""}
            className={errors[name] ? "select-error" : ""}
            options={options}
          />
          <Error>{errors[name]?.message}</Error>
        </FormGroupProvider>
      )}
    />
  );
};

Select.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  options: PropTypes.array,
};
