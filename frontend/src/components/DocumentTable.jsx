import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStyles,
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ActionIcon,
  Anchor,
  ScrollArea,
  useMantineTheme,
  Button,
  Paper,
  TextInput,
  Grid,
  Title,
  Checkbox,
} from "@mantine/core";
import { IconSearch, IconArrowRight, IconArrowLeft } from "@tabler/icons-react";
import { IconPencil, IconTrash } from "@tabler/icons-react";

import { deleteDocument, documents } from "../redux/action/document.action";

import { queryBuilder } from "../utils/QueryBuilder.js";


const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },
}));
export function DocumentTable() {
  const [searchobj, setSearchobj] = useState({});
 const { classes, cx } = useStyles();
    const [selection, setSelection] = useState([]);
    const toggleRow = (id) =>
      setSelection((current) =>
        current.includes(id)
          ? current.filter((item) => item !== id)
          : [...current, id]
      );
      
  const theme = useMantineTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const document = useSelector((state) => state.document);
  console.log(document,"doc")
  const searchInputRef = useRef(null);
  //const filterInputRef = useRef(null);

  useEffect(() => {
    dispatch(documents()); 
  }, [dispatch]);
  const handleButtonClick = (id) => {
    if (id) navigate("/home/adddocument/" + id);
    else navigate("/home/adddocument");
  };
  const handleDelete = async (id) => {
    // console.log([id],"mm")
   dispatch(deleteDocument([id]));
    window.location.reload();
  };
 
  const handleDeleteAll = async () => {
    selection && (dispatch(deleteDocument(selection)));
    window.location.reload();
  };

  if (document && document.document && document.document.data) {
    var row = document?.document?.data.map((data) => (
      <tr key={data._id} >
        <td>
          <Checkbox
            checked={selection.includes(data._id)}
            onChange={() => toggleRow(data._id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            
            <a href={data?.file} rel = "file noreferrer" target="_blank">
              {data?.name}
            </a>
          </Group>
        </td>

        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500} c="dimmed">
              {data?.user.map((user) => (
                <Text key={user._id} fz="sm" fw={500} c="dimmed">
                  {user.name},
                </Text>
              ))}
            </Text>
          </Group>
        </td>
        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500} c="dimmed">
              {data?.client?.[0]?.name}
            </Text>
          </Group>
        </td>
        {/* <td>
          <Group spacing="sm">
            
          
          </Group>
        </td> */}
        <td>
          <Group spacing="sm">
            {/* <Avatar size={30}  radius={30} /> */}
            <Text fz="sm" fw={500} c="dimmed">
              {data?.created_at
                ? new Date(data.created_at).toLocaleDateString("en-US")
                : ""}
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
  // if (document.status === 404) {
  //   console.log("meshg");
  // }
  return (
    <div>
      <Group>
        <h2 align="left" fw="md" fz="xs">
          Document List
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
            ADD DOCUMENT
          </Button>
        </Group>
      </Group>
      <ScrollArea>
        {" "}
        <Paper shadow="sm" radius="md" p="sm" mt="sm" >
          <Grid grow gutter="xl">
            {" "}
            <Grid.Col span={6}>
              {/* <h3 align="left" fw="md" fz="xs">
                Document
              </h3> */}
            </Grid.Col>
            {/* <Grid.Col span={6}>
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
            </Grid.Col> */}
          </Grid>

          <Table
            sx={{ minWidth: 1000 }}
            verticalSpacing="xs"
            highlightOnHover
            striped
          >
            <thead>
              <tr>
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
                <th>Name</th>
                <th>User</th>
                <th>Client Name</th>
                {/* <th>File</th> */}
                <th>Year</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {document.status === 404 ? (
                <tr>
                  {" "}
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
