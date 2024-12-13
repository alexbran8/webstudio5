import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { ProjectCard } from '../components/ProjectCard';
import { Logo } from '../components/Logo/Logo'

const projects = [
  {
    name: 'Centru Sakura',
    logo: '/assets/logo-sakura-black.jpg', // Add logos to the public folder
    website: 'https://www.centrulsakura.ro',
    url: 'https://www.centrulsakura.ro',
    facebook: true,
    instagram: true,
    youtube: true,
    tiktok: true,
  },
  {
    name: 'Atelier by Adelina Iancu',
    logo: '/assets/logo-adelina-iancu.png',
    url: 'https://www.facebook.com/profile.php?id=100063526901882',
    website: true,
    facebook: true,
    instagram: true
  },
  {
    name: 'Dolci di David',
    logo: '/assets/logo-dolci-di-david.jpg',
    url: 'https://www.facebook.com/profile.php?id=100075560228541',
    website: false,
    facebook: 'https://www.facebook.com/profile.php?id=100075560228541',
    instagram: true,
  },
  {
    name: 'Macelaria Francesca e Frederico',
    logo: '/assets/logo-macelleria-frederico.png',
    url: 'https://www.macelleria.ro/',
    website: 'https://www.macelleria.ro',
    facebook: true,
    instagram: true,
  },
  {
    name: 'Estetic rituals',
    logo: '/assets/logo-estetic-rituals.png',
    url: 'https://www.instagram.com/esthetique.rituals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    website: true,
    facebook: true,
    instagram: 'https://www.instagram.com/esthetique.rituals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    name: 'Muma padurii',
    logo: '/assets/logo-estetic-rituals.png',
    url: 'https://www.instagram.com/esthetique.rituals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    website: false,
    facebook: true,
    instagram: 'https://www.instagram.com/esthetique.rituals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    name: 'Better Humans',
    logo: '/assets/logo-estetic-rituals.png',
    url: 'https://www.instagram.com/esthetique.rituals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    website: false,
    facebook: true,
    instagram: 'https://www.instagram.com/esthetique.rituals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    name: 'Old Yard Pub',
    logo: '/assets/logo-estetic-rituals.png',
    url: 'https://www.instagram.com/esthetique.rituals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    website: false,
    facebook: true,
    instagram: 'https://www.instagram.com/esthetique.rituals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    name: 'Gatsby',
    logo: '/assets/logo-estetic-rituals.png',
    url: 'https://www.instagram.com/esthetique.rituals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    website: false,
    facebook: true,
    instagram: 'https://www.instagram.com/esthetique.rituals?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
  },
  {
    name: 'Cycling Blog',
    logo: '/assets/logo-estetic-rituals.png',
    url: 'https://alexbran8.github.io/me/',
    website: 'https://alexbran8.github.io/me/',
    facebook: false,
    instagram: false,
  },
];

export default function Home() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  return (
    <Container>
      <Logo
        src="/logo_web_studio_5.svg" // Replace with your logo URL
        alt="Company Logo"
        maxWidth="1250px" // Maximum size of the logo
        minWidth="250px" // Minimum size of the logo 
      />
<Typography
  variant="h3"
  align="center"
  gutterBottom
  sx={{
    marginTop: "22%",
    color: '#304945', // Use a theme color if possible
    fontWeight: 'bold', // Optional: Emphasize text
    letterSpacing: '0.5px', // Optional: Adjust spacing for better readability
  }}
>
  Web & Social Media
</Typography>
      <Grid container spacing={3} justifyContent="center">
        {projects.map((project, index) => (
          <Grid item key={index}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
