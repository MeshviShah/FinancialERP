import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { ChangePassword } from "./ChangePassword";

export function Setting() {
  const dispatch = useDispatch();
  return (
    <Container my={40}>
      <Title
        align="left"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 500,
        })}
      >
        Account Setting
      </Title>
      <h3 align="left" fw="md" fz="xs" color="#94D82D">
        Edit Profile
      </h3>
      <Paper shadow="sm" radius="md" p="sm" mt="sm" w={680}>
        {/* <form onSubmit={form.onSubmit((values) => onSubmit(values))}>

        </form> */}
        <Image
          src="https://i.imgur.com/ZL52Q2D.png"
          alt="Tesla Model S"
          style={{
            width: "300px", // Set width to desired size
            height: "250px", // Set height to desired size
            borderRadius: "70%", // Set borderRadius to 50% for circular shape
            objectFit: "cover", // Maintain aspect ratio
            marginTop: "4rem", // Add margin top if desired
          }}
        />
        <TextInput
          label="Name"
          mt="sm"
          placeholder="Enter Name"
          required
          labelProps={{ display: "flex" }}
          variant="filled"
        />
        <TextInput
          label="Email"
          mt="sm"
          placeholder="you@google.com"
          required
          labelProps={{ display: "flex" }}
          variant="filled"
        />
        <TextInput
          label="Phone"
          mt="sm"
          placeholder="Enter Number"
          required
          labelProps={{ display: "flex" }}
          variant="filled"
        />
        <TextInput
          label="Gst Number"
          mt="sm"
          placeholder="Enter Gst_Number"
          required
          labelProps={{ display: "flex" }}
          variant="filled"
        />
        <TextInput
          label="Website"
          mt="sm"
          labelProps={{ display: "flex" }}
          variant="filled"
        />
        <TextInput
          label="Compuny Name"
          mt="sm"
          labelProps={{ display: "flex" }}
          variant="filled"
        />
        <TextInput
          label="Payment"
          mt="sm"
          labelProps={{ display: "flex" }}
          required
          variant="filled"
        />
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          fullWidth
          mt="xl"
          w="30%"
          radius="md"
          type="submit"
        >
          Update
        </Button>
      </Paper>
      <ChangePassword />
    </Container>
  );
}
