import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Alert, Collapse } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


const mainFeaturedPost = {
  title: 'Blog Post',
  description:
    "Syrymbek presents",
  image: 'https://images.unsplash.com/photo-1693576757206-dff6b2bad799?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
  imageText: 'main image description',
};

const featuredPosts = [
  {
    title: 'Next assignment 1',
    date: 'Until the end of the semester',
    description:
      '',
    image: 'data:image/png;base64,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',
    imageLabel: 'Image Text',
  },
  {
    title: 'Next assignment 2',
    date: 'Until the end of the semester',
    description:
      '',
    image: 'data:image/png;base64,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',
    imageLabel: 'Image Text',
  },
];


const sidebar = {
  title: 'About',
  description:
    'My name is Syrymbek Zhumazhan, and I\'m currently a second-year student pursuing a degree in Computer Science at Nazarbayev University.',
  archives: [
    { title: 'Semiotics Infographic', url: 'https://moodle.nu.edu.kz/pluginfile.php/681621/mod_resource/content/1/Semiotics%20Infographic.png' },
    { title: 'Iconology and Form', url: 'https://drive.google.com/drive/u/1/folders/1Rbzfc14i_SfnlNqi9irGFyq-CTPZ7ihg' },
    { title: 'SEMIOTICS', url: 'https://drive.google.com/drive/u/1/folders/1Rbzfc14i_SfnlNqi9irGFyq-CTPZ7ihg' },
    { title: 'Writer Designer: A Guide to Making Multimodal Projects, Chapter 2', url: 'https://drive.google.com/drive/u/1/folders/16ArN0dQ9cVS5rCRsCLdo1pdEvWN2rwKc' },
    { title: 'Content Strategy for the Web: Second Edition', url: 'https://drive.google.com/drive/u/1/folders/1szT-7Gnszlwjkwz0Nu0i9-pHAFnh2u4f' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon, url: 'https://github.com/srmbackisdeveloper' },
    { name: 'Telegram', icon: TelegramIcon, url: 'https://t.me/srmback' },
    { name: 'Instagram', icon: InstagramIcon, url: 'https://www.instagram.com/srmback' },
  ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  const [open, setOpen] = React.useState(true);
  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Container>
      <Collapse in={open}>
        <Alert
        severity='info'
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Made with ❤️ by Syrymbek Zhumazhan
        </Alert>
      </Collapse>
      </Container>
      

      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Main />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Blog Post"
        description=""
      />
    </ThemeProvider>
  );
}