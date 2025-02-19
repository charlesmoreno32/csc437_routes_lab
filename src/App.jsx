import { Homepage } from "./Homepage.jsx";
import { AccountSettings } from "./AccountSettings.jsx";
import { ImageGallery } from "./images/ImageGallery.jsx";
import { ImageDetails } from "./images/ImageDetails.jsx";
import { useImageFetching } from "./images/useImageFetching.js";
import { MainLayout } from "./MainLayout.jsx";
import { Routes, Route } from "react-router";
import { useState } from "react";

function App() {
  const [accountUsername, setAccountUsername] = useState("User");
  const { imagesLoading, fetchedImages } = useImageFetching("");

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Homepage userName={accountUsername} />} />
        <Route
          path="/account"
          element={<AccountSettings onUsernameChange={setAccountUsername} />}
        />
        <Route
          path="/images"
          element={
            <ImageGallery
              isLoading={imagesLoading}
              fetchedImages={fetchedImages}
            />
          }
        />
        <Route path="/images/:imageId" element={<ImageDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
