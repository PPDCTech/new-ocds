import * as React from "react";
import "./style.css";
import MenuIcon from "@mui/icons-material/Menu";
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Button,
	Container,
	Grid,
	Stack,
	Collapse,
	List,
	ListItem,
	ListItemText,
	Drawer,
	Popover,
	ListItemButton,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link, useLocation, useNavigate } from "react-router-dom";

const pages = [
	{ page: "Projects", path: "/projects" },
	{ page: "Contractors", path: "/contractors" },
	{ page: "Compare Projects", path: "/compare-projects" },
];

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// interface NavProps {
// 	to: string;
// 	exact: boolean;
// 	children: React.ReactNode;
// 	style?: React.CSSProperties;
// 	activeStyle?: React.CSSProperties;
// 	isActive?: (match: any, location: any) => boolean;
// 	onMouseOver?: React.MouseEventHandler<HTMLAnchorElement>;
// 	onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
// }

export const Navbar = () => {
	const navigate = useNavigate();
	const [isDrop, setIsDrop] = React.useState<boolean>(false);
	// const [isPop, setIsPop] = React.useState<boolean>(false);
	const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
	const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
	const toggleDrawer = (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" ||
				(event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setDrawerOpen(!drawerOpen);
	};

	const handleDropList = () => {
		setIsDrop(!isDrop);
	};

	// const handlePopList = () => {
	// 	setIsPop(!isPop);
	// };

	const handleOpenInfoMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
		navigate("/additional-information");
	};

	const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handlePopoverClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	const location = useLocation();

	return (
		<AppBar
			position="fixed"
			className="not-scrolled"
			sx={{ backgroundColor: "#09797A", height: "87.62px" }}
		>
			<Container>
				<Toolbar disableGutters>
					{/* Mobile Link List */}
					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="mobile menu button"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={toggleDrawer}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Drawer
							id="menu-appbar"
							anchor="left"
							open={Boolean(drawerOpen)}
							onClose={toggleDrawer}
							disableScrollLock={true}
							PaperProps={{
								sx: {
									width: 300,
									backgroundColor: "#09797A",
								},
							}}
						>
							<List>
								<ListItem onClick={toggleDrawer}>
									<Grid item xs={8}>
										<Link
											to="/"
											className={
												location.pathname === "/"
													? "page__active mobile_nav__item"
													: "mobile_nav__link mobile_nav__item"
											}
										>
											Home
										</Link>
									</Grid>
								</ListItem>
								{pages.map((item) => (
									<ListItem key={item.page} onClick={toggleDrawer}>
										<Link
											to={item.path}
											className={
												location.pathname === item.path
													? "page__active mobile_nav__item"
													: "mobile_nav__link mobile_nav__item"
											}
										>
											{item.page}
										</Link>
									</ListItem>
								))}
								<ListItem onClick={handleDropList}>
									<Grid item xs={8}>
										<List
											sx={{
												padding: "0",
												marginLeft: "-16px",
												marginTop: "-15px",
											}}
										>
											<ListItem>
												<ListItemText
													className={
														location.pathname === "/additional-information"
															? "page__active mobile_nav__item"
															: "mobile_nav__link mobile_nav__item"
													}
												>
													<Link
														onClick={handleDropList}
														to="/additional-information"
														className={
															location.pathname === "/additional-information"
																? "page__active mobile_nav__item"
																: "mobile_nav__link mobile_nav__item"
														}
													>
														<Stack
															direction="row"
															alignItems="center"
															sx={{ color: "white" }}
														>
															Additional Information
															<KeyboardArrowDownIcon />
														</Stack>
													</Link>
												</ListItemText>
											</ListItem>
										</List>
										<Collapse in={isDrop}>
											<List
												sx={{
													padding: "0",
													paddingLeft: "15px",
													marginTop: "-10px",
												}}
											>
												<ListItem
													sx={{
														padding: "0",
														paddingLeft: "15px",
														marginTop: "5px",
													}}
												>
													<Link
														onClick={handleDropList}
														to="/writing-an-foi"
														className={
															location.pathname === "/writing-an-foi"
																? "page__active mobile_nav__item"
																: "mobile_nav__link mobile_nav__item"
														}
													>
														Writing An FOI
													</Link>
												</ListItem>
												<ListItem
													sx={{
														padding: "0",
														paddingLeft: "15px",
														marginTop: "5px",
													}}
												>
													<Link
														onClick={handleDropList}
														to="/report-to-anti-graft-agency"
														className={
															location.pathname === "/report-to-anti-graft-agency"
																? "page__active mobile_nav__item"
																: "mobile_nav__link mobile_nav__item"
														}
													>
														Report To an Anti-Graft Agency
													</Link>
												</ListItem>
												<ListItem
													sx={{
														padding: "0",
														paddingLeft: "15px",
														marginTop: "5px",
													}}
												>
													<Link
														onClick={handleDropList}
														to="/cac-company-check"
														className={
															location.pathname === "/cac-company-check"
																? "page__active mobile_nav__item"
																: "mobile_nav__link mobile_nav__item"
														}
													>
														CAC Company Check
													</Link>
												</ListItem>
												<ListItem
													sx={{
														padding: "0",
														paddingLeft: "15px",
														marginTop: "5px",
													}}
												>
													<Link
														onClick={handleDropList}
														to="/download-procurement-laws"
														className={
															location.pathname === "/download-procurement-laws"
																? "page__active mobile_nav__item "
																: "mobile_nav__link mobile_nav__item"
														}
													>
														Download Procurement Laws
													</Link>
												</ListItem>
											</List>
										</Collapse>
									</Grid>
								</ListItem>
							</List>
						</Drawer>
					</Box>
					{/* Desktop Link List */}
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						<Link
							to="/"
							className={
								location.pathname === "/"
									? "page__active nav__item"
									: "nav__link nav__item"
							}
						>
							Home
						</Link>
						{pages.map((item) => (
							<Link
								key={item.path}
								to={item.path}
								className={
									location.pathname === item.path
										? "page__active nav__item"
										: "nav__link nav__item"
								}
							>
								{item.page}
							</Link>
						))}
						{location.pathname === "/additional-information" ? (
							<Link
								to="/additional-information"
								aria-owns={open ? "mouse-over-popover" : undefined}
								aria-haspopup="true"
								onMouseEnter={handlePopoverOpen}
								// onMouseLeave={handlePopoverClose}
								className={
									location.pathname === "/additional-information"
										? "page__active nav__item"
										: "nav__link nav__item"
								}
							>
								<Stack direction="row" alignItems="center">
									Additional Information
									<KeyboardArrowDownIcon />
								</Stack>
							</Link>
						) : (
							<Link
								to="/additional-information"
								onClick={handleOpenInfoMenu}
								aria-owns={open ? "mouse-over-popover" : undefined}
								aria-haspopup="true"
								className={
									location.pathname === "/additional-information"
										? "page__active nav__item"
										: "nav__link nav__item"
								}
							>
								<Stack direction="row" alignItems="center">
									Additional Information
								</Stack>
							</Link>
						)}
						<Box sx={{ flexGrow: 0 }}>
							<Popover
								id="mouse-over-popover"
								open={open}
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								onClose={handlePopoverClose}
								disableRestoreFocus
							>
								<List
									sx={{ bgcolor: "#03c6c8" }}
									component="nav"
									aria-labelledby="nested-list-subheader"
								>
									<ListItemButton
										onClick={handlePopoverClose}
										className="info__nav__menuItem"
									>
										<Link to="/writing-an-foi" className="info__nav__item">
											Writing An FOI
										</Link>
									</ListItemButton>
									<ListItemButton
										onClick={handlePopoverClose}
										className="info__nav__menuItem"
									>
										<Link to="/report-to-anti-graft-agency" className="info__nav__item">
											Report To an Anti-Graft Agency
										</Link>
									</ListItemButton>
									<ListItemButton
										onClick={handlePopoverClose}
										className="info__nav__menuItem"
									>
										<Link to="/cac-company-check" className="info__nav__item">
											CAC Company Check
										</Link>
									</ListItemButton>
									<ListItemButton
										onClick={handlePopoverClose}
										className="info__nav__menuItem"
									>
										<Link to="/download-procurement-laws" className="info__nav__item">
											Download Procurement Laws
										</Link>
									</ListItemButton>
								</List>
							</Popover>
						</Box>
					</Box>

					{/* Desktop Login Button */}
					<Box
						sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}
						className="nav__desktop__btn"
					>
						<Button
							variant="contained"
							sx={{
								color: "#FFFFFF",
								borderRadius: "4.7619px",
								backgroundColor: "#3ED9C4",
								textTransform: "capitalize",
								"&:hover": { backgroundColor: "#A0A0A0" },
							}}
						>
							<Typography>State Actors: Sign in</Typography>
						</Button>
					</Box>
					{/* Mobile Login Button */}
					<Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
						<Button
							variant="contained"
							size="small"
							sx={{
								color: "#FFFFFF",
								borderRadius: "4.7619px",
								margin: "auto 20px",
								backgroundColor: "#3ED9C4",
								textTransform: "capitalize",
								"&:hover": { backgroundColor: "#A0A0A0" },
							}}
						>
							<Typography>State Actors: Sign in</Typography>
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
