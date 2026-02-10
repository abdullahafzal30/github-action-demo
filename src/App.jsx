import "./App.css";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hi, I'm Abdullah Afzal 👋</h1>

      <p style={styles.text}>
        I'm a passionate Software Engineer with strong interest in
        <b> DevOps, Docker, CI/CD, and Cloud technologies</b>.
      </p>

      <p style={styles.text}>
        I work with React, Node.js, Docker, GitHub Actions, and Linux.
        My goal is to build scalable, automated, and reliable systems.
      </p>

      <p style={styles.text}>
        🚀 This website is automatically deployed using
        <b> GitHub Actions + Docker</b>.
      </p>

      <p style={styles.footer}>
        © {new Date().getFullYear()} Abdullah Afzal
      </p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "40px",
    textAlign: "center",
  },
  heading: {
    color: "#ffffff",
  },
  text: {
    fontSize: "18px",
    margin: "15px 0",
  },
  footer: {
    marginTop: "40px",
    fontSize: "14px",
    color: "#777",
  },
};

export default App;

