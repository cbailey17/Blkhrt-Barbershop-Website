import React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FacebookIcon from '@mui/icons-material/Facebook';
import NavigationIcon from '@mui/icons-material/Navigation';
import InstagramIcon from '@mui/icons-material/Instagram';
import { FaYelp } from 'react-icons/fa';
import { Link } from '@mui/material';

const actions = [
  {
    icon: (
      <Link href="https://www.facebook.com/blkhrtbarbershop/">
        <FacebookIcon />
      </Link>
    ),
    name: 'facebook'
  },
  {
    icon: (
      <Link href="https://maps.google.com/?q=BLKHRT">
        <NavigationIcon />
      </Link>
    ),
    name: 'directions'
  },
  {
    icon: (
      <Link href="https://www.instagram.com/blkhrtbarbershop/?hl=en'">
        <InstagramIcon />
      </Link>
    ),
    name: 'instagram'
  },
  {
    icon: (
      <Link href="https://www.yelp.com/biz/blkhrt-barbershop-san-diego">
        <FaYelp />
      </Link>
    ),
    name: 'yelp'
  }
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="blkhrt speed dial"
        sx={{ position: 'fixed', bottom: -300, right: 16 }}
        icon={<SpeedDialIcon />}>
        {actions.map((action) => (
          <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </SpeedDial>
    </Box>
  );
}
