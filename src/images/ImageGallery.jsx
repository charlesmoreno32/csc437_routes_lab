import { MainLayout } from "../MainLayout.jsx";
import { useImageFetching } from "./useImageFetching.js";
import { ImageUploadForm } from "./ImageUploadForm.jsx";
import "./ImageGallery.css";
import { Link } from "react-router";

export function ImageGallery({ isLoading, fetchedImages, authToken }) {
  const imageElements = fetchedImages.map((image) => (
    <div key={image._id} className="ImageGallery-photo-container">
      <Link to={"/images/" + image._id}>
        <img src={image.src} alt={image.name} />
      </Link>
    </div>
  ));
  return (
    <div>
      <h3>Upload Images</h3>
      <ImageUploadForm authToken={authToken} />
      <h2>Image Gallery</h2>
      {isLoading && "Loading..."}
      <div className="ImageGallery">{imageElements}</div>
    </div>
  );
}
