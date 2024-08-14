import * as React from "react";
import { useEffect, useState } from "react";
import { Card, Box, IconButton, Typography } from "@mui/material";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { CurrencyFormatter } from "../../CurrencyFormatter";
import { Bar } from "react-chartjs-2";
import { TbCreditCard } from "react-icons/tb";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

export const Chart = () => {
	const [chartData, setChartData] = React.useState<any>({
		datasets: [],
	});

	const [chartOptions, setChartOptions] = useState<{}>({});

	useEffect(() => {
		setChartData({
			labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
			datasets: [
				{
					label: " ",
					data: [12, 55, 34, 120, 549],
					borderColor: "#FFFFFF",
					backgroundColor: "#03C6C8",
				},
			],
		});

		setChartOptions({
			responsive: true,
			scales: {
				x: {
					grid: {
						display: false,
					},
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
					// position: "top",
				},
				title: {
					display: false,
					text: "Set to true if you want chart title",
				},
			},
		});
	}, []);

	return (
		<Card sx={{ margin: "auto 20px auto" }} className="chart__card">
			<Box sx={{ display: "flex" }} my={2}>
				<IconButton aria-label="info" sx={{ color: "#09797A" }}>
					<TbCreditCard />
				</IconButton>
				<Box>
					<Typography
						sx={{
							fontWeight: "400",
							fontSize: "14.6294px",
							lineHeight: "22px",
							color: "#09797A",
						}}
					>
						Value of contracts awarded by year
					</Typography>
					<Typography
						sx={{
							fontWeight: "400",
							fontSize: "14.6294px",
							lineHeight: "22px",
							color: "#A0A0A0",
						}}
					>
						<span>&#x20A6;</span>
						{CurrencyFormatter(3924780624)} in total for the past 1 year
					</Typography>
				</Box>
			</Box>
			<Bar options={chartOptions} data={chartData} />
		</Card>
	);
};
