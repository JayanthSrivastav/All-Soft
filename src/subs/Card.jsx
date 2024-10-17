import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, CardMedia, CardActionArea } from '@mui/material';

const BasicCard = ({ searchTerm }) => {

	const toolsData = [
	{
		title: 'ngrok',
		image: 'http://www.endtoend.ai/assets/blog/tutorial/ngrok-ssh-forwarding/ssh_ngrok.jpg',
		link: '/ngrok',
		description: 'A tool for creating secure tunnels to your localhost.' 
	},
	{ title: 'Java',
		image: 'https://www.oracle.com/img/tech/cb88-java-logo-001.jpg',
		link: '/java',
		description: 'A popular programming language used for building applications.' 
	},
	{ title: 'Maven',
		image: 'https://user-images.githubusercontent.com/88981/188587693-5710e58b-c1ad-442c-ac06-e1aeab30a905.png',
		link: '/maven',
		description: 'A build automation tool used primarily for Java projects.' 
	},
	{ title: 'Tomcat',
		image: 'https://nsfocusglobal.com/wp-content/uploads/2019/04/apachetomcat.jpg',
		link: '/tomcat',
		description: 'An open-source implementation of the Java Servlet and JavaServer Pages technologies.' 
	},
	{ title: 'Spring Boot',
		image: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1636832404785/mTXlsmro-.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
		link: '/spring-boot',
		description: 'A framework that simplifies the development of Java applications.' 
	},
	{ title: 'MongoDB',
		image: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png',
		link: '/mongoDB',
		description: 'A NoSQL database that uses a document-oriented data model.' 
	},
	{ title: 'Postman',
		image: 'https://miro.medium.com/max/894/1*0jyROv8ksMb6tZtlf2ewVQ.png',
		link: '/postman',
		description: 'A powerful tool for API development and testing.' 
	},
	{ title: 'Node.js',
		image: 'https://www.devteam.space/wp-content/uploads/2022/05/nodejs.jpg',
		link: '/nodejs',
		description: 'A JavaScript runtime built on Chrome\'s V8 engine.' 
	},
	{ title: 'Visual Studio Code',
		image: 'https://code.visualstudio.com/opengraphimg/opengraph-blog.png',
		link: '/vsc',
		description: 'A source-code editor developed by Microsoft.' 
	},
	{ title: 'GitHub',
		image: 'https://miro.medium.com/max/1400/1*SSRjtoQ0H2X3SBPOiJ5rZw.jpeg',
		link: '/github',
		description: 'A platform for version control and collaboration.' 
	},
	{ title: 'React',
		image: 'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124',
		link: 'https://create-react-app.dev/',
		description: 'A JavaScript library for building user interfaces.' 
	},
	{ title: 'Bootstrap',
		image: 'https://getbootstrap.com/docs/5.2/assets/img/bootstrap-icons.png',
		link: 'https://getbootstrap.com/',
		description: 'A popular front-end framework for developing responsive websites.' 
	},
	{ title: 'Material UI',
		image: 'https://cdn-media-1.freecodecamp.org/images/1*FDNeKIUeUnf0XdqHmi7nsw.png',
		link: 'https://mui.com/material-ui/',
		description: 'A React component library that implements Google\'s Material Design.' 
	},
	{ title: 'Axios',
		image: 'https://linuxhint.com/wp-content/uploads/2022/01/word-image-1086.png',
		link: 'https://www.npmjs.com/package/axios',
		description: 'A promise-based HTTP client for the browser and Node.js.' 
	},
	{ title: 'npm commands',
		image: 'https://miro.medium.com/max/1400/1*sO5oyZhvbI0cW3SrZ9ZwCA.png',
		link: 'https://docs.npmjs.com/cli/v6/commands',
		description: 'Command-line tools for managing Node.js packages.' 
	},
	];

	const filteredTools = toolsData.filter(tool => 
		tool.title.toLowerCase().includes(searchTerm)
	);

	return (
	<>
		{/* <SearchBar onSearch={handleSearch} /> */}
		<Grid container spacing={4} className="gridContainer">
			{filteredTools.length > 0 ? (
				filteredTools.map((item, index) => (
					<Grid item xs={12} sm={6} md={4} sx={{ padding: "20px" }} key={index}>
						<Card
						sx={{
							minWidth: 250,
							borderRadius: '16px',
							backgroundColor: "#1e2327",
							color: "#03dac5",
							boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
							display: 'flex',
							flexDirection: 'column',
						}}
						>
							<CardActionArea href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
								<CardMedia
								sx={{ height: 180, borderRadius: '16px 16px 0 0' }}
								image={item.image}
								title={item.title + " : " + item.description}
								/>
								<CardContent sx={{ flexGrow: 1 }}>
									<Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: '600', fontFamily: 'Poppins, sans-serif' }}>
										{item.title}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
    			))
			) : (
				<Grid item xs={12} sx={{ textAlign: 'center', padding: "20px" }}>
				<Typography variant="h6" color="#e0e0e0">
					No results found
				</Typography>
				</Grid>
			)}
		</Grid>

	</>
  );
}

export default BasicCard;