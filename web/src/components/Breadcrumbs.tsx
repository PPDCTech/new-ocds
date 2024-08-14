import * as React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { withRouter } from "./withRouter";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


const Breadcrumbs = (props: any) => {
	const {
		location: { pathname },
	} = props.router;
	const pathnames = pathname.split("/").filter((x: any) => x);
	// console.log(props)
	// console.log(props.router.location);
	return (
		<MUIBreadcrumbs
			separator={<NavigateNextIcon fontSize="small" />}
			aria-label="breadcrumb"
		>
			{pathnames.length > 0 ? (
				<Link to="/home" style={{ textDecoration: "none", color: "inherit" }}>
					Home
				</Link>
			) : (
				<Typography>Home</Typography>
			)}
			{pathnames.map((name: any, index: number) => {
				const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
				const isLast = index === pathnames.length - 1;
				return isLast ? (
					<Typography
						key={name}
						style={{
							textDecoration: "none",
							fontWeight: "bolder",
							fontSize: "inherit",
						}}
					>
						{decodeURI(name)}
					</Typography>
				) : (
					<Link
						key={name}
						to={routeTo}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{name}
					</Link>
				);
			})}
		</MUIBreadcrumbs>
	);
};

export default withRouter(Breadcrumbs);
