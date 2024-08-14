import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import TableRow from "@mui/material/TableRow";
import { Button, Divider, Typography, Paper, Checkbox } from "@mui/material";
import { CurrencyFormatter } from "../../components/CurrencyFormatter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { HiDownload } from "react-icons/hi";
import "./Projects.css";
import { truncateStr } from "../../config/helpers";
import { Paginatate } from "./Pagination";
import { Link } from "react-router-dom";

export type ProjectsType = {
	id: number;
	title: string;
	lga: string;
	amount: number;
	budget_amount: number;
	contractor: string;
	mda: string;
	year: string;
};

export const ProjectTable = () => {
	const [tableData, setTableData] = React.useState<ProjectsType[]>(
		[] as ProjectsType[],
	);
	const [projStorage, setProjStorage] = React.useState<ProjectsType[]>([]);

	const this_location = window.location.pathname;

	const [activeID, setActiveID] = React.useState<number[]>([]);

	const tableHead = [
		"",
		"Title",
		"LGA",
		"Tender Year",
		"Contract Amount",
		"Budget Amount",
		"Contract - budget gap (₦)",
		"Contract - budget gap (%)",
		"Contractor",
		"MDA",
		"",
	];

	const RenderMissingSection = () => (
		<Typography color="red" fontSize={14}>
			Missing
		</Typography>
	);

	const calcAmountDifference = (ca: number, ba: number) => {
		if (!ca || !ba)
			return <Typography sx={{ fontSize: "small" }}>N/A</Typography>;
		const amount = ca - ba;
		if (amount > 0)
			return (
				<>
					<AddIcon sx={{ color: "red", width: "10%" }} />
					&#x20A6;
					{CurrencyFormatter(amount)}
				</>
			);
		return (
			<>
				<RemoveIcon sx={{ color: "green", width: "10%", fontWeight: "700" }} />
				&#x20A6;
				{CurrencyFormatter(Math.abs(amount))}
			</>
		);
	};
	const calcDifferencePercent = (ca: number, ba: number) => {
		if (!ca || !ba)
			return <Typography sx={{ fontSize: "small" }}>N/A</Typography>;
		if (ca > ba) {
			const percent = ((100 * (ca - ba)) / ca).toFixed(1);
			return (
				<>
					<AddIcon sx={{ color: "red", width: "10%" }} />
					{percent}%
				</>
			);
		}
		if (ba > ca) {
			const npercent = (100 * (ca - ba)) / ba;
			return (
				<>
					<RemoveIcon sx={{ color: "green", width: "10%" }} />
					{Math.abs(npercent).toFixed(1)}%
				</>
			);
		}
	};

	const isExistValue = (title: string) => {
		return projStorage.some((project) => project["title"] === title);
	};
	const isExistID = (id: number) => {
		return projStorage.some((project) => project["id"] === id);
	};

	const projectChecked = async (id: string | number) => {
		for (let data in tableData) {
			if (tableData[data].id === id && !isExistValue(tableData[data].title)) {
				projStorage.push(tableData[data]);
			}
		}
		console.log("store", projStorage);
		for (let proj in projStorage) {
			if (!isExistID(projStorage[proj].id)) {
				activeID.push(projStorage[proj].id);
			}
		}

		sessionStorage.setItem("selected_ocds_projects", JSON.stringify(projStorage));
	};

	return (
		<Paper
			sx={{
				boxShadow: "0px 4px 35px rgba(0, 0, 0, 0.08)",
				borderRadius: "20px",
				paddingBottom: "70px",
			}}
		>
			<Box
				sx={{
					padding: "3% 0 0 3%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography className="contractor__top__area">
					Projects in Adamawa State
				</Typography>
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
			<Typography sx={{ ml: 5, mt: 4, fontSize: 20 }}>
				Find the projects you are interested in by using the
				<br />
				search feature, adding filters or sorting columns
			</Typography>
			<Box sx={{ padding: "3% 0 3% 3%" }}>
				<Typography
					sx={{
						padding: "0 0 5px 0",
						fontWeight: "500",
						color: "#0E0E2C",
					}}
				>
					Filter by
				</Typography>
				<Box className="project__filter__buttons" sx={{ marginBottom: "20px" }}>
					<Button variant="contained" disableElevation>
						+ LGA
					</Button>
					<Button variant="contained" disableElevation>
						+ Tender Year
					</Button>
					<Button variant="contained" disableElevation>
						+ Contractor
					</Button>
					<Button variant="contained" disableElevation>
						+ MDA
					</Button>
					<Button variant="contained" disableElevation>
						+ Status
					</Button>
					<Button variant="contained" disableElevation>
						+ Procurement category
					</Button>
					<Button variant="contained" disableElevation>
						+ procurement method
					</Button>
				</Box>
				<Divider sx={{ width: "97.5%" }} variant="middle" />
			</Box>
			<TableContainer>
				<Table sx={{ minWidth: 500, mr: 5 }} aria-label="custom pagination table">
					<TableHead>
						<TableRow>
							{tableHead.map((head, i) => (
								<TableCell
									style={{
										backgroundColor: "#f0f1f2",
										position: "relative",
										margin: "20px",
									}}
									key={i}
								>
									<Box className="table__cell__wrapper">
										<Typography className="table__text">{head}</Typography>
									</Box>
									{head ? (
										<Box className="table__icon__container">
											<Box className="table__head__icon">
												<Box className="icon__holder__top">
													<KeyboardArrowUpIcon
														sx={{
															color: "#D4D4D4",
														}}
													/>
												</Box>
												<Box className="icon__holder__bottom">
													<KeyboardArrowDownIcon
														sx={{
															color: "#D4D4D4",
														}}
													/>
												</Box>
											</Box>
										</Box>
									) : null}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{tableData &&
							tableData.map((data) => (
								<TableRow
									key={data.id}
									sx={{
										"&:last-child td, &:last-child th": {
											border: 0,
										},
									}}
								>
									<TableCell className="contractor__table__row contractor__cell">
										<a href="/">
											<Checkbox onClick={() => projectChecked(data.id)} />
										</a>
									</TableCell>
									<TableCell className="contractor__table__row contractor__cell">
										<a href="/">{truncateStr(data.title, 35)}</a>
									</TableCell>
									<TableCell className="contractor__table__row" sx={{ width: "8%" }}>
										{data.lga ? data.lga : <RenderMissingSection />}
									</TableCell>
									<TableCell className="contractor__table__row">{data.year}</TableCell>
									<TableCell className="contractor__table__row">
										{data.amount ? (
											<>
												<span>&#x20A6;</span>
												{CurrencyFormatter(data.amount)}
											</>
										) : (
											<RenderMissingSection />
										)}
									</TableCell>
									<TableCell className="contractor__table__row">
										{data.budget_amount ? (
											<>
												<span>&#x20A6;</span>
												{CurrencyFormatter(data.budget_amount)}
											</>
										) : (
											<RenderMissingSection />
										)}
									</TableCell>
									<TableCell className="contractor__table__row">
										{calcAmountDifference(data.amount, data.budget_amount)}
									</TableCell>
									<TableCell className="contractor__table__row">
										{calcDifferencePercent(data.amount, data.budget_amount)}
									</TableCell>
									<TableCell className="contractor__table__row">
										{data.contractor ? data.contractor : <RenderMissingSection />}
									</TableCell>
									<TableCell className="contractor__table__row">
										{data.mda ? data.mda : <RenderMissingSection />}
									</TableCell>
									<TableCell className="contractor__table__row">
										{this_location === "/projects" ? (
											<Link
												to="/compare-projects"
												style={{
													textDecoration: "none",
												}}
											>
												<Button variant="outlined" disableElevation size="small">
													compare
												</Button>
											</Link>
										) : (
											<Button variant="outlined" disableElevation size="small">
												<Link
													to="/compare-projects/compare"
													className="hover-state"
													style={{
														color: "inherit",
														textDecoration: "none",
														fontWeight: "600",
													}}
												>
													compare
												</Link>
											</Button>
										)}
									</TableCell>
								</TableRow>
							))}
					</TableBody>
				</Table>
			</TableContainer>
			<Paginatate setProjectsData={setTableData} />
		</Paper>
	);
};
