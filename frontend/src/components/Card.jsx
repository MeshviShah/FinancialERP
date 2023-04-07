import { Card, Image, Text } from "@mantine/core";
import { Grid, rem, SimpleGrid } from "@mantine/core";
export function TaskCard() {
  return (
    <>
      <SimpleGrid cols={3}>
        <div>
          <Card shadow="xl" padding="sm" w="70%" radius="md">
            <Text weight={500} size="lg" mt="sm">
              Total Employee
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              10
            </Text>
          </Card>
        </div>
        <div>
          <Card shadow="md" padding="sm" w="70%" radius="md">
            <Text weight={500} size="lg" mt="sm">
              Total Client
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              10
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
          >
            <Text weight={500} size="lg" mt="sm">
              Total Service
            </Text>

            <Text mt="xs" color="dimmed" size="sm">
              10
            </Text>
          </Card>
        </div>
      </SimpleGrid>
    </>
  );
}
