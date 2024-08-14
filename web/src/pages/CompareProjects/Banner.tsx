import * as React from "react";
import { Box, InputBase, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { ProjectsDataType } from "./CompareProjects";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: "5px",
	backgroundColor: alpha(theme.palette.common.white, 1),
	"&:hover": {
		backgroundColor: alpha(theme.palette.common.white, 0.5),
	},
	marginTop: 40,
	marginBottom: 40,
	marginRight: "auto",
	width: "90%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 1),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "#8C8585",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "#8C8585",
	"& .MuiInputBase-input": {
		padding: theme.spacing(1, 1, 1, 0),
		fontSize: `calc(0.25 + ${theme.spacing(1)})`,
		fontWeight: `calc(0.25em + ${theme.spacing(1)})`,
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			// width: 100,
			"&:focus": {
				width: "100%",
				backgroundColor: alpha(theme.palette.common.white, 0.9),
			},
		},
	},
}));

type Props = {
	projectData: ProjectsDataType[];
	searchTerm: any;
	searchParams: any;
	setSearchTerm: (val: any) => any;
};

export const Banner = ({
	projectData,
	searchTerm,
	searchParams,
	setSearchTerm,
}: Props) => {
	// const [searchItem, setSearchItem] = React.useState<string>("");
	// const results = projectData.filter((val: any) => {
	// 	if (
	// 		val.contractor.toLowerCase().includes(searchItem.toLowerCase()) ||
	// 		val.contract_amount_paid === searchItem ||
	// 		val.top_mda_serviced.toLowerCase().includes(searchItem.toLowerCase()) ||
	// 		val.number_of_mdas_serviced === searchItem ||
	// 		val.number_of_projects_awarded === searchItem ||
	// 		val.most_recent_project_awarded
	// 			.toLowerCase()
	// 			.includes(searchItem.toLowerCase())
	// 	) {
	// 		return val;
	// 	}
	// 	return false;
	// });

	// React.useEffect(() => {
	// 	setSearchItem(searchParams);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [searchParams]);

	// React.useEffect(() => {
	// 	setSearchTerm({
	// 		query: searchItem,
	// 		list: results,
	// 	});
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [searchItem]);

	// const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	const results = projectData.filter((val: any) => {
	// 		if (event.target.value === "") {
	// 			return projectData;
	// 		}
	// 		if (
	// 			val.contractor.toLowerCase().includes(event.target.value.toLowerCase()) ||
	// 			val.contract_amount_paid === event.target.value ||
	// 			val.top_mda_serviced
	// 				.toLowerCase()
	// 				.includes(event.target.value.toLowerCase()) ||
	// 			val.number_of_mdas_serviced === event.target.value ||
	// 			val.number_of_projects_awarded === event.target.value ||
	// 			val.most_recent_project_awarded
	// 				.toLowerCase()
	// 				.includes(event.target.value.toLowerCase())
	// 		) {
	// 			return val;
	// 		}
	// 		return false;
	// 	});
	// 	setSearchTerm({
	// 		query: event.target.value,
	// 		list: results,
	// 	});
	// };

	return (
		<Box className="compare-project__banner">
			<Box className="compare-project__banner__left">
				<h1 className="compare-project__banner__left__heading">
					Compare publicly procured projects in Adamawa
				</h1>
				<Typography my={5} className="compare-project__banner__left__subheading">
					Find a project to compare to other projects, or select projects to compare
					from the table below
				</Typography>
				<Search>
					<SearchIconWrapper>
						<SearchIcon fontSize="medium" />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search Projects"
						inputProps={{ "aria-label": "search" }}
						// onChange={handleChange}
						// value={searchTerm.query}
						// readOnly={searchParams ? true : false}
					/>
				</Search>
			</Box>
		</Box>
	);
};
