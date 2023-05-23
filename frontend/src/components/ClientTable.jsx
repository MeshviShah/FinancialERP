import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Checkbox,
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
  Grid,
} from "@mantine/core";
import {
  IconPencil,
  IconTrash,
  IconSearch,
  IconArrowRight,
} from "@tabler/icons-react";
import { client, deleteClient } from "../redux/action/client.action";
import { AddClient } from "./AddClient";
import { queryBuilder } from "../utils/QueryBuilder";


export function ClientTable() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchobj, setSearchobj] = useState({});
  const [selection, setSelection] = useState([]);
   const toggleRow = (id) =>
     setSelection((current) =>
       current.includes(id)
         ? current.filter((item) => item !== id)
         : [...current, id]
     );

  const clients = useSelector((state) => state.clientData);
  const searchInputRef = useRef(null);
  const role = localStorage.getItem("role");
  useEffect(() => {
     const query = queryBuilder(searchobj);
      dispatch(client(query));
  }, [dispatch, searchobj]);
  const handleButtonClick = (id) => {
    if (id) navigate("/home/addclient/" + id);
    else navigate("/home/addclient");
  };
  const handleDelete = async (id) => {
    await dispatch(deleteClient([id]));
    window.location.reload();
  };
   const handleDeleteAll = async () => {
     selection && dispatch(deleteClient(selection));
     window.location.reload();
   };
  const theme = useMantineTheme();

  if (clients && clients.client && clients.client.data) {
    var row = clients.client.data.map((data) => (
      <tr key={data._id}>
        {role === "admin" && (
          <td>
            <Checkbox
              checked={selection.includes(data._id)}
              onChange={() => toggleRow(data._id)}
              transitionDuration={0}
            />
          </td>
        )}
        <td>
          <Group spacing="sm">
           
            <Text fz="sm" fw={500}>
              {data?.name}
            </Text>
          </Group>
        </td>
    
        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500}>
              {data?.payment}
            </Text>
          </Group>
        </td>
        {/* <td>
          <Group spacing="sm">
         
            <Text fz="sm" fw={500}>
              {data?.service[0]?.status}
            </Text>
          </Group>
        </td> */}
        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500} c="dimmed">
              {data?.compuny_name}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
          
            <Text fz="sm" fw={500} c="dimmed">
              {data?.email}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
        
            <Text fz="sm" fw={500} c="dimmed">
              {data?.phone}
            </Text>
          </Group>
        </td>
        <td>
          {role === "admin" && (
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
          )}
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
          {role === "admin" && (
            <Button
              align="right"
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              ml="60em"
              onClick={() => handleButtonClick()}
            >
              ADD CLIENT
            </Button>
          )}
        </Group>
      </Group>

      <ScrollArea>
        {" "}
        <Paper shadow="sm" radius="md" p="sm" mt="sm">
          <Grid grow gutter="xl">
            {" "}
            <Grid.Col span={6}></Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                icon={<IconSearch size="1.1rem" stroke={1.5} />}
                radius="xl"
                size="md"
                mt={15}
                type="text"
                w="70%"
                ml={100}
                ref={searchInputRef}
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
                      onClick={(e) =>
                        setSearchobj({
                          ...searchobj,
                          search: searchInputRef.current.value,
                        })
                      }
                    />
                  </ActionIcon>
                }
                placeholder="Search questions"
                rightSectionWidth={50}
              />
            </Grid.Col>
          </Grid>

          <Table
            sx={{ minWidth: 1000 }}
            verticalSpacing="xs"
            highlightOnHover
            striped
            mt="1rem"
          >
            <thead>
              <tr>
                {role === "admin" && (
                  <th>
                    <ActionIcon color="black">
                      <IconTrash
                        size="1.5rem"
                        stroke={1.5}
                        onClick={() => {
                          handleDeleteAll();
                        }}
                      />
                    </ActionIcon>
                  </th>
                )}
                <th>NAME</th>
                <th>PAYMENT</th>
                <th>COMPUNY NAME</th>
                <th>Email</th>
                <th>phone</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {" "}
              {clients.status === 404 ? (
                <tr>
                  {" "}
                  <td />
                  <td />
                  <td /> <td /> <td>No data</td> <td /> <td />
                  <td />{" "}
                </tr>
              ) : (
                row
              )}
            </tbody>
          </Table>
        </Paper>
      </ScrollArea>
    </div>
  );
}
