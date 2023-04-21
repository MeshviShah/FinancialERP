import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Group,
  ScrollArea,
  Button,
  Paper,
  TextInput,
  Select,
  MultiSelect,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  addTask,
  getOneTask,
  updateTask,
} from "../redux/action/task.action";
import { employee } from "../redux/action/employee.action.js";
export function AddEditTask(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const form = useForm();
  const task = useSelector((state) => state.task);
  const employees = useSelector((state) => state.employeeData);
  if(task && task.task && task.task.data){
     console.log(task.task.data);
  }
  
  useEffect(() => {
    dispatch(employee());
  }, []);
  const [mode, setMode] = useState("add");

  const [formData, setFormData] = useState({
    name: "",
    user_id: [],
    task_status : "",
    // phone: "",
    // gst_number: "",
    // company_name: "",
    // website: "",
    // payment: "",
  });

  useEffect(() => {
    if (id) {
      setMode("edit");
      dispatch(getOneTask(id));
    }
  }, []);
  useEffect(() => {
    if (task && mode === "edit") {
      setFormData({
        name: task?.task?.data?.[0]?.name || "",
        user_id: task?.task?.data?.[0]?.user_id || "",
        task_status: task?.task?.data?.[0]?.task_status || "",
      });
    }
  }, [task, mode]);

  // const handleInputChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (mode === "add") {
      dispatch(addTask(formData));
    }
    // } else {
    //   await dispatch(updateClient(id, formData));
    // }
  };
  if (employees?.employee?.data) {
    var data = employees?.employee?.data?.map((data) => ({
      label: data?.name,
      value: data?._id,
    }));
  } else {
    data = []        
  }
 console.log(data)
  // const [selectedId, setSelectedId] = useState("");

  const handleSelectChange = (selectedOption) => {
    //console.log("Selected ID:", selectedOption);
    // var selectedId = selectedOption?.value;
    // Update the state with the selected 'id'
      setFormData({ ...formData, user_id: selectedOption });
    // setSelectedId(selectedId);
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
        <Paper shadow="sm" radius="md" p="sm" mt="sm" h={500}>
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
              w="30%"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <MultiSelect
              label="User"
              placeholder="Pick"
              searchable
              nothingFound="No options"
              //maxDropdownHeight={280}
              data={data}
              onChange={handleSelectChange}
              w="30%"
              variant="filled"
              mt="sm"
              labelProps={{ display: "flex" }}
              required
              dropdownPosition="bottom"
            />
            <TextInput
              label="Task Status"
              mt="sm"
              placeholder="Enter Task Status"
              required
              labelProps={{ display: "flex" }}
              variant="filled"
              w="20%"
              value={formData.task_status}
              onChange={(e) =>
                setFormData({ ...formData, task_status: e.target.value })
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


