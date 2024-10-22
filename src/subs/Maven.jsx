import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import "../App.css";

const Maven = () => {
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
							href="https://maven.apache.org/download.cgi"
							target="_blank"
							rel="noreferrer"
							style={{ textDecoration: "none" }}>
							<Typography variant="h1" className="Logo">
								maven
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
							Go to <i>Maven</i>'s{" "}
							<a
								href="https://maven.apache.org/download.cgi"
								target="_blank"
								rel="noreferrer">
								official website
							</a>
							.
						</p>
						<img
							src={require("../assets/maven/download-step1.png")}
							alt="step-1"
							className="screenshots"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							Download the <i>tar.gz binary archive</i> of the
							latest version.{" "}
						</p>
						<img
							src={require("../assets/maven/download-step1-2.png")}
							alt="step-1"
							className="screenshots"
						/>
						<div style={{ paddingBottom: "10%" }}></div>

						<Typography
							variant="h3"
							component="h3"
							className="box-heading">
							Setting up
						</Typography>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 2
						</Typography>
						<Divider className="custom-divider" />

						<p className="box-text">
							Extract the downloaded archive and copy the
							extracted folder.
						</p>
						<img
							src={require("../assets/maven/download-step2.gif")}
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

						<p className="box-text">
							Paste the folder into the desired location. Often
							placed in the <i>C://</i> drive and then, open the
							folder.
						</p>
						<img
							src={require("../assets/maven/setup-step3.png")}
							alt="step-3"
							className="screenshots"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							You will find a folder named{" "}
							<i>apache-maven-version</i>. In this case,{" "}
							<i>apache-maven-3.8.6</i>. Open the folder.{" "}
						</p>
						<img
							src={require("../assets/maven/setup-step3-1.png")}
							alt="step-3"
							className="screenshots"
						/>
						<img
							src={require("../assets/maven/setup-step3-2.png")}
							alt="step-3"
							className="screenshots"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">Copy the path. </p>
						<img
							src={require("../assets/maven/setup-step3-3.png")}
							alt="step-3"
							className="screenshots"
						/>

						<Typography
							variant="h4"
							component="h4"
							className="box-s-heading">
							Step 4
						</Typography>
						<Divider className="custom-divider" />

						<p className="box-text">
							Now, adding a new environment variable for Maven.
							Click on New.
						</p>
						<img
							src={require("../assets/maven/setup-step4.png")}
							alt="step-4"
							className="screenshote"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							Add the <i>Variable name</i> as <i>MAVEN_HOME</i>{" "}
							and paste the copied path in the{" "}
							<i>Variable value text box and click on OK.</i>
						</p>
						<img
							src={require("../assets/maven/setup-step4-1.png")}
							alt="step-4"
							className="screenshotd"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							You can verify <i>MAVEN_HOME</i>. Now, double click
							on <i>Path</i> to add a new path variable.
						</p>
						<img
							src={require("../assets/maven/setup-step4-2.png")}
							alt="step-4"
							className="screenshote"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							Click on New and enter <i>%MAVEN_HOME%\bin</i> and
							click on OK.
						</p>
						<img
							src={require("../assets/maven/setup-step4-3.png")}
							alt="step-4"
							className="screenshote"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							As the path for Maven is successfully added, click
							on OK.
						</p>
						<img
							src={require("../assets/maven/setup-step4-4.png")}
							alt="step-4"
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
							Step 5
						</Typography>
						<Divider className="custom-divider" />

						<p className="box-text">
							In the command prompt, type in <i>mvn -v</i> and run
							it.
						</p>
						<img
							src={require("../assets/maven/verify-step5.png")}
							alt="step-5"
							className="screenshots"
						/>
						<img
							src={require("../assets/maven/verify-step5-1.png")}
							alt="step-5"
							className="screenshots"
						/>
						<Divider className="custom-s-divider" />

						<p className="box-text">
							You have successfully installed Maven.
						</p>
					</div>
				</div>
			</Box>
		</div>
	);
};

export default Maven;
