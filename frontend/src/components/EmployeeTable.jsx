import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
  Title,
  Button,
  Paper,
  TextInput,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteEmployee, employee } from "../redux/action/employee.action.js";
import { useNavigate } from "react-router-dom";
import { roles } from "../redux/action/role.action.js";
export function EmployeeTable() {
  const [search, setSearch] = useState("");

  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector((state) => state.employeeData);
  console.log(employees.employee.data);
  useEffect(() => {
    dispatch(employee());
  }, []);
  const handleButtonClick = (id) => {
    if (id) navigate("/home/addemployee/" + id);
    else navigate("/home/addemployee");
  };
  const handleDelete = async (id) => {
    await dispatch(deleteEmployee(id));
    window.location.reload();
  };

  if (employees && employees.employee && employees.employee.data) {
    var row = employees.employee.data.map((data) => (
      <tr key={data._id}>
        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500}>
              {data?.name}
            </Text>
          </Group>
        </td>

        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500} c="dimmed">
              {data?.email}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500} c="dimmed">
              {data?.phone}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500} c="dimmed">
              {data?.role[0]?.name}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500} c="dimmed">
              {data?.profile_image}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing={0} position="right">
            <ActionIcon>
              <IconPencil
                size="1rem"
                stroke={1.5}
                id={data._id}
                onClick={() => handleButtonClick(data._id)}
              />
            </ActionIcon>
            <ActionIcon color="red">
              <IconTrash
                size="1rem"
                stroke={1.5}
                onClick={() => {
                  handleDelete(data._id);
                }}
              />
            </ActionIcon>
          </Group>
        </td>
      </tr>
    ));
  }
    
      console.log(search,"serch");
    
  return (
    <div>
      <Group>
        <h2 align="left" fw="md" fz="xs">
          Employee List
        </h2>
        <TextInput
          icon={<IconSearch size="1.1rem" stroke={1.5} />}
          radius="xl"
          size="md"
          ml={600}
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          rightSection={
            <ActionIcon
              size={32}
              radius="xl"
              color={theme.primaryColor}
              variant="filled"
            >
              <IconArrowRight
                size="1.1rem"
                stroke={1.5}
                onClick={() => navigate(`/home/?query=${search}`)}
              />
            </ActionIcon>
          }
          placeholder="Search questions"
          rightSectionWidth={50}
        />
        <Group justify="end">
          {" "}
          <Button
            align="right"
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            ml="60em"
            onClick={() => handleButtonClick()}
          >
            ADD EMPLOYEE
          </Button>
        </Group>
      </Group>
      <ScrollArea>
        {" "}
        <Paper shadow="sm" radius="md" p="sm" mt="sm">
          <h3 align="left" fw="md" fz="xs">
            Employee
          </h3>
          <Table
            sx={{ minWidth: 1000 }}
            verticalSpacing="xs"
            highlightOnHover
            striped
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>profile Image</th>
                <th />
              </tr>
            </thead>
            <tbody>{row}</tbody>
          </Table>
        </Paper>
      </ScrollArea>
    </div>
  );
}
