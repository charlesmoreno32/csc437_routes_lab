import { MainLayout } from "../MainLayout.jsx";
import { useImageFetching } from "./useImageFetching.js";
import { useParams } from "react-router-dom";

export function ImageDetails({ isLoading, fetchedImages }) {
  const { imageId } = useParams();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  const imageData = fetchedImages.find((image) => image._id === imageId);
  if (!imageData) {
    return <h2>Image not found</h2>;
  }

  return (
    <div>
      <h2>{imageData.name}</h2>
      <img
        className="ImageDetails-img"
        src={imageData.src}
        alt={imageData.name}
      />
    </div>
  );
}
