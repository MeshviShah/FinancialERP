import { Card, Image, Text } from "@mantine/core";
import { Grid, rem, SimpleGrid } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { clientCount } from "../redux/action/client.action";
import { documentCount } from "../redux/action/document.action";
import { employeeCount } from "../redux/action/employee.action";
import { tenderCount } from "../redux/action/tender.action";
export function TaskCard() {
   const dispatch = useDispatch();
   useEffect(() => {
     dispatch(clientCount());
     dispatch(employeeCount())
     dispatch(tenderCount())
   }, []);
   
   const clients = useSelector((state) => state?.clientData); 
   const employees = useSelector((state) => state?.employeeData?.employee?.data); 
   const tender = useSelector((state)=>state?.tender?.tender?.data)
   console.log(tender,"tender")
   return (
    <>
      <SimpleGrid cols={3}>
        <div>
          <Card shadow="xl" padding="sm" w="70%" radius="md" mt="6rem">
            <Text weight={500} size="lg" mt="sm">
              Total Employee
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              8
            </Text>
          </Card>
        </div>
        <div>
          <Card shadow="md" padding="sm" w="70%" radius="md" mt="6rem">
            <Text weight={500} size="lg" mt="sm">
              Total Client
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              7
            </Text>
          </Card>
        </div>
        <div>
          <Card
            shadow="md"
            padding="sm"
            w="70%"
            component="a"
            target="_blank"
            radius="md"
            mt="6rem"
          >
            <Text weight={500} size="lg" mt="sm">
              Total Service
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              10
            </Text>
          </Card>
        </div>
        <div>
          <Card shadow="xl" padding="sm" w="70%" radius="md" mt="1rem">
            <Text weight={500} size="lg" mt="sm">
              Total Task
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              10
            </Text>
          </Card>
        </div>
        <div>
          <Card shadow="xl" padding="sm" w="70%" radius="md" mt="1rem">
            <Text weight={500} size="lg" mt="sm">
              Total Tender
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              8
            </Text>
          </Card>
        </div>
      </SimpleGrid>
    </>
  );
}
