import * as React from "react";
import { Outlet } from "react-router-dom";

import "./style.css";
import { CardArea } from "./CardArea";
import { Banner } from "./Banner";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { Hero } from "./Hero";

export const Home = () => {
	return (
		<PageWrapper>
			<Hero />
			<CardArea />
			<Banner />
			{/*
			The Outlet Component is required for
			 Breadcrumbs nested routes 
			  */}
			<Outlet />
		</PageWrapper>
	);
};
