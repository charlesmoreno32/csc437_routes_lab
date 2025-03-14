import { Homepage } from "./Homepage.jsx";
import { AccountSettings } from "./AccountSettings.jsx";
import { ImageGallery } from "./images/ImageGallery.jsx";
import { ImageDetails } from "./images/ImageDetails.jsx";
import { useImageFetching } from "./images/useImageFetching.js";
import { MainLayout } from "./MainLayout.jsx";
import { Routes, Route } from "react-router";
import React, { useState } from "react";
import { RegisterPage } from "./auth/RegisterPage.jsx";
import { LoginPage } from "./auth/LoginPage.jsx";
import { ProtectedRoute } from "./auth/ProtectedRoute.jsx";

function App() {
  const [loggedInUsername, setLoggedInUsername] = useState("User");
  const [authToken, setAuthToken] = useState("");
  const { imagesLoading, fetchedImages } = useImageFetching("", authToken);

  return (
    <Routes>
      <Route
        element={
          <MainLayout authToken={authToken} setAuthToken={setAuthToken} />
        }
      >
        <Route
          path="/"
          element={
            <ProtectedRoute authToken={authToken}>
              <Homepage userName={loggedInUsername} authToken={authToken} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account"
          element={
            <ProtectedRoute authToken={authToken}>
              <AccountSettings onUsernameChange={setLoggedInUsername} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/images"
          element={
            <ProtectedRoute authToken={authToken}>
              <ImageGallery
                authToken={authToken}
                isLoading={imagesLoading}
                fetchedImages={fetchedImages}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/images/:imageId"
          element={
            <ProtectedRoute authToken={authToken}>
              <ImageDetails
                isLoading={imagesLoading}
                fetchedImages={fetchedImages}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <RegisterPage
              setAuthToken={setAuthToken}
              setLoggedInUsername={setLoggedInUsername}
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              setAuthToken={setAuthToken}
              setLoggedInUsername={setLoggedInUsername}
            />
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
