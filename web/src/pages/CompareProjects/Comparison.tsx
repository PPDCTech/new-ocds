import * as React from "react";
import { Outlet } from "react-router-dom";
import Breadcrumbs from "../../components/Breadcrumbs";
import "./style.css";
import { TableArea } from "./TableArea";
import { Banner } from "./Banner";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Button, Box, Typography, Container } from "@mui/material";
import { ProjectsDataType } from "./CompareProjects";
import { useParams } from "react-router-dom";
import { Chart } from "./Chart";
import { ComparisonTable } from "./ComparisonTable";

export const Comparison = () => {
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
				<Chart />
				<ComparisonTable />
				{/* <TableArea /> */}
			</Box>

			{/* The Outlet Component is required for
			 *  Breadcrumbs nested routes
			 */}
			<Outlet />
		</PageWrapper>
	);
};
