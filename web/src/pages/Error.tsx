import * as React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export const Error = () => {
	const navigate = useNavigate();
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
			}}
		>
			<Container maxWidth="md">
				<Grid container spacing={2}>
					<Grid xs={6}>
						<Typography variant="h1">404</Typography>
						<Typography variant="h6">Work in Progress.</Typography>
						<Button
							sx={{ bgcolor: "#3ed9c4" }}
							variant="contained"
							onClick={() => navigate(-1)}
						>
							Go Back
						</Button>
					</Grid>
					<Grid xs={6}>
						<img
							src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569__340.jpg"
							alt=""
							width={500}
							height={250}
						/>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
};
