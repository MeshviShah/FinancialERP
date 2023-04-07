import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Avatar,
  Group,
  ActionIcon,
  ScrollArea,
  Button,
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  addEmployee,
  getOneEmployee,
  updateEmployee,
} from "../redux/action/employee.action";

export function AddEmployee(props) {
  const dispatch = useDispatch();
  // const theme = useMantineTheme();
  const { id } = useParams();
  const form = useForm();

  const [mode, setMode] = useState("add");
  const { employee } = useSelector((state) => state.employeeData);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    profile_image: "",
    password: "",
  });

  useEffect(() => {
    if (id) {
      setMode("edit");
      dispatch(getOneEmployee(id));
    }
  }, []);
  useEffect(() => {
    if (employee && mode === "edit") {
      setFormData({
        name: employee.data?.[0]?.name || "",
        email: employee.data?.[0]?.email || "",
        phone: employee.data?.[0]?.phone || "",
        role: employee.data?.[0]?.role || "",
        profile_image: employee.data?.[0]?.profile_image || "",
        password: employee.data?.[0]?.password || "",
       
      });
    }
  }, [employee, mode]);

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "add") {
      dispatch(addEmployee(formData));
    } else {
      await dispatch(updateEmployee(id, formData));
    }
  };

  return (
    <div>
      <Group>
        <h2 align="left" fw="md" fz="xs">
          {mode === "edit" ? "Employee Edit" : "Employee Add"}
        </h2>
      </Group>

      <ScrollArea>
        {" "}
        <Paper shadow="sm" radius="md" p="sm" mt="sm">
          <form onSubmit={handleSubmit}>
            <h3 align="left" fw="md" fz="xs">
              Employee
            </h3>
            <TextInput
              label="Name"
              mt="sm"
              placeholder="Enter Name"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <TextInput
              label="Email"
              mt="sm"
              placeholder="you@google.com"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <TextInput
              label="Phone"
              mt="sm"
              placeholder="Enter Number"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <TextInput
              label="Role"
              mt="sm"
              placeholder="Enter role"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            />
            <TextInput
              label="profile image"
              mt="sm"
              labelProps={{ display: "flex" }}
              variant="filled"
              value={formData.profile_image}
              onChange={(e) =>
                setFormData({ ...formData, profile_image: e.target.value })
              }
            />
            <TextInput
              label="Password"
              mt="sm"
              labelProps={{ display: "flex" }}
              variant="filled"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
        

            <Button fullWidth mt="xl" w="13%" radius="md" type="submit">
              {mode === "add" ? "Add Client" : "Update Client"}
            </Button>
          </form>
        </Paper>
      </ScrollArea>
    </div>
  );
}
