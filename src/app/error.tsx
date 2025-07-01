"use client";

const ErrorPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Something went wrong!</h1>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          marginTop: "20px",
        }}
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
    </div>
  );
};

export default ErrorPage;
