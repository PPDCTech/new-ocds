import * as React from "react";
import { Outlet } from "react-router-dom";

import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    Typography,
} from "@mui/material";
import { AdditionalInfoCard } from "../../components/additonalInfoCard";
import { AdditionalInfoHero } from "./AdditionalInfoHero";
import "./AdditionalInformation.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import additionalInfo from "../../assets/images/additionalInfo.png";

export const AdditionalInformation = () => {
    return (
        <PageWrapper>
            <AdditionalInfoHero />
            <Box sx={{ margin: "1% 0 15%" }}>
                <Container maxWidth="lg">
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Box sx={{ width: "100%" }}>
                                <Grid
                                    container
                                    rowSpacing={1}
                                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                                >
                                    <Grid item xs={3}>
                                        <Box className="card border-0">
                                            <img
                                                className="card-img"
                                                src={additionalInfo}
                                                alt="bg"
                                                style={{ height: "350px" }}
                                            />
                                            <Box
                                                className="card-img-overlay"
                                                sx={{
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    boxShadow: 0,
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Typography
                                                    gutterBottom
                                                    variant="h5"
                                                    component="div"
                                                    sx={{
                                                        color: "#09797A",
                                                        fontWeight: 700,
                                                        lineHeight: 1.2,
                                                        fontSize: 29,
                                                    }}
                                                >
                                                    Adamawa
                                                    <br />
                                                    state public procurement
                                                    manual
                                                </Typography>
                                                <Button
                                                    size="small"
                                                    sx={{
                                                        color: "#1ccccd",
                                                        textTransform:
                                                            "capitalize",
                                                        alignSelf: "start",
                                                        pl: 0,
                                                        marginTop: 5,
                                                    }}
                                                >
                                                    <Box sx={{ mr: 1 }}>
                                                        Read More
                                                    </Box>
                                                    <ArrowForwardIosIcon
                                                        sx={{ fontSize: 14 }}
                                                    />
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <AdditionalInfoCard
                                            imageName="additionalInfo.png"
                                            title="Adamawa state public procurement law"
                                            body="The Public Procurement Law 2013 established the Bureau of Public Procurement as the regulatory authority responsible for the monitoring and oversight of public procurement."
                                            link={"https://www.bpp.ad.gov.ng/"}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <AdditionalInfoCard
                                            imageName="additionalInfo.png"
                                            title="Info on FOI"
                                            body="The  Freedom of Information (FOI) Act 2011 was passed by the National Assembly on 24th May 2011 and assented by President Goodluck Jonathan on 28th May, 2011."
                                            link={"https://ncc.gov.ng/licensing-regulation/legal/foia"}
                                        />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <AdditionalInfoCard
                                            imageName="additionalInfo.png"
                                            title="Link to CAC"
                                            body="."
                                            link={"https://search.cac.gov.ng/home"}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ my: 1, py: 3 }}>
                                <Typography
                                    sx={{
                                        color: "#09797A",
                                        fontWeight: 600,
                                        mb: 4,
                                    }}
                                >
                                    Additional Resources:
                                    <span className="line"></span>
                                </Typography>
                                <Card sx={{ display: "flex", boxShadow: 0 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        sx={{ width: "20%" }}
                                        image={require("../../assets/images/additionalInfo.png")}
                                        alt="green iguana"
                                    />
                                    <CardContent
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                            sx={{
                                                color: "#09797A",
                                                fontWeight: 700,
                                                lineHeight: 1,
                                                fontSize: 20,
                                            }}
                                        >
                                            Link to the anti-graft agency
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ width: "95%" }}
                                        >
                                            Bonus malus vuvuzela innan polydana.
                                            Begick möde vinterkräksjuka inte
                                            stenor i beskapet. Motins autoseska
                                            i hikust spermatvätt dis.
                                            Halalturism refaktisk, nigarade.
                                            Epidol sunat rosk sopreligen. Du kan
                                            vara drabbad. Makrossa belig or.
                                            Decisade hexasade. Ossade penas
                                            ifall prosk hyposat ötydest.
                                            Löskapet eutyligt gir i reren pimpa.
                                            Dibel depp senar.
                                        </Typography>
                                        <Button
                                            size="small"
                                            sx={{
                                                color: "#1ccccd",
                                                textTransform: "capitalize",
                                                alignSelf: "start",
                                                pl: 0,
                                                mt: 2,
                                            }}
                                        >
                                            <Box sx={{ mr: 1 }}>Read More</Box>
                                            <ArrowForwardIosIcon
                                                sx={{ fontSize: 14 }}
                                            />
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Box>
                        </CardContent>
                    </Card>
                </Container>
            </Box>

            {/*
			The Outlet Component is required for
			 Breadcrumbs nested routes 
			  */}
            <Outlet />
        </PageWrapper>
    );
};
