import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  ActionIcon,
  ScrollArea,
  Button,
  Paper,
  TextInput,
  Checkbox,
  Select,
  FileInput,
  rem,
  Image,
  Box,
  SimpleGrid,
  MultiSelect,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";
import {
  IconSearch,
  IconArrowRight,
  IconArrowLeft,
  IconUpload,
} from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import {
  addDocument,
  getOneDocument,
  updateDocument,
} from "../redux/action/document.action";
import { imageUpload } from "../redux/action/imageUpload.action";
import { client } from "../redux/action/client.action";
import { services } from "../redux/action/service.action";
import { employee } from "../redux/action/employee.action.js";
export function AddEditDocument(props) {
  const dispatch = useDispatch();
  // const theme = useMantineTheme();
  const { id } = useParams();
  const form = useForm({
    initialValues: {
      name: "",
      file: "",
      service: "",
      client_id: "",
      user_id:[]
    },
  });

  const [mode, setMode] = useState("add");
   
  const document = useSelector((state) => state.document);
  console.log(document, "j");
  const { image } = useSelector((state) => state.image);
const employees = useSelector((state) => state.employeeData);
  //image && form.setValues({ ...form.values, profile_image: image.data.filename });
   const clients = useSelector((state) => state.clientData)
   const service = useSelector((state) => state.service)

    useEffect(() => {
      dispatch(client());
    }, [dispatch]);
     useEffect(() => {
       dispatch(services());
     }, [dispatch]);
  if (clients?.client?.data) {
    var data = clients?.client?.data?.map((data) => ({
      label: data?.name,
      value: data?._id,
    }));
  } else {
    data = [];
  }
  // if (service?.service?.data) {
  //   var serviceData = service?.service?.data?.map((data) => ({
  //     label: data?.name,
  //     value: data?._id,
  //   }));
  // } else {
  //   serviceData = [];
  // }

  useEffect(() => {
    if (id) {
      setMode("edit");
      dispatch(getOneDocument(id));
   
    }
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(employee());
  }, []);
  const [formData, setFormData] = useState({});
  useEffect(() => {
    if (document && mode === "edit") {
      form.setValues({
        name: document.document.data?.[0]?.name || "",
        file: document.document.data?.[0]?.file || "",
        service: document.document.data?.[0]?.service?.[0]?._id || "",
        client_id: document.document.data?.[0]?.client?.[0]?._id || "",
        created_at: document.document.data?.[0]?.created_at || "",
        user_id : document.document.data?.[0].user_id || ""
      });
      // console.log("Role value:", employee.data?.[0]?.role?.[0]?._id);
    }
  }, [document, mode]);

  const onSubmit = async (values) => {
   
    if (mode === "add") {
      dispatch(addDocument({ ...values, file: image?.data?.filename })).then(
        () => {
          form.reset();
        }
      );
    } else {
      await dispatch(updateDocument(id, values)).then(() => {
        form.reset();
      });
    }
  };
  if (employees?.employee?.data) {
    var Edata = employees?.employee?.data?.map((data) => ({
      label: data?.name,
      value: data?._id,
    }));
  } else {
    Edata = [];
  }
  const handleSelectChange = (selectedOption) => {
    console.log("Selected ID:", selectedOption);
    form.setValues({ ...form.values, client_id: selectedOption });
  };
 
    const handleSelectUserChange = (selectedOption) => {
      console.log(selectedOption)
     form.setValues({ ...form.values, user_id: selectedOption });
    };
  const fileupload = async (e) => {
    // form.setValues({ ...form.values, profile_image: e.name });
    const formData = new FormData();
    formData.append("file", e);
    console.log(formData, "meshvishah");
    dispatch(imageUpload(formData));
  };
  return (
    <div>
      {/* <Group>
        <h2 align="left" fw="md" fz="xs" ml="xl">
          {mode === "edit" ? "Employee Edit" : "Employee Add"}
        </h2>
      </Group> */}

      <ScrollArea>
        {" "}
        <Paper
          shadow="sm"
          radius="md"
          p="sm"
          style={{ backgroundColor: "#F1F3F5" }}
          mt="6em"
          w="60%"
          ml="15em"
        >
          <form
            onSubmit={form.onSubmit((values) => onSubmit(values))}
            encType="multipart/form-data"
          >
            <h3 align="left" fw="md" fz="xs">
              {mode === "edit" ? "Document Edit" : "Document Add"}
            </h3>

            <TextInput
              label="Name"
              mt="sm"
              w="100%"
              placeholder="Enter Name"
              required
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              value={form.values.name}
              onChange={(e) =>
                form.setValues({ ...form.values, name: e.target.value })
              }
            />
           
              <Select
                placeholder="Pick"
                label="Client"
                data={data}
                value={form.values.client}
                onChange={handleSelectChange}
                nothingFound="No options"
                w="100%"
                mt="sm"
                labelProps={{ display: "flex" }}
                required
                dropdownPosition="bottom"
                color="#DEE2E6"
              />
          
            
          

            {/* <MultiSelect
              label="Service"
              placeholder="Pick"
              searchable
              nothingFound="No options"
              data={serviceData}
              onChange={handleSelectServiceChange}
              value={form.values.service}
              w="100%"
              color="#DEE2E6"
              mt="sm"
              labelProps={{ display: "flex" }}
              required
              dropdownPosition="bottom"
            /> */}
            <MultiSelect
              label="User"
              placeholder="Pick"
              searchable
              nothingFound="No options"
              data={Edata}
              onChange={handleSelectUserChange}
              value={form.values.user}
              w="100%"
              color="#DEE2E6"
              mt="sm"
              labelProps={{ display: "flex" }}
              required
              dropdownPosition="bottom"
            />
            <FileInput
              type="file"
              label="Document"
              name="file"
              placeholder="document"
              w="100%"
              mt="sm"
              headers={{ "Content-Type": "multipart/form-data" }}
              icon={<IconUpload size={rem(14)} />}
              onChange={(e) => fileupload(e)}
              accept="image/png,image/jpeg"
              value={form.values.file}
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
            />
            <Button fullWidth mt="xl" w="30%" radius="md" type="submit">
              {mode === "add" ? "Add Document" : "Update Document"}
            </Button>
          </form>
        </Paper>
      </ScrollArea>
    </div>
  );
}
