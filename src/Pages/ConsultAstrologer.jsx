import React from 'react'
import ConsultAstroHero from '../components/ConsultAstroHero';
import AstroCard from '../components/AstroCard';
import Reviews from '../components/Reviews';
import ReviewsCard from '../components/ReviewsCard';
import ConsultFaq from '../components/ConsultFaq';
import ReviewsUsers from '../components/ReviewsUsers';

const ConsultAstrologer = () => {
  return (
    <>
      <ConsultAstroHero />
      <AstroCard />
      <Reviews />
      <ReviewsCard />
      <ReviewsUsers />
      <ConsultFaq />
    </>
  )
}

export default ConsultAstrologer