import * as React from "react";
import "./style.css";
import { CurrencyFormatter } from "../../components/CurrencyFormatter";
import { HiDownload } from "react-icons/hi";
import {
	Box,
	Button,
	Divider,
	Typography,
	Paper,
} from "@mui/material";
import { ProjectsType } from "../Projects/ProjectTable";

export const ComparisonTable = () => {
	const [isTarget, setIsTarget] = React.useState<boolean>(false);
	const [projects, setProjects] = React.useState<ProjectsType[]>([]);

	React.useState(() => {
		const storage = JSON.parse(sessionStorage.getItem('selected_ocds_projects') || '{}');
		setProjects(storage);
	})

	React.useEffect(() => {
		setIsTarget(true);
	}, []);

	return (
		<Paper
			sx={{
				boxShadow: "0px 4px 35px rgba(0, 0, 0, 0.08)",
				borderRadius: "20px",
            paddingBottom: "20px",
            margin: "5% auto"
         }}
		>
			<Box>
				<Box
					sx={{
						padding: "1% 0 0 3%",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box my={3}>
						<Typography
							sx={{ fontWeight: "600", fontSize: "25px", lineHeight: "38px" }}
						>
							Comparison Table
						</Typography>
					</Box>
					<Button
						variant="outlined"
						sx={{
							marginRight: "1%",
							width: "200px",
							textTransform: "capitalize",
							border: "2px solid #1CCCCD",
							color: "#1CCCCD",
						}}
						disableElevation
					>
						<HiDownload /> &nbsp; &nbsp; &nbsp; Export File
					</Button>
				</Box>
				<Divider />
			</Box>
			<Box className="comparison__table__container">
				<Box className="comparison__table__head">
					<Box>Project Title</Box>
					<Box>Year</Box>
					<Box>Budget Amount</Box>
					<Box>Contract Amount</Box>
					<Box>MDA</Box>
					<Box>Location</Box>
					<Box>Status</Box>
					<Box>Contractor</Box>
				</Box>
				<Box className="comparison__table__body">
					<Box
						className={
							isTarget
								? "comparison__table__column comparison__table__target__item"
								: "comparison__table__column comparison__table__item"
						}
					>
						<Box
							className={
								isTarget ? "comparison__target__project__heading" : "not__the__target"
							}
						>
							<Typography>TARGET PROJECT:</Typography>
						</Box>
						<Typography className="comparison__project__title">
							{projects[0]?.title}
						</Typography>
						<Typography>{projects[0]?.year}</Typography>
						<Typography>
							{projects[0]?.budget_amount && <span>&#x20A6;</span>}
							{projects[0]?.budget_amount && Number(projects[0]?.budget_amount) ? CurrencyFormatter(projects[0]?.budget_amount) : null}
						</Typography>
						<Typography>
							{projects[0]?.amount && <span>&#x20A6;</span>}
							{projects[0]?.amount && Number(projects[0]?.amount) ? CurrencyFormatter(projects[0]?.amount) : null}
						</Typography>
						<Typography>{projects[0]?.mda}</Typography>
						<Typography>{projects[0]?.lga}</Typography>
						<Typography></Typography>
						<Typography>
							<span
								style={{
									color: "inherit",
									textDecoration: "underline",
									fontWeight: "bold",
								}}
							>
								{projects[0]?.contractor}
							</span>
						</Typography>
					</Box>

					<Box className="comparison__table__column comparison__table__item">
						<Typography className="comparison__project__title">
						{projects[1]?.title}
						</Typography>
						<Typography>{projects[1]?.year}</Typography>
						<Typography>
							{projects[1]?.budget_amount && <span>&#x20A6;</span>}
							{projects[1]?.budget_amount && Number(projects[1]?.budget_amount) ? CurrencyFormatter(projects[1]?.budget_amount) : null}
						</Typography>
						<Typography>
							{projects[1]?.amount && <span>&#x20A6;</span>}
							{projects[1]?.amount && Number(projects[1]?.amount) ? CurrencyFormatter(projects[1]?.amount) : null}
						</Typography>
						<Typography>{projects[1]?.mda}</Typography>
						<Typography>{projects[1]?.lga}</Typography>
						<Typography></Typography>
						<Typography>
							<span
								style={{
									color: "inherit",
									textDecoration: "underline",
									fontWeight: "bold",
								}}
							>
								{projects[1]?.contractor}
							</span>
						</Typography>
					</Box>
					<Box className="comparison__table__column comparison__table__item">
						<Typography className="comparison__project__title">
						{projects[2]?.title}
						</Typography>
						<Typography>{projects[2]?.year}</Typography>

						<Typography>
							{projects[2]?.budget_amount && <span>&#x20A6;</span>}
							{projects[2]?.budget_amount && Number(projects[2]?.budget_amount) ? CurrencyFormatter(projects[2]?.budget_amount) : null}
						</Typography>
						<Typography>
							{projects[2]?.amount && <span>&#x20A6;</span>}
							{projects[2]?.amount && Number(projects[2]?.amount) ? CurrencyFormatter(projects[2]?.amount) : null}
						</Typography>
						<Typography>{projects[2]?.mda}</Typography>
						<Typography>{projects[2]?.lga}</Typography>
						<Typography></Typography>
						<Typography>
							<span
								style={{
									color: "inherit",
									textDecoration: "underline",
									fontWeight: "bold",
								}}
							>
								{projects[2]?.contractor}
							</span>
						</Typography>
						<Box className="comparison__table__column comparison__table__item"></Box>
					</Box>
					{/* Testing for horizontal scroll */}
					<Box className="comparison__table__column comparison__table__item">
						<Typography className="comparison__project__title">
						{projects[3]?.title}
						</Typography>
						<Typography>{projects[3]?.year}</Typography>

						<Typography>
							{projects[3]?.budget_amount && <span>&#x20A6;</span>}
							{projects[3]?.budget_amount && Number(projects[3]?.budget_amount) ? CurrencyFormatter(projects[3]?.budget_amount) : null}
						</Typography>
						<Typography>
							{projects[3]?.amount && <span>&#x20A6;</span>}
							{projects[3]?.amount && Number(projects[3]?.amount) ? CurrencyFormatter(projects[3]?.amount) : null}
						</Typography>
						<Typography>{projects[3]?.mda}</Typography>
						<Typography>{projects[3]?.lga}</Typography>
						<Typography></Typography>
						<Typography>
							<span
								style={{
									color: "inherit",
									textDecoration: "underline",
									fontWeight: "bold",
								}}
							>
								{projects[3]?.contractor}
							</span>
						</Typography>
						<Box className="comparison__table__column comparison__table__item"></Box>
					</Box>
					<Box className="comparison__table__column comparison__table__item">
						<Typography className="comparison__project__title">
							Construction Of Mafia Road With Fall Out Drain
						</Typography>
						<Typography>2020</Typography>

						<Typography>
							<span>&#x20A6;</span>
							{CurrencyFormatter(150000000)} <br />
							<span className="comparison__project__highlight">
								70% Less Than Target Project
							</span>
						</Typography>
						<Typography>
							<span>&#x20A6;</span>
							{CurrencyFormatter(436086736)} <br />
							<span className="comparison__project__highlight">
								87% Less Than Target Project
							</span>
						</Typography>
						<Typography>Works & Energy Development (MoWED)</Typography>
						<Typography>Yola South LGA</Typography>
						<Typography>Completed</Typography>
						<Typography>
							<span
								style={{
									color: "inherit",
									textDecoration: "underline",
									fontWeight: "bold",
								}}
							>
								Raycon & Co. Nig. Ltd
							</span>
						</Typography>
						<Box className="comparison__table__column comparison__table__item"></Box>
					</Box>
				</Box>
			</Box>
		</Paper>
	);
};
