import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

type cardContent = {
    imageName: string;
    title: string;
    body: string;
    link: string;
};

export const AdditionalInfoCard = ({ imageName, title, body, link }: cardContent) => {
    return (
        <Card sx={{ width: 270, maxWidth: 325, boxShadow: 0 }}>
            <CardMedia
                component="img"
                height="160"
                sx={{ width: "85%" }}
                image={require(`../assets/images/${imageName}`)}
                alt="bg_image"
            />
            <CardContent sx={{ px: 0 }}>
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
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1, width: "85%" }}
                >
                    {body}
                </Typography>
            </CardContent>
            <CardActions sx={{ px: 0 }}>
                <Button
                    size="small"
                    sx={{ color: "#1ccccd", textTransform: "capitalize" }}
                >
                    <Box sx={{ mr: 1 }}>
                        <Link className="read-more-link" to={link}>Read More</Link>
                    </Box>
                    <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
                </Button>
            </CardActions>
        </Card>
    );
};
