import * as React from "react";
import { Box, Typography, Button, Card, Grid, Paper } from "@mui/material";
import "./style.css";
import { styled } from "@mui/material/styles";
import { CurrencyFormatter } from "../../../components/CurrencyFormatter";

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "justify",
	color: theme.palette.text.secondary,
}));

// This props interface is to be used when data is drilled down dynamically
// type Props = {
// 	data: {
// 		title: string,
// 	}[];
// };
type Props = {
	title: string;
};

export const ProjectDetails = ({ title }: Props) => {
	return (
		<Box
			sx={{
				margin: "auto",
				maxWidth: "900px",
			}}
		>
			<Card className="project__details__upper__layer">
				<Box className="project__title" mr={2}>
					<Typography
						sx={{ color: "#09797A", fontWeight: "600", fontSize: "24.5px" }}
					>
						{title}
					</Typography>
					<Typography
						sx={{
							fontSize: "16px",
							lineHeight: "29px",
							color: "#09797A",
						}}
					>
						<span style={{ fontWeight: "700" }}>Contractor: &nbsp;</span> Triacta Nig.
						Ltd
					</Typography>
					<Typography
						sx={{
							fontSize: "16px",
							lineHeight: "29px",
							color: "#09797A",
						}}
					>
						<span style={{ fontWeight: "700" }}>LGA: &nbsp;</span> Mubi South
					</Typography>
				</Box>
				<Box
					sx={{ display: "flex", justifyContents: "center", alignItems: "center" }}
				>
					<Button
						variant="contained"
						sx={{
							color: "white",
							backgroundColor: "#3ED9C4",
							fontWeight: "500",
							height: "50px",
							width: "250px",
							textTransform: "capitalize",
							"&:hover": { backgroundColor: "#A0A0A0" },
						}}
					>
						Compare To Similar Projects
					</Button>
				</Box>
			</Card>
			<Box
				className="project__detail__middle__layer"
				sx={{ display: "flex", justifyContent: "space-between" }}
				my={2.5}
			>
				<Box className="project__middle__layer__card">
					<Typography className="project__middle__layer__card__heading">
						Contract Amount
					</Typography>
					<Typography className="project__middle__layer__card__content project__amount">
						<span>&#x20A6;</span>
						{CurrencyFormatter(3924780624)}
					</Typography>
				</Box>
				<Box className="project__middle__layer__card">
					<Typography className="project__middle__layer__card__heading">
						Budget Amount
					</Typography>
					<Typography className="project__middle__layer__card__content project__amount">
						<span>&#x20A6;</span>
						{CurrencyFormatter(3924780624)}
					</Typography>
				</Box>
				<Box className="project__middle__layer__card">
					<Typography className="project__middle__layer__card__heading">
						Difference Between Contract And Budget in %
					</Typography>
					<Typography className="project__middle__layer__card__content project__percent">
						<span>+85.1%</span>
					</Typography>
				</Box>
			</Box>
			<Card
				className="project__details__lower__layer"
				sx={{ margin: "20px, auto" }}
			>
				<Box className="project__details__lower__layer_top">
					<div className="project__planning">Planning</div>
					<div className="project__tender">
						Tender
						<div className="tender__point"></div>
					</div>
					<div className="project__award">
						Award
						<div className="award__point"></div>
					</div>
					<div className="project__contract">
						Contract
						<div className="contract__point"></div>
					</div>
					<div className="project__implementation">
						Implementation
						<div className="implementation__point"></div>
					</div>
				</Box>
				<Box sx={{ padding: "30px" }}>
					<Grid container spacing={2}>
						<Grid item xs={12} md={6}>
							<Item>
								<Typography
									sx={{
										color: "#09797A",
										fontWeight: "400",
										fontSize: "14px",
										lineHeight: "22px",
									}}
								>
									Budget Source/Description
								</Typography>
								<Typography
									sx={{
										color: "#4D4D4D",
										fontWeight: "400",
										fontSize: "12px",
										lineHeight: "22px",
									}}
								>
									International Development Association (IDA)
								</Typography>
							</Item>
						</Grid>
						<Grid item xs={12} md={6}>
							<Item>
								<Typography
									sx={{
										color: "#09797A",
										fontWeight: "400",
										fontSize: "14px",
										lineHeight: "22px",
									}}
								>
									Budget URI
								</Typography>
								<Typography
									sx={{
										color: "#4D4D4D",
										fontWeight: "400",
										fontSize: "12px",
										lineHeight: "22px",
									}}
								>
									N/A
								</Typography>
							</Item>
						</Grid>
						<Grid item xs={12} md={6}>
							<Item>
								<Typography
									sx={{
										color: "#09797A",
										fontWeight: "400",
										fontSize: "14px",
										lineHeight: "22px",
									}}
								>
									Project Code
								</Typography>
								<Typography
									sx={{
										color: "#4D4D4D",
										fontWeight: "400",
										fontSize: "12px",
										lineHeight: "22px",
									}}
								>
									N/A
								</Typography>
							</Item>
						</Grid>
						<Grid item xs={12} md={6}>
							<Item>
								<Typography
									sx={{
										color: "#09797A",
										fontWeight: "400",
										fontSize: "14px",
										lineHeight: "22px",
									}}
								>
									Budget Code
								</Typography>
								<Typography
									sx={{
										color: "#4D4D4D",
										fontWeight: "400",
										fontSize: "12px",
										lineHeight: "22px",
									}}
								>
									2021 Work Plan
								</Typography>
							</Item>
						</Grid>
						<Grid item xs={12} md={6}>
							<Item>
								<Typography
									sx={{
										color: "#09797A",
										fontWeight: "400",
										fontSize: "14px",
										lineHeight: "22px",
									}}
								>
									Budget Rationale
								</Typography>
								<Typography
									sx={{
										color: "#4D4D4D",
										fontWeight: "400",
										fontSize: "12px",
										lineHeight: "22px",
									}}
								>
									N/A
								</Typography>
							</Item>
						</Grid>
						<Grid item xs={12} md={12}>
							<Item>
								<Typography
									sx={{
										color: "#09797A",
										fontWeight: "400",
										fontSize: "14px",
										lineHeight: "22px",
									}}
								>
									Documents
								</Typography>
								<Typography
									sx={{
										color: "#4D4D4D",
										fontWeight: "400",
										fontSize: "12px",
										lineHeight: "22px",
									}}
								>
									No documents available
								</Typography>
							</Item>
						</Grid>
					</Grid>
				</Box>
			</Card>
		</Box>
	);
};
