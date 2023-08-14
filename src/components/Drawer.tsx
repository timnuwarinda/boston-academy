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
import { useRouter } from 'next/router';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SwipeableTemporaryDrawer() {
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      position="relative"
      display="flex"
      flexDirection="column"
      justifyContent={"center"}
      height="100%"
      padding="1rem"
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
      <Typography color="black">Menu</Typography>
      <Box position="relative" zIndex="3000">
        <Typography
          fontSize="3rem"
          variant="h1"
          onClick={() => router.push("/")}
          color={router.asPath === "/" ? "#F0AD00" : "black"}
          sx={{
            cursor: "pointer"
          }}
        >
          Home
        </Typography>
        <Typography
          fontSize="3rem"
          variant="h1"
          onClick={() => router.push("/about")}
          color={router.asPath === "/about" ? "#F0AD00" : "black"}
          sx={{
            cursor: "pointer"
          }}
        >
          About Us
        </Typography>
        <Typography
          fontSize="3rem"
          variant="h1"
          onClick={() => router.push("/board")}
          color={router.asPath === "/board" ? "#F0AD00" : "black"}
          sx={{
            cursor: "pointer"
          }}
        >
          Board
        </Typography>
        <Typography
          fontSize="3rem"
          variant="h1"
          onClick={() => router.push("/contact")}
          color={router.asPath === "/contact" ? "#F0AD00" : "black"}
          sx={{
            cursor: "pointer"
          }}
        >
          Contact
        </Typography>
      </Box>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("right", true)} sx={{ color: "white" }}>
          <Menu />
        </IconButton>
        <SwipeableDrawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
          onOpen={toggleDrawer("right", true)}
        >
          {list("right")}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}