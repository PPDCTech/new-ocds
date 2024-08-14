import * as React from "react";
import {
	Box,
	Typography,
	Button,
	Card,
	Stack,
	Divider,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./style.css";

// This props interface is to be used when data is drilled down dynamically
// type Props = {
// 	data: {
// 		title: string,
// 	}[];
// };
type Props = {
	title: string;
};

export const MdaDetails = ({ title }: Props) => {
	return (
		<Box
			sx={{
				margin: "auto",
				maxWidth: "900px",
			}}
		>
			<Box className="mda__details__upper__layer">
				<Box className="mda__title" mr={2}>
					<Typography
						sx={{ color: "#09797A", fontWeight: "600", fontSize: "24.5px" }}
					>
						{title}
					</Typography>
				</Box>
				<Box
					sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
				>
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
						View All Projects
					</Button>
				</Box>
			</Box>
			<Divider sx={{ width: "90%", margin: "auto" }} />
			<Box sx={{ margin: "20px 5% 20px" }}>
				<Box>
					<Typography className="mda__heading">MDA:</Typography>
					<Typography className="mda__subheading">
						Works & Energy Development (MoWED)
					</Typography>
					<Box className="mda__second__layer"></Box>
				</Box>
			</Box>
			<Box className="mda__card__container" my={2}>
				<Card className="mda__lower__layer__card">
					<Typography variant="body2" className="mda__lower__layer__card__para">
						Contruction of Roads within and around Ribadu Square and Gashaka ...
					</Typography>
					<Box className="mda__lower__layer__card__action">
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
							Completed
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
							More Details <KeyboardArrowRightIcon sx={{ fontSize: "13px" }} />
						</Stack>
					</Box>
				</Card>
				<Card className="mda__lower__layer__card">
					<Typography variant="body2" className="mda__lower__layer__card__para">
						Variation of contract for the construction of Hong Township roads
					</Typography>
					<Box className="mda__lower__layer__card__action">
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
							Completed
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
							More Details <KeyboardArrowRightIcon sx={{ fontSize: "13px" }} />
						</Stack>
					</Box>
				</Card>
				<Card className="mda__lower__layer__card">
					<Typography variant="body2" className="mda__lower__layer__card__para">
						Rehabilitation of washout section of Alon Jada-Mbulo road
					</Typography>
					<Box className="mda__lower__layer__card__action">
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
							Completed
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
							More Details <KeyboardArrowRightIcon sx={{ fontSize: "13px" }} />
						</Stack>
					</Box>
				</Card>
			</Box>
			<Box
				sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
			>
				<Button
					variant="contained"
					sx={{
						color: "white",
						marginRight: "5%",
						marginBottom: "2%",
						backgroundColor: "#3ED9C4",
						fontWeight: "500",
						height: "30px",
						textTransform: "capitalize",
						"&:hover": { backgroundColor: "#A0A0A0" },
					}}
				>
					Find More
				</Button>
			</Box>

			<Divider sx={{ width: "90%", margin: "auto" }} />
			<Box sx={{ margin: "20px 5% 20px" }}>
				<Box>
					<Typography className="mda__heading">MDA:</Typography>
					<Typography className="mda__subheading">
						Eductation & Human Capital Development (MoEHCD)
					</Typography>
					<Box className="mda__second__layer"></Box>
				</Box>
			</Box>
			<Box className="mda__card__container" my={2}>
				<Card className="mda__lower__layer__card">
					<Typography variant="body2" className="mda__lower__layer__card__para">
						Supply of Goods
					</Typography>
					<Box className="mda__lower__layer__card__action">
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
							Completed
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
							More Details <KeyboardArrowRightIcon sx={{ fontSize: "13px" }} />
						</Stack>
					</Box>
				</Card>
				<Card className="mda__lower__layer__card">
					<Typography variant="body2" className="mda__lower__layer__card__para">
						Procurement of 2,000 units of first aid boxes (Lot 10) in respect of ...
					</Typography>
					<Box className="mda__lower__layer__card__action">
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
							Completed
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
							More Details <KeyboardArrowRightIcon sx={{ fontSize: "13px" }} />
						</Stack>
					</Box>
				</Card>
				<Card className="mda__lower__layer__card">
					<Typography variant="body2" className="mda__lower__layer__card__para">
						Procurement of 111Nos. of size 50 Aluminium cooking pots (LOt 7) ...
					</Typography>
					<Box className="mda__lower__layer__card__action">
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
							Completed
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
							More Details <KeyboardArrowRightIcon sx={{ fontSize: "13px" }} />
						</Stack>
					</Box>
				</Card>
			</Box>
			<Box
				sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
			>
				<Button
					variant="contained"
					sx={{
						color: "white",
						marginRight: "5%",
						marginBottom: "2%",
						backgroundColor: "#3ED9C4",
						fontWeight: "500",
						height: "30px",
						textTransform: "capitalize",
						"&:hover": { backgroundColor: "#A0A0A0" },
					}}
				>
					Find More
				</Button>
			</Box>

			<Divider sx={{ width: "90%", margin: "auto" }} />
			<Box sx={{ margin: "20px 5% 20px" }}>
				<Box>
					<Typography className="mda__heading">MDA:</Typography>
					<Typography className="mda__subheading">
						Finance & Budget (MoFB)
					</Typography>
					<Box className="mda__second__layer"></Box>
				</Box>
			</Box>
			<Box className="mda__card__container" my={2}>
				<Card className="mda__lower__layer__card">
					<Typography variant="body2" className="mda__lower__layer__card__para">
						Procurement of Consultancy Service for Implementation ...
					</Typography>
					<Box className="mda__lower__layer__card__action">
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
							Completed
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
							More Details <KeyboardArrowRightIcon sx={{ fontSize: "13px" }} />
						</Stack>
					</Box>
				</Card>
				<Card className="mda__lower__layer__card">
					<Typography variant="body2" className="mda__lower__layer__card__para">
						Procurement of Instructional Materials (Printing Works) Lesson ...
					</Typography>
					<Box className="mda__lower__layer__card__action">
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
							Completed
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
							More Details <KeyboardArrowRightIcon sx={{ fontSize: "13px" }} />
						</Stack>
					</Box>
				</Card>
			</Box>
			<Box
				sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center" }}
			>
				<Button
					variant="contained"
					sx={{
						color: "white",
						marginRight: "5%",
						marginBottom: "2%",
						backgroundColor: "#3ED9C4",
						fontWeight: "500",
						height: "30px",
						textTransform: "capitalize",
						"&:hover": { backgroundColor: "#A0A0A0" },
					}}
				>
					Find More
				</Button>
			</Box>
		</Box>
	);
};
