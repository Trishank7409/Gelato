import React from 'react';
import { Grid2, Typography, Link, IconButton, Box, Button, Toolbar, useMediaQuery, useTheme } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import gelota_logo_White from '../assets/_logo.svg';
import { Container } from '@mui/system';

const Footer: React.FC = () => {

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: '40px 20px' }}>
      <Container maxWidth="lg">
        <Grid2 container alignItems='center' size={{ xs: 12, lg: 12 }}>
          <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={gelota_logo_White}
                alt="Logo"
                style={{ marginRight: 8, width: '130px', height: 'auto', objectFit: 'contain' }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '24px' }}>
             {!isTablet && <Typography variant="body2" gutterBottom fontSize={16} mt={1}>
                Find Gelato on:
              </Typography>}
              <IconButton href="#" color="inherit" sx={{ fontSize: 30 }}>
                <InstagramIcon sx={{ fontSize: 30 }} />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ fontSize: 30 }}>
                <FacebookIcon sx={{ fontSize: 30 }} />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ fontSize: 30 }}>
                <YouTubeIcon sx={{ fontSize: 30 }} />
              </IconButton>
              <IconButton href="#" color="inherit" sx={{ fontSize: 30 }}>
                <LinkedInIcon sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Grid2>
        <Grid2 container spacing={5}>
          <Grid2 pl={3} size={{ xs: 6, sm: 4 }} mt={1}>
            <Typography fontSize={12} fontWeight={300}>
              Gelato has created the world’s largest network for local production
              and distribution of customized products. Together we bring
              creativity to life - and into business.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              sx={{ marginTop: '20px', backgroundColor: '#fff', color: '#000' }}
            >
              Get started
            </Button>
              {/* App Links */}
          <Grid2  sx={{ marginTop: '40px' }}>
            <Typography variant="body2" gutterBottom>
              Get the app
            </Typography>
           <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg" alt="Apple" style={{ width:'110px', height:'34px',  marginRight:'10px'}} />
           <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg" alt="Apple"
           style={{ width:'110px', height:'34px', marginLeft:'5px'}} />
          </Grid2>
          </Grid2>

          {/* Column 1: Print on demand */}
          <Grid2 size={{ xs: 6, sm: 2 }}>
            <Typography variant="h6" gutterBottom>
              Print on demand
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                What is print on demand?
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Product catalog
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Shipping and delivery
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Pro sellers
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                White label products
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
              Returns policy
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
              Global, yet local
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
              Sustainability
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
              Support
              </Link>
            </Typography>
          </Grid2>

          {/* Column 2: Integrations */}
          <Grid2 size={{ xs: 6, sm: 2 }}>
            <Typography variant="h6" gutterBottom>
              Integrations
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Shopify
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Etsy
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                WooCommerce
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Wix
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
              Squarespace
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
              BigCommerce
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                API
              </Link>
            </Typography>
          </Grid2>

          {/* Column 3: Start Selling */}
          <Grid2 size={{ xs: 6, sm: 2 }}>
            <Typography variant="h6" gutterBottom>
              Start selling
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Embroidery
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Print on demand t-shirts
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Print on demand posters
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Custom products
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Custom clothing
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Custom merchandise
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Print on demand Europe
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Print on demand UK
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Print on demand France
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Print on demand Canada
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Merch maker
              </Link>
            </Typography>
          </Grid2>

          {/* Column 4: Company */}
          <Grid2 size={{ xs: 6, sm: 2 }}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                About Gelato
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Leadership team
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Newsroom
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Careers
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
                Partners
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
              Affiliates program
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
              Blog
              </Link>
            </Typography>
            <Typography fontSize={12} fontWeight={300}>
              <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
              Board & investors
              </Link>
            </Typography>
          </Grid2>
          
        </Grid2>

        {/* Bottom Links */}
        <Box sx={{ marginTop: '40px', textAlign: 'center' }}>
          <Typography variant="body2" color="inherit">
            Contact us | Legal | Privacy policy | Cookie policy | API terms | Sitemap
          </Typography>
          <Typography variant="body2" color="inherit">
            English (India)
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
