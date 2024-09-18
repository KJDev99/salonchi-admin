/* eslint-disable react/prop-types */
import { useLayoutEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const CarouselDetails = ({ images }) => {
  const [isLoading, setIsLoading] = useState(false);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 100);
  }, []);
  if (!isLoading) {
    return <p>loading...</p>;
  } else
    return (
      <ImageGallery
        infinite
        showBullets={false}
        showFullscreenButton={false}
        useTranslate3D={false}
        showPlayButton={false}
        autoPlay={true}
        showNav={false}
        items={images}
      />
    );
};
