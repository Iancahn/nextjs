import Head from 'next/head';

// import Animation
// import { motion } from "framer-motion";
// import components
import HomeHero from '../components/HomeHero';
import HomeIntro from '../components/HomeIntro';
import HomeServices from '../components/HomeServices';
import HomeClients from '../components/HomeClients';
import HomeWork from '../components/HomeWork';
import HomeAbout from '../components/HomeAbout';
import HomeReviews from '../components/HomeReviews';
import Calltoaction from '../components/Calltoaction';

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Pixel By Pixel Digital Marketing Agency</title>
        <link rel="stylesheet" href="https://use.typekit.net/fkp5sti.css" />
      </Head>
      <HomeHero />
      <HomeIntro />
      <HomeServices />
      <HomeClients />
      <HomeWork />
      <HomeAbout />
      <HomeReviews />
      <Calltoaction />
    </div>
  )
}
