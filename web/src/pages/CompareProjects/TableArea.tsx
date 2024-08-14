import * as React from "react";
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
import { ProjectsPagination } from "../../components/Pagination/ProjectsPagination";
import { CurrencyFormatter } from "../../components/CurrencyFormatter";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Link, useParams } from "react-router-dom";
import { ProjectsDataType } from "./CompareProjects";
import "./style.css";

export const TableArea = () => {
	const [tableData, setTableData] = React.useState<ProjectsDataType[]>(
		[] as ProjectsDataType[],
	);

	const [isAscend, setIsAscend] = React.useState<boolean>(false);
	const [clickedIndex, setClickIndex] = React.useState<number | null>(null);
	const clickedHead = `click-index-${clickedIndex}`;

	const refNode = React.useRef(null); // To get the id of an element thus "event.currentTarget.id"
	const clickHandler = (event: any, idx: number) => {
		setClickIndex(idx);
		setIsAscend(!isAscend);
	};


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

	const truncate = (str: string, n: number) => {
		return str.length > n ? str.slice(0, n - 1) + " ..." : str;
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
				}}
			>
				<Typography sx={{ ml: 2, my: 2, fontSize: 20, fontweight: "bold" }}>
					Select your target project based on keywords.
					<br />
					You can customise this comparison by using the filters provided.
				</Typography>
				<Divider sx={{ width: "97%" }} variant="middle" />
			</Box>

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
				<Box
					className="compare-project__filter__buttons"
					sx={{ marginBottom: "20px" }}
				>
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
							{tableHead.map((head, idx) => (
								<TableCell
									key={idx}
									id={`click-index-${idx + 1}`}
									ref={refNode}
									onClick={(e) => clickHandler(e, idx + 1)}
									style={{
										backgroundColor: "#f0f1f2",
										position: "relative",
										margin: "20px",
									}}
									className={
										clickedHead === `click-index-${idx + 1}`
											? "contractor__table__head filter__highlight"
											: "contractor__table__head head__no__highlight"
									}
								>
									<Box className="table__cell__wrapper">
										<Typography className="table__text">{head}</Typography>
									</Box>
									{head ? (
										<Box className="table__icon__container">
											<Box className="table__head__icon">
												{clickedHead === `click-index-${idx + 1}` && isAscend ? (
													<>
														<Box className="icon__holder__top">
															<KeyboardArrowUpIcon
																className={
																	clickedHead === `click-index-${idx + 1}` && isAscend
																		? "sort__negative__direction"
																		: "icon__no__highlight"
																}
															/>
														</Box>
														<Box className="icon__holder__bottom">
															<KeyboardArrowDownIcon
																className={
																	clickedHead === `click-index-${idx + 1}` && isAscend
																		? "sort__positive__direction"
																		: "icon__no__highlight"
																}
															/>
														</Box>
													</>
												) : (
													<>
														<Box className="icon__holder__top">
															<KeyboardArrowUpIcon
																className={
																	clickedHead === `click-index-${idx + 1}` && !isAscend
																		? "sort__positive__direction"
																		: "icon__no__highlight"
																}
															/>
														</Box>
														<Box className="icon__holder__bottom">
															<KeyboardArrowDownIcon
																className={
																	clickedHead === `click-index-${idx + 1}` && !isAscend
																		? "sort__negative__direction"
																		: "icon__no__highlight"
																}
															/>
														</Box>
													</>
												)}
											</Box>
										</Box>
									) : null}
								</TableCell>
							))}
						</TableRow>
					</TableHead>
					<TableBody>
						{tableData.map((data) => (
							<TableRow
								key={data.id}
								sx={{
									"&:last-child td, &:last-child th": {
										border: 0,
									},
								}}
							>
								<TableCell className="contractor__table__row contractor__cell">
									<span>
										<Checkbox />
									</span>
								</TableCell>
								<TableCell className="contractor__table__row contractor__cell">
									<Link
										to="/compare-projects/compare"
										className="hover-state"
										style={{
											color: "inherit",
											textDecoration: "underline",
											fontWeight: "600",
										}}
									>
										{truncate(data.project_title, 35)}
									</Link>
								</TableCell>
								<TableCell className="contractor__table__row" sx={{ width: "8%" }}>
									{data.lga}
								</TableCell>
								<TableCell className="contractor__table__row">
									{data.tender_year}
								</TableCell>
								<TableCell className="contractor__table__row">
									{data.contract_amount ? (
										<>
											<span>&#x20A6;</span>
											{CurrencyFormatter(data.contract_amount)}
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
									{calcAmountDifference(data.contract_amount, data.budget_amount)}
								</TableCell>
								<TableCell className="contractor__table__row">
									{calcDifferencePercent(data.contract_amount, data.budget_amount)}
								</TableCell>
								<TableCell className="contractor__table__row">
									{data.contractor}
								</TableCell>
								<TableCell className="contractor__table__row">{data.mda}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<ProjectsPagination setProjectsData={setTableData} />
		</Paper>
	);
};
