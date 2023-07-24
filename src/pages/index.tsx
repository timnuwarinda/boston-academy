import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Typography } from '@mui/material'
import { SouthEast } from '@mui/icons-material'
import Layout from '@/components/Layout'
import { Router, useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

function BoardMember({ image, name }: any) {
  return (
    <Box>
      <Box display={"flex"} alignItems="flex-end" width={["100%", "100%", "100%", "25rem"]} sx={{ aspectRatio: "3/4", backgroundColor: "#f0ad00", borderRadius: "20rem 20rem 0 0" }}>
        <Image
          src={image}
          alt={`Young african american boy writing`}
          layout={"responsive"}
          style={{
            margin: 0,
          }}
          width={0}
          height={0}
          priority={true}
        />
      </Box>
      <Box mt="0.5rem">
        <Typography fontWeight="600" fontSize="1.25rem">
          {name}
        </Typography>
      </Box>
    </Box>
  )
}

export default function Home() {
  const router = useRouter()
  return (
    <Layout>
      <Box sx={{ backgroundColor: "white" }}>
        <Box width="100%" height={["fit-content"]} position="relative" margin={0} padding={0} overflow="hidden" sx={{
          letterSpacing: 0,
          wordSpacing: 0,
          fontSize: 0
        }}>
          <Box height="100%" sx={{ display: ["none", "none", "block"] }}>
            <Image
              src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680429825/Boston%20Academy/boy_writing_d75che.png"
              alt={`Young african american boy writing`}
              layout={"responsive"}
              style={{
                margin: 0,
              }}
              width={0}
              height={0}
              priority={true}
              objectFit="cover"
            />
          </Box>
          <Box height="100%" sx={{ display: ["block", "block", "none"] }}>
            <Image
              src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680547178/Boston%20Academy/boy2_tnjq6h.png"
              alt={`Young african american boy writing`}
              layout={"responsive"}
              style={{
                margin: 0,
              }}
              width={0}
              height={0}
              priority={true}
              objectFit="cover"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: ["flex-end", "center"],
              alignItems: "space-between",
              px: ["1rem", "2rem", "4rem", "6rem"],
              py: "2rem",
              position: "absolute",
              top: 0,
              width: "100vw",
              height: "100%",
              background: ["linear-gradient(0deg, #0E4D65 0%, rgba(14, 77, 101, 0) 100%, #0E4D65 100%)", "linear-gradient(90deg, #0E4D65 0%, rgba(14, 77, 101, 0) 75%, #0E4D65 100%)"],
              backgroundBlendMode: "overlay",
              gap: ["1rem", "2rem"],
            }}
          >
            <Box width="fit-content">
              <Typography
                variant="h2"
                width="fit-content"
                fontSize={["2.5rem", "2rem", "3rem", "4rem"]}
                display={["block", "none"]}
              >
                A <br />CULTURALLY <br />ENHANCED <br />LEARNING <br />ENVIRONMENT
              </Typography>
              <Typography
                variant="h2"
                width="fit-content"
                fontSize={["2.5rem", "2rem", "3rem", "4rem"]}
                display={["none", "block"]}
              >
                A CULTURALLY <br />ENHANCED <br />LEARNING <br />ENVIRONMENT
              </Typography>
              <Typography
                variant="body1"
                maxWidth="25rem"
                fontSize={["1rem", "1.25rem"]}
              >
                Vision: Boston Urban Academy teaches children to reach their highest potential and to substantially contribute to society.
              </Typography>
            </Box>
            <Button
              variant="contained"
              sx={{ width: "fit-content" }}
              onClick={() => router.push("/about")}
            >
              Learn More
            </Button>
          </Box>
        </Box>
        <Box
          width="100vw"
          position="relative"
          overflow="hidden"
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

          <Box display="flex" flexDirection={["column", "column", "row"]} alignItems="center" justifyContent="space-between" gap="3rem" padding={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]}>
            <Box width="30rem" sx={{
              letterSpacing: 0,
              wordSpacing: 0,
              fontSize: 0,
              width: ["100%", "30rem"],
            }}>
              <Image
                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680432864/Boston%20Academy/boyBBall_cyzs0k.png"
                alt={`Young african american boy writing`}
                layout={"responsive"}
                style={{
                  margin: 0,
                }}
                width={0}
                height={0}
                priority={true}
              // objectFit="cover"
              />
            </Box>
            <Box width={["100%", "40rem"]} display="flex" flexDirection="column" gap={["1rem", "2rem"]}>
              <Box>
                <Typography variant="h2" fontSize={["3rem",]} color="black"><span style={{ color: "#f0ad00" }}>ABOUT</span> US</Typography>
                <Typography color="black" fontSize={["1rem", "1.25rem"]}>
                  Boston Urban Academy (BUA)  is an independent, non-profit, elementary school. BUA will be located in the heart of Boston to educate students in low-socioeconomic households. Our comprehensive curriculum prepares students for lifelong critical thinking and innovation.
                  <br />
                  <br />
                  BUA’s  guiding principles are the Nguzo Saba (Swahili for seven principles). These principles recognize the challenges of growing up Black/Brown in a racialized society and reinforce aspects of African culture to strengthen self-worth and dignity. Students receive an excellent education that addresses the whole child; mind, heart, body and soul. Thanks to an outstanding, diverse faculty and staff, students’ lives are transformed as they are exposed to a wide range of possibilities for their future.
                </Typography>
              </Box>
              <Button
                variant="contained"
                sx={{ width: "fit-content" }}
                onClick={() => router.push("/about")}
              >
                Learn More
              </Button>
            </Box>
          </Box>

        </Box>
        <Box width="100%" display="flex" flexDirection={["column", "column", "row"]} gap="2rem" padding={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]} sx={{ backgroundColor: "#f0ad00" }} alignItems="center" justifyContent="space-between">
          <Box width={["100%", "30rem"]} display="flex" flexDirection="column" gap="0.5rem">
            <Typography variant='h3' fontSize={["3rem"]}>OUR MISSION STATEMENT</Typography>
            <Typography variant="body1" fontSize={["1rem"]}>BUA provides young children, living in under-resourced Boston neighborhoods, a tuition free, high-quality, innovative education. Our students love learning, think critically and know their worth.
            </Typography>
          </Box>
          <Box width={["100%", "30rem", "40rem"]} sx={{
            letterSpacing: 0,
            wordSpacing: 0,
            fontSize: 0
          }}>
            <Image
              src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680434639/Boston%20Academy/girlWriting_nfzn54.png"
              alt={`Young african american boy writing`}
              layout={"responsive"}
              style={{
                margin: 0,
              }}
              width={0}
              height={0}
              priority={true}
            // objectFit="cover"
            />
          </Box>
        </Box>
        <Box sx={{ backgroundColor: "#0e4d65" }} padding={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]} display="flex" flexDirection="column" gap="6rem">
          <Box display="flex" flexDirection={["column", "column", "column", "row"]} justifyContent={"space-between"} gap="1rem">
            <Typography variant="h3" fontFamily="Gilroy-Bold" color="white" lineHeight="100%">Board<br />of Directors</Typography>
            <Typography width={["100%", "30rem", "40rem"]} variant="body1" color="white" fontSize={["1rem", "1.25rem"]}>The Boston Urban Academy board is composed of highly-credentialed local professionals partnering to create a learning environment that encourages critical tinkering and a love of learning through the NGUZO SABA; the 7 principles of Kwanzaa</Typography>
          </Box>
          <Box display="flex" flexDirection={["column", "column", "row-reverse"]} alignItems={"flex-end"} justifyContent={"space-between"} gap="2rem">
            <Box display="flex" flexDirection={["column", "row"]} justifyContent={["flex-start", "flex-end"]} gap="3rem" width="100%">
              <BoardMember
                image="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1690190256/Boston%20Academy/sherry_bz5opi.png"
                name="Sherry Brooks Roberts"
              />
              <BoardMember
                image="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1681582761/Boston%20Academy/Rectangle_88_pycwnc.png"
                name="Donna Maria Cameron"
              />
            </Box>
            <Box display="flex" flexDirection="column" >
              <SouthEast fontFamily="large" />
              <Button
                variant="text"
                sx={{ width: "fit-content", color: "white", whiteSpace: "nowrap" }}
                onClick={() => router.push("/board")}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  )
}
