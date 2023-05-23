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
  Checkbox,
  Select,
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
    address:"",
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
        address: client.data?.[0]?.address || "",
      });
    }
  }, [client, mode]);

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
      {/* <Group>
        <h2 align="left" fw="md" fz="xs" ml="xl">
          {mode === "edit" ? "Client Edit" : "Client Add"}
        </h2>
      </Group> */}

      <ScrollArea>
        {" "}
        <Paper
          shadow="sm"
          radius="md"
          p="sm"
          mt="6em"
          ml="15em"
          w="60%"
          style={{ backgroundColor: "#F1F3F5" }}
        >
          <form onSubmit={handleSubmit}>
            <h2 align="left" fw="md" fz="xs">
              {mode === "edit" ? "CLIENT EDIT" : "CLIENT ADD"}
            </h2>
            <TextInput
              label="Name"
              mt="sm"
              placeholder="Enter Name"
              required
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              value={formData.name}
              w="100%"
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
              color="#DEE2E6"
              value={formData.email}
              w="100%"
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
              color="#DEE2E6"
              value={formData.phone}
              w="100%"
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <TextInput
              label="Gst Number"
              mt="sm"
              placeholder="Enter Gst_Number"
              required
              w="100%"
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              value={formData.gst_number}
              onChange={(e) =>
                setFormData({ ...formData, gst_number: e.target.value })
              }
            />
            <TextInput
              label="Payment"
              mt="sm"
              labelProps={{ display: "flex" }}
              required
              color="#DEE2E6"
              w="100%"
              value={formData.payment}
              onChange={(e) =>
                setFormData({ ...formData, payment: e.target.value })
              }
            />
            <TextInput
              label="Website"
              mt="sm"
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              value={formData.website}
              w="100%"
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
            <TextInput
              label="Company Name"
              mt="sm"
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              w="100%"
              value={formData.company_name}
              onChange={(e) =>
                setFormData({ ...formData, company_name: e.target.value })
              }
            />

            <Button fullWidth mt="xl" w="25%" radius="md" type="submit">
              {mode === "add" ? "Add Client" : "Update Client"}
            </Button>
          </form>
        </Paper>
      </ScrollArea>
    </div>
  );
}
