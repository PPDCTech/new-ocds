import * as React from "react";
import { Box, Typography } from "@mui/material";
import "./style.css";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<Box className="footer__area">
			<Box className="footer__container">
				<Box className="footer__item" sx={{ borderRight: "1px solid #FFFFFF" }}>
					<Box className="footer__heading" mb={2}>
						Bureau of Public Procurement Adamawa State
					</Box>
					<Box className="footer__body">
						<Typography mt={0.5}>
							<Link className="footer__body__inner__links" to={"#"}>
								About US
							</Link>
						</Typography>
						<Typography mt={0.5}>
							<Link className="footer__body__inner__links" to={"/"}>
								Contact Us
							</Link>
						</Typography>
						<Typography mt={0.5}>
							<Link className="footer__body__inner__links" to={"/"}>
								API Documentation
							</Link>
						</Typography>
					</Box>
				</Box>
				<Box className="footer__item" sx={{ borderRight: "1px solid #FFFFFF" }}>
					<Box className="footer__heading" mb={4}>
						Address
					</Box>
					<Box className="footer__body">
						<Typography>
							Bureau of Public Procurement PMB 2041, Yola, State Secretariat, Adamawa
							State.
						</Typography>
						<Typography>admin@bpp.ad.gov.ng</Typography>
						<Typography>08140000043</Typography>
					</Box>
				</Box>
				<Box className="footer__item" sx={{ borderRight: "1px solid #FFFFFF" }}>
					<Box className="footer__heading" mb={3}>
						Powered By Budeshi
					</Box>
					<Box className="footer__body">
						<Typography className="last__footer__item-para" my={2}>
							<Link className="footer__body__outer__links-1" to={"open-contracting.ng"}>
								Open Contracting for Nigeria
							</Link>
						</Typography>
					</Box>
				</Box>
				<Box className="footer__item last__footer__item">
					<Box className="footer__heading" mb={3}>
						<Typography className="footer__heading__highlighted">
							Have suggestions for how we can improve this website?
						</Typography>
					</Box>
					<Box className="footer__body" my={1}>
						<Link className="footer__body__outer__links-2" to={"/feedback"}>
							Click Here to share your feedback
						</Link>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};
