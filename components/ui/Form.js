import classes from "./Card.module.css";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

function Form() {
  return (
    <FormControl>
      <FormLabel htmlFor="email">Email address</FormLabel>
      <Input id="email" type="email" />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  );
}

export default Form;
