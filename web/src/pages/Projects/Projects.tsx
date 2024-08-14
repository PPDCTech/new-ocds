import * as React from "react";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Box, Button, Typography, Container } from "@mui/material";
import "./Projects.css";
import { ProjectsTable } from "./ProjectsTable";
import AddIcon from "@mui/icons-material/Add";
import PercentIcon from "@mui/icons-material/Percent";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import { ProjectBanner } from "./ProjectBanner";
import { ProjectTable } from "./ProjectTable";

export type ProjectsDataType = {
	id: number;
	project_title: string;
	lga: string;
	tender_year: number;
	contract_amount: number;
	budget_amount: number;
	contract_budget_gap_amount: number;
	contract_budget_gap_percent: number;
	contractor: string;
	mda: string;
};

export const Projects = () => {
	const [tableData, setTableData] = React.useState<ProjectsDataType[]>(
		[] as ProjectsDataType[],
	);
	const [searchTerm, setSearchTerm] = React.useState<any>({
		query: "",
		list: [],
	});

	return (
		<PageWrapper>
			<Box sx={{ marginTop: "3%", padding: "5%" }}>
				<Container maxWidth="lg">
					<Breadcrumbs />
				</Container>
				<ProjectBanner
					projectData={tableData}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					searchParams={""}
				/>
				<Box
					className="contractor__h2"
					id="quick__action"
					my={5}
					py={2}
					sx={{ paddingLeft: "2%" }}
				>
					<Typography sx={{ color: "#09797a" }}>Quick Actions</Typography>
					<Box
						sx={{ my: 3, ml: 0, display: "flex", justifyContent: "space-between" }}
					>
						<Button
							size="small"
							variant="contained"
							startIcon={<PercentIcon />}
							endIcon={<AddIcon />}
						>
							<Typography variant="body1">
								Sort projects by contract-budget gap (in %)
							</Typography>
						</Button>
						<Button
							size="small"
							variant="contained"
							endIcon={<AddIcon />}
							sx={{ ml: 2 }}
						>
							<Box
								sx={{
									border: "1px solid #09797a",
									borderRadius: "50%",
									px: 1,
									mr: 1,
								}}
							>
								₦
							</Box>
							<Typography variant="body1">
								Sort projects by contract-budget gap (in ₦)
							</Typography>
						</Button>
						<Button
							size="small"
							variant="contained"
							startIcon={<HelpCenterOutlinedIcon />}
							endIcon={<AddIcon />}
							sx={{ ml: 2 }}
						>
							<Typography variant="body1">
								Filter to projects with missing data
							</Typography>
						</Button>
					</Box>
				</Box>
				{/* <ProjectTable /> */}
				<ProjectsTable
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					projectData={tableData}
					setProjectData={setTableData}
				/>
			</Box>
			{/*
			The Outlet Component is required for
			 Breadcrumbs nested routes 
			  */}
			<Outlet />
		</PageWrapper>
	);
};
