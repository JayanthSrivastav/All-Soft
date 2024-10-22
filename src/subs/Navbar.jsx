import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import { Menu as MenuIcon, CatchingPokemon } from "@mui/icons-material";

const pages = [
	"Software",
	"Tools",
	"Dependencies",
	"Frameworks",
	"API",
	"Database",
];

export default function Navbar({ selectedPage, setSelectedPage }) {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const navigate = useNavigate();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleTogglePage = React.useCallback(
		(page) => {
			setSelectedPage((prev) => (prev === page ? null : page));
			handleCloseNavMenu();
			navigate("/");
			// onPageSelect(page);
		},
		[navigate, setSelectedPage]
	);

	useEffect(() => {
		const handleKeyDown = (event) => {
			const key = event.key;

			if (
				document.activeElement.tagName !== "INPUT" &&
				!event.altKey &&
				!event.ctrlKey &&
				!event.shiftKey
			) {
				if (key >= "0" && key <= "9") {
					const number = parseInt(key, 10);

					if (number === 0) {
						setSelectedPage(null);
					} else {
						const index = number - 1;
						if (index >= 0 && index < pages.length) {
							handleTogglePage(pages[index]);
						}
					}
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [handleTogglePage, setSelectedPage]);

	return (
		<AppBar
			position="static"
			sx={{ backgroundColor: "#1e2327", color: "#bb86fc" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="logo"
						href="/"
						disableRipple
						sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
						<CatchingPokemon sx={{ mr: 1 }} />
						<Typography
							variant="h6"
							noWrap
							component="span"
							sx={{
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "inherit",
								textDecoration: "none",
							}}>
							all<span style={{ color: "#FFFDD0" }}>soft</span>
						</Typography>
					</IconButton>

					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex" },
						}}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={() => {
									handleTogglePage(page);
									handleCloseNavMenu();
								}}
								variant={
									selectedPage === page ? "outlined" : ""
								}
								sx={{
									my: 2,
									color:
										selectedPage === page
											? "#bb86fc"
											: "#FFFDD0",
									borderColor:
										selectedPage === page
											? "#bb86fc"
											: "transparent",
									display: "block",
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									textDecoration: "none",
									"&:hover": {
										borderColor: "#bb86fc", // Hover effect for outline
										// backgroundColor: selectedPage === page ? 'rgba(187, 134, 252, 0.2)' : 'rgba(187, 134, 252, 0.1)', // Optional hover background
									},
								}}
								disableRipple>
								{page}
							</Button>
						))}
					</Box>

					<Box
						sx={{
							display: { xs: "flex", md: "none" },
							width: "100%",
							justifyContent: "space-between",
							alignItems: "center",
						}}>
						<IconButton
							size="large"
							aria-label="menu"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit">
							<MenuIcon />
						</IconButton>

						<IconButton
							size="large"
							color="inherit"
							aria-label="logo"
							href="/"
							disableRipple
							sx={{ flexGrow: 0 }}>
							<CatchingPokemon sx={{ mr: 1 }} />
							<Typography
								variant="h6"
								noWrap
								component="span"
								sx={{
									fontFamily: "monospace",
									fontWeight: 700,
									letterSpacing: ".3rem",
									color: "inherit",
									textDecoration: "none",
								}}>
								all
								<span style={{ color: "#FFFDD0" }}>soft</span>
							</Typography>
						</IconButton>

						<Box sx={{ width: 48 }} />
					</Box>

					<Menu
						id="menu-appbar"
						anchorEl={anchorElNav}
						anchorOrigin={{
							vertical: "bottom",
							horizontal: "left",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "left",
						}}
						open={Boolean(anchorElNav)}
						onClose={handleCloseNavMenu}
						sx={{ display: { xs: "block", md: "none" } }}>
						{pages.map((page) => (
							<MenuItem
								key={page}
								onClick={() => {
									handleTogglePage(page);
								}}
								selected={selectedPage === page} // Highlight selected item
								sx={{
									backgroundColor:
										selectedPage === page
											? "#bb86fc"
											: "transparent",
									color:
										selectedPage === page
											? "#bb86fc"
											: "#000",
								}}>
								<Typography sx={{ textAlign: "center" }}>
									{page}
								</Typography>
							</MenuItem>
						))}
					</Menu>
				</Toolbar>
			</Container>
		</AppBar>
	);
}
