import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import React from "react"

function BoardMember({ variant, name, title }: any) {
    return (
        <Box sx={{
            letterSpacing: 0,
            wordSpacing: 0,
            fontSize: 0,
            mt: variant === "spaced" ? "8rem" : 0,
            height: "fit-content"
        }}>
            <Box sx={{ backgroundColor: "#F0AD00", }}>
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
            <Typography fontFamily={"Gilroy-Bold"} fontSize="1.5rem">{name}</Typography>
            <Typography variant="body1" >{title}</Typography>
        </Box>
    )
}

export default function Board() {
    return (
        <Box width="100%" sx={{ backgroundColor: "#0e4d65" }}>
            <Box
                width="100vw"
                position="relative"
                overflow="hidden"
            >
                <Box position="absolute" top="0" width={"100%"} overflow="hidden">
                    <img
                        src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680468921/Boston%20Academy/Frame_5168_scjc7b.svg"
                        alt={`Background graphic`}
                        style={{
                            margin: 0,
                            objectFit: "cover",
                            width: "100%"
                        }}

                    />
                </Box>

                <Box position="relative" display="flex" flexDirection="row" alignItems="center" padding={["1rem", "6rem"]}>
                    <Typography variant="h2">Board of <br /> Directors</Typography>
                </Box>

                <Box position="relative" padding="6rem" display="flex" flexDirection="column" gap="6rem" sx={{ backgroundColor: "#EF2222" }} >
                    <Box display="grid" gridTemplateColumns={"1fr 1fr"} gap="4rem" >
                        <BoardMember name="Jane Doe" title="Board Chairperson" />
                        <BoardMember variant="spaced" name="Jane Doe" title="Board Chairperson" />
                    </Box>
                    <Box display="grid" gridTemplateColumns={"1fr 1fr"} gap="4rem" >
                        <BoardMember name="Jane Doe" title="Board Chairperson" />
                        <BoardMember variant="spaced" name="Jane Doe" title="Board Chairperson" />
                    </Box>
                    <Box display="grid" gridTemplateColumns={"1fr 1fr"} gap="4rem" >
                        <BoardMember name="Jane Doe" title="Board Chairperson" />
                        <BoardMember variant="spaced" name="Jane Doe" title="Board Chairperson" />
                    </Box>
                </Box>

            </Box>

            <Box position={"relative"} overflow="hidden">
                <Box zIndex={10} position={"absolute"} top="0" left="0" width="100%">
                    <img src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680468921/Boston%20Academy/Frame_5168_scjc7b.svg" alt="" style={{ objectFit: "cover", width: "100%" }} />
                </Box>
                <Box position="relative" zIndex={1000} padding="6rem" display="flex" flexDirection={"column"} gap="6rem">
                    <Box display={"grid"} gridTemplateColumns="1fr 1fr">
                        <Box display={"flex"} alignItems="center" gap="0.5rem">
                            <Box height="0.5rem" width="0.5rem" sx={{ backgroundColor: "#F0AD00" }} />
                            <Typography fontSize="2rem" fontFamily="Gilroy-Bold">Why choose BUA?</Typography>
                        </Box>
                        <Typography width="30rem" fontSize={"1.25rem"}>BUA provides young children, living in under-resourced Boston neighborhoods, a tuition free, high-quality, innovative education. Our students love learning, think critically and know their worth.
                        </Typography>
                    </Box>
                    <Box>
                        <Image
                            src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680537649/Boston%20Academy/chairperson_oiiqpj.png"
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
    )
}