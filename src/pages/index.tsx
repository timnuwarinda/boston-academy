import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Box, Button, Typography } from '@mui/material'
import { SouthEast } from '@mui/icons-material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box width="100%" height="fit-content" position="relative" margin={0} padding={0} sx={{
        letterSpacing: 0,
        wordSpacing: 0,
        fontSize: 0
      }}>
        <Image
          src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680429825/Boston%20Academy/boy_writing_d75che.png"
          alt={`Young african american boy writing`}
          layout={"responsive"}
          style={{
            margin: 0
          }}
          width={0}
          height={0}
          priority={true}
          objectFit="cover"
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "space-between",
            px: ["1rem", "6rem"],
            position: "absolute",
            top: 0,
            width: "100vw",
            height: "100%",
            background: "linear-gradient(90deg, #0E4D65 0%, rgba(14, 77, 101, 0) 75%, #0E4D65 100%)",
            backgroundBlendMode: "overlay",
            gap: "2rem"
            // transform: "rotate(-90deg)"
          }}
        >
          <Box width="fit-content">
            <Typography variant="h2" width="fit-content">A <br />CULTURALLY <br />ENHANCED <br />LEARNING <br />ENVIRONMENT</Typography>
            <Typography fontSize="1.25rem" maxWidth="25rem">Boston urban academy is an independent, elementary school that produces inquisitive students</Typography>
          </Box>
          <Button variant="contained" sx={{ width: "fit-content" }}>
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

        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="space-between" padding={["1rem", "6rem"]}>
          <Box width="30rem" sx={{
            letterSpacing: 0,
            wordSpacing: 0,
            fontSize: 0
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
          <Box width="30rem" display="flex" flexDirection="column" gap="2rem">
            <Box>
            <Typography variant="h2" color="black"><span style={{color: "#f0ad00"}}>ABOUT</span> US</Typography>
            <Typography color="black" fontSize={["1rem", "1.25rem"]}>Boston Urban Academy was founded to enable students in under-resourced Boston neighborhoods to reach their highest potential. Sherry Brooks-Roberts transformed her dream into a reality by utilizing her 35 years as an elementary school educator, administrator and change agent.</Typography>
            </Box>
            <Button variant="contained" sx={{width:"fit-content"}}>Learn More</Button>
          </Box>
        </Box>

      </Box>
      <Box width="100%" display="flex" padding={["1rem", "6rem"]} sx={{ backgroundColor: "#f0ad00" }} alignItems="center" justifyContent="space-between">
        <Box width="30rem">
          <Typography variant='h3'>OUR MISSION STATEMENT</Typography>
          <Typography variant="body1" >BUA provides young children, living in under-resourced Boston neighborhoods, a tuition free, high-quality, innovative education. Our students love learning, think critically and know their worth.
          </Typography>
        </Box>
        <Box width="40rem" sx={{
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
      <Box sx={{ backgroundColor: "#0e4d65" }} padding={["1rem", "6rem"]} display="flex" flexDirection="column" gap="6rem">
        <Box display="flex" flexDirection="row" justifyContent={"space-between"}>
          <Typography variant="h3" fontFamily="Gilroy-Bold" color="white" lineHeight="100%">Board<br/>of Directors</Typography>
          <Typography width="40rem" variant="body1" color="white" fontSize="1.25rem">The Boston Urban Academy board is composed of highly-credentialed local professionals partnering to create a learning environment that encourages critical tinkering and a love of learning through the NGUZA SABA; the 7 principles of Kwanzaa</Typography>
        </Box>
        <Box display="flex" alignItems="flex-end" justifyContent={"space-between"}>
          <Box display="flex" flexDirection="column" >
            <SouthEast />
            <Button variant="text" sx={{width: "fit-content"}}>Learn More</Button>
          </Box>
          <Box display="flex" gap="3rem">
            <Box display={"flex"} alignItems="flex-end" width="25rem" sx={{aspectRatio: "3/4", backgroundColor: "#f0ad00", borderRadius: "20rem 20rem 0 0" }}>
              <Image
                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680439404/Boston%20Academy/Subject_5_1_uwdmog.png"
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
            <Box display={"flex"} alignItems="flex-end" width="25rem" sx={{aspectRatio: "3/4", backgroundColor: "#f0ad00", borderRadius: "20rem 20rem 0 0" }}>
              <Image
                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680439416/Boston%20Academy/Subject_5_1-1_h2kjvx.png"
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
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
