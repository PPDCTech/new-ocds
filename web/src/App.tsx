import * as React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Home } from "./pages/Home/Home";
import { Projects } from "./pages/Projects/Projects";
import { Contractors } from "./pages/Contractor/Contractors";
import { ContractorDetail } from "./pages/Contractor/ContractorDetail";
import { CompareProjects } from "./pages/CompareProjects/CompareProjects";
import { Comparison } from "./pages/CompareProjects/Comparison";
import { AdditionalInformation } from "./pages/AdditionalInformation/AdditionalInformation";
import { Error } from "./pages/Error";
import { ProjectDetail } from "./pages/Projects/ProjectDetail";

function App() {
	return (
		<BrowserRouter>
			<CssBaseline />
			<Routes>
				<Route index element={<Home />} />
				<Route path="contractors" element={<Contractors />} />
				<Route path="projects" element={<Projects />} />
				<Route path="compare-projects" element={<CompareProjects />} />
				<Route path="additional-information" element={<AdditionalInformation />} />
				<Route path="contractors/search" element={<Contractors />} />
				<Route path="projects/search" element={<Projects />} />
				<Route path="projects/missingData" element={<Projects />} />
				<Route
					path="contractors/search/:search_params"
					element={<ContractorDetail />}
				/>
				<Route path="projects/search/:search_params" element={<ProjectDetail />} />
				<Route
					path="compare-projects/compare"
					// path="compare-projects/compare/:search_params"
					element={<Comparison />}
				/>
				<Route path="home" element={<Home />}>
					<Route path="contractors" element={<Contractors />}>
						<Route path="search" element={<Contractors />}>
							<Route path=":search_params" element={<ContractorDetail />} />
						</Route>
					</Route>
					<Route path="projects" element={<Projects />}>
						<Route path="search" element={<Projects />}>
							<Route path="search/:search_params" element={<ProjectDetail />} />
						</Route>
					</Route>
					<Route path="compare-projects" element={<CompareProjects />}>
						<Route path="compare" element={<Comparison />}>
							{/* <Route path="compare/:search_params" element={<Comparison />} /> */}
						</Route>
					</Route>
					<Route
						path="additional-information"
						element={<AdditionalInformation />}
					></Route>
				</Route>
				<Route path="*" element={<Error />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
