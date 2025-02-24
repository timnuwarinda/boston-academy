import { Button, IconButton, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import NavDrawer from "./Drawer";

interface Props {
  children: ReactNode;
  title?: string;
  onScroll?: any;
}

export default function Layout({ children }: Props) {
  const navRef: any = useRef(null);
  const router = useRouter();

  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    console.log(navRef.current.offHeighH);
    setNavHeight(navRef.current.offHeighH);
  }, [navRef.current]);

  return (
    <>
      <Head>
        <title>Boston Urban Academy</title>
        <meta
          name="description"
          content="A culturally enhanced learning environment"
        />

        <meta content="Boston Urban Academy" property="og:title" />
        <meta
          content="A culturally enhanced learning environment"
          property="og:description"
        />
        <meta
          content="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1708676144/Boston%20Academy/Home_Page_jv3vam.png"
          property="og:image"
        />
        <meta content="Boston Urban Academy" property="twitter:title" />
        <meta
          content="A culturally enhanced learning environment"
          property="twitter:description"
        />
        <meta
          content="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1708676144/Boston%20Academy/Home_Page_jv3vam.png"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />

        {/* <link
          href="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1706915872/portfolio/smm_1_fnkgd8.ico"
          rel="shortcut icon" type="image/x-icon" />
        <link
          href="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1706916263/portfolio/Frame_2_a3jh0q.jpg"
          rel="apple-touch-icon" /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://fonts.cdnfonts.com/css/gilroy-bold"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/gilroy-heavy"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/gilroy-light"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/gilroy-medium"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/gilroy-regular"
          rel="stylesheet"
        />
      </Head>
      <nav
        ref={navRef}
        style={{
          // position: "fixed",
          // top: "0",
          // left: "0",
          width: "100vw",
          zIndex: 10,
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent={"space-between"}
          width="100%"
          sx={{ backgroundColor: "#0e4d65" }}
          padding={["1rem", "1rem 2rem", "1rem 4rem", "1rem 6rem"]}
        >
          <Link href="/">
            <Box
              width="16rem"
              overflow="hidden"
              display="flex"
              alignItems={"center"}
            >
              <Image
                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680450056/Boston%20Academy/boston-urban-academy-banner-logo_orig_1_pqaciq.png"
                alt={`BUA logo`}
                layout={"responsive"}
                style={{
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
                width={0}
                height={0}
                priority={true}
              />
            </Box>
          </Link>

          <Box display="flex" gap={["1rem", "3rem"]} alignItems="center">
            <Box gap="1rem" display={["none", "none", "none", "flex"]}>
              <Link href="/">HOME</Link>
              <Link href="/about">ABOUT</Link>
              <Link href="/board">BOARD</Link>
              <Link href="/contact">CONTACT</Link>
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f0ad00",
                padding: "0.5rem 1rem",
                lineHeight: "100%",
                height: "fit-content",
                display: ["none"],
              }}
            >
              DONATE
            </Button>
            <NavDrawer />
          </Box>
        </Box>
      </nav>
      <main style={{ paddingTop: navHeight, color: "white" }}>{children}</main>
      <footer style={{ width: "100%" }}>
        <Box
          sx={{ backgroundColor: "#0e4d65" }}
          padding={["1rem", "6rem"]}
          display="flex"
          flexDirection={"column"}
          gap="4rem"
        >
          <Box
            display="flex"
            flexDirection={["column", "row"]}
            gap="6rem"
            justifyContent={"space-between"}
          >
            <Box display={"flex"} flexDirection="column" gap="0.5rem">
              <Box
                width="16rem"
                overflow="hidden"
                display="flex"
                alignItems={"center"}
              >
                <Image
                  src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680450056/Boston%20Academy/boston-urban-academy-banner-logo_orig_1_pqaciq.png"
                  alt={`BUA logo`}
                  layout={"responsive"}
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                  width={0}
                  height={0}
                  priority={true}
                />
              </Box>
              <Typography fontFamily="Gilroy-Bold" fontSize={["1rem", "2rem"]}>
                Support the cause. Partner with us
              </Typography>
              <Button
                variant="contained"
                // href="/donate"
                href="https://boston-urban-academy-64d82d2ca4f76.springly.org/collect/description/351545-m-boston-urban-academy-fundraising-campaign?iframe=1"
                sx={{
                  backgroundColor: "#f0ad00",
                  padding: "1rem",
                  lineHeight: "100%",
                  height: "fit-content",
                  fontWeight: 700,
                }}
              >
                DONATE
              </Button>
            </Box>
            <Box display="grid" gridTemplateColumns={"1fr 1fr"} gap="4rem">
              {/* <Box display="flex" flexDirection="column" >
                                <Typography fontFamily="Gilroy-Bold">Site Map</Typography>
                                <Box>
                                    <Link href="/">
                                        <Typography>
                                            Home
                                        </Typography>
                                    </Link>
                                    <Link href="/about">
                                        <Typography>
                                            About
                                        </Typography>
                                    </Link>
                                    <Link href="/board">
                                        <Typography>
                                            Board
                                        </Typography>
                                    </Link>
                                    <Link href="/contact">
                                        <Typography>
                                            Contact
                                        </Typography>
                                    </Link>
                                    <Link href="/">
                                        <Typography>
                                            Donate
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box> */}
              <Box>
                <Typography fontFamily={"Gilroy-Bold"}>Address</Typography>
                <Typography>P.O Box 365058</Typography>
                <Typography>Boston, MA 02136</Typography>
                <Typography>United States</Typography>
              </Box>
              {/* <Box display="flex" flexDirection="column" gap="1rem">
                                <Typography fontFamily="Gilroy-Bold">Socials</Typography>
                                <Link href="/">Facebook</Link>
                                <Link href="/">LinkedIn</Link>
                                <Link href="/">Instagram</Link>
                                <Link href="/">Twitter</Link>
                            </Box> */}
            </Box>
            {/* <Box display="flex" flexDirection="column" gap="1rem" >
                            <Typography fontSize={["2rem"]}>Sign Up for our Newsletter</Typography>
                            <TextField
                                variant="standard"
                                placeholder="Enter your email"
                                sx={{
                                    "& .MuiInputBase-input": {
                                        color: "white",
                                        borderColor: "white"
                                    }
                                }}
                            />
                        </Box> */}
          </Box>
          <Box
            display="flex"
            flexDirection={["column", "row"]}
            justifyContent={"space-between"}
          >
            <Typography
              fontSize={["0.75rem", "0.875rem"]}
              color="white"
              sx={{ cursor: "pointer" }}
              onClick={() => router.push("mailto:info@bostonurbanacademy.org")}
            >
              info@bostonurbanacademy.org
            </Typography>
            <Typography
              fontSize={["0.75rem", "0.875rem"]}
              color="white"
              sx={{ cursor: "pointer" }}
              onClick={() => router.push("tel:+6179227505")}
            >
              Tel: +617-922-7505
            </Typography>
            <Typography fontSize={["0.75rem", "0.875rem"]} color="white">
              © 2024 BUA. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </footer>
    </>
  );
}
