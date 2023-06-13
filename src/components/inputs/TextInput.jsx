/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

const TextInput = (props) => {
  const {
    isRequired,
    label,
    variant,
    name,
    value,
    placeholder,
    showError,
    errorText,
    changeHandler,
  } = props;
  console.log(props);
  return (
    <FormControl isRequired={isRequired ? isRequired : null}>
      <FormLabel htmlFor={name} textTransform="capitalize">
        {label}
      </FormLabel>
      <Input
        variant={variant}
        name={name}
        value={value}
        placeholder={placeholder}
        _focusVisible={{
          borderColor: "teal.700",
          boxShadow: "0px 1px 0px 0px #319795",
        }}
        onChange={() => changeHandler()}
      />
      {!showError && <FormErrorMessage>{errorText}</FormErrorMessage>}
    </FormControl>
  );
};

export default TextInput;

// import React from 'react';

// const InputComponent = ({ name, value, onChange }) => {
//   const handleInputChange = (event) => {
//     const newValue = event.target.value;
//     onChange({ name, value: newValue });
//   };

//   return (
//     <input type="text" name={name} value={value} onChange={handleInputChange} />
//   );
// };

// export default InputComponent;
