import { Box, Button, Grid2, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useStyles } from '../layout';
import star from '../assets/star.svg';
import { Data } from '../data/index';

const Homepage: React.FC = () => {
  const theme = useTheme();
  const style = useStyles(theme);

  return (
    <Grid2 container pt={12} spacing={2}>
      <Grid2 size= {{xs:12, md:6}} pl={{ xs: 2, md: 9 }} mt={5}>
        <Typography className={style.homePageHeading} p={{ xs: 2, md: 5 }} variant="h3">
          Print on demand for your ecommerce business
        </Typography>
        <Typography fontSize={{ xs: 20, sm: 24 }} fontWeight={500} pl={{ xs: 2, md: 5 }} mb={1}>
          Sign up for free and only pay for what you sell
        </Typography>
        <Typography fontSize={{ xs: 14, sm: 16 }} fontWeight={300} pl={{ xs: 2, md: 5 }} mr={15}>
          Turn your passion into profit with the world's largest print on demand network.
        </Typography>
        <Grid2 container alignItems={'center'} mt={2} pl={{ xs: 2, md: 5 }} gap={2}>
          <Button variant="contained" color="primary" sx={{ borderRadius: 20, backgroundColor: '#212121' }}>
            Get Started for free
          </Button>
          <Button variant="contained" color="inherit" sx={{ borderRadius: 20, fontWeight: 700, backgroundColor: '#fff', px: 2 }}>
            See our product
          </Button>
        </Grid2>
        <Grid2 pl={{ xs: 2, md: 5 }} mt={3}>
          <img
            src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg"
            alt="shopify"
            style={{ maxHeight: '46px', maxWidth: '180px' }}
          />
          <Box>
            {[...Array(5)].map((_, index) => (
              <img
                key={index}
                src={star}
                alt="star"
                style={{ height: '24px', width: '22px', marginRight: '4px' }}
              />
            ))}
          </Box>
        </Grid2>
      </Grid2>

      <Grid2 size= {{xs:12, md:6}} pl={{ xs: 2, md: 9 }}>
        <img
          src="https://a.storyblok.com/f/165154/1105x958/e9c9ddb8d6/01_hp_top-banner_white-version-1.png/m/1000x0/"
          style={{ maxWidth: '100%', height: 'auto', marginTop: '30px' }}
          alt="img"
        />
      </Grid2>

      <Grid2 container size= {{xs:12}} spacing={2} justifyContent="space-evenly" textAlign="center" pt={5} pb={5} mt={3} bgcolor="#faf6ef" alignItems="center">
        <Grid2 size= {{xs:12, sm:4}}>
          <Typography className={style.text}>90%</Typography>
          <Typography className={style.text}>of all orders are produced locally</Typography>
        </Grid2>
        <Grid2 size= {{xs:12, sm:4}}>
          <Typography className={style.text}>90%</Typography>
          <Typography className={style.text}> of orders arrive within 5 days of ordering</Typography>
        </Grid2>
        <Grid2 size= {{xs:12, sm:4}}>
          <Typography className={style.text}>140+</Typography>
          <Typography className={style.text}> print providers across 32 countries</Typography>
        </Grid2>
      </Grid2>

      <Grid2 container size= {{xs:12}} color="#212529">
        <Typography width="100%" fontSize={{ xs: 36, sm: 48, md: 60 }} fontWeight={600} textAlign="center">
          Why choose Gelato
        </Typography>

        <Grid2  size= {{xs:12, md:6}} pl={{ xs: 2, md: 9 }}>
          <img
            src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/"
            style={{ maxWidth: '100%', height: 'auto', marginTop: '30px' }}
            alt="img"
          />
        </Grid2>

        <Grid2 size= {{xs:12, md:6}}>
          {Data.map((item, index) => (
            <Box key={index} pl={{ xs: 2, md: 5 }} pr={{ xs: 2, md: 5 }} mt={3}>
              <Typography className={style.text} pb={2}>
                ▻ {item.headin}
              </Typography>
              <Typography fontSize={{ xs: 14, sm: 16 }} fontWeight={300}>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Grid2>
      </Grid2>

      <Grid2 container size= {{xs:12}} pb={5} mt={3} bgcolor="#faf6ef">
        <Grid2  size= {{xs:12, md:6}} pl={{ xs: 2, md: 18 }} pt={12} textAlign="left">
          <Typography fontSize={{ xs: 16, sm: 18 }} fontWeight={400}>
            For print on demand sellers
          </Typography>
          <Typography className={style.homePageHeading} variant="h3">
            Accelerate business growth with innovative design tools and apps
          </Typography>
          <Typography fontSize={{ xs: 20, sm: 24 }} fontWeight={500} mt={3}>
            See how our cutting-edge solutions can help you reach new customers and maximize your profits.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ borderRadius: 20, backgroundColor: '#212121', marginTop: '20px' }}
          >
            Get Started
          </Button>
        </Grid2>
        <Grid2 size= {{xs:12, md:6}}>
          <img
            src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/"
            alt="shopify"
            style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
          />
        </Grid2>
      </Grid2>
    </Grid2>
  );
};

export default Homepage;
