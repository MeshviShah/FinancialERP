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
  Select,
  
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { useForm, isEmail } from "@mantine/form";
import {
  addEmployee,
  getOneEmployee,
  updateEmployee,
} from "../redux/action/employee.action";
import { roles } from "../redux/action/role.action";
export function AddEmployee(props,) {
  const dispatch = useDispatch();
  // const theme = useMantineTheme();
 
  const { id } = useParams();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
      profile_image: "",
      password: "", 
    },
  });

  const [mode, setMode] = useState("add");
  const { employee } = useSelector((state) => state.employeeData);
  console.log(employee,"meshvi")
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
   }, []);
  useEffect(() => {
    if (id) {
      setMode("edit");
      dispatch(getOneEmployee(id));
    }
  }, []);
  useEffect(() => {
    if (employee && mode === "edit") {
      
      form.setValues({
        name: employee.data?.[0]?.name || "",
        email: employee.data?.[0]?.email || "",
        phone: employee.data?.[0]?.phone || "",
        role: employee.data?.[0]?.role?.[0]?._id || "",      
        profile_image: employee.data?.[0]?.profile_image || "",
        password: employee.data?.[0]?.password || "",
       
      });
      console.log("Role value:", employee.data?.[0]?.role?.[0]?._id);
    }
  }, [employee, mode]);

  const onSubmit = async (values) => {
    if (!/^\S+@\S+$/.test(values.email)) {
      form.setErrors({ email: "Invalid email" });
      return;
    };
    if (
      values.phone &&
      (!/^\d+$/.test(values.phone) || values.phone.trim().length !== 10)
    ) {
        form.setErrors({ phone: "Invalid phone number" });
        return;
    }
    if (mode === "add") {
      dispatch(addEmployee(values));
    } else {
      await dispatch(updateEmployee(id, values));
    }
  };
 
  const handleSelectChange = (selectedOption) => {
    console.log("Selected ID:", selectedOption);
   
    form.setValues({ ...form.values, role: selectedOption});
    
  };
  return (
    <div>
      <Group>
        <h2 align="left" fw="md" fz="xs" ml="xl">
          {mode === "edit" ? "Employee Edit" : "Employee Add"}
        </h2>
      </Group>

      <ScrollArea>
        {" "}
        <Paper shadow="sm" radius="md" p="sm" mt="sm" w="70%">
          <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
            <h3 align="left" fw="md" fz="xs">
              Employee
            </h3>
          
          
            <TextInput
              label="Name"
              mt="sm"
              w="50%"
              placeholder="Enter Name"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              value={form.values.name}
              onChange={(e) =>
                form.setValues({ ...form.values, name: e.target.value })
              }
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              mt="sm"
              w="50%"
              placeholder="you@google.com"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              value={form.values.email}
              onChange={(e) =>
                form.setValues({ ...form.values, email: e.target.value })
              }
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Phone"
              mt="sm"
              w="40%"
              placeholder="Enter Number"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              value={form.values.phone}
              onChange={(e) =>
                form.setValues({ ...form.values, phone: e.target.value })
              }
              {...form.getInputProps("phone")}
            />
            <div></div>
            {/* <Select
              label="role"
              placeholder="Pick one"
              data={data}
              onChange={handleSelectChange}
              dropdownPosition="bottom"
             onChange={handleSelectChange}
              defaultValue="Vue"
            /> */}
            <Select
              placeholder="Pick"
              label="Role"
              data={data}
              value={form.values.role}
              onChange={handleSelectChange}
              nothingFound="No options"
              w="20%"
              variant="filled"
              mt="sm"
              labelProps={{ display: "flex" }}
              required
              dropdownPosition="bottom"
            />

            {/* <TextInput
              label="profile image"
              mt="sm"
              labelProps={{ display: "flex" }}
              variant="filled"
              value={formData.profile_image}
              onChange={(e) =>
                setFormData({ ...formData, profile_image: e.target.value })
              }
            /> */}
            <PasswordInput
              label="Password"
              mt="sm"
              w="50%"
              labelProps={{ display: "flex" }}
              variant="filled"
              value={form.values.password}
              onChange={(e) =>
                form.setValues({ ...form.values, password: e.target.value })
              }
            />
            <Button fullWidth mt="xl" w="20%" radius="md" type="submit">
              {mode === "add" ? "Add Client" : "Update Client"}
            </Button>
          </form>
        </Paper>
      </ScrollArea>
    </div>
  );
}
