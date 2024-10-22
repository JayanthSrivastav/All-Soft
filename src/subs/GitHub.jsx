import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import "../App.css";

const GitHub = () => {
	return (
		<div className="BGCanvas">
			<Box
				sx={{
					width: { xs: "100%", sm: "100%", md: "90%", lg: "85%" },
					boxShadow: { md: 24, lg: 24 },
					opacity: 0.97,
				}}
				className="Box-features">
				<div className="box-div">
					<div className="Tool">
						<a
							href="https://desktop.github.com/download/"
							target="_blank"
							rel="noreferrer"
							style={{ textDecoration: "none" }}>
							<Typography variant="h1" className="Logo">
								github
							</Typography>
						</a>
						<Typography variant="body"></Typography>
					</div>
					<div className="Download">
						<Typography
							variant="h3"
							component="h3"
							className="box-heading">
							Download.
						</Typography>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 1
						</Typography>
						<Divider className='custom-divider'/>

						<p className="box-text">
							Go to the official <i>GitHub Desktop</i>{" "}
							<a
								href="https://desktop.github.com/download/"
								target="_blank"
								rel="noopener noreferrer">
								website.
							</a>
						</p>
						<img
							src={require("../assets/github/download-step1.png")}
							alt="step-1"
							className="screenshots"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							Click on <i>Download for Windows (64bit)</i> to
							download it.
						</p>
						<img
							src={require("../assets/github/download-step1-1.png")}
							alt="step-1-1"
							className="screenshots"
						/>
						<div style={{ paddingBottom: "10%" }}></div>

						<Typography
							variant="h3"
							component="h3"
							className="box-heading">
							Setting up.
						</Typography>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 2
						</Typography>
						<Divider className='custom-divider'/>

						<p className="box-text">
							Open the downloaded installation file.
						</p>
						<img
							src={require("../assets/github/setup-step2.png")}
							alt="step-2"
							className="screenshots"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							Wait for the installation to be complete.
						</p>
						<img
							src={require("../assets/github/setup-step2-1.png")}
							alt="step-2-1"
							className="screenshots"
						/>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 3
						</Typography>
						<Divider className='custom-divider'/>

						<p className="box-text">
							GitHub is ready to use. Sign in/Sign up to use it.
						</p>
						<img
							src={require("../assets/github/setup-step3.png")}
							alt="step-3"
							className="screenshots"
						/>
						<Divider className='custom-s-divider'/>

						<p className="box-text">How many reps have you done?</p>
					</div>
				</div>
			</Box>
		</div>
	);
};

export default GitHub;
