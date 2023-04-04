import Layout from "@/components/Layout"
import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"
import Image from "next/image"
import React from "react"

export default function About() {
    return (
        <Layout>
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

                    <Box display="flex" flexDirection={["column", "column", "row"]} alignItems={["flex-start", "flex-start", "center"]} justifyContent="space-between" padding={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]}>
                        <Typography variant="h2" fontSize={["3rem"]}><span style={{ color: "#f0ad00" }}>ABOUT</span> US</Typography>
                        <Typography variant="body1" fontSize={["1rem", "1.25rem"]} width={["100%", "30rem", "30rem", "40rem"]}>Boston Urban Academy was founded to enable students in under-resourced Boston neighborhoods to reach their highest potential. Sherry Brooks-Roberts transformed her dream into a reality by utilizing her 35 years as an elementary school educator, administrator and change agent.</Typography>
                    </Box>

                    <Box position="relative">
                        <Box display={["block", "none"]}>
                            <Image
                                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680551745/Boston%20Academy/blue-stripe-boy-portrait_a4hdir.png"
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
                        <Box display={["none", "block"]}>
                            <Image
                                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680465486/Boston%20Academy/Rectangle_67_ddokqg.png"
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

                        <Box sx={{ backgroundColor: "white" }} position="absolute" bottom={0} width="100%" padding="1rem">
                            <Typography color="black" width={["100%", "50rem"]} textAlign={"center"} fontSize={["1rem", "1.25rem"]} mx="auto">BUA will begin with one grade – K0 and serve three-year old students. Subsequently, each year a grade will be added until BUA is a K-Grade 6 elementary school.</Typography>
                        </Box>
                    </Box>

                </Box>

                <Box p={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]} display="flex" flexDirection={"column"} gap={["2rem", "4rem", "8rem", "10rem"]}>
                    <Box display={"grid"} gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]}>
                        <Box display={"flex"} alignItems="center" gap="0.5rem">
                            <Box height="0.5rem" width="0.5rem" sx={{ backgroundColor: "#F0AD00" }} />
                            <Typography fontSize="2rem" fontFamily="Gilroy-Bold">Our Mission</Typography>
                        </Box>
                        <Typography width={["100%", "30rem", "30rem", "40rem"]} fontSize={["1rem", "1.25rem"]}>Boston Urban Academy, an independent, elementary school offers families a choice for high quality, public school education</Typography>
                    </Box>
                    <Box display={"grid"} gridTemplateColumns="1fr 1fr" gap={["1rem", "4rem"]}>
                        <Box>
                            <Image
                                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680466657/Boston%20Academy/Rectangle_81_qzcozb.png"
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
                            <Box height="6rem"></Box>
                            <Box>
                                <Image
                                    src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680466657/Boston%20Academy/Rectangle_82_thjrjd.png"
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

                    <Box display="flex" flexDirection="column" gap={["1rem", "4rem"]}>
                        <Box display={"flex"} alignItems="center" gap="0.5rem">
                            <Box height="0.5rem" width="0.5rem" sx={{ backgroundColor: "#F0AD00" }} />
                            <Typography fontSize="2rem" fontFamily="Gilroy-Bold">Our Values</Typography>
                        </Box>
                        <Box display={"grid"} gridTemplateColumns={["1fr", "1fr", "1fr 1fr"]} gap={["4rem", "2rem"]} width="100%" overflow={"hidden"}>
                            <Box width="100%" overflow={"hidden"} display="flex" flexDirection="column" gap="0.5rem">
                                <Box sx={{ width: "3rem", height: "4rem", overflow: "hidden" }}>
                                    <Image src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680467440/Boston%20Academy/Group-1_pxh8xh.png"
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
                                <Typography variant="h3" color="#F0AD00" fontSize={["2rem"]} width="100%">Comprehensive</Typography>
                                <Typography maxWidth={["100%", "30rem"]} fontSize={["1rem", "1.25rem"]}>
                                    We provide a through, rigorous, expansive, curriculum. It is holistic, culturally responsive, and extends beyond standard curricula.<br />
                                    The approach to instruction is inquiry-based and all subject areas will be woven into the inquiry themes.
                                </Typography>
                            </Box>

                            <Box width="100%" overflow={"hidden"} display="flex" flexDirection="column" gap="0.5rem">
                                <Box sx={{ width: "3rem", height: "4rem", overflow: "hidden" }}>
                                    <Image src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680467440/Boston%20Academy/Vector_kgu5fz.png"
                                        alt={`Young african american boy writing`}
                                        layout={"responsive"}
                                        style={{
                                            margin: 0,
                                        }}
                                        width={0}
                                        height={0}
                                        priority={true} />
                                </Box>
                                <Typography variant="h3" color="#F0AD00" fontSize={["2rem"]}>Collaborative</Typography>
                                <Typography maxWidth={["100%", "30rem"]} fontSize={["1rem", "1.25rem"]}>
                                    We provide a through, rigorous, expansive, curriculum. It is holistic, culturally responsive, and extends beyond standard curricula.<br />
                                    The approach to instruction is inquiry-based and all subject areas will be woven into the inquiry themes.
                                </Typography>
                            </Box>

                            <Box width="100%" overflow={"hidden"} display="flex" flexDirection="column" gap="0.5rem">
                                <Box sx={{ width: "3rem", overflow: "hidden" }}>
                                    <Image src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680467440/Boston%20Academy/Group_amhyid.png"
                                        alt={`Young african american boy writing`}
                                        layout={"responsive"}
                                        style={{
                                            margin: 0,
                                        }}
                                        width={0}
                                        height={0}
                                        priority={true} />
                                </Box>
                                <Typography variant="h3" color="#F0AD00" fontSize={["2rem"]}>Caring</Typography>
                                <Typography maxWidth={["100%", "30rem"]} fontSize={["1rem", "1.25rem"]}>
                                    We provide a through, rigorous, expansive, curriculum. It is holistic, culturally responsive, and extends beyond standard curricula.<br />
                                    The approach to instruction is inquiry-based and all subject areas will be woven into the inquiry themes.
                                </Typography>
                            </Box>

                        </Box>
                    </Box>

                </Box>

                <Box position={"relative"} overflow="hidden">
                    <Box position="absolute" top="0" width={"100%"} display={["block", 'block', "block", "none"]}>
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
                        <Box display={["none", "block"]} width="100%" overflow={"hidden"}>
                            <Image
                                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680469314/Boston%20Academy/Rectangle_83_xgufn3.png"
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
                                src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680555328/Boston%20Academy/Rectangle_83_p9guqr.png"
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
                        <Box display={"grid"} gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}>
                            <Box display={"flex"} alignItems="center" gap="0.5rem">
                                <Box height="0.5rem" width="0.5rem" sx={{ backgroundColor: "#F0AD00" }} />
                                <Typography fontSize="2rem" fontFamily="Gilroy-Bold">Why choose BUA?</Typography>
                            </Box>
                            <Typography width={["100%", "30rem"]} fontSize={["1rem", "1.25rem"]}>BUA provides young children, living in under-resourced Boston neighborhoods, a tuition free, high-quality, innovative education. Our students love learning, think critically and know their worth.
                            </Typography>
                        </Box>
                    </Box>
                </Box>



                <Box position={"relative"} overflow="hidden" padding={["6rem 1rem", "6rem 2rem", "6rem 4rem", "6rem"]} display={"flex"} flexDirection="column" gap="6rem">
                    <Box display={"grid"} gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}>
                        <Box display={"flex"} alignItems="center" gap="0.5rem">
                            <Box height="0.5rem" width="0.5rem" sx={{ backgroundColor: "#F0AD00" }} />
                            <Typography fontSize="2rem" fontFamily="Gilroy-Bold">Teaching Models</Typography>
                        </Box>
                        <Typography width={["100%", "30rem"]} fontSize={["1rem", "1.25rem"]}>
                            The 7 principles of Kwanzaa support our values of discovery, collaboration, rigorous education, and emotional success
                        </Typography>
                    </Box>

                    <Box width={["100%", "30rem", "50rem"]} marginX={"auto"}>
                        <Image
                            src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680495458/Boston%20Academy/Group_5202_yhbubb.svg"
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


                <Box width="100%" sx={{ backgroundColor: "white" }}>
                    <Box display={["none", "flex"]}>
                        <Image
                            src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680499374/Boston%20Academy/Rectangle_84_icusf7.png"
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
                    <Box display={["flex", "none"]}>
                        <Image
                            src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680555742/Boston%20Academy/Rectangle_84_gvtiz7.png"
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
                    <Box display="flex" flexDirection={["column", "column", "row"]} gap="3rem" justifyContent={"space-between"} padding={["4rem 1rem", "6rem"]}>
                        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
                            <Typography fontSize={["4rem", "4rem", "4rem", "6rem"]} color="#0E4D65" lineHeight="100%">30+</Typography>
                            <Typography color="black" fontSize={["1.25rem", "1.25rem", "1.25rem", "1.5rem"]}>Projects</Typography>
                        </Box>
                        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
                            <Typography fontSize={["4rem", "4rem", "4rem", "6rem"]} color="#0E4D65" lineHeight="100%">300+</Typography>
                            <Typography color="black" fontSize={["1.25rem", "1.25rem", "1.25rem", "1.5rem"]}>Students</Typography>
                        </Box>
                        <Box display={"flex"} flexDirection="column" alignItems={"center"}>
                            <Typography fontSize={["4rem", "4rem", "4rem", "6rem"]} color="#0E4D65" lineHeight="100%">10 Years</Typography>
                            <Typography color="black" fontSize={["1.25rem", "1.25rem", "1.25rem", "1.5rem"]}>Of Changing Lives</Typography>
                        </Box>
                    </Box>

                    <Box padding={["4rem 1rem", "6rem"]} display="flex" flexDirection="column" gap="2rem">
                        <Box display={"flex"} alignItems="center" gap="0.5rem">
                            <Box height="0.5rem" width="0.5rem" sx={{ backgroundColor: "#F0AD00" }} />
                            <Typography fontSize="2rem" fontFamily="Gilroy-Bold" color="#3C3C3C">Our Partners</Typography>
                        </Box>
                        <Box display={"flex"} width='100%' gap="4rem">
                            <Box width={["6rem", "6rem"]}>
                                <Image
                                    src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680500005/Boston%20Academy/WTR_1000_2021_recommended_firm_signature_0_1_tgzsl4.png"
                                    alt={`Young african american boy writing`}
                                    style={{
                                        margin: 0,
                                    }}
                                    width={0}
                                    height={0}
                                    priority={true}
                                />
                            </Box>
                            <Box height={["3rem", "6rem"]}>
                                <Image
                                    src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680500006/Boston%20Academy/MYVptHf6_400x400_1_c6rena.png"
                                    alt={`Young african american boy writing`}
                                    style={{
                                        margin: 0,
                                    }}
                                    width={0}
                                    height={0}
                                    priority={true}
                                />
                            </Box>
                            <Box height={["3rem", "6rem"]}>
                                <Image
                                    src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680500004/Boston%20Academy/African-legal-Awards-2020_1_qpbuze.png"
                                    alt={`Young african american boy writing`}
                                    style={{
                                        margin: 0,
                                    }}
                                    width={0}
                                    height={0}
                                    priority={true}
                                />
                            </Box>
                            <Box height={["3rem", "6rem"]}>
                                <Image
                                    src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680500005/Boston%20Academy/WTR_1000_2021_recommended_firm_signature_0_1_tgzsl4.png"
                                    alt={`Young african american boy writing`}
                                    style={{
                                        margin: 0,
                                    }}
                                    width={0}
                                    height={0}
                                    priority={true}
                                />
                            </Box>
                            <Box height={["3rem", "6rem"]}>
                                <Image
                                    src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680500006/Boston%20Academy/MYVptHf6_400x400_1_c6rena.png"
                                    alt={`Young african american boy writing`}
                                    style={{
                                        margin: 0,
                                    }}
                                    width={0}
                                    height={0}
                                    priority={true}
                                />
                            </Box>
                            <Box height={["3rem", "6rem"]}>
                                <Image
                                    src="https://res.cloudinary.com/dfmoqlbyl/image/upload/v1680500004/Boston%20Academy/African-legal-Awards-2020_1_qpbuze.png"
                                    alt={`Young african american boy writing`}
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
        </Layout>
    )
}