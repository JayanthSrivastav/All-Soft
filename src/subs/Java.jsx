import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import "../App.css";

const Java = () => {
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
							href="https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html"
							target="_blank"
							rel="noreferrer"
							style={{ textDecoration: "none" }}>
							<Typography variant="h1" className="Logo">
								java
							</Typography>
						</a>
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
							Select a version (
							<a
								href="https://www.oracle.com/in/java/technologies/downloads/#java19"
								target="_blank"
								rel="noreferrer">
								Java 19
							</a>
							,{" "}
							<a
								href="https://www.oracle.com/in/java/technologies/downloads/#java17"
								target="_blank"
								rel="noreferrer">
								Java 17
							</a>{" "}
							or{" "}
							<a
								href="https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html"
								target="_blank"
								rel="noreferrer">
								Java 8
							</a>
							) to download. We are going to download Java Amazon
							Corretto 8 or simply,{" "}
							<a
								href="https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html"
								target="_blank"
								rel="noreferrer">
								Java 8
							</a>
							. Go to the{" "}
							<a href="https://docs.aws.amazon.com/corretto/latest/corretto-8-ug/downloads-list.html">
								official website
							</a>{" "}
							and download the suitable msi installer.
						</p>
						<img
							src={require("../assets/java/download-step1.png")}
							alt="step-1"
							className="screenshots"
						/>
						<div style={{ paddingBottom: "10%" }}></div>

						<Typography
							variant="h3"
							component="h3"
							className="box-heading">
							Installing
						</Typography>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 2
						</Typography>
						<Divider className="custom-divider" />

						<p className="box-text">Open the installer.</p>
						<img
							src={require("../assets/java/download-step2.gif")}
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

						<p className="box-text">Click Next to continue.</p>
						<img
							src={require("../assets/java/install-step3.png")}
							alt="step-3"
							className="screenshote"
						/>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 4
						</Typography>
						<Divider className="custom-divider" />

						<p className="box-text">
							Browse the desired location to store and click on
							Next.
						</p>
						<img
							src={require("../assets/java/install-step4.png")}
							alt="step-4"
							className="screenshote"
						/>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 5
						</Typography>
						<Divider className="custom-divider" />

						<p className="box-text">
							Click on Install to begin the installation,{" "}
						</p>
						<img
							src={require("../assets/java/install-step5.png")}
							alt="step-5"
							className="screenshote"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							and wait until the installation is completed
						</p>
						<img
							src={require("../assets/java/install-step6.png")}
							alt="step-5"
							className="screenshote"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">and then, click on Next.</p>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 6
						</Typography>
						<Divider className="custom-divider" />

						<p className="box-text">
							Now, click on Finish to exit the Setup Wizard. You
							have successfully install Amazon Corretto JDK 8.
						</p>
						<img
							src={require("../assets/java/install-step7.png")}
							alt="step-6"
							className="screenshote"
						/>
						<div style={{ paddingBottom: "10%" }}></div>

						<Typography
							variant="h3"
							component="h3"
							className="box-heading">
							Verification
						</Typography>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 7
						</Typography>
						<Divider className="custom-divider" />

						<p className="box-text">
							In the command prompt, type in <i>java -version</i>{" "}
							and run it.
						</p>
						<img
							src={require("../assets/java/verify-step7.png")}
							alt="step-7"
							className="screenshots"
						/>
						<img
							src={require("../assets/java/verify-step8.png")}
							alt="step-8"
							className="screenshots"
						/>
                        <Divider className="custom-s-divider" />
						<p id="installed" className="box-text">
							You have successfully installed Java 8.
						</p>
					</div>
				</div>
			</Box>
		</div>
	);
};

export default Java;
