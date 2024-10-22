import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import "../App.css";

const Postman = () => {
	return (
		// <div>Get CRUD away with Postman</div>
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
							href="https://www.postman.com/downloads/"
							target="_blank"
							rel="noreferrer"
							style={{ textDecoration: "none" }}>
							{/* <img src={logo} alt='postman' width='20%' className='IMU'></img> */}
							<Typography variant="h1" className="Logo">
								postman
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
						<Divider className="custom-divider" />

						<p className="box-text">
							Go to <i>Postman</i>'s official{" "}
							<a
								href="https://www.postman.com/downloads/"
								target="_blank"
								rel="noreferrer">
								website
							</a>{" "}
							to download Postman API.
						</p>
						<img
							src={require("../assets/postman/download-step1.png")}
							alt="step-1"
							className="screenshots"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							Click on <i>Windows 64-bit</i> to download.
						</p>
						<img
							src={require("../assets/postman/download-step1-1.png")}
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
						<Divider className="custom-divider" />

						<p className="box-text">Open the dowwnloaded file.</p>
						<img
							src={require("../assets/postman/started-step2.png")}
							alt="step-2"
							className="screenshots"
						/>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 3
						</Typography>
						<Divider className="custom-divider" />

						<p className="box-text">Postman is ready to use.</p>
						<img
							src={require("../assets/postman/started-step3.png")}
							alt="step-3"
							className="screenshots"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">Get CRUD away with Postman.</p>
					</div>
				</div>
			</Box>
		</div>
	);
};

export default Postman;
