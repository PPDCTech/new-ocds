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
import { Button, Divider, Typography, Paper } from "@mui/material";
import { ContractorPagination } from "../../components/Pagination/ContractorPagination";
import { CurrencyFormatter } from "../../components/CurrencyFormatter";
import { HiDownload } from "react-icons/hi";
import { DataType } from "./Contractors";
import { Link, useParams } from "react-router-dom";
// import { useTable, useSortBy, Column } from "react-table";
// import { CONTRACT_COLUMNS } from "../../data/mock_columns";

type Props = {
	contractorData: DataType[];
	setContractorData: React.Dispatch<React.SetStateAction<DataType[]>>;
	searchTerm: any;
	setSearchTerm: (val: any) => any;
};

export const TableArea = ({
	searchTerm,
	setSearchTerm,
	contractorData,
	setContractorData,
}: Props) => {
	const [isContractor, setIsContractor] = React.useState<boolean>(false);
	const [isMda, setIsMda] = React.useState<boolean>(false);
	const [isServicedMda, setIsServicedMda] = React.useState<boolean>(false);
	const [isProjectAwarded, setIsProjectAwarded] = React.useState<boolean>(false);
	const [isAmountPaid, setIsAmountPaid] = React.useState<boolean>(false);
	const [isRecentAward, setIsRecentAwarded] = React.useState<boolean>(false);
	const [isTenderYear, setIsTenderYear] = React.useState<boolean>(false);
	const [isParamState, setIsParamState] = React.useState<boolean>(false);
	const [isAscend, setIsAscend] = React.useState<boolean>(false);
	const [clickedIndex, setClickIndex] = React.useState<number | null>(null);
	const clickedHead = `click-index-${clickedIndex}`;

	const params = useParams();
	const { search_params } = params;

	React.useEffect(() => {
		if (search_params) {
			setIsParamState(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const refNode = React.useRef(null); // To get the id of an element thus "event.currentTarget.id"
	const clickHandler = (event: any, idx: number) => {
		setClickIndex(idx);
		setIsAscend(!isAscend);
	};

	const contractorFilterHandler = () => {
		setIsContractor(!isContractor);
	};
	const mdaFilterHandler = () => {
		setIsMda(!isMda);
	};
	const servicedMdaFilterHandler = () => {
		setIsServicedMda(!isServicedMda);
	};
	const projectAwardedFilterHandler = () => {
		setIsProjectAwarded(!isProjectAwarded);
	};
	const amountPaidFilterHandler = () => {
		setIsAmountPaid(!isAmountPaid);
	};
	const recentAwardedFilterHandler = () => {
		setIsRecentAwarded(!isRecentAward);
	};
	const tenderYearFilterHandler = () => {
		setIsTenderYear(!isTenderYear);
	};

	const clearFilter = () => {
		setSearchTerm({
			query: "",
			list: [],
		});
	};

	const tableHead = [
		"Contractor",
		"Total Amount Paid",
		"Top MDA Serviced",
		"No. Of MDAs Serviced",
		"No. Of Projects Awarded",
		"Most Recent Project Awarded",
	];

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
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Typography className="contractor__top__area">
					Contractor in Adamawa State
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
			<Box sx={{ padding: "3% 0 3% 3%" }}>
				<Typography
					sx={{ padding: "0 0 5px 0", fontWeight: "500", color: "#0E0E2C" }}
				>
					Filter by
				</Typography>
				<Box className="filter__buttons">
					<Button
						className={isProjectAwarded ? "selected__filter" : ""}
						variant="contained"
						disableElevation
						onClick={() => projectAwardedFilterHandler()}
					>
						<span className={isProjectAwarded ? "selected__filter__span" : ""}>
							+ &nbsp;
						</span>
						No. Of Projects Awarded
					</Button>
					<Button
						className={isServicedMda ? "selected__filter" : ""}
						variant="contained"
						disableElevation
						onClick={() => servicedMdaFilterHandler()}
					>
						<span className={isServicedMda ? "selected__filter__span" : ""}>
							+ &nbsp;
						</span>
						No. MDAs Serviced
					</Button>
					<Button
						className={isMda ? "selected__filter" : ""}
						variant="contained"
						disableElevation
						onClick={() => mdaFilterHandler()}
					>
						<span className={isMda ? "selected__filter__span" : ""}>+ &nbsp;</span>
						MDAs
					</Button>
					<Button
						className={isContractor ? "selected__filter" : ""}
						variant="contained"
						disableElevation
						onClick={() => contractorFilterHandler()}
					>
						<span className={isContractor ? "selected__filter__span" : ""}>
							+ &nbsp;
						</span>
						Contractor
					</Button>
					<Button
						className={isTenderYear ? "selected__filter" : ""}
						variant="contained"
						disableElevation
						onClick={() => tenderYearFilterHandler()}
					>
						<span className={isTenderYear ? "selected__filter__span" : ""}>
							+ &nbsp;
						</span>
						Tender Year
					</Button>
				</Box>
				<Divider sx={{ width: "97.5%" }} variant="middle" />

				{searchTerm.list.length > 0 ? (
					<Box className="filter__area">
						<Typography className="filter__area__heading">
							Selected Filters:
						</Typography>
						<Box className="filter__area__container">
							{searchTerm.list.length > 0
								? searchTerm.list.map((data: any, idx: number) => (
										<Box className="filter__result" key={idx}>
											<Button
												className="filter__result__button"
												variant="contained"
												disableElevation
											>
												<span>&#128473;</span> {data.number_of_mdas_serviced} MDA Serviced
											</Button>
											<Button
												className="filter__result__button"
												variant="contained"
												disableElevation
											>
												<span>&#128473;</span> {data.contractor}
											</Button>
											<Button
												className="filter__result__button"
												variant="contained"
												disableElevation
											>
												<span>&#128473;</span> {data.top_mda_serviced}
											</Button>
										</Box>
								  ))
								: null}
						</Box>
						<Button
							variant="contained"
							disableElevation
							className="filter__area__button"
							onClick={() => clearFilter()}
						>
							Clear Filters
						</Button>
					</Box>
				) : null}
			</Box>
			<TableContainer>
				<Table
					id="data-table"
					sx={{ minWidth: 500 }}
					aria-label="custom pagination table"
				>
					<TableHead>
						<TableRow>
							{tableHead.map((head, idx) => (
								<TableCell
									key={idx}
									id={`click-index-${idx + 1}`}
									ref={refNode}
									onClick={(e) => clickHandler(e, idx + 1)}
									className={
										clickedHead === `click-index-${idx + 1}`
											? "contractor__table__head filter__highlight"
											: "contractor__table__head head__no__highlight"
									}
								>
									{head}
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
						{searchTerm.query === ""
							? contractorData.map((data: any, idx: number) => (
									<TableRow
										key={idx}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									>
										<TableCell className="contractor__table__row contractor__cell">
											{isParamState ? (
												<span
													style={{
														color: "inherit",
														textDecoration: "underline",
														fontWeight: "bold",
													}}
												>
													{truncate(data.contractor, 35)}
												</span>
											) : (
												<Link
													to={`search/${data.contractor}`}
													className="hover-state"
													style={{
														color: "inherit",
														textDecoration: "underline",
														fontWeight: "bold",
													}}
												>
													{truncate(data.contractor, 35)}
												</Link>
											)}
										</TableCell>
										<TableCell className="contractor__table__row" align="center">
											<span>&#x20A6;</span>
											{CurrencyFormatter(data.contract_amount_paid)}
										</TableCell>
										<TableCell className="contractor__table__row">
											{data.top_mda_serviced}
										</TableCell>
										<TableCell className="contractor__table__row" align="center">
											{data.number_of_mdas_serviced}
										</TableCell>
										<TableCell className="contractor__table__row" align="center">
											{data.number_of_projects_awarded} Projects
										</TableCell>
										<TableCell className="contractor__table__row">
											{isParamState ? (
												<span style={{ color: "inherit", textDecoration: "underline" }}>
													{data.most_recent_project_awarded}
												</span>
											) : (
												<Link
													to={`project/${data.most_recent_project_awarded}`}
													className="hover-state"
													style={{ color: "inherit", textDecoration: "underline" }}
												>
													{data.most_recent_project_awarded}
												</Link>
											)}
										</TableCell>
									</TableRow>
							  ))
							: searchTerm.list.map((data: any, idx: number) => (
									<TableRow
										key={idx}
										sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
									>
										<TableCell className="contractor__table__row contractor__cell">
											{isParamState ? (
												<span
													style={{
														color: "inherit",
														textDecoration: "underline",
														fontWeight: "bold",
													}}
												>
													{truncate(data.contractor, 35)}
												</span>
											) : (
												<Link
													to={`search/${data.contractor}`}
													className="hover-state"
													style={{
														color: "inherit",
														textDecoration: "underline",
														fontWeight: "bold",
													}}
												>
													{truncate(data.contractor, 35)}
												</Link>
											)}
										</TableCell>
										<TableCell className="contractor__table__row" align="center">
											<span>&#x20A6;</span>
											{CurrencyFormatter(data.contract_amount_paid)}
										</TableCell>
										<TableCell className="contractor__table__row">
											{data.top_mda_serviced}
										</TableCell>
										<TableCell className="contractor__table__row" align="center">
											{data.number_of_mdas_serviced}
										</TableCell>
										<TableCell className="contractor__table__row" align="center">
											{data.number_of_projects_awarded} Projects
										</TableCell>
										<TableCell className="contractor__table__row">
											{isParamState ? (
												<span style={{ color: "inherit", textDecoration: "underline" }}>
													{data.most_recent_project_awarded}
												</span>
											) : (
												<Link
													to={`project/${data.most_recent_project_awarded}`}
													className="hover-state"
													style={{ color: "inherit", textDecoration: "underline" }}
												>
													{data.most_recent_project_awarded}
												</Link>
											)}
										</TableCell>
									</TableRow>
							  ))}
					</TableBody>
				</Table>
			</TableContainer>
			<ContractorPagination setContractorData={setContractorData} />
		</Paper>
	);
};
