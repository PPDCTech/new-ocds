import * as React from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";
import { Box, Container } from "@mui/material";
import "./style.css";

interface Props {
	children: JSX.Element | JSX.Element[] | React.ReactNode | React.ReactElement;
}

export const PageWrapper = ({ children }: Props): React.ReactElement => {
	return (
		<Box className="page__wrapper">
			<Navbar />
			<Box className="content">{children}</Box>
			<Footer />
		</Box>
	);
};
