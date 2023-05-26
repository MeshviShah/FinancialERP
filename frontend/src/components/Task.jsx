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
  Checkbox,
  Grid,
  TextInput,
} from "@mantine/core";
import {
  IconPencil,
  IconTrash,
  IconSearch,
  IconArrowRight,
} from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { tasks, deleteTask } from "../redux/action/task.action";
import { AddEditTask } from "./AddEditTask";
import { useNavigate } from "react-router-dom";
import moment from "moment"
import { queryBuilder } from "../utils/QueryBuilder";
export function TaskTable() {
   const [searchobj, setSearchobj] = useState({});
   const [selection, setSelection] = useState([]);
    const theme = useMantineTheme();
   const toggleRow = (id) =>
     setSelection((current) =>
       current.includes(id)
         ? current.filter((item) => item !== id)
         : [...current, id]
     );
  const dispatch = useDispatch();
  const navigate = useNavigate();
 const format = "YYYY-MM-DD";
  const task = useSelector((state) => state.task);
  console.log(task,"task")
    const searchInputRef = useRef(null);
  const role = localStorage.getItem("role");
  useEffect(() => {
    console.log("meshvi")
    const query = queryBuilder(searchobj);
    dispatch(tasks(query));
  }, []);
  const handleButtonClick = (id) => {
    if (id) navigate("/home/addtask/" + id);
    else navigate("/home/addtask");
  };
  const handleDelete = async (id) => {
    console.log(id)
    dispatch(deleteTask([id]))  
    window.location.reload();
  };
 const handleDeleteAll = async () => {
   selection && dispatch(deleteTask(selection));
   window.location.reload();
 };
  if (task && task.tasks && task.tasks.data) {
    var row = task.tasks.data.map((data) => (
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
              {data?.task_status}
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
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500}>
              {moment(data?.created_data).format(format)}
            </Text>
          </Group>
        </td>
        {role === "admin" && (
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
        )}
      </tr>
    ));
  }

  return (
    <div>
      <Group>
        <h2 align="left" fw="md" fz="xs">
          Task - Managment
        </h2>
        {role === "admin" && (
          <Group justify="end">
            {" "}
            <Button
              align="right"
              variant="gradient"
              gradient={{ from: "teal", to: "lime", deg: 105 }}
              ml="57em"
              onClick={() => handleButtonClick()}
              w="100%"
            >
              ADD TASK
            </Button>
          </Group>
        )}
      </Group>

      <ScrollArea>
        {" "}
        <Paper shadow="sm" radius="md" p="sm" mt="sm" w="100%">
          <Grid grow gutter="xl">
            {" "}
            <Grid.Col span={6}>
              <h3 align="left" fw="md" fz="xs">
                Task
              </h3>
            </Grid.Col>
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
                placeholder="Search Task"
                rightSectionWidth={50}
              />
            </Grid.Col>
          </Grid>

          <Table
            sx={{ minWidth: 700 }}
            verticalSpacing="xs"
            highlightOnHover
            striped
          >
            <thead>
              <tr>
                {role === "admin" && selection.length >= 1 ? (
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
                ) : (
                  <th></th>
                )}
                <th>NAME</th>
                <th>STATUS</th>
                <th>EMPLOYEE</th>
                <th>Created Data</th>

                <th />
              </tr>
            </thead>
            <tbody>
              {" "}
              {task.status === 404 ? (
                <tr>
                  {" "}
                  <td /> <td /> <td>No data</td> <td />
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
