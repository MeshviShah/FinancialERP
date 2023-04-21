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
} from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { tasks, deleteTask } from "../redux/action/task.action";
import { AddEditTask } from "./AddEditTask";
import { useNavigate } from "react-router-dom";

export function TaskTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const task = useSelector((state) => state.task);
  //console.log(task);
  useEffect(() => {
    dispatch(tasks());
  }, []);
  const handleButtonClick = (id) => {
    if (id) navigate("/home/addtask/" + id);
    else navigate("/home/addtask");
  };
  const handleDelete = async (id) => {
    dispatch(deleteTask(id))  
    window.location.reload();
  };
  //const theme = useMantineTheme();

  if (task && task.task && task.task.data) {
    var row = task.task.data.map((data) => (
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
            <Text fz="sm" fw={500}>
              {data?.status}
            </Text>
          </Group>
        </td>

        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            {data?.user.map((user) => (
              <Text key={user._id} fz="sm" fw={500} c="dimmed">
                {user.name},
              </Text>
            ))}
          </Group>
        </td>
        <td>
          <Group spacing={0} position="right">
            <ActionIcon>
              <IconPencil
                id={data._id}
                onClick={() => handleButtonClick(data._id)}
                size="1rem"
                stroke={1.5}
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

  return (
    <div>
      <Group>
        <h2 align="left" fw="md" fz="xs">
          Task - Managment
        </h2>
        <Group justify="end">
          {" "}
          <Button
            align="right"
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            ml="45em"
            onClick={() => handleButtonClick()}
          >
            ADD TASK
          </Button>
        </Group>
      </Group>

      <ScrollArea>
        {" "}
        <Paper shadow="sm" radius="md" p="sm" mt="sm" w={1000}>
          <h3 align="left" fw="md" fz="xs">
            Task
          </h3>
          <Table
            sx={{ minWidth: 700 }}
            verticalSpacing="xs"
            highlightOnHover
            striped
          >
            <thead>
              <tr>
                <th>NAME</th>
                <th>STATUS</th>
                <th>EMPLOYEE</th>
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
