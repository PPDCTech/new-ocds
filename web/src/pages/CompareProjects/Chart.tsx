import * as React from "react";
import { useEffect, useState } from "react";
import {
	Card,
	CardActions,
	Box,
	IconButton,
	Button,
	Typography,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import annotationPlugin from "chartjs-plugin-annotation";
import { HiDownload } from "react-icons/hi";
import { FiCheckSquare } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { HtmlTooltip } from "../../components/HtmlTooltip";

ChartJS.register(
	annotationPlugin,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const Chart = () => {
	const navigate = useNavigate();
	const [chartData, setChartData] = React.useState<any>({ datasets: [] });
	const [chartOptions, setChartOptions] = useState<{}>({});
	const [selectedProjTitle, setSelectedProjTitle] = useState<string>("");

	const mock_contract_amounts = [250, 900, 1200, 1800, 1400, 2500];
	const mock_budget_amounts = [100, 300, 200, 800, 2400, 3000];

	const contract_average = (array: number[]) =>
		array.reduce((a, b) => a + b) / array.length;
	const budget_average = (array: number[]) =>
		array.reduce((a, b) => a + b) / array.length;

	useEffect(() => {
		const storage = JSON.parse(
			sessionStorage.getItem("selected_ocds_projects") || "{}",
		);
		console.log(storage);

		let titleString = "";
		for (let proj in storage) {
			let temp = storage[proj].title;
			titleString += temp + ",";
		}
		setSelectedProjTitle(titleString);

		const contract_amounts_array = [
			parseInt(storage[0]?.amount) || 0,
			parseInt(storage[1]?.amount) || 0,
			parseInt(storage[2]?.amount) || 0,
			parseInt(storage[3]?.amount) || 0,
		];
		const budget_amounts_array = [
			parseInt(storage[0]?.budget_amount) || 0,
			parseInt(storage[1]?.budget_amount) || 0,
			parseInt(storage[2]?.budget_amount) || 0,
			parseInt(storage[3]?.budget_amount) || 0,
		];

		setChartData({
			labels: [
				storage[0]?.title || "",
				storage[1]?.title || "",
				storage[2]?.title || "",
				storage[3]?.title || "",
			],
			datasets: [
				{
					label: "Contract Amount",
					backgroundColor: "#09797A",
					borderColor: "#FFFFFF",
					borderWidth: 1,
					barThickness: "15",
					hoverBackgroundColor: "#A9ACB1",
					hoverBorderColor: "#A9ACB1",
					data: contract_amounts_array,
				},
				{
					label: "Budget Amount",
					backgroundColor: "#1CCCCD",
					borderColor: "#FFFFFF",
					borderWidth: 1,
					barThickness: "15",
					hoverBackgroundColor: "#A9ACB1",
					hoverBorderColor: "#A9ACB1",
					data: budget_amounts_array,
				},
			],
		});

		setChartOptions({
			responsive: true,
			indexAxis: "y",
			scales: {
				x: {
					grid: {
						display: false,
					},
					position: "top",
				},
				y: {
					grid: {
						display: true,
						lineWidth: 20,
						z: -5,
						color: "#F7FAFC",
					},
				},
			},
			plugins: {
				legend: {
					display: false,
				},
				title: {
					display: false,
					text: "Set to true if you want chart title",
				},
				annotation: {
					annotations: {
						contractAverage: {
							type: "line",
							scaleID: "x",
							value: contract_average(contract_amounts_array),
							bordercolor: "#4B4DED",
							borderWidth: 2,
							label: {
								type: "label",
								content: "Contract Average",
								display: true,
								enabled: true,
								position: "100%",
								backgroundColor: "#4B4DED",
								xAdjust: 55,
								borderRadius: {
									topLeft: "0",
									topRight: "25",
									bottomLeft: "25",
									bottomRight: "25",
								},
							},
						},
						budgetAverage: {
							type: "line",
							scaleID: "x",
							value: budget_average(budget_amounts_array),
							borderColor: "#31D0AA",
							borderWidth: 2,
							borderDash: [4, 4],
							label: {
								type: "label",
								content: "Budget Average",
								display: true,
								enabled: true,
								position: "100%",
								backgroundColor: "#31D0AA",
								xAdjust: -55,
								borderRadius: {
									topLeft: "25",
									topRight: "0",
									bottomLeft: "25",
									bottomRight: "25",
								},
							},
						},
					},
				},
			},
		});
	}, []);

	return (
		<>
			<Box ml={5} my={4}>
				<Button
					variant="contained"
					sx={{
						color: "#FFFFFF",
						backgroundColor: "#1CCCCD",
						position: "relative",
						padding: "1.5% 7%",
						"&:hover": { backgroundColor: "#A0A0A0" },
					}}
					onClick={() => navigate("/compare-projects")}
				>
					<span
						style={{
							position: "absolute",
							left: "10%",
							top: "32%",
							fontWeight: "100",
							fontSize: "12px",
						}}
					>
						Back to Selection
					</span>
					<FiCheckSquare
						size="1.7em"
						style={{ position: "absolute", right: "10%" }}
					/>
				</Button>
			</Box>
			<Card
				sx={{
					boxShadow: "0px 4px 35px rgba(0, 0, 0, 0.08)",
					borderRadius: "20px",
					paddingBottom: "70px",
					margin: "auto",
				}}
			>
				<Box
					sx={{
						padding: "1% 0 0 3%",
						display: "flex",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Box my={3}>
						<Typography
							sx={{ fontWeight: "600", fontSize: "25px", lineHeight: "38px" }}
						>
							Contract & budget amounts of similar projects
						</Typography>
						<Typography
							sx={{ fontWeight: "500", fontSize: "18px", lineHeight: "25px" }}
						>
							Selected Project(s):
						</Typography>
						<Typography
							sx={{ fontWeight: "bolder", fontSize: "18px", lineHeight: "25px" }}
						>
							{selectedProjTitle}
						</Typography>
					</Box>
					<Button
						variant="outlined"
						sx={{
							marginRight: "1%",
							width: "200px",
							textTransform: "capitalize",
							border: "2px solid #1CCCCD",
							color: "#1CCCCD",
						}}
						disableElevation
					>
						<HiDownload /> &nbsp; &nbsp; &nbsp; Export File
					</Button>
				</Box>
				<Box sx={{ display: "flex" }}>
					<Box
						sx={{
							backgroundColor: "#F7FAFC",
							width: "80%",
							padding: "5% 2%",
							position: "relative",
						}}
					>
						<Box sx={{ position: "absolute", top: "15%", left: "0" }}>
							<CardActions>
								<HtmlTooltip
									title={
										<React.Fragment>
											<em>{"The comparison of contract amount with the budget "}</em>
											<b>{"Dark green bars"}</b> <br />
											<em>{""}</em>
										</React.Fragment>
									}
								>
									<IconButton
										aria-label="info"
										sx={{
											color: "#3ED9C4",
											textTransform: "capitalize",
											fontWeight: "600",
											fontSize: "13.5992px",
											lineHeight: "20px",
											boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.07)",
											borderRadius: "50%",
											width: "24px",
											height: "24px",
											position: "absolute",
											top: "15px",
											left: "15px",
										}}
									>
										<HelpOutlineIcon />
									</IconButton>
								</HtmlTooltip>
							</CardActions>
							<CardActions>
								<HtmlTooltip
									title={
										<React.Fragment>
											<em>{"The comparison of budget with the contract amound "}</em>
											<b>{"light green bars"}</b> <br />
											<em>{""}</em>
										</React.Fragment>
									}
								>
									<IconButton
										aria-label="info"
										sx={{
											color: "#3ED9C4",
											textTransform: "capitalize",
											fontWeight: "600",
											fontSize: "13.5992px",
											lineHeight: "20px",
											boxShadow: "0px 4px 11px rgba(0, 0, 0, 0.07)",
											borderRadius: "50%",
											width: "24px",
											height: "24px",
											position: "absolute",
											top: "55px",
											left: "15px",
										}}
									>
										<HelpOutlineIcon />
									</IconButton>
								</HtmlTooltip>
							</CardActions>
						</Box>
						<Bar options={chartOptions} data={chartData} />
					</Box>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								padding: "0 10%",
								margin: "2% 0",
							}}
						>
							<Box
								sx={{ backgroundColor: "#09797A", height: "20px", width: "95px" }}
							></Box>
							<Typography sx={{ ml: 4 }}>Contract Amount</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								padding: "0 10%",
								margin: "2% 0",
							}}
						>
							<Box
								sx={{ backgroundColor: "#1CCCCD", height: "20px", width: "95px" }}
							></Box>
							<Typography sx={{ ml: 4 }}>Budget Amount</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								padding: "0 10%",
								margin: "2% 0",
							}}
						>
							<hr
								style={{
									borderTop: "4px dashed #31D0AA",
									width: "95px",
									background: "none",
								}}
							/>
							<Typography sx={{ ml: 4 }}>*Budget Average</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								padding: "0 10%",
								margin: "2% 0",
							}}
						>
							<hr
								style={{
									borderTop: "4px solid #4B4DED",
									width: "95px",
									background: "none",
								}}
							/>
							<Typography sx={{ ml: 4 }}>*Contract Average</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								padding: "0 10%",
							}}
						>
							<Typography>
								<span style={{ fontWeight: "bold" }}>*Budget Average</span>
								<br />
								Average budget amount across compared projects
							</Typography>
						</Box>
						<Box
							sx={{
								display: "flex",
								alignItems: "center",
								padding: "0 10%",
							}}
						>
							<Typography>
								<span style={{ fontWeight: "bold" }}>*Budget Average</span>
								<br />
								Average contract amount across compared projects
							</Typography>
						</Box>
					</Box>
				</Box>
			</Card>
		</>
	);
};
