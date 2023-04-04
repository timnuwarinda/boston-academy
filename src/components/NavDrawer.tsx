import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function NavDrawer() {
  const router = useRouter()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: [250],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        padding: ["1rem", "2rem"]

      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      position="relative"
    >
      <Box position="absolute" top="0">
        <img
          src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680432400/Boston%20Academy/bd_graphics_m9ozip.svg"
          alt={`Background graphic`}
          style={{
            margin: 0,
            objectFit: "cover"
          }}

        />
      </Box>
      <Typography fontSize="1rem" color="black">Menu</Typography>
      <Box display="flex" flexDirection="column" gap="1rem">
        <Link href="/">
          <Typography variant="h2" color={router.asPath === "/" ? "#F0AD00" : "black"}>
            Home
          </Typography>
        </Link>
        <Link href="/about">
          <Typography variant="h2" color={router.asPath === "/about" ? "#F0AD00" : "black"}>
            About Us
          </Typography>
        </Link>
        <Link href="/board">
          <Typography variant="h2" color={router.asPath === "/board" ? "#F0AD00" : "black"}>
            Board
          </Typography>
        </Link>
        <Link href="/contact">
          <Typography variant="h2" color={router.asPath === "/contact" ? "#F0AD00" : "black"}>
            Contact
          </Typography>
        </Link>
      </Box>
    </Box>
  );

  return (
    <Box>
      <IconButton onClick={toggleDrawer("right", true)} sx={{ color: "white" }}>
        <Menu color={'inherit'} />
      </IconButton>
      <SwipeableDrawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </Box>
  );
}