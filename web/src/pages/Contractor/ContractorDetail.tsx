import * as React from "react";
import { Outlet } from "react-router-dom";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Button, Box, Paper, Typography, Container } from "@mui/material";
import "./style.css";
import { TableArea } from "./TableArea";
import { Banner } from "./Banner";
import Badge from "../../assets/vectors/badge.svg";
import Breadcrumbs from "../../components/Breadcrumbs";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useParams } from "react-router-dom";
import { DataType } from "./Contractors";

export const ContractorDetail = () => {
	const [tableData, setTableData] = React.useState<DataType[]>([] as DataType[]);
	const [searchTerm, setSearchTerm] = React.useState<any>({
		query: "",
		list: [],
	});

	const searchedItem = searchTerm.list;
	const params = useParams();
	const { search_params } = params;

	return (
		<PageWrapper>
			<Box my={5} id="contractor">
				<Container maxWidth="lg">
					<Breadcrumbs />
				</Container>
				<Banner
					contractorData={tableData}
					searchTerm={searchTerm}
					searchParams={search_params}
					setSearchTerm={setSearchTerm}
				/>
				<Box className="contractor__h2" my={4} sx={{ paddingLeft: "3%" }}>
					<Typography>Contractor Details</Typography>
				</Box>
				<Paper>
					{searchedItem?.map((item: any, idx: number) => (
						<Box className="contractor__detail__head" key={idx}>
							<Box className="contractor__detail__head__left">
								<Box className="detail__head__icon">
									<PersonOutlineOutlinedIcon
										fontSize="medium"
										sx={{ color: "#09797A", marginLeft: "-10px" }}
									/>
								</Box>
								<Typography
									className="detail__head__text"
									sx={{
										color: "#09797A",
										fontWeight: "700",
										fontSize: "20px",
										lineHeight: "26px",
									}}
								>
									{item.contractor}
								</Typography>
							</Box>
							<Box className="contractor__detail__head__right detail__head__right">
								<Box className="detail__head__icon">
									<img src={Badge} alt="Badge icon" width="25px" height="25px" />
								</Box>
								<Box>
									<Typography className="detail__head__text detail__recent__project">
										Number Of Projects Awarded
									</Typography>
									<Typography
										className="detail__recent__project__date"
										sx={{ marginLeft: "2.5%" }}
									>
										{item.number_of_projects_awarded}
									</Typography>
								</Box>
							</Box>
						</Box>
					))}

					<Box className="contractor__detail__body">
						<Box className="detail__body__head">
							<Box className="detail__head__right">
								<Box className="detail__head__icon">
									<img src={Badge} alt="Badge icon" width="25px" height="25px" />
								</Box>
								<Box>
									<Typography className="detail__recent__project">
										Recent Projects
									</Typography>
									<Typography className="detail__recent__project__date">
										2019 - 2022
									</Typography>
								</Box>
							</Box>
						</Box>
						{searchedItem?.map((item: any, idx: number) => (
							<Box className="card__aligner" key={idx}>
								<Box className="detail__card__container">
									{item.recent_projects.map((project: any) => (
										<Box sx={{ minWidth: 275 }} className="detail__card">
											<Typography className="detail__card__text">
												{project.title}
											</Typography>
											<Box className="detail__action__area">
												<Button size="small" sx={{ textTransform: "capitalize" }}>
													More Details <KeyboardArrowRightIcon sx={{ fontSize: "15px" }} />
												</Button>
											</Box>
										</Box>
									))}
								</Box>
							</Box>
						))}
					</Box>
				</Paper>
				<Box className="contractor__h2" my={4} sx={{ paddingLeft: "3%" }}>
					<Typography>Select a contractor for more details:</Typography>
				</Box>
				<TableArea
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					contractorData={tableData}
					setContractorData={setTableData}
				/>
			</Box>

			{/* The Outlet Component is required for
			 *  Breadcrumbs nested routes
			 */}
			<Outlet />
		</PageWrapper>
	);
};
