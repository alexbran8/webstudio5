import React from 'react';

export const Logo = ({ src, alt, maxWidth = "200px", minWidth = "100px" }) => {
  const styles = {
    logo: {
      maxWidth: "100%", // Ensures it scales with its container
      height: "auto", // Maintains aspect ratio
      display: "block", // Removes inline element spacing issues
    },
    container: {
      width: "100%",
      maxWidth: maxWidth,
      minWidth: minWidth,
      display: "grid",
      placeContent: "center",
      position: "fixed", // Makes it sticky
      top: 0, // Distance from the top of the viewport
      zIndex: 1000, // Ensures it's above other elements
      padding: "20px 20px 0px 0px", // Optional: Adds some padding
      background: "rgba(255, 255, 255, 0.95)", // Background color with 80% transparency
    //   boxShadow: "0 2px 5px rgba(0, 0, 0, 0.9)", // Optional shadow for better visibility
    //   maskImage: "linear-gradient(to bottom, rgba(0, 0, 0,2), rgba(0, 0, 0, 0.5))",
    //   WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0,5), rgba(0, 0, 0, 0))", // For
    //   boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional: Adds a shadow 
        },
  };

  return (
    <div style={styles.container}>
      <img src={src} alt={alt} style={styles.logo} />
    </div>
  );
};
