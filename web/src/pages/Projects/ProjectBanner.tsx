import * as React from "react";
import {
	alpha,
	Box,
	Card,
	CardContent,
	Grid,
	InputBase,
	styled,
	Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import "./Projects.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { ProjectsDataType } from "./Projects";

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
	width: "95%",
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

export const ProjectBanner = ({
	projectData,
	searchTerm,
	searchParams,
	setSearchTerm,
}: Props) => {
	const [searchItem, setSearchItem] = React.useState<any>("");
	const results = projectData.filter((val: any) => {
		if (
			val.project_title.toLowerCase().includes(searchItem.toLowerCase()) ||
			val.lga.toLowerCase().includes(searchItem.toLowerCase()) ||
			val.tender_year === searchItem ||
			val.contract_amount === searchItem ||
			val.budget_amount === searchItem ||
			val.contractor.toLowerCase().includes(searchItem.toLowerCase()) ||
			val.mda.toLowerCase().includes(searchItem.toLowerCase())
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
		const results = projectData.filter((val: any) => {
			if (event.target.value === "") {
				return projectData;
			}
			if (
				val.project_title
					.toLowerCase()
					.includes(event.target.value.toLowerCase()) ||
				val.lga.toLowerCase().includes(event.target.value.toLowerCase()) ||
				val.tender_year === event.target.value ||
				val.contract_amount === event.target.value ||
				val.budget_amount === event.target.value ||
				val.contractor.toLowerCase().includes(event.target.value.toLowerCase()) ||
				val.mda.toLowerCase().includes(event.target.value.toLowerCase())
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
		<Box className="projects__banner">
			<Box sx={{ flexGrow: 1, padding: 5 }}>
				<Grid container spacing={2}>
					<Grid item xs={8}>
						<Box sx={{ width: "75%", pt: 5 }}>
							<h1 className="banner__left__heading">
								Publicly procured
								<br />
								projects in Adamawa
							</h1>
							<Typography className="banner__left__subheading" sx={{ mt: 3 }}>
								Find the projects you are interested in by using the search feature,
								adding filters or sorting columns
							</Typography>
							<Search>
								<SearchIconWrapper>
									<SearchIcon fontSize="medium" />
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="Search Project"
									inputProps={{ "aria-label": "search" }}
									onChange={handleChange}
									value={searchTerm.query}
									readOnly={searchParams ? true : false}
								/>
							</Search>
						</Box>
					</Grid>
					<Grid item xs={4}>
						<Card
							className="banner__card"
							sx={{
								width: 250,
								height: 120,
								textAlign: "center",
								mt: 4,
							}}
						>
							<CardContent>
								<Typography
									className="ppdc-green"
									sx={{ m: 0, fontSize: 14 }}
									variant="body1"
								>
									Total Number Of Projects
								</Typography>
								<Typography variant="h4" component="div" className="ppdc-teal">
									399
								</Typography>
								<Typography sx={{ m: 0, fontSize: 12 }} className="ppdc-teal">
									<ArrowUpwardIcon sx={{ fontSize: 12 }} />
									{'loading...'} {/* 25 */}
								</Typography>
								<Typography className="ppdc-green" sx={{ m: 0, fontSize: 12 }}>
									vs Previous 30 Days
								</Typography>
							</CardContent>
						</Card>
						<Card
							className="banner__card"
							sx={{
								mt: 2,
								width: 250,
								height: 120,
								textAlign: "center",
							}}
						>
							<CardContent>
								<Typography
									className="ppdc-green"
									sx={{ m: 0, fontSize: 14 }}
									variant="body1"
								>
									Total Value Of Contracts
								</Typography>
								<Typography variant="h4" component="div" className="ppdc-teal">
									&#8358;3,03Tln
								</Typography>
								<Typography sx={{ m: 0, fontSize: 12 }} className="ppdc-teal">
									<ArrowUpwardIcon sx={{ fontSize: 12 }} />
									&#8358;419,390
								</Typography>
								<Typography className="ppdc-green" sx={{ m: 0, fontSize: 12 }}>
									In The Last 30 Days
								</Typography>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};
