
import { useDispatch, useSelector } from "react-redux";
import {
  PasswordInput,
  Paper,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {changePassword} from "../redux/action/password.action"
export function ChangePassword() {
  const dispatch= useDispatch()
   const form = useForm({
     initialValues: {
       password: "",
       newPassword: "",
     },
     validate: {
       newPassword: (value) =>
         value.length === 0 ? "Please enter the New password" : null,
       password: (value) =>
         value.length === 0 ? "Please enter the password" : null,
     },
   });
    const onSubmit = (values) => {
      dispatch(changePassword(values))
      console.log(values)
      form.reset();
    };
     const handleFieldChange = (event) => {
       const { name, value } = event.target;
       form.setFieldValue(name, value);
     };
  return (
    <>
      <h3 align="left" fw="md" fz="xs">
        Reset Password
      </h3>

      <Paper
        style={{ backgroundColor: "#F1F3F5" }}
        shadow="sm"
        radius="md"
        p="sm"
        mt="sm"
        w={680}
      >
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <PasswordInput
            label="Old Password"
            mt="sm"
            labelProps={{ display: "flex" }}
            color="#DEE2E6"
            w="50%"
            name="password"
            value={form.values["password"]}
            onChange={handleFieldChange}
          />
          <PasswordInput
            label="New Password"
            mt="sm"
            labelProps={{ display: "flex" }}
            color="#DEE2E6"
            w="50%"
            name="newPassword"
            value={form.values["newPassword"]}
            onChange={handleFieldChange}
          />
          <Button
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            fullWidth
            mt="xl"
            w="30%"
            radius="md"
            type="submit"
          >
            Chnage Password
          </Button>
        </form>
      </Paper>
    </>
  );
}
