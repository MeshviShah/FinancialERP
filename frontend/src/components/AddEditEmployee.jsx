import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import {
  Avatar,
  ScrollArea,
  Button,
  Paper,
  TextInput,
  PasswordInput,
  Select,
  SimpleGrid,
} from "@mantine/core";
import { IconCamera } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import {
  addEmployee,
  getOneEmployee,
  updateEmployee,
  clearData,
} from "../redux/action/employee.action";
import { roles } from "../redux/action/role.action";
import { imageUpload } from "../redux/action/imageUpload.action";
export function AddEmployee(props) {
  const dispatch = useDispatch();
  // const theme = useMantineTheme();
  useEffect(() => {
    dispatch(clearData());
  }, [dispatch]);
  const { id } = useParams();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      role_id: "",
      profile_image: "",
      password: "",
      department:"",
    },
  });
  const [mode, setMode] = useState("add");
  const [imageUrl, setImageUrl] = useState(null);
  const { employee } = useSelector((state) => state.employeeData);
  console.log(employee,"emp")
  const { image } = useSelector((state) => state.image);
  //image && form.setValues({ ...form.values, profile_image: image.data.filename });
  const roless = useSelector((state) => state.role);
  if (roless?.role?.data) {
    var data = roless?.role?.data?.map((data) => ({
      label: data?.name,
      value: data?._id,
    }));
  } else {
    data = [];
  }
  useEffect(() => {
    dispatch(roles());
  }, [dispatch]);
  useEffect(() => {
    if (id) {
      setMode("edit");
      dispatch(getOneEmployee(id));
    }
  }, [dispatch, id]);
  // const [formData, setFormData] = useState({});
  useEffect(() => {
    if (employee && mode === "edit") {
      form.setValues({
        name: employee.data?.[0]?.name || "",
        email: employee.data?.[0]?.email || "",
        phone: employee.data?.[0]?.phone || "",
        role_id: employee.data?.[0]?.role?.[0]?._id || "",
        profile_image: employee.data?.[0]?.profile_image || "",
        department:employee.data?.[0]?.department || "",
      });
      // console.log("Role value:", employee.data?.[0]?.role?.[0]?._id);
    }
  }, [employee, mode]);

  const onSubmit = async (values) => {
    if (!/^\S+@\S+$/.test(values.email)) {
      form.setErrors({ email: "Invalid email" });
      return;
    }
    if (
      values.phone &&
      (!/^\d+$/.test(values.phone) || values.phone.trim().length !== 10)
    ) {
      form.setErrors({ phone: "Invalid phone number" });
      return;
    }
    if (mode === "add") {
      dispatch(
        addEmployee({ ...values, profile_image: image?.data?.filename })
      ).then(() => {
        form.reset();
      });
    } else {
      await dispatch(
        updateEmployee(id, { ...values, profile_image: image?.data?.filename })
      ).then(() => {
        form.reset();
      });
    }
  };
  const handleSelectChange = (selectedOption) => {
    console.log("Selected ID:", selectedOption);
    form.setValues({ ...form.values, role_id: selectedOption });
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
      <ScrollArea>
        {" "}
        <Paper
          shadow="sm"
          radius="md"
          p="sm"
          style={{ backgroundColor: "#F1F3F5" }}
          mt="6em"
          w="60%"
          ml="15em"
        >
          <form
            onSubmit={form.onSubmit((values) => onSubmit(values))}
            encType="multipart/form-data"
          >
            <h3 align="left" fw="md" fz="xs">
              {mode === "edit" ? "Employee Edit" : "Employee Add"}
            </h3>
            <div
              style={{
                position: "relative",
              }}
            >
              <Avatar
                component="a"
                href={imageUrl || employee.data?.[0]?.profile_image}
                target="_blank"
                src={imageUrl || employee.data?.[0]?.profile_image}
                alt="it's me"
                radius="5em"
                size="7em"
                style={{ border: "6px solid #CED4DA" }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "90%",
                  left: "12%",
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
              label="Name"
              mt="sm"
              w="90%"
              placeholder="Enter Name"
              required
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              value={form.values.name}
              onChange={(e) =>
                form.setValues({ ...form.values, name: e.target.value })
              }
            />
            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <TextInput
                label="Email"
                mt="sm"
                w="90%"
                placeholder="you@google.com"
                required
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
                value={form.values.email}
                onChange={(e) =>
                  form.setValues({ ...form.values, email: e.target.value })
                }
              />
              <TextInput
                label="Department"
                mt="sm"
                w="80%"
                placeholder="Department"
                required
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
                value={form.values.department}
                onChange={(e) =>
                  form.setValues({ ...form.values, department: e.target.value })
                }
              />
            </SimpleGrid>

            <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <TextInput
                label="Phone"
                mt="sm"
                w="90%"
                placeholder="Enter Number"
                required
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
                value={form.values.phone}
                onChange={(e) =>
                  form.setValues({ ...form.values, phone: e.target.value })
                }
                {...form.getInputProps("phone")}
              />

              <Select
                placeholder="Pick"
                label="Role"
                data={data}
                value={form.values.role}
                onChange={handleSelectChange}
                nothingFound="No options"
                w="80%"
                color="#DEE2E6"
                mt="sm"
                labelProps={{ display: "flex" }}
                required
                dropdownPosition="bottom"
              />
            </SimpleGrid>
            {mode === "add" && (
              <PasswordInput
                label="Password"
                mt="sm"
                w="90%"
                placeholder="Enter your Password"
                required
                labelProps={{ display: "flex" }}
                color="#DEE2E6"
                value={form.values.password}
                onChange={(e) =>
                  form.setValues({ ...form.values, password: e.target.value })
                }
                {...form.getInputProps("password")}
              />
            )}
            <div></div>
            <Button fullWidth mt="xl" w="30%" radius="md" type="submit">
              {mode === "add" ? "Add Employee" : "Update Employee"}
            </Button>
          </form>
        </Paper>
      </ScrollArea>
    </div>
  );
}
