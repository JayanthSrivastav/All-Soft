import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  IconButton,
  useTheme,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = ({ 
  socialLinks = {
    linkedin: "https://linkedin.com",
    github: "https://github.com"
  }
}) => {
  const theme = useTheme();


  return (
    <Box 
      component="footer" 
      sx={{
        backgroundColor: theme.palette.background.paper,
        p: 4,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Box mt={3}>
          <Typography variant="body2" color="text.primary" align="center">
            {"Copyright © Jayanth Srivastav"}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
        <Box mt={2} mb={1} display="flex" justifyContent="center">
          <IconButton aria-label="instagram" color="secondary" component="a" href={socialLinks.github} target='_blank'>
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label="linkedin" color="primary" component="a" href={socialLinks.linkedin}  target='_blank'>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

// import React from 'react';
// import { Container, Box, Typography, IconButton } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';

// const Footer = () => {
//   return (
//     <Box 
//       component="footer" 
//       sx={{ 
//         bgcolor: 'primary.main', 
//         color: 'white', 
//         py: 2, 
//         mt: 'auto', 
//         textAlign: 'center' 
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
//           <IconButton 
//             href="https://github.com/yourusername" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             color="inherit"
//           >
//             <GitHubIcon />
//           </IconButton>
//           <IconButton 
//             href="https://linkedin.com/in/yourusername" 
//             target="_blank" 
//             rel="noopener noreferrer" 
//             color="inherit"
//           >
//             <LinkedInIcon />
//           </IconButton>
//         </Box>
//         <Typography variant="body2">
//           &copy; {new Date().getFullYear()} Your Name. All rights reserved.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;
