// export const NotFound = () => {
//     return <div>Not Found</div>;
// };


export const NotFound = () => {
  const containerStyle = {
    height: "100vh",
    backgroundColor: "#000",
    color: "rgba(121, 95, 226, 1)",
    fontFamily: "'Inconsolata', monospace",
    fontSize: "2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundImage: `url('https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif')`,
    backgroundSize: "cover",
    opacity: 0.1,
    pointerEvents: "none",
  };

  const scanlinesStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: `linear-gradient(
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 255, 0, 0.03) 50%
    )`,
    backgroundSize: "100% 4px",
    pointerEvents: "none",
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
    maxWidth: "80%",
  };

  const headingStyle = {
    fontSize: "5rem",
    marginBottom: "1rem",
    textShadow: "0 0 5px rgba(121, 95, 226, 1)",
  };

  const messageStyle = {
    fontSize: "1.5rem",
    color: "rgba(121, 95, 226, 1)",
    textShadow: "0 0 2px rgba(121, 95, 226, 1)",
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={scanlinesStyle}></div>
      <div style={contentStyle}>
        <h1 style={headingStyle}>ERROR 404</h1>
        <p style={messageStyle}>
            I am surprized that you landed on this page.......
            <br/>
            <br/>
          The page you're looking for might have been removed,
          <br />
          had its name changed, or is temporarily unavailable.
        </p>
      </div>
    </div>
  );
};
