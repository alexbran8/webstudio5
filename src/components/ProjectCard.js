// components/ProjectCard.js
import React from 'react';
import { Card, CardMedia, IconButton, Grid, Tooltip, Box } from '@mui/material';
import { Language, Facebook, Instagram } from '@mui/icons-material';


export const ProjectCard = ({ project }) => {
    const hasSocialMedia = project.facebook || project.instagram || project.tiktok
    return (
        <Card sx={{ width: 320, height: 390 }}>
            <Grid
                container
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                sx={{ height: "100%", background: 'white' }}
            >
                <Grid >
                    <Box
                        sx={{
                            overflow: 'hidden',
                            display: 'inline-block', // Ensures proper scaling
                            '&:hover img': {
                                transform: 'scale(1.1)', // Scales the image on hover
                                transition: 'transform 0.5s ease', // Smooth transition
                            },
                        }}
                    >
                        <a href={project.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }} >
                            <CardMedia
                                component="img"
                                image={project.logo ?? ''}
                                alt={project.name}
                            />
                        </a>
                    </Box>
                </Grid>
                <Grid container direction="row"
                    justifyContent="center"
                    alignItems="center"
                    marginBottom="0"
                >
                    <Grid xs={2}>
                        {project.website && (
                            <Grid container direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <div>web</div>
                                <Tooltip title="Website">
                                    <a href={project.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                        <IconButton>
                                            <Language />
                                        </IconButton>
                                    </a>
                                </Tooltip>
                            </Grid>
                        )}
                    </Grid>
                    {hasSocialMedia &&
                        <Grid xs={project.website ? 8 : 12}>
                            <Grid container direction="column"
                                justifyContent="space-around"
                                alignItems="center"
                                sx={{ width: '100%' }}>
                                <Grid xs={12}>social media</Grid>
                                <Grid xs={12}>
                                    {project.facebook && (
                                        <Tooltip title="Facebook">
                                            <a href={project.facebook} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                <IconButton>
                                                    <Facebook />
                                                </IconButton>
                                            </a>
                                        </Tooltip>
                                    )}
                                    {project.instagram && (
                                        <Tooltip title="Instagram">
                                            <a href={project.instagram} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                <IconButton>
                                                    <Instagram />
                                                </IconButton>
                                            </a>
                                        </Tooltip>
                                    )}
                                    {project.tiktok && (
                                        <Tooltip title="Instagram">
                                            <a href={project.tiktok} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                <IconButton>
                                                    <img
                                                        src="/assets/tiktok.png"
                                                        alt="TikTok"
                                                        width="24"
                                                        height="24"
                                                    />
                                                </IconButton>
                                            </a>
                                        </Tooltip>
                                    )}
                                    {project.youtube && (
                                        <Tooltip title="Instagram">
                                            <a href={project.youtube} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                                <IconButton>
                                                    <Instagram />
                                                </IconButton>
                                            </a>
                                        </Tooltip>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                    }
                </Grid>
            </Grid>
        </Card>
    );
};
