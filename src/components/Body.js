import React from "react";

const Body = () => {
  return (
    <main style={styles.body}>
      <div style={styles.card}>
        <img src={"/avatar-dmytro.png"} alt="Dmytro Zabavskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Dmytro Zabavskyi</h2>
          <p style={styles.position}>Tracker</p>
        </div>
     </div>
     <div style={styles.card}>
        <img src={"/avatar-danylo.jpg"} alt="Korol Danylo" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Korol Danylo</h2>
          <p style={styles.position}>Customer consultant</p>
        </div>
    </div>
      <div style={styles.card}>
        <img src={"/avatar-oleksandr.jpg"} alt="Oleksandr Zelinskyi" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Oleksandr Zelinskyi</h2>
          <p style={styles.position}>Coach</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/avatar-vlad.png"} alt="Vladyslav Yedynak" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Vladyslav Yedynak</h2>
          <p style={styles.position}>Full Stack Developer</p>
        </div>
      </div>
      <div style={styles.card}>
        <img src={"/illia-avatar.jpg"} alt="Illia Kopach" style={styles.photo} />
        <div style={styles.textContainer}>
          <h2 style={styles.name}>Kopach Illia</h2>
          <p style={styles.position}>Backend Developer</p>
        </div>
      </div>
    </main>
  );
};

const styles = {
  body: {
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    width: "150px",
    padding: "1em",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    margin: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
  },
  textContainer: {
    marginTop: "0.5em",
  },
  name: {
    fontSize: "1em",
    fontWeight: "bold",
    color: "#333",
    margin: "0",
  },
  position: {
    fontSize: "0.9em",
    color: "#6a0dad", // Same purple color as header
    margin: "0.5em 0 0 0",
  },
};

export default Body;
