import { Button, FormControlLabel, Switch, TextField, Typography } from '@mui/material'
import { borderRadius, Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
    return (
        <Box sx={{ backgroundColor: "#0e4d65" }}>
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
                    <Typography variant="h2">Contact</Typography>
                </Box>
                <Box position="relative" sx={{ backgroundColor: "#F0AD00" }} display="grid" gridTemplateColumns={["1fr", "1fr", "2fr 3fr"]} p={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]}gap="4rem">
                    <Box display={"flex"} flexDirection="column" gap="2rem">
                        <Typography fontSize="3rem" lineHeight="100%">Speak to one <br />of us</Typography>
                        <Box>
                            <Image
                                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680538743/Boston%20Academy/map_uydfy5.png"
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
                        <Box>
                            <Typography fontFamily={"Gilroy-Bold"}>Address</Typography>
                            <Typography>P.O Box 365058</Typography>
                            <Typography>Boston, MA 02136</Typography>
                            <Typography>United States</Typography>
                        </Box>
                    </Box>
                    <Box display={"flex"} flexDirection="column" gap="2rem">
                        <Box display="grid" gridTemplateColumns="1fr 1fr" gap="1rem">
                            <TextField placeholder='First Name' name="firstName" sx={{
                                "&.MuiTextField": {
                                    backgroundColor: "white"
                                }
                                }} />
                            <TextField placeholder='Last Name' name="lastName" />
                        </Box>
                        <TextField placeholder='Email Address' name="email" />
                        <TextField placeholder='Your message' name="message" multiline={true} rows={6} />
                        <FormControlLabel control={<Switch defaultChecked />} label="I agree to the Terms and Conditions" />
                        <Button variant="contained" sx={{
                            backgroundColor: "#0E4D65",
                            borderRadius: "0",
                            fontFamily: "Gilroy-Bold",
                            textTransform: "capitalize"
                        }}>Submit</Button>
                    </Box>
                </Box>
            </Box>
            <Box
                width="100vw"
                position="relative"
                overflow="hidden"
                sx={{ backgroundColor: "#EDF0F1" }}
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

                <Box position="relative" display="grid" gridTemplateColumns={["1fr", '1fr', "3fr 2fr"]} gap="4rem" alignContent="center" padding={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]}>
                    <Box width={["100%", "30rem", "40rem"]} overflow="hidden" border="1px solid red">
                        <Image
                            src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680558082/Boston%20Academy/Group_5118_vt9d5o.png"
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
                    <Box width={["100%", "22rem"]} display={"flex"} flexDirection="column" gap="1rem">
                        <Typography variant="h2" color="#0E4D65">INVEST IN <br />THE DREAM</Typography>
                        <Typography color="black">Our methodology teaches the whole child. Educators reflective of students and families served</Typography>
                        <Box display={"grid"} gridTemplateColumns="1fr 1fr" gap="1rem">
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#EF2222"
                                }}
                            >
                                Donate
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#0E4D65"
                                }}
                            >
                                Support
                            </Button>
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: "#F0AD00"
                                }}
                            >
                                Volunteer
                            </Button>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}