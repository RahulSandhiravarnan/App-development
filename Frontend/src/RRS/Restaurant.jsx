import React from 'react'
import { Button } from '@mui/material';
import './Restaurant.css';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import {useNavigate} from 'react-router-dom'

const Restaurant = () => {
    const nav = useNavigate();
    const goBack = () => {
        window.history.back();
    };
  return (
    <div className='head'>
    <div className='card1'>
    <Card variant="outlined" sx={{width:400,backgroundImage:'linear-gradient(90deg, rgba(232,56,56,1) 0%, rgba(82,53,53,1) 35%, rgba(173,169,169,1) 100%);'}}>
      <Typography level="h1" sx={{fontSize:'x-larger',color:'white'}}>Pizza Hut</Typography>
      <Typography sx={{color:'whitesmoke'}}>
      Pizza Hut is an American multinational restaurant chain and international franchise founded in 1958 in Wichita, Kansas by Dan and Frank Carney.
      The chain, headquartered in Plano, Texas, operates 17,639 restaurants worldwide as of 2020.It is owned by Yum! Brands, Inc
      </Typography>
      <Button onClick={() => nav('/Reserve')} className='btn' variant="contained" sx={{backgroundImage:'linear-gradient(90deg, rgba(151,145,145,1) 0%, rgba(146,94,94,1) 35%, rgba(248,3,3,1) 100%)'}}>Reserve</Button>
    </Card>
    </div>
    <div className='card2'>
    <Card variant="outlined" sx={{width:400,backgroundImage:'linear-gradient(0deg, rgba(112,120,195,1) 0%, rgba(5,30,244,1) 100%);'}}>
      <Typography level="h1" sx={{fontSize:'x-larger'}}>Domino's</Typography>
      <Typography>
      Domino's is an American Michigan-based multinational pizza restaurant chain. Founded in 1960, the chain is owned by master franchisor Domino's Pizza, Inc. The corporation is Delaware-domiciled and headquartered at the Domino's Farms Office Park in Ann Arbor Township, near Ann Arbor, Michigan.</Typography>
      <Button onClick={() => nav('/Reserve')} className='btn' variant="contained" sx={{backgroundImage:'linear-gradient(0deg, rgba(112,120,195,1) 0%, rgba(5,30,244,1) 100%);'}}>Reserve</Button>
    </Card>
    </div>
    <div className='card3'>
    <Card variant="outlined" sx={{width:400,backgroundImage:'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,170,170,1) 35%, rgba(248,3,3,1) 100%);'}}>
      <Typography level="h1" sx={{fontSize:'x-larger'}}>KFC</Typography>
      <Typography>
      KFC (an abbreviation of Kentucky Fried Chicken) is an American fast food restaurant chain headquartered in Louisville, Kentucky, that specializes in fried chicken. It is the world's second-largest restaurant chain (as measured by sales) after McDonald's, with 22,621 locations globally in 150 countries as of December 2019.</Typography>
      <Button onClick={() => nav('/Reserve')} className='btn' variant="contained" sx={{backgroundImage:'linear-gradient(0deg, rgba(254,0,0,1) 0%, rgba(214,174,174,1) 100%);'}}>Reserve</Button>
    </Card>
    </div>
    <div className='card4'>
    <Card variant="outlined" sx={{width:400,backgroundImage:'linear-gradient(0deg, rgba(186,201,176,1) 0%, rgba(32,116,3,1) 100%);'}} className='card'>
      <Typography level="h1" sx={{fontSize:'x-larger'}}>Starbucks</Typography>
      <Typography>
      Starbucks Corporation is an American multinational chain of coffeehouses and roastery reserves headquartered in Seattle, Washington. It is the world's largest coffeehouse chain.
      </Typography>
      <Button onClick={() => nav('/Reserve')} className='btn' variant="contained" sx={{backgroundImage:'linear-gradient(0deg, rgba(192,209,188,1) 0%, rgba(60,102,52,1) 100%);'}}>Reserve</Button>
    </Card>
    </div>

    </div>

  );
};

export default Restaurant;