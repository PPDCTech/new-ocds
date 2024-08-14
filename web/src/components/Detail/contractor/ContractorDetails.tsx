import * as React from "react";
import "./style.css";
import {
	Box,
	IconButton,
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	Stack,
} from "@mui/material";
import { TbCreditCard } from "react-icons/tb";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Chart } from "./Chart";
import { CurrencyFormatter } from "../../../components/CurrencyFormatter";

// This props interface is to be used when data is drilled down dynamically
// type Props = {
// 	data: {
// 		title: string,
// 	}[];
// };
type Props = {
	title: string;
};

export const ContractorDetails = ({ title }: Props) => {
	return (
		<Box
			sx={{
				margin: "auto",
				maxWidth: "900px",
			}}
		>
			<Card className="contractor__details__upper__layer">
				<Box className="contractror__title" mr={2}>
					<Typography
						sx={{ color: "#09797A", fontWeight: "600", fontSize: "24.5px" }}
					>
						{title}
					</Typography>
				</Box>
				<Button
					variant="contained"
					sx={{
						color: "white",
						backgroundColor: "#3ED9C4",
						fontWeight: "500",
						height: "50px",
						textTransform: "capitalize",
						"&:hover": { backgroundColor: "#A0A0A0" },
					}}
				>
					View Projects
				</Button>
			</Card>
			<Box className="contractor__details__middle__layer" my={1.5}>
				<Box className="middle__layer__card__container">
					<Card className="middle__layer__card">
						<Typography className="middle__layer__card__heading">
							Total Awarded Contracts
						</Typography>
						<Typography className="middle__layer__card__content">11</Typography>
					</Card>
					<Card className="middle__layer__card">
						<Typography className="middle__layer__card__heading">
							Total Value of Contracts
						</Typography>
						<Typography className="middle__layer__card__content">
							<span>&#x20A6;</span>
							{CurrencyFormatter(3924780624)}
						</Typography>
					</Card>
					<Card className="middle__layer__card">
						<Typography className="middle__layer__card__heading">
							Highest Contract Amount
						</Typography>
						<Typography className="middle__layer__card__content">
							<span>&#x20A6;</span>
							{CurrencyFormatter(508260208)}
						</Typography>
					</Card>
				</Box>
				<Box className="middle__layer__chart__box">
					<Chart />
				</Box>
			</Box>
			<Card className="contractor__details__lower__layer">
				<Box className="lower__layer__top">
					<Box sx={{ display: "flex" }} my={2}>
						<IconButton aria-label="info" sx={{ color: "#09797A" }}>
							<TbCreditCard />
						</IconButton>
						<Box>
							<Typography
								sx={{
									fontWeight: "400",
									fontSize: "14.6294px",
									lineHeight: "22px",
									color: "#09797A",
								}}
							>
								Recent contracts
							</Typography>
							<Typography
								sx={{
									fontWeight: "400",
									fontSize: "14.6294px",
									lineHeight: "22px",
									color: "#A0A0A0",
								}}
							>
								2022
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box
					sx={{ display: "flex", justifyContent: "space-around", padding: "0 4%" }}
					my={4}
				>
					<Card className="lower__layer__card">
						<CardContent>
							<Typography variant="body2" className="lower__layer__card__para">
								Contruction of Mbamba Street, Yola South
							</Typography>
						</CardContent>
						<CardActions className="lower__layer__card__action">
							<Button
								size="small"
								sx={{
									fontWeight: "600",
									fontSize: "9.7687px",
									lineHeight: "15px",
									color: "#C4C4C4",
									textTransform: "capitalize",
								}}
							>
								Ongoing
							</Button>
							<Stack
								direction="row"
								justifyContent="center"
								alignItems="center"
								sx={{
									fontWeight: "600",
									fontSize: "9.7687px",
									lineHeight: "15px",
									color: "#03C6C8",
									textTransform: "capitalize",
									"&:hover": { cursor: "pointer" },
								}}
							>
								More Details <KeyboardArrowRightIcon sx={{ fontSize: "15px" }} />
							</Stack>
						</CardActions>
					</Card>
					<Card className="lower__layer__card">
						<CardContent>
							<Typography variant="body2" className="lower__layer__card__para">
								Construction of Mafia Road with fall out drain, Yola South
							</Typography>
						</CardContent>
						<CardActions className="lower__layer__card__action">
							<Button
								size="small"
								sx={{
									fontWeight: "600",
									fontSize: "9.7687px",
									lineHeight: "15px",
									color: "#C4C4C4",
									textTransform: "capitalize",
								}}
							>
								Ongoing
							</Button>
							<Stack
								direction="row"
								justifyContent="center"
								alignItems="center"
								sx={{
									fontWeight: "600",
									fontSize: "9.7687px",
									lineHeight: "15px",
									color: "#03C6C8",
									textTransform: "capitalize",
									"&:hover": { cursor: "pointer" },
								}}
							>
								More Details <KeyboardArrowRightIcon sx={{ fontSize: "15px" }} />
							</Stack>
						</CardActions>
					</Card>
					<Card className="lower__layer__card">
						<CardContent>
							<Typography variant="body2" className="lower__layer__card__para">
								Construction of Zumo Street & Links, Yola South
							</Typography>
						</CardContent>
						<CardActions className="lower__layer__card__action">
							<Button
								size="small"
								sx={{
									fontWeight: "600",
									fontSize: "9.7687px",
									lineHeight: "15px",
									color: "#C4C4C4",
									textTransform: "capitalize",
								}}
							>
								Ongoing
							</Button>
							<Stack
								direction="row"
								justifyContent="center"
								alignItems="center"
								sx={{
									fontWeight: "600",
									fontSize: "9.7687px",
									lineHeight: "15px",
									color: "#03C6C8",
									textTransform: "capitalize",
									"&:hover": { cursor: "pointer" },
								}}
							>
								More Details <KeyboardArrowRightIcon sx={{ fontSize: "15px" }} />
							</Stack>
						</CardActions>
					</Card>
				</Box>
			</Card>
		</Box>
	);
};
