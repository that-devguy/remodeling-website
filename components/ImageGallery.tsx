import React from "react";
import Image from "next/image";

// Define the component props
interface ImageGalleryProps {
  folder: string; // The folder name where images are stored
  images: string[]; // Array of image file names
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ folder, images }) => {
  return (
    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {images.map((image, index) => (
        <div key={index} className="relative h-48 w-full">
          <Image
            src={`/${folder}/${image}`}
            alt={`Gallery Image ${index}`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
