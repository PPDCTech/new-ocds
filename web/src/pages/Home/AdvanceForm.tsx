import * as React from "react";

import {
	Button,
	Box,
	FormControl,
	Grid,
	Typography,
	IconButton,
	TextField,
	MenuItem,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { HtmlTooltip } from "../../components/HtmlTooltip";

export const AdvanceForm = () => {
	const [inputValue, setInputValue] = React.useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};
	return (
		<form style={{ padding: "0 2%", backgroundColor: "#FFFFFF", width: "100%" }}>
			<Box
				sx={{ display: "flex", alignItems: "center", padding: "30px 0 20px 0" }}
			>
				<Typography
					sx={{
						fontWeight: "600",
						fontSize: "15.71px",
						lineHeight: "22px",
						color: "#09797A ",
					}}
				>
					Advance Search
				</Typography>
				<HtmlTooltip
					title={
						<React.Fragment>
							<em>{"Use the input area below "}</em>
							<em>{"for advance search"}</em>
						</React.Fragment>
					}
				>
					<IconButton
						aria-label="info"
						sx={{
							color: "#3ED9C4",
							textTransform: "capitalize",
							fontWeight: "500",
							fontSize: "10.5992px",
							lineHeight: "20px",
							boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.07)",
							borderRadius: "50%",
							position: "absolute",
							top: "27px",
							left: "15%",
							width: "24px",
							height: "24px",
						}}
					>
						<HelpOutlineIcon />
					</IconButton>
				</HtmlTooltip>
			</Box>
			<Grid container spacing={3} justifyContent="center" alignItems="center">
				<Grid item xs={12} sm={4} md={2.4}>
					<Box className="advance__form__small__control">
						<TextField
							className="advance__form__small__input"
							variant="outlined"
							value={inputValue}
							onChange={handleChange}
							select
							label="LGA"
						>
							<MenuItem key={1} value="test">
								Test 1
							</MenuItem>
							<MenuItem key={2} value="test2">
								Test 2
							</MenuItem>
						</TextField>
					</Box>
				</Grid>
				<Grid item xs={12} sm={4} md={2.4}>
					<Box className="advance__form__small__control">
						<TextField
							className="advance__form__small__input"
							variant="outlined"
							value={inputValue}
							onChange={handleChange}
							select
							label="Year"
						>
							<MenuItem key={1} value="2019">
								2019
							</MenuItem>
							<MenuItem key={2} value="2020">
								2020
							</MenuItem>
							<MenuItem key={2} value="2021">
								2021
							</MenuItem>
						</TextField>
					</Box>
				</Grid>
				<Grid item xs={12} sm={4} md={2.4}>
					<Box className="advance__form__small__control">
						<TextField
							className="advance__form__small__input"
							variant="outlined"
							value={inputValue}
							onChange={handleChange}
							label="Contractor"
						></TextField>
					</Box>
				</Grid>
				<Grid item xs={12} sm={4} md={2.4}>
					<Box className="advance__form__small__control">
						<TextField
							className="advance__form__small__input"
							variant="outlined"
							value={inputValue}
							onChange={handleChange}
							select
							label="MDA"
						>
							<MenuItem key={1} value="Ministry">
								Ministry
							</MenuItem>
							<MenuItem key={2} value="Extra Ministerial">
								Extra Ministerial
							</MenuItem>
							<MenuItem key={3} value="Board">
								Board
							</MenuItem>
							<MenuItem key={4} value="Bureau">
								Bureau
							</MenuItem>
							<MenuItem key={5} value="Agency">
								Agency
							</MenuItem>
							<MenuItem key={6} value="Parastatal">
								Parastatal
							</MenuItem>
							<MenuItem key={7} value="LGCs">
								LGCs
							</MenuItem>
							<MenuItem key={8} value="Institution of Higher Learning">
								Institution of Higher Learning
							</MenuItem>
						</TextField>
					</Box>
				</Grid>
				<Grid item xs={12} sm={4} md={2.4}>
					<Box className="advance__form__small__control">
						<TextField
							className="advance__form__small__input"
							variant="outlined"
							value={inputValue}
							onChange={handleChange}
							select
							label="Status"
						>
							<MenuItem key={1} value="status one">
								Status 1
							</MenuItem>
							<MenuItem key={2} value="test2">
								Status 2
							</MenuItem>
						</TextField>
					</Box>
				</Grid>
			</Grid>
			<Grid
				container
				my={3}
				spacing={3}
				justifyContent="center"
				alignItems="center"
			>
				<Grid item xs={12} sm={5}>
					<FormControl fullWidth>
						<Box className="advance__form__small__control">
							<TextField
								className="advance__form__select__input"
								variant="outlined"
								value={inputValue}
								onChange={handleChange}
								select
								label="Procurement Category"
							>
								<em>
									<MenuItem key={1} value=""></MenuItem>
								</em>
								<MenuItem key={2} value="Works">
									Works
								</MenuItem>
								<MenuItem key={3} value="Goods">
									Goods
								</MenuItem>
								<MenuItem key={4} value="Service">
									Service
								</MenuItem>
							</TextField>
						</Box>
					</FormControl>
				</Grid>
				<Grid item xs={12} sm={5}>
					<FormControl fullWidth>
						<Box className="advance__form__small__control">
							<TextField
								className="advance__form__select__input"
								variant="outlined"
								value={inputValue}
								onChange={handleChange}
								select
								label="Procurement Method"
							>
								<em>
									<MenuItem key={1} value=""></MenuItem>
								</em>
								<MenuItem key={2} value="Open">
									Open
								</MenuItem>
								<MenuItem key={3} value="Selective">
									Selective
								</MenuItem>
								<MenuItem key={4} value="Limited">
									Limited
								</MenuItem>
								<MenuItem key={5} value="Direct">
									Direct
								</MenuItem>
							</TextField>
						</Box>
					</FormControl>
				</Grid>
				<Grid item xs={6} sm={2}>
					<Button
						variant="contained"
						disableElevation
						sx={{
							padding: "15px 35px",
							margin: "0 auto",
							backgroundColor: "#03C6C8",
							"&:hover": {
								cursor: "pointer",
								backgroundColor: "#8C8585",
							},
						}}
					>
						Search
					</Button>
				</Grid>
			</Grid>
		</form>
	);
};
