import * as React from "react";
import { InputBase, Box, Button, Card, Container } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import Breadcrumbs from "../../components/Breadcrumbs";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: "#F9F9F9",
	// "&:hover": {
	// 	backgroundColor: alpha(theme.palette.common.white, 0.5),
	// },
	// marginTop: 20,
	paddingTop: 5,
	paddingBottom: 5,
	paddingLeft: 18,
	width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "#8C8585",
}));

const SearchMenuIconWrapper = styled("div")(({ theme }) => ({
	// padding: theme.spacing(0, 1),
	height: "100%",
	position: "absolute",
	right: 0,
	top: 0,
	// pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	color: "#8C8585",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "#8C8585",
	"& .MuiInputBase-input": {
		padding: theme.spacing(2, 2, 1, 2),
		fontSize: `calc(0.5 + ${theme.spacing(1)})`,
		fontWeight: `calc(0.25em + ${theme.spacing(1)})`,
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create("width"),
		width: "75%",
		[theme.breakpoints.up("sm")]: {
			// width: 100,
			"&:focus": {
				width: "75%",
				backgroundColor: alpha(theme.palette.common.white, 0.9),
			},
		},
	},
}));

export const AdditionalInfoHero = () => {
	return (
		<>
			<Box className="info__hero">
				<Container maxWidth="lg">
					<Breadcrumbs />
					<Box className="info__overlay">
						<div className="info__overlay__body">
							<h2 className="info__overlay__heading" style={{ fontSize: "30px" }}>
								Additional information
							</h2>
							<p className="info__overlay__paragraph mt-2">
								Find additional resources about public procurement in Adamawa and
								Nigeria below
							</p>
						</div>
					</Box>
				</Container>
			</Box>
			<Container maxWidth="xl">
				<Card className="info__search__bar">
					<Search>
						<SearchIconWrapper>
							<SearchIcon fontSize="large" />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search resources"
							inputProps={{ "aria-label": "search" }}
						/>
						<SearchMenuIconWrapper>
							<Button
								variant="contained"
								sx={{
									height: "99.9%",
									padding: "0 50px",
									backgroundColor: "#03C6C8",
									boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.05)",
									borderRadius: "0 5px 5px 0",
									"&:hover": {
										cursor: "pointer",
										backgroundColor: "#03C6C8",
									},
								}}
							>
								Search
							</Button>
						</SearchMenuIconWrapper>
					</Search>
				</Card>
			</Container>
		</>
	);
};
