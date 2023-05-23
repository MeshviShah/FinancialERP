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
import { notifications } from "@mantine/notifications";
import { client } from "../redux/action/client.action";
export function AddEditTask(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const form = useForm();
  const task = useSelector((state) => state.task);


  useEffect(() => {
    const statusCode = task.status;
    const message = task.message
    // if (statusCode === 200) {
    //     notifications.show({
    //       title: message
    //     })
    // }
  }, [task, dispatch]);
  const employees = useSelector((state) => state.employeeData);
  // if(task && task.task && task.task.data){
  //    console.log(task.task.data);
  // }
   const clients = useSelector((state) => state.clientData);
  useEffect(() => {
    dispatch(employee());
  }, [dispatch]);
  useEffect(()=>{
    dispatch(client())
  },[dispatch])
  const [mode, setMode] = useState("add");

  const [formData, setFormData] = useState({
    name: "",
    user_id: [],
    task_status: "",
    client: ""
 
  });

  useEffect(() => {
    if (id) {
      setMode("edit");
      dispatch(getOneTask(id));
    }
  }, []);
  useEffect(() => {
    if (task && mode === "edit"){
      
      setFormData({
        name: task?.task?.data?.[0]?.name || "",
        user_id: task?.task?.data?.[0]?.user?.[0]?._id || "",   
        task_status: task?.task?.data?.[0]?.task_status || "",
      });
    }
  }, [task, mode]);


  const handleSubmit = async (e) => {
    //e.preventDefault();

    if (mode === "add") {
      dispatch(addTask(formData)).then(() => {
        form.reset();
      });;

    }
    else {
      await dispatch(updateTask(id, formData)).then(() => {
        form.reset();
      });;
    }
  };
  if (employees?.employee?.data) {
    var data = employees?.employee?.data?.map((data) => ({
      label: data?.name,
      value: data?._id,
    }));
  } else {
    data = []        
  }
 //console.log(data)
  if (clients?.client?.data) {
    var clientdata = clients?.client?.data?.map((data) => ({
      label: data?.name,
      value: data?._id,
    }));
  } else {
    clientdata = [];
  }
  // const [selectedId, setSelectedId] = useState("");
  const handleSelectChange = (selectedOption) => {
      setFormData({ ...formData, user_id: selectedOption });
  };
   const handleSelectClient = (selectedOption) => {
     setFormData({ ...formData, client: selectedOption });
   };
  return (
    <div>
      {/* <Group>
        <h2 align="left" fw="md" fz="xs"></h2>
      </Group> */}

      <ScrollArea>
        {" "}
        <Paper
          shadow="sm"
          radius="md"
          p="sm"
          mt="6em"
          ml="15em"
          w="50%"
          style={{ backgroundColor: "#F1F3F5" }}
        >
          <form onSubmit={handleSubmit}>
            <h3 align="left" fw="md" fz="xs">
              {mode === "edit" ? "Task Edit" : "Task Add"}
            </h3>
            <TextInput
              label="Name"
              mt="sm"
              placeholder="Enter Name"
              required
              labelProps={{ display: "flex" }}
              color="#DEE2E6"
              w="100%"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <Select
              placeholder="Pick"
              label="Client"
              data={clientdata}
              value={form.values.client}
              onChange={handleSelectClient}
              nothingFound="No options"
              w="100%"
              color="#DEE2E6"
              mt="sm"
              labelProps={{ display: "flex" }}
              required
              dropdownPosition="bottom"
            />

            <MultiSelect
              label="User"
              placeholder="Pick"
              searchable
              nothingFound="No options"
              data={data}
              onChange={handleSelectChange}
              value={form.values.user}
              w="100%"
              color="#DEE2E6"
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
              color="#DEE2E6"
              w="100%"
              value={formData.task_status}
              onChange={(e) =>
                setFormData({ ...formData, task_status: e.target.value })
              }
            />
            <Button fullWidth mt="xl" w="30%" radius="md" type="submit">
              {mode === "add" ? "Add Task" : "Update Task"}
            </Button>
          </form>
        </Paper>
      </ScrollArea>
    </div>
  );
}


