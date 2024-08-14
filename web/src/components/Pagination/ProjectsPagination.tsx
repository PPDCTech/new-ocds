import React, { useEffect } from "react";
import { Box, Pagination, PaginationItem, Typography } from "@mui/material";
import ArrowRight from "@mui/icons-material/ArrowRight";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import { ProjectsDataType } from "../../pages/Projects/Projects";
import { getProjectsData } from "../../services/MockService";

type PaginationVariable = {
	from: number;
	to: number;
	count: number;
};

type SetPropsType = {
	setProjectsData: React.Dispatch<React.SetStateAction<ProjectsDataType[]>>;
};

const dataSize: number = 5;

export const ProjectsPagination = ({ setProjectsData }: SetPropsType) => {
	const [pagination, setPagination] = React.useState<PaginationVariable>({
		count: 0,
		from: 0,
		to: dataSize, // number of data to fetch to display per page/table,
	});

	useEffect(() => {
		getProjectsData(pagination.from, pagination.to).then((response: any) => {
			setProjectsData(response.data);
			setPagination({ ...pagination, count: response.count });
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pagination.from, pagination.to]);

	const handleDataChange = (event: React.ChangeEvent<unknown>, page: number) => {
		const from = (page - 1) * dataSize;
		const to = (page - 1) * dataSize + dataSize;

		setPagination({ ...pagination, from: from, to: to });
	};

	return (
		<Box
			sx={{
				width: "100%",
				padding: "30px 0",
				borderTop: "1px solid #d8dce1",
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
			}}
		>
			<Typography sx={{ marginLeft: "10%" }}>
				<span style={{ color: "#D4D4D4" }}>Showing</span>&nbsp;
				<span style={{ color: "#0e0e2c" }}>
					{pagination.from === 0 ? pagination.from + 1 : pagination.from}-
					{pagination.to}
				</span>{" "}
				&nbsp;
				<span style={{ color: "#D4D4D4" }}>from</span>&nbsp;
				<span style={{ color: "#0e0e2c" }}>{pagination.count}</span>
				&nbsp;
				<span style={{ color: "#D4D4D4" }}>contractors</span>
			</Typography>
			<Box sx={{ marginRight: "7%" }}>
				<Pagination
					count={Math.ceil(pagination.count / dataSize)}
					variant="outlined"
					shape="rounded"
					color="primary"
					onChange={handleDataChange}
					renderItem={(item) => (
						<PaginationItem
							components={{
								previous: ArrowLeft,
								next: ArrowRight,
							}}
							{...item}
						/>
					)}
				/>
			</Box>
		</Box>
	);
};
