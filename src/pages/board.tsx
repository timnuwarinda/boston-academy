import Layout from "@/components/Layout"
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
            mt: ["0", variant === "spaced" ? "8rem" : 0],
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
        <Layout>
            <Box width="100%" sx={{ backgroundColor: "#0e4d65" }}>
                <Box
                    width="100vw"
                    position="relative"
                    overflow="hidden"
                >
                    <Box position="absolute" top="0" width={"100%"} display={["block", "none"]}>
                        <img
                            src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680468921/Boston%20Academy/Frame_5168_scjc7b.svg"
                            alt={`Background graphic`}
                            style={{
                                margin: 0,
                                objectFit: "cover",
                                height: "100%"
                            }}

                        />
                    </Box>

                    <Box position="absolute" top="0" width={"100%"} display={["none", "block"]}>
                        <img
                            src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680468921/Boston%20Academy/Frame_5168_scjc7b.svg"
                            alt={`Background graphic`}
                            style={{
                                margin: 0,
                                objectFit: "cover",
                                width: "100%",
                            }}

                        />
                    </Box>

                    <Box position="relative" display="flex" flexDirection="row" alignItems="center" padding={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]}>
                        <Typography variant="h2" fontSize={["3rem"]}>Board of <br /> Directors</Typography>
                    </Box>

                    <Box position="relative" padding={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]} display="flex" flexDirection="column" gap="6rem" sx={{ backgroundColor: "#EF2222" }} >
                        <Box display="grid" gridTemplateColumns={["1fr", "1fr 1fr"]} gap="4rem" >
                            <BoardMember name="Jane Doe" title="Board Chairperson" />
                            <BoardMember variant="spaced" name="Jane Doe" title="Board Chairperson" />
                        </Box>
                        <Box display="grid" gridTemplateColumns={["1fr", "1fr 1fr"]} gap="4rem" >
                            <BoardMember name="Jane Doe" title="Board Chairperson" />
                            <BoardMember variant="spaced" name="Jane Doe" title="Board Chairperson" />
                        </Box>
                        <Box display="grid" gridTemplateColumns={["1fr", "1fr 1fr"]} gap="4rem" >
                            <BoardMember name="Jane Doe" title="Board Chairperson" />
                            <BoardMember variant="spaced" name="Jane Doe" title="Board Chairperson" />
                        </Box>
                    </Box>

                </Box>

                <Box position={"relative"} overflow="hidden" >
                    <Box position="absolute" top="0" width={"100%"} display={["block", "block", "block", "none"]}>
                        <img
                            src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680468921/Boston%20Academy/Frame_5168_scjc7b.svg"
                            alt={`Background graphic`}
                            style={{
                                margin: 0,
                                objectFit: "cover",
                                height: "100%"
                            }}

                        />
                    </Box>

                    <Box position="absolute" top="0" width={"100%"} display={["none", "none", "none", "block"]}>
                        <img
                            src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680468921/Boston%20Academy/Frame_5168_scjc7b.svg"
                            alt={`Background graphic`}
                            style={{
                                margin: 0,
                                objectFit: "cover",
                                width: "100%",
                            }}

                        />
                    </Box>
                    <Box position="relative" zIndex={1000} padding={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]} display="flex" flexDirection={"column"} gap="6rem">
                        <Box display={"grid"} gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}>
                            <Box display={"flex"} alignItems="center" gap="0.5rem">
                                <Box height="0.5rem" width="0.5rem" sx={{ backgroundColor: "#F0AD00" }} />
                                <Typography fontSize="2rem" fontFamily="Gilroy-Bold">Board Statement</Typography>
                            </Box>
                            <Typography width={["100%", "30rem"]} fontSize={["1rem", "1.25rem"]}>
                                BUA provides young children,
                                living in under-resourced Boston neighborhoods, a tuition free,
                                high-quality, innovative education.
                                Our students love learning, think critically and know their worth.
                            </Typography>
                        </Box>
                        <Box display={["none", "block"]}>
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
                        <Box display={["block", "none"]}>
                            <Image
                                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680557006/Boston%20Academy/Rectangle_103_y09mwt.png"
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
        </Layout>
    )
}