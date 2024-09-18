/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";
import PinInput from "react-pin-input";
import { Field } from "./style";

export const CustomPinInput = ({ control, name }) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field }) => (
        <Field>
          <PinInput
            length={4}
            initialValue={field.value}
            onChange={field.onChange}
            type="numeric"
            inputMode="number"
            style={{ padding: "10px" }}
            inputStyle={{
              borderColor: "#6417b0",
              borderRadius: 10,
              fontSize: 20,
            }}
            onComplete={field.onChange}
            autoSelect={true}
            // regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
          />
        </Field>
      )}
    />
  );
};
