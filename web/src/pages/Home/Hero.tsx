import * as React from "react";
import HeroImg from "../../assets/images/adamawaIcon.png";
import { styled, alpha } from "@mui/material/styles";
import { InputBase, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { AdvanceForm } from "./AdvanceForm";

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.85),
	// "&:hover": {
	// 	backgroundColor: alpha(theme.palette.common.white, 0.5),
	// },
	marginTop: 20,
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
		padding: theme.spacing(2, 2, 2, 0),
		fontSize: `calc(0.25 + ${theme.spacing(1)})`,
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

export const Hero = () => {
	const [show, setShow] = React.useState(false);

	const handleClick = () => {
		setShow(!show);
	};

	return (
		<Box className="hero" sx={{ borderBottom: "1px solid #F7FAFC" }}>
			<Box className="home__overlay">
				<img src={HeroImg} alt="State Logo" className="home__overlay__image" />
				<div className="home__overlay__body">
					<h2 className="home__overlay__heading" style={{ fontSize: "30px" }}>
						Adamawa Open Contracting Portal
					</h2>
					<p className="home__overlay__paragraph mt-2">
						Find data about all public procured projects in Adamawa State
					</p>
				</div>
				<Box className="home__search__bar">
					<Search>
						<SearchIconWrapper>
							<SearchIcon fontSize="large" />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder="Search project, contractor, location or any other keywords. For advance search, click the button on the right"
							inputProps={{ "aria-label": "search" }}
						/>
						<SearchMenuIconWrapper>
							{!show ? (
								<Button
									variant="contained"
									sx={{
										height: "99.9%",
										padding: "0 40px",
										backgroundColor: "#03C6C8",
										boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.05)",
										borderRadius: "5px 0px 0px 5px",
										"&:hover": {
											cursor: "pointer",
											backgroundColor: "#03C6C8",
										},
									}}
								>
									Search
								</Button>
							) : null}
							<Button
								onClick={handleClick}
								sx={{
									backgroundColor: show ? "#03C6C8" : "#C6C6C6",
									padding: "15px 0 16px 0",
									"&:hover": {
										cursor: "pointer",
										backgroundColor: show ? "#03C6C8" : "#C6C6C6",
									},
								}}
							>
								{!show ? (
									<KeyboardDoubleArrowDownIcon sx={{ color: "#ffffff" }} />
								) : (
									<KeyboardDoubleArrowUpIcon sx={{ color: "#ffffff" }} />
								)}
							</Button>
						</SearchMenuIconWrapper>
					</Search>
					{show ? (
						<Box className="home__advance__search">
							<AdvanceForm />
						</Box>
					) : null}
				</Box>
			</Box>
		</Box>
	);
};
