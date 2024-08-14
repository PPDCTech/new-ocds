import * as React from "react";
import { Box, Card, InputBase, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { DataType } from "./Contractors";

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
	contractorData: DataType[];
	// setContractorData: React.Dispatch<React.SetStateAction<DataType[]>>;
	searchTerm: any;
	searchParams: any;
	setSearchTerm: (val: any) => any;
};

export const Banner = ({
	contractorData,
	searchTerm,
	searchParams,
	setSearchTerm,
}: Props) => {
	const [searchItem, setSearchItem] = React.useState<string>("");
	const results = contractorData.filter((val: any) => {
		if (
			val.contractor.toLowerCase().includes(searchItem.toLowerCase()) ||
			val.contract_amount_paid === searchItem ||
			val.top_mda_serviced.toLowerCase().includes(searchItem.toLowerCase()) ||
			val.number_of_mdas_serviced === searchItem ||
			val.number_of_projects_awarded === searchItem ||
			val.most_recent_project_awarded
				.toLowerCase()
				.includes(searchItem.toLowerCase())
		) {
			return val;
		}
		return false;
	});

	React.useEffect(() => {
		setSearchItem(searchParams);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchParams]);

	React.useEffect(() => {
		setSearchTerm({
			query: searchItem,
			list: results,
		});
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchItem]);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const results = contractorData.filter((val: any) => {
			if (event.target.value === "") {
				return contractorData;
			}
			if (
				val.contractor.toLowerCase().includes(event.target.value.toLowerCase()) ||
				val.contract_amount_paid === event.target.value ||
				val.top_mda_serviced
					.toLowerCase()
					.includes(event.target.value.toLowerCase()) ||
				val.number_of_mdas_serviced === event.target.value ||
				val.number_of_projects_awarded === event.target.value ||
				val.most_recent_project_awarded
					.toLowerCase()
					.includes(event.target.value.toLowerCase())
			) {
				return val;
			}
			return false;
		});
		setSearchTerm({
			query: event.target.value,
			list: results,
		});
	};

	return (
		<Card className="contractor__banner">
			<Box className="contractor__banner__left" style={{ marginTop: "2%", padding: "4% 2%" }}>
				<h1 className="banner__left__heading">
					Contractors delivering publicly procured projects in Adamawa
				</h1>
				<Typography className="banner__left__subheading">
					Find the contractors you are interested in by using the search feature,
					adding filters or sorting columns
				</Typography>
				<Search>
					<SearchIconWrapper>
						<SearchIcon fontSize="medium" />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder="Search Contractor"
						inputProps={{ "aria-label": "search" }}
						onChange={handleChange}
						value={searchTerm.query}
						readOnly={searchParams ? true : false}
					/>
				</Search>
			</Box>
		</Card>
	);
};
