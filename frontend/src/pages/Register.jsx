import { useState,useEffect , useMemo } from "react";
import { Stepper, Button, Group } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import {
  TextInput,
  PasswordInput,
  createStyles,
  Avatar,
  Paper,
  Title,
  Text,
  Container,
  SimpleGrid,
  Select,
  Notification,
} from "@mantine/core";
import { IconCamera, IconCheck, IconX } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import { register } from "../redux/action/register.action";
import { imageUpload } from "../redux/action/imageUpload.action";


export function Register() {
  
  const dispatch = useDispatch();
  const [active, setActive] = useState(0);
  const [data, setData] = useState([{ value: "admin", label: "Admin" }]);
  const registerdata = useSelector((state) => state.register);
  console.log(registerdata, "register");
  // if (registerdata?.status === 200) {
  //   showNotification("success", "Registration successful!");
  // }
  const [imageUrl, setImageUrl] = useState(null);
  const { image } = useSelector((state) => state.image);
  
  const nextStep = () => {
    setActive((current) => (current < 3 ? current + 1 : current));
  };

  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));
  const paperStyle = {
    width: 550,
  };
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      firm_name: "",
      profile_image: "",
      firm_email: "",
      firm_address: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length === 0 ? "Please enter the password" : null,
      confirmPassword: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });
  const onSubmit = async (values) => {
   
    await dispatch(
      register({ ...values, profile_image: image?.data?.filename})
    );
    form.reset();
    nextStep();
  };

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    form.setFieldValue(name, value);
  };
  const fileupload = async (e) => {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    const formData = new FormData();
    formData.append("file", file);
    console.log(formData, "meshvishah");
    dispatch(imageUpload(formData));
  };
  return (
    <div>
      <Paper
        withBorder
        shadow="md"
        style={{ backgroundColor: "#F1F3F5" }}
        h={660}
        p={30}
        w={600}
        mt={80}
        radius="md"
        ml="30rem"
        mb="1rem"
      >
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
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
              <div
                style={{
                  position: "relative",
                }}
              >
                <Avatar
                  component="a"
                  href={imageUrl}
                  target="_blank"
                  src={imageUrl}
                  alt="it's me"
                  radius="5em"
                  size="7em"
                  style={{ border: "6px solid #CED4DA" }}
                  ml="13rem"
                />
                <div
                  style={{
                    position: "absolute",
                    top: "90%",
                    left: "55%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#CED4DA",
                    borderRadius: "50%",
                    cursor: "pointer",
                    padding: "0.3rem",
                    //border: "2px solid #CED4DA",
                  }}
                  onClick={() => {
                    const fileInput = document.createElement("input");
                    fileInput.type = "file";
                    fileInput.accept = "image/*";
                    fileInput.onchange = fileupload;
                    fileInput.click();
                  }}
                >
                  <IconCamera size="1.1rem" />
                </div>
              </div>
              <TextInput
                mt={15}
                label="Name"
                placeholder="Your Name"
                required
                value={form.values["name"]}
                onChange={handleFieldChange}
                name="name"
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
                {...form.getInputProps("name")}
              />
              <PasswordInput
                mt={15}
                label="Password"
                placeholder="Your password"
                required
                value={form.values["password"]}
                onChange={handleFieldChange}
                name="password"
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
              />

              <PasswordInput
                mt={15}
                label="Confirm Password"
                placeholder="Re-enter Your Password"
                required
                value={form.values["confirmPassword"]}
                onChange={handleFieldChange}
                name="confirmPassword"
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
                {...form.getInputProps("confirmPassword")}
              />
              <Group position="center" mt="md">
                <Button
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  w="25%"
                  onClick={prevStep}
                >
                  Back
                </Button>
                <Button
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  onClick={nextStep}
                  w="25%"
                >
                  Next
                </Button>
              </Group>
              <Text color="dimmed" size="sm" align="center" mt="sm">
                Already Account?{" "}
                <a
                  href="/login"
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
                label="Email"
                placeholder="Your Email"
                value={form.values["email"]}
                onChange={handleFieldChange}
                name="email"
                required
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
              />

              <SimpleGrid cols={2}>
                <div>
                  {" "}
                  <TextInput
                    mt={15}
                    label="Phone"
                    placeholder="Your Phone Number"
                    required
                    value={form.values["phone"]}
                    onChange={handleFieldChange}
                    name="phone"
                    labelProps={{ display: "flex" }}
                  />
                </div>
                <div>
                  <Select
                    mt={15}
                    label="Role"
                    data={data}
                    placeholder="Select items or write new item and click create"
                    nothingFound="Nothing found"
                    searchable
                    creatable
                    getCreateLabel={(query) => `+ Create ${query}`}
                    onCreate={(query) => {
                      const item = { value: query, label: query };
                      setData((current) => [...current, item]);
                      return item;
                    }}
                    labelProps={{ display: "flex" }}
                  />
                </div>
              </SimpleGrid>

              <TextInput
                mt={15}
                label="Firm Name"
                placeholder="Your Firm Name"
                required
                value={form.values["firm_name"]}
                onChange={handleFieldChange}
                name="firm_name"
                labelProps={{ display: "flex" }}
              />

              <TextInput
                mt={15}
                label="Firm Email"
                placeholder="Your Firm Email"
                required
                value={form.values["firm_email"]}
                onChange={handleFieldChange}
                name="firm_email"
                labelProps={{ display: "flex" }}
              />

              <TextInput
                mt={15}
                label="Firm Address"
                placeholder="Your Firm Address"
                required
                value={form.values["firm_address"]}
                onChange={handleFieldChange}
                name="firm_address"
                labelProps={{ display: "flex" }}
              />

              <Group position="center" mt="xl">
                <Button
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  onClick={prevStep}
                  w="25%"
                >
                  Back
                </Button>
                <Button
                  variant="gradient"
                  gradient={{ from: "teal", to: "lime", deg: 105 }}
                  type="submit"
                  w="25%"
                >
                  Submit
                </Button>
              </Group>
            </Stepper.Step>
            <Stepper.Completed>
              Registration Completed{" "}
              <a
                href="/login"
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
    </div>
  );
}
