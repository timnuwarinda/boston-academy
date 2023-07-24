import Layout from "@/components/Layout"
import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import React from "react"

export default function Donate() {
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

                    <Box position="relative" display="flex" flexDirection={["column", "column", "row"]} alignItems="center" padding={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]}>
                        <Typography variant="h2" fontSize={["3rem"]}>Donate to<br />
                            <span style={{ color: "#F0AD00" }}>Boston Urban Academy</span>
                        </Typography>

                        <Box>
                            <Typography variant="body1" fontSize={["1rem", "1.25rem"]} width={["100%", "30rem", "30rem", "40rem"]}>
                                Click the button below that redirects you to our donation page. Thank you for your support!
                            </Typography>
                            <Button variant="contained" sx={{
                                mt: "0.5rem",
                                padding: "1rem",
                                lineHeight: "100%",
                                height: "fit-content"
                            }}>
                                DONATE
                            </Button>
                        </Box>
                    </Box>



                </Box>


            </Box>
        </Layout>
    )
}