import React from "react";
import {
	Grid,
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	Typography,
} from "@mui/material";
import toolsData from "./toolsData";

const BasicCard = ({ searchTerm, selectedPage }) => {
	const filteredTools = toolsData.filter((item) => {
		const matchesCategory = selectedPage
			? item.category === selectedPage
			: true; //!selectedPage || item.category.toLowerCase() === selectedPage.toLowerCase();
		const matchesSearch = item.title
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	return (
		<div style={{ justifyContent: "center" }}>
			<Grid container spacing={6} className="gridContainer">
				{filteredTools.length > 0 ? (
					filteredTools.map((item, index) => (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							key={index}
							sx={{ zIndex: 1 }}>
							<Card
								sx={{
									width: { xs: "100%" },
									minWidth: 250,
									borderRadius: "16px",
									backgroundColor: "#1e2327",
									color: "#FFFDD0",
									boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
									display: "flex",
									flexDirection: "column",
								}}
								className="card">
								<CardActionArea
									href={item.link}
									target={
										item.link.startsWith("http")
											? "_blank"
											: undefined
									}
									rel="noopener noreferrer">
									<CardMedia
										sx={{
											height: 180,
											borderRadius: "16px 16px 0 0",
										}}
										image={item.image}
										title={
											item.title +
											" : " +
											item.description
										}
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography
											gutterBottom
											variant="h5"
											component="div"
											sx={{
												fontWeight: "600",
												fontFamily: "monospace",
											}}>
											{item.title}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					))
				) : (
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
						sx={{
							textAlign: "center",
							padding: "20px",
							marginTop: "15vh",
						}}>
						<Typography variant="h6" color="#e0e0e0">
							No results found
						</Typography>
					</Grid>
				)}
			</Grid>
		</div>
	);
};

export default BasicCard;
