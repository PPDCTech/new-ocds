import * as React from "react";
import { Box, Card, Typography, Button, Divider } from "@mui/material";
import { FiPieChart } from "react-icons/fi";
import TextSnippetIcon from "@mui/icons-material/TextSnippetOutlined";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const Banner = () => {
	return (
		<Box
			sx={{
				width: "100%",
				backgroundColor: "white",
			}}
		>
			<Box className="home__banner">
				<Box className="home__banner__container">
					<Box className="home__banner__item" my={5}>
						<Box className="banner__mobile__header">
							<Typography>What can you do on the site?</Typography>
						</Box>
						<Card className="banner">
							<Box className="banner__left__item">
								<Box className="banner__left__item__inner">
									<Typography>What can you do on the site?</Typography>
								</Box>
							</Box>
							<Box className="banner__right__item">
								<Box className="right__item__outer">
									<Box className="right__item__one">
										<Box className="right__item__icon">
											<Box className="banner__icon">
												<TextSnippetIcon sx={{ color: "#3ED9C4" }} />
											</Box>
										</Box>
										<Box className="right__item__text">
											<Typography>
												View important contracting information on projects
											</Typography>
											<Button
												className="banner__mobile"
												size="small"
												sx={{
													color: "#3ED9C4",
													textTransform: "capitalize",
													fontWeight: "600",
													fontSize: "13.5992px",
													lineHeight: "20px",
												}}
											>
												View <KeyboardArrowRightIcon />
											</Button>
										</Box>
									</Box>
									<Box className="right__item__two banner__desktop">
										<Button
											variant="outlined"
											sx={{
												color: "#FFFFFF",
												borderRadius: "4.7619px",
												border: "none",
												width: "230px",
												height: "45px",
												fontWeight: "600",
												fontsize: "13px",
												lineHeight: "31px",
												backgroundColor: "#3ED9C4",
												textTransform: "capitalize",
												"&:hover": { border: "1px solid #3ED9C4" },
											}}
										>
											<Typography>View and filter projects</Typography>
										</Button>
									</Box>
								</Box>
								<Divider />
								<Box className="right__item__outer">
									<Box className="right__item__one">
										<Box className="right__item__icon">
											<Box className="banner__icon">
												<InfoIcon sx={{ color: "#3ED9C4" }} />
											</Box>
										</Box>
										<Box className="right__item__text">
											<Typography>View contractor information</Typography>
											<Button
												className="banner__mobile"
												size="small"
												sx={{
													color: "#3ED9C4",
													textTransform: "capitalize",
													fontWeight: "600",
													fontSize: "13.5992px",
													lineHeight: "20px",
												}}
											>
												View <KeyboardArrowRightIcon />
											</Button>
										</Box>
									</Box>
									<Box className="right__item__two banner__desktop">
										<Button
											variant="outlined"
											sx={{
												color: "#FFFFFF",
												borderRadius: "4.7619px",
												border: "none",
												width: "235px",
												height: "45px",
												fontWeight: "600",
												fontsize: "13px",
												lineHeight: "31px",
												backgroundColor: "#3ED9C4",
												textTransform: "capitalize",
												"&:hover": { border: "1px solid #3ED9C4" },
											}}
										>
											<Typography>View and filter contractors</Typography>
										</Button>
									</Box>
								</Box>
								<Divider />
								<Box className="right__item__outer">
									<Box className="right__item__one">
										<Box className="right__item__icon">
											<Box className="banner__icon">
												<FiPieChart
													style={{
														color: "#3ED9C4",
														fontWeight: "600",
														fontSize: "20px",
													}}
												/>
											</Box>
										</Box>
										<Box className="right__item__text">
											<Typography>
												Compare selected projects to similar projects based on your selected
												criteria
											</Typography>
											<Button
												className="banner__mobile"
												size="small"
												sx={{
													color: "#3ED9C4",
													textTransform: "capitalize",
													fontWeight: "600",
													fontSize: "13.5992px",
													lineHeight: "20px",
												}}
											>
												Compare <KeyboardArrowRightIcon />
											</Button>
										</Box>
									</Box>
									<Box className="right__item__two banner__desktop">
										<Button
											variant="outlined"
											sx={{
												color: "#FFFFFF",
												borderRadius: "4.7619px",
												border: "none",
												width: "230px",
												height: "45px",
												fontWeight: "600",
												fontsize: "13px",
												lineHeight: "31px",
												backgroundColor: "#3ED9C4",
												textTransform: "capitalize",
												"&:hover": { border: "1px solid #3ED9C4" },
											}}
										>
											<Typography>Compare projects</Typography>
										</Button>
									</Box>
								</Box>
							</Box>
						</Card>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
