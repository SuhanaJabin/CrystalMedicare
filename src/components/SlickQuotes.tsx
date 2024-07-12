// components/SlickQuotes.tsx
import React, { useEffect } from 'react';

import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';

const SlickQuotes: React.FC = () => {
  useEffect(() => {
    // Initialize the Slick slider
    $('.quotes').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 800,
      slidesToShow: 1,
      adaptiveHeight: true,
    });

    // Remove the .no-fouc class after the document is ready
    $(document).ready(function onDocumentReady() {
      $('.no-fouc').removeClass('no-fouc');
    });
  }, []);

  return null; // This component doesn't render anything directly
};

export default SlickQuotes;
