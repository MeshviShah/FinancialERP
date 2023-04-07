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
import { client, deleteClient } from "../redux/action/client.action";
import { AddClient } from "./AddClient";
import { useNavigate } from "react-router-dom";

export function ClientTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clients = useSelector((state) => state.clientData);
  console.log(clients.client.data);
  useEffect(() => {
    dispatch(client());
  }, []);
  const handleButtonClick = (id) => {
    if (id) navigate("/home/addclient/" + id);
    else navigate("/home/addclient");
  };
  const handleDelete =async (id) => {
   await dispatch(deleteClient(id));
    window.location.reload();
  };
  const theme = useMantineTheme();

  if (clients && clients.client && clients.client.data) {
    var row = clients.client.data.map((data) => (
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
              {data?.service[0]?.name}
            </Text>
          </Group>
        </td>

        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500} c="dimmed">
              {data?.service[0]?.name}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500} c="dimmed">
              {data?.service[0]?.name}
            </Text>
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
              <IconTrash size="1rem" stroke={1.5}  onClick={() =>{handleDelete(data._id);} }/>
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
          Client - Managment
        </h2>
        <Group justify="end">
          {" "}
          <Button
            align="right"
            variant="gradient"
            gradient={{ from: "teal", to: "lime", deg: 105 }}
            ml="60em"
            onClick={() => handleButtonClick()}
          >
            ADD CLIENT
          </Button>
        </Group>
      </Group>

      <ScrollArea>
        {" "}
        <Paper shadow="sm" radius="md" p="sm" mt="sm">
          <h3 align="left" fw="md" fz="xs">
            Client
          </h3>
          <Table
            sx={{ minWidth: 1000 }}
            verticalSpacing="xs"
            highlightOnHover
            striped
          >
            <thead>
              <tr>
                <th>NAME</th>
                <th>SERVICE</th>
                <th>PAYMENT</th>
                <th>SERVICE_STATUS</th>
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
