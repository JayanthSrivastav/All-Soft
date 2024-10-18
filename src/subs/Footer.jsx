import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  useTheme,
//   useMediaQuery
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { GitHub } from '@mui/icons-material';

const Footer = ({ 
  companyName = "Your Company", 
  sections = [
    { title: "Products", links: ["Product 1", "Product 2", "Product 3"] },
    { title: "Services", links: ["Service 1", "Service 2", "Service 3"] },
    { title: "About", links: ["Team", "Locations", "About Us"] },
    { title: "Legal", links: ["Privacy Policy", "Terms of Use", "Cookie Policy"] },
  ],
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
}) => {
  const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: theme.palette.background.paper,
        p: 6,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-evenly">
          {sections.map((section) => (
            <Grid item xs={6} sm={3} key={section.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {section.title}
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {section.links.map((link) => (
                  <li key={link}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="#">
              {companyName}
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
        <Box mt={2} display="flex" justifyContent="center">
          <IconButton aria-label="facebook" color="primary" component="a" href={socialLinks.facebook}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="facebook" color="primary" component="a" href={socialLinks.facebook}>
            <GitHub />
          </IconButton>
          <IconButton aria-label="twitter" color="primary" component="a" href={socialLinks.twitter}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="linkedin" color="primary" component="a" href={socialLinks.linkedin}>
            <LinkedInIcon />
          </IconButton>
          <IconButton aria-label="instagram" color="primary" component="a" href={socialLinks.instagram}>
            <InstagramIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;