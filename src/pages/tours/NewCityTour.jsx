import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../components/header/Header";
import TextInput from "../../components/inputs/TextInput";

const NewCityTour = () => {
  const [isError, setIsError] = useState(true);
  const [name, setName] = useState("");

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <Header title="add city tour" />
      <Box p={3} m={3} display={"flex"} gap={16} mb={1}>
        <Box flexBasis={"50%"}>
          <TextInput
            isRequired={true}
            label="testing"
            variant="flushed"
            name="testing"
            value={name}
            placeholder="testing"
            showError={isError}
            errorText="error"
            changeHandler={changeHandler}
          />
        </Box>
        <Box flexBasis={"50%"}>
          <TextInput
            isRequired={true}
            label="testing"
            variant="flushed"
            name="testing"
            value={name}
            placeholder="testing"
            showError={isError}
            errorText="error"
            changeHandler={changeHandler}
          />
        </Box>
      </Box>
    </>
  );
};

export default NewCityTour;

// import React, { useState } from 'react';
// import InputComponent from './InputComponent';

// const MyForm = () => {
//   const [formValues, setFormValues] = useState({
//     input1: '',
//     input2: '',
//     // other input fields...
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues((prevFormValues) => ({
//       ...prevFormValues,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Perform form submission logic with formValues
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <InputComponent
//         name="input1"
//         value={formValues.input1}
//         onChange={handleChange}
//       />
//       <InputComponent
//         name="input2"
//         value={formValues.input2}
//         onChange={handleChange}
//       />
//       {/* Render other input components */}
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default MyForm;
