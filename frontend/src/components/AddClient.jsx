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
  addClient,
  getOneClient,
  updateClient,
} from "../redux/action/client.action";

export function AddClient(props) {
  const dispatch = useDispatch();
  // const theme = useMantineTheme();
  const { id } = useParams();
  const form = useForm();

  const [mode, setMode] = useState("add");
  const { client } = useSelector((state) => state.clientData);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gst_number: "",
    company_name: "",
    website: "",
    payment: "",
  });

  useEffect(() => {
    if (id) {
      setMode("edit");
      dispatch(getOneClient(id));
    }
  }, []);
  useEffect(() => {
    if (client && mode === "edit") {
      setFormData({
        name: client.data?.[0]?.name || "",
        email: client.data?.[0]?.email || "",
        phone: client.data?.[0]?.phone || "",
        gst_number: client.data?.[0]?.gst_number || "",
        company_name: client.data?.[0]?.company_name || "",
        website: client.data?.[0]?.website || "",
        payment: client.data?.[0]?.payment || "",
      });
    }
  }, [client, mode]);

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "add") {
      dispatch(addClient(formData));
    } else {
      await dispatch(updateClient(id, formData));
    }
  };

  return (
    <div>
      <Group>
        <h2 align="left" fw="md" fz="xs">
          {mode === "edit" ? "Client Edit" : "Client Add"}
        </h2>
      </Group>

      <ScrollArea>
        {" "}
        <Paper shadow="sm" radius="md" p="sm" mt="sm">
          <form onSubmit={handleSubmit}>
            <h3 align="left" fw="md" fz="xs">
              Client
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
              label="Gst Number"
              mt="sm"
              placeholder="Enter Gst_Number"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              value={formData.gst_number}
              onChange={(e) =>
                setFormData({ ...formData, gst_number: e.target.value })
              }
            />
            <TextInput
              label="Website"
              mt="sm"
              labelProps={{ display: "flex" }}
              variant="filled"
              value={formData.website}
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
            <TextInput
              label="Compuny Name"
              mt="sm"
              labelProps={{ display: "flex" }}
              variant="filled"
              value={formData.company_name}
              onChange={(e) =>
                setFormData({ ...formData, company_name: e.target.value })
              }
            />
            <TextInput
              label="Payment"
              mt="sm"
              labelProps={{ display: "flex" }}
              required
              variant="filled"
              value={formData.payment}
              onChange={(e) =>
                setFormData({ ...formData, payment: e.target.value })
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
