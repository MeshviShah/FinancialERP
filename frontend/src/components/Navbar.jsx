/* eslint-disable jsx-a11y/anchor-has-content */
import { useState } from "react";
import { createStyles, Navbar, Group, getStylesRef, rem } from "@mantine/core";
import {
  IconSettings,
  IconLogout,
  IconUser,
  IconCalendarEvent,
  IconFileText,
  IconUserCircle,
  IconChecklist,
} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  header: {
    paddingBottom: theme.spacing.md,
    marginBottom: `calc(${theme.spacing.md} * 1.5)`,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  footer: {
    paddingTop: theme.spacing.md,
    marginTop: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,
  },

  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

}));

export function NavbarCom() {
  const { classes, cx } = useStyles();

  return (
    <Navbar height={790} width={{ sm: 270 }} p="md">
      <Navbar.Section>
        <Group className={classes.header} position="apart">
          {/* <MantineLogo size={28} /> */}
          <h1>Admin</h1>
          {/* <Code sx={{ fontWeight: 700 }}>v3.1.2</Code> */}
        </Group>
      </Navbar.Section>
      <Navbar.Section>
        <a className={cx(classes.link)} href="/home/client">
          <IconUser className={classes.linkIcon} stroke={1.5} />
          <span>Client</span>
        </a>
        <a className={cx(classes.link)} href="/home/event">
          <IconCalendarEvent className={classes.linkIcon} stroke={1.5} />
          <span>Event</span>
        </a>
        <a className={cx(classes.link)} href="/home/document">
          <IconFileText className={classes.linkIcon} stroke={1.5} />
          <span>Document</span>
        </a>
        <a className={cx(classes.link)} href="/home/employee">
          <IconUserCircle className={classes.linkIcon} stroke={1.5} />
          <span>Employee</span>
        </a>
        <a className={cx(classes.link)} href="/home/task">
          <IconChecklist className={classes.linkIcon} stroke={1.5} />
          <span>Task</span>
        </a>
        <a className={cx(classes.link)} href="/home/setting">
          <IconSettings className={classes.linkIcon} stroke={1.5} />
          <span>Setting</span>
        </a>
      </Navbar.Section>
      <Navbar.Section grow mt="md">
        <a
          href="/"
          className={classes.link}
          onClick={(event) => event.preventDefault()}
        ></a>
      </Navbar.Section>
      <Navbar.Section className={classes.footer}>
        <div style={{ marginRight: "4rem" }}>
          <IconLogout className={classes.linkIcon} stroke={1.5} />
          <span>Logout</span>
        </div>
      </Navbar.Section>
    </Navbar>
  );
}
