import * as React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import "./style.css";
import { TableArea } from "./TableArea";
import { Banner } from "./Banner";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Button, Box, Typography, Container, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PercentIcon from "@mui/icons-material/Percent";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";

import { useParams } from "react-router-dom";
import { ProjectTable } from "../Projects/ProjectTable";

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

export const CompareProjects = () => {
	const [tableData, setTableData] = React.useState<ProjectsDataType[]>(
		[] as ProjectsDataType[],
	);
	const [searchTerm, setSearchTerm] = React.useState<any>({
		query: "",
		list: [],
	});

	const searchedItem = searchTerm.list;
	const params = useParams();
	const { search_params } = params;
	return (
		<PageWrapper>
			<Box my={5} id="compare-project">
				<Container maxWidth="lg">
					<Breadcrumbs />
				</Container>
				<Banner
					projectData={tableData}
					searchTerm={searchTerm}
					searchParams={search_params}
					setSearchTerm={setSearchTerm}
				/>
				{/* <TableArea /> */}
				<ProjectTable />
				{/* <CircularProgress color="success" /> */}
			</Box>

			{/* The Outlet Component is required for
			 *  Breadcrumbs nested routes
			 */}
			<Outlet />
		</PageWrapper>
	);
};
