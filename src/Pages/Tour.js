import { Paper, Container, Typography, Box, BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'
import CustomizedAccordions from '../components/Accodian'
import ImageCollage from '../components/ImageCollage';
import { TabOutlined } from "@mui/icons-material"
import BasicModal from '../components/Model';

function Tour() {
    return (
        <Container sx={{ width: 900 }}>
            <Typography variant='h3' component="h1" marginTop={3}>
                Explore the World in Vegas
            </Typography>
            <Box marginTop={3} sx={{ display: "flex" }}>
                <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" height={325} />
                <ImageCollage />
            </Box>
            <Box>
                <Typography variant='h6' component="h4" marginTop={3}>
                    About this ticket
                </Typography>
                <Typography variant='paragraph' component="p" marginTop={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae magna fringilla, ornare arcu nec, viverra lacus. Praesent non laoreet dolor, ut egestas turpis. Integer eros nibh, congue in odio laoreet, pretium imperdiet felis. Cras sodales tellus nunc, et maximus dui tincidunt non. Suspendisse nec mauris scelerisque, tristique lacus ac, fermentum mi. Ut vitae leo at est dapibus ultrices a in enim. Ut vel libero ut lectus semper sollicitudin vitae sit amet risus.
                </Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant='h6' component="h4" marginTop={3} marginBottom={2}>
                    Frequently asked questions
                </Typography>
                <CustomizedAccordions />
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal />
                </BottomNavigation>
            </Paper>
        </Container>
    )
}

export default Tour
