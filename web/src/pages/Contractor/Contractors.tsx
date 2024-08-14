import * as React from "react";
import { Outlet } from "react-router-dom";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Box, Typography, Container, CircularProgress } from "@mui/material";
import "./style.css";
import { TableArea } from "./TableArea";
import { Banner } from "./Banner";
import Breadcrumbs from "../../components/Breadcrumbs";

export type DataType = {
	id: number;
	contractor: string;
	contract_amount_paid: number;
	top_mda_serviced: string;
	number_of_mdas_serviced: number;
	number_of_projects_awarded: number;
	most_recent_project_awarded: string;
};

export const Contractors = () => {
	const [tableData, setTableData] = React.useState<DataType[]>([] as DataType[]);
	const [searchTerm, setSearchTerm] = React.useState<any>({
		query: "",
		list: [],
	});

	return (
		<PageWrapper>
			<Box my={5} id="contractor">
				<Container maxWidth="lg">
					<Breadcrumbs />
				</Container>
				<Banner
					contractorData={tableData}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
					searchParams={""}
				/>
				<Box className="contractor__h2" my={4} sx={{ paddingLeft: "3%" }}>
					<Typography>Select a contractor for more details:</Typography>
				</Box>

				{/* <CircularProgress color="success" /> */}
				
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
