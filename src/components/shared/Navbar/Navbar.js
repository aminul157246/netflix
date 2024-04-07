'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link'

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import logo from '@/assets/logo.png'

import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const navItems = [
    {
        id: 1,
        route: 'Home',
        pathname: '/'
    },
    {
        id: 2,
        route: 'Movies',
        pathname: '/movies'
    },

    {
        id: 3,
        route: 'About',
        pathname: '/about'
    },
    {
        id: 4,
        route: 'Contact',
        pathname: '/contact'
    },

]


function Navbar() {



    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };




    return (
        // <AppBar className='bg-white' position="static">
        //     <Container maxWidth="xl">
        //         <Toolbar disableGutters>

        //             <Image src={logo} alt='' width={80} height={80}></Image>

        // <Box className="mx-auto max-w-fit" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
        //     {navItems.map((item) => (
        //         <Link key={item} href={item.pathname}>
        //             <Button className='text-gray-800'>{item.route}</Button>
        //         </Link>
        //     ))}
        // </Box>

        //             <Box>
        //                 <IconButton>
        //                     <FacebookOutlinedIcon/>
        //                     <YouTubeIcon/>
        //                     <XIcon/>
        //                     <InstagramIcon/>

        //                 </IconButton>
        //             </Box>

        //         </Toolbar>
        //     </Container>
        // </AppBar>




        <AppBar className='bg-white' position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Image src={logo} alt='' width={80} height={80} priority></Image>


                    {/* for responsive  */}

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                                    <Link href={item.pathname}>
                                        <Button className='text-gray-800'>{item.route}</Button>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Box className="mx-auto max-w-fit" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {navItems.map((item) => (
                            <Link key={item.id} href={item.pathname}>
                                <Button className='text-gray-800'>{item.route}</Button>
                            </Link>
                        ))}
                    </Box>


                    <Box>
                        <IconButton className='gap-4'>
                            <FacebookOutlinedIcon />
                            <YouTubeIcon />
                            <XIcon />
                            <InstagramIcon />

                        </IconButton>
                    </Box>



                </Toolbar>
            </Container>
        </AppBar>




    );
}
export default Navbar;