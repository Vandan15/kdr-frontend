import Head from 'next/head'
import HomePage from '../components/home'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SEO from '../components/SEO';
export default function Home() {
  return (
    <>
    <SEO title='KDR Groups'/>
      <HomePage/>
   </> 
    
  )
}
