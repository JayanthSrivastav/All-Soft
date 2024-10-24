import React from "react";
import { 
	Box,
	Container,
	Typography,
	IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = ({
	socialLinks = {
		linkedin: "https://linkedin.com/in/jayanthsrivastav",
		github: "https://github.com/JayanthSrivastav/",
	},
}) => {
	return (
		<Box
			component="footer"
			sx={{
				backgroundColor: "#E1DCD8",
				p: 4,
				mt: "auto",
			}}>
			<Container maxWidth="lg">
				<Box mt={1}>
					<Typography
						variant="body2"
						color="text.primary"
						align="center">
						{"Copyright © Jayanth Srivastav "}
						{new Date().getFullYear()}
						{"."}
					</Typography>
				</Box>
				<Box mt={2} mb={1} display="flex" justifyContent="center">
					<IconButton
						aria-label="github"
						color="secondary"
						component="a"
						href={socialLinks.github}
						target="_blank"
						rel="noopener noreferrer">
						<GitHubIcon />
					</IconButton>
					<IconButton
						aria-label="linkedin"
						color="primary"
						component="a"
						href={socialLinks.linkedin}
						target="_blank"
						rel="noopener noreferrer">
						<LinkedInIcon />
					</IconButton>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;
