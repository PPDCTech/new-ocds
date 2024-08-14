import React, { useEffect, useState } from "react";
import {
	Box,
	Card,
	CardContent,
	Typography,
	CardActions,
	Button,
	IconButton,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { CustomModal } from "../../components/Modal/CustomModal";
import { ContractorDetails } from "../../components/Detail/contractor/ContractorDetails";
// import { useModal } from "../../components/useModal";
import { ProjectDetails } from "../../components/Detail/project/ProjectDetails";
import { MdaDetails } from "../../components/Detail/mda/MDADetails";
import { HtmlTooltip } from "../../components/HtmlTooltip";
import { apiBaseUrl, calcDifferencePercent, truncateStr } from "../../config/helpers";

export const CardArea = () => {
	const [isFirstProject, setIsFirstProject] = React.useState<boolean>(false);
	const [isSecondProject, setIsSecondProject] = React.useState<boolean>(false);
	const [isThirdProject, setIsThirdProject] = React.useState<boolean>(false);
	const [isFirstCbyNum, setIsFirstCbyNum] = React.useState<boolean>(false);
	const [isSecondCbyNum, setIsSecondCbyNum] = React.useState<boolean>(false);
	const [isThirdCbyNum, setIsThirdCbyNum] = React.useState<boolean>(false);
	const [isFirstCbyMda, setIsFirstCbyMda] = React.useState<boolean>(false);
	const [isSecondCbyMda, setIsSecondCbyMda] = React.useState<boolean>(false);
	const [isThirdCbyMda, setIsThirdCbyMda] = React.useState<boolean>(false);
	const [openContractorDetails, setOpenContractorDetails] =
		React.useState<boolean>(false);
	const [openMdaDetails, setOpenMdaDetails] = React.useState<boolean>(false);
	const [openProjectDetails, setOpenProjectDetails] =
		React.useState<boolean>(false);

	const openProjectDetailsHandler = () => {
		setOpenProjectDetails(!openProjectDetails);
	};
	const openContractorDetailsHandler = () => {
		setOpenContractorDetails(!openContractorDetails);
	};
	const openMdaDetailsHandler = () => {
		setOpenMdaDetails(!openMdaDetails);
	};
	type MissingTypes = {
		budgetAmount: number;
		contractAmount: number;
		location: number;
	};
	const [top3contractors, setTop3contractors] = useState<[]>([]);
	const [missingData, setMissingData] = useState<MissingTypes>({
		budgetAmount: 0,
		contractAmount: 0,
		location: 0,
	});
	const [top3contractorsMDA, setTop3contractorsMDA] = useState<[]>([]);
	const [contractVariations, setContractVariations] = useState<[]>([]);

	useEffect(() => {
		const fetchHomeStats = async () => {
			try {
				fetch(`${apiBaseUrl}/stats`)
					.then((response) => response.json())
					.then((result) => {
						const {
							contractVaraitions,
							missing_data,
							topContractors,
							topMDAContractors,
						} = result;
						setTop3contractors(topContractors);
						setMissingData(missing_data);
						setTop3contractorsMDA(topMDAContractors);
						setContractVariations(contractVaraitions);
					});
			} catch (error) {
				console.error("failed to fetch", error);
			}
		};
		fetchHomeStats();
	}, []);

	return (
		<Box
			sx={{
				width: "100%",
				backgroundColor: "#F7FAFC",
			}}
		>
			<Box className="home__card__wrapper">
				<Box>
					<Box
						sx={{
							fontWeight: "700",
							fontSize: "28.0018px",
							lineHeight: "42px",
							color: "#09797A",
							paddingLeft: "5%",
							paddingTop: "40px",
						}}
					>
						<h2>Data Highlights</h2>
					</Box>
					<Box className="home__card__area">
						<Box className="home__card__container">
							<Box className="home__card__item">
								<Card
									sx={{
										borderRadius: "20px",
										height: "320px",
										position: "relative",
									}}
								>
									<CardActions sx={{ padding: "10%" }}>
										<HtmlTooltip
											title={
												<React.Fragment>
													<em>{"The contract value for these projects "}</em>
													<em>{"is larger than the amount budgeted by "}</em>
													<em>{"the government, with the % value showing "}</em>
													<em>{"the difference as a percentage "}</em>
													<em>{"of the contract amount. Some of these "}</em>
													<em>{"differences may reflect data entry errors. "}</em>
												</React.Fragment>
											}
										>
											<IconButton
												aria-label="info"
												component="label"
												sx={{
													position: "absolute",
													top: "20px",
													left: "20px",
													width: "24px",
													height: "24px",
													color: "#3ED9C4",
													textTransform: "capitalize",
													fontWeight: "600",
													fontSize: "13.5992px",
													lineHeight: "20px",
													boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.07)",
													borderRadius: "50%",
												}}
											>
												<HelpOutlineIcon />
											</IconButton>
										</HtmlTooltip>
									</CardActions>
									<CardContent sx={{ position: "relative" }}>
										<Typography
											sx={{
												fontWeight: "600",
												fontSize: "14px",
												lineHeight: "18px",
												color: "#09797A",
											}}
											gutterBottom
										>
											Top 3 project where contract amount exceed budget amount
										</Typography>
										<Box
											sx={{
												width: "90%",
												maxWidth: 360,
												borderRadius: "4px",
												margin: "auto",
												position: "absolute",
												top: "80%",
											}}
										>
											{contractVariations &&
												contractVariations.map((data, i) => (
													<>
														<Box
															className="home__card__item__list"
															key={i}
															onClick={openProjectDetailsHandler}
														>
															<Box>{truncateStr(data["title"], 60)}</Box>
															<Box className="home__card__data__highlight">
																{calcDifferencePercent(
																	parseInt(data["contract_amount"]),
																	parseInt(data["budget_amount"]),
																)}
															</Box>
														</Box>
														<CustomModal
															isOpen={openProjectDetails}
															toggleModal={openProjectDetailsHandler}
															headerText="Project Details"
															modalContent={<ProjectDetails title={""} />}
														/>
													</>
												))}
										</Box>
									</CardContent>
									<CardActions
										sx={{
											position: "absolute",
											bottom: "0",
											right: "0",
										}}
									>
										<Button
											size="small"
											sx={{
												color: "#3ED9C4",
												textTransform: "capitalize",
												fontWeight: "600",
												fontSize: "13.5992px",
												lineHeight: "20px",
											}}
										>
											Find More <KeyboardArrowRightIcon />
										</Button>
									</CardActions>
								</Card>
							</Box>
							<Box>
								<Card
									sx={{
										borderRadius: "20px",
										height: "320px",
										position: "relative",
									}}
								>
									<CardActions sx={{ padding: "10%" }}>
										<HtmlTooltip
											title={
												<React.Fragment>
													<em>{"These contractors have been awarded more "}</em>
													<em>{"public contracts since 2018 than other "}</em>
													<em>{"suppliers, according to the information "}</em>
													<em>{"submitted to this database "}</em>
												</React.Fragment>
											}
										>
											<IconButton
												aria-label="info"
												component="label"
												sx={{
													position: "absolute",
													top: "20px",
													left: "20px",
													width: "24px",
													height: "24px",
													color: "#3ED9C4",
													textTransform: "capitalize",
													fontWeight: "600",
													fontSize: "13.5992px",
													lineHeight: "20px",
													boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.07)",
													borderRadius: "50%",
												}}
											>
												<HelpOutlineIcon />
											</IconButton>
										</HtmlTooltip>
									</CardActions>
									<CardContent sx={{ position: "relative" }}>
										<Typography
											sx={{
												fontWeight: "600",
												fontSize: "14px",
												lineHeight: "18px",
												color: "#09797A",
											}}
											gutterBottom
										>
											Top 3 contractors by number of projects
										</Typography>
										<Box
											sx={{
												width: "90%",
												maxWidth: 360,
												borderRadius: "4px",
												margin: "auto",
												position: "absolute",
												top: "80%",
											}}
										>
											{top3contractors &&
												top3contractors.map((data, i) => (
													<>
														<Box
															className="home__card__item__list"
															key={i}
															onClick={openContractorDetailsHandler}
														>
															<Box>{data["name"]}</Box>
															<Box className="home__card__data__highlight">
																{data["count"]}
															</Box>
														</Box>
														<CustomModal
															isOpen={openContractorDetails}
															toggleModal={openContractorDetailsHandler}
															headerText="Contractor Details"
															modalContent={<ContractorDetails title={""} />}
														/>
													</>
												))}
										</Box>
									</CardContent>
									<CardActions
										sx={{
											position: "absolute",
											bottom: "0",
											right: "0",
										}}
									>
										<Button
											size="small"
											sx={{
												color: "#3ED9C4",
												textTransform: "capitalize",
												fontWeight: "600",
												fontSize: "13.5992px",
												lineHeight: "20px",
											}}
										>
											Find More <KeyboardArrowRightIcon />
										</Button>
									</CardActions>
								</Card>
							</Box>
							<Box>
								<Card
									sx={{
										borderRadius: "20px",
										height: "320px",
										position: "relative",
									}}
								>
									<CardActions sx={{ padding: "10%" }}>
										<HtmlTooltip
											title={
												<React.Fragment>
													<em>{"These contractors have supplied projects "}</em>
													<em>{"for a large number of different ministries, "}</em>
													<em>{"departments, and agencies(MDAs) since 2018. "}</em>
													<em>{"This may be one indicator that these "}</em>
													<em>{"contractors are offering an unusually wide "}</em>
													<em>{"range of services. "}</em>
												</React.Fragment>
											}
										>
											<IconButton
												aria-label="info"
												component="label"
												sx={{
													position: "absolute",
													top: "20px",
													left: "20px",
													width: "24px",
													height: "24px",
													color: "#3ED9C4",
													textTransform: "capitalize",
													fontWeight: "600",
													fontSize: "13.5992px",
													lineHeight: "20px",
													boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.07)",
													borderRadius: "50%",
												}}
											>
												<HelpOutlineIcon />
											</IconButton>
										</HtmlTooltip>
									</CardActions>
									<CardContent sx={{ position: "relative" }}>
										<Typography
											sx={{
												fontWeight: "600",
												fontSize: "14px",
												lineHeight: "18px",
												color: "#09797A",
											}}
											gutterBottom
										>
											Top 3 contractors by diversity of MDAs
										</Typography>
										<Box
											sx={{
												width: "90%",
												maxWidth: 360,
												borderRadius: "4px",
												margin: "auto",
												position: "absolute",
												top: "95%",
											}}
										>
											{top3contractorsMDA &&
												top3contractorsMDA.map((data, i) => (
													<>
														<Box
															className="home__card__item__list"
															key={i}
															onClick={openMdaDetailsHandler}
														>
															<Box>{data["name"]}</Box>
															<Box className="home__card__data__highlight">
																{data["mda_count"]}
															</Box>
														</Box>
														<CustomModal
															isOpen={openMdaDetails}
															toggleModal={openMdaDetailsHandler}
															headerText="Contractor Project Across MDAs"
															modalContent={<MdaDetails title={""} />}
														/>
													</>
												))}
										</Box>
									</CardContent>
									<CardActions
										sx={{
											position: "absolute",
											bottom: "0",
											right: "0",
										}}
									>
										<Button
											size="small"
											sx={{
												color: "#3ED9C4",
												textTransform: "capitalize",
												fontWeight: "600",
												fontSize: "13.5992px",
												lineHeight: "20px",
											}}
										>
											Find More <KeyboardArrowRightIcon />
										</Button>
									</CardActions>
								</Card>
							</Box>
							<Box>
								<Card
									sx={{
										borderRadius: "20px",
										height: "320px",
										position: "relative",
									}}
								>
									<CardActions sx={{ padding: "10%" }}>
										<HtmlTooltip
											title={
												<React.Fragment>
													<em>{"A number of projects have key "}</em>
													<em>{"pieces of information missing. "}</em>
													<em>{"Click one of the tiles to see a list of "}</em>
													<em>{"projects with a specific field missing, "}</em>
													<em>{"or click 'find more' to see all projects "}</em>
													<em>{"where any key field is missing "}</em>
												</React.Fragment>
											}
										>
											<IconButton
												aria-label="info"
												component="label"
												sx={{
													position: "absolute",
													top: "20px",
													left: "20px",
													width: "24px",
													height: "24px",
													color: "#3ED9C4",
													textTransform: "capitalize",
													fontWeight: "600",
													fontSize: "13.5992px",
													lineHeight: "20px",
													boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.07)",
													borderRadius: "50%",
												}}
											>
												<HelpOutlineIcon />
											</IconButton>
										</HtmlTooltip>
									</CardActions>
									<CardContent sx={{ position: "relative" }}>
										<Typography
											sx={{
												fontWeight: "600",
												fontSize: "14px",
												lineHeight: "18px",
												color: "#09797A",
											}}
											gutterBottom
										>
											Number of projects with missing data
										</Typography>
										<Box
											sx={{
												width: "90%",
												maxWidth: 360,
												borderRadius: "4px",
												margin: "auto",
												position: "absolute",
												top: "95%",
											}}
										>
											<Box className="home__card__item__list">
												<Box>Missing budget amount</Box>
												<Box className="home__card__data__highlight">
													{missingData["budgetAmount"]}
												</Box>
											</Box>
											<Box className="home__card__item__list">
												<Box>Missing contract amount</Box>
												<Box className="home__card__data__highlight">
													{missingData["contractAmount"]}
												</Box>
											</Box>
											<Box className="home__card__item__list">
												<Box>Missing location</Box>
												<Box className="home__card__data__highlight">
													{missingData["location"]}
												</Box>
											</Box>
										</Box>
									</CardContent>
									<CardActions
										sx={{
											position: "absolute",
											bottom: "0",
											right: "0",
										}}
									>
										<Button
											size="small"
											sx={{
												color: "#3ED9C4",
												textTransform: "capitalize",
												fontWeight: "600",
												fontSize: "13.5992px",
												lineHeight: "20px",
											}}
										>
											Find More <KeyboardArrowRightIcon />
										</Button>
									</CardActions>
								</Card>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
