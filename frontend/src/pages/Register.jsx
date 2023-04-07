import { useState } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { register } from "../redux/action/register.action";
export function Register() {
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const paperStyle = {
    width: 450,
    height: 1200,
  };

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      firm_name: "",
      profile_image: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length === 0 ? "Please enter the password" : null,
    },
  });
  const onSubmit =async (values) => {
   
  await  dispatch(register(values));
     form.reset();
     nextStep()
    
  };
  //const registration = useSelector((state) => state.register);
  // console.log(registration.status)
  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    form.setFieldValue(name, value);
  };
  return (
    <Container style={paperStyle} my={80}>
      <Paper withBorder shadow="md" p={30} mt={10} radius="md">
        <form onSubmit={form.onSubmit((values) => onSubmit(values))} >
          <Title
            align="center"
            sx={(theme) => ({
              fontWeight: 700,
            })}
          >
            Registration
          </Title>
          <Stepper
            mt="xl"
            active={active}
            onStepClick={setActive}
            breakpoint="sm"
            allowNextStepsSelect={false}
          >
            <Stepper.Step label="First step">
              <TextInput
                mt={15}
                label="Name"
                placeholder="Your Name"
                required
                value={form.values["name"]}
                onChange={handleFieldChange}
                name="name"
              />
              <TextInput
                mt={15}
                label="Email"
                placeholder="Your Email"
                value={form.values["email"]}
                onChange={handleFieldChange}
                name="email"
                required
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                mt={15}
                value={form.values["password"]}
                onChange={handleFieldChange}
                name="password"
              />
              <Group position="center" mt="md">
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
                <Button onClick={nextStep}>Next</Button>
              </Group>
              <Text color="dimmed" size="sm" align="center" mt="sm">
                Already Account?{" "}
                <a
                  href="/"
                  size="sm"
                  component="button"
                  style={{ color: "#1c7ed6" }}
                >
                  Log In
                </a>
              </Text>
            </Stepper.Step>
            <Stepper.Step label="Final step">
              <TextInput
                mt={15}
                label="Phone"
                placeholder="Your Phone Number"
                required
                value={form.values["phone"]}
                onChange={handleFieldChange}
                name="phone"
              />
              <TextInput
                mt={15}
                label="Firm Name"
                placeholder="Your Firm Name"
                required
                value={form.values["firm_name"]}
                onChange={handleFieldChange}
                name="firm_name"
              />
              <TextInput
                mt={15}
                label="Profile_image"
                placeholder="Your profile Image"
                value={form.values["profile_image"]}
                onChange={handleFieldChange}
                name="profile_image"
              />
              <Group position="center" mt="xl">
                <Button variant="default" onClick={prevStep}>
                  Back
                </Button>
                <Button type="submit">
                  Submit
                </Button>
              </Group>
            </Stepper.Step>
            <Stepper.Completed>
              Registration Completed{" "}
              <a
                href="/"
                size="sm"
                component="button"
                style={{ color: "#1c7ed6" }}
              >
                Log In
              </a>
            </Stepper.Completed>
          </Stepper>
        </form>
      </Paper>
    </Container>
  );
}
