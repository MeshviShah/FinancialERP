import { useState } from "react";
import { AppShell, Navbar, Text, useMantineTheme } from "@mantine/core";
import { NavbarCom } from "../components/Navbar";
import { StatsRingCard, TaskCard } from "../components/Card";
import { ClientTable } from "../components/ClientTable";
import { Outlet } from "react-router-dom";

export function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  // console.log("homeRender")
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbar={
        // <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 300 }}>
        <NavbarCom />
        // </Navbar>
      }

      //   footer={
      //     <Footer height={60} p="md">
      //       Application footer
      //     </Footer>
      //   }
      //   header={
      //     <Header height={{ base: 50, md: 70 }} p="md">
      //       <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      //         <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      //           <Burger
      //             opened={opened}
      //             onClick={() => setOpened((o) => !o)}
      //             size="sm"
      //             color={theme.colors.gray[6]}
      //             mr="xl"
      //           />
      //         </MediaQuery>

      //         <Text>Application header</Text>
      //       </div>
      //     </Header>
      //  }
    >
      {/* <Text>Resize app to see responsive navbar in action</Text> */}
      
      <Outlet />
    </AppShell>
  );
}
