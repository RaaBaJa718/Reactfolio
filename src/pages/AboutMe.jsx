const AboutMe = () => (
  <section
    style={{
      maxWidth: "800px",
      textAlign: "center",
      margin: "2rem auto",
      padding: "2rem",
      backgroundColor: "#101c36",
    }}
  >
    <h2
      style={{
        marginTop: "2rem", // Adds spacing between the header and title
        fontSize: "2rem",
        color: "#f9f9f9",
      }}
    >
      About Me
    </h2>
    <img
      src="/Icons/me.jpg"
      alt="Ruben's Avatar"
      style={{
        borderRadius: "50%",
        width: "100px",
        height: "100px",
        objectFit: "cover",
      }}
    />
    <p
      style={{
        color: "#555",
        fontSize: "1rem",
        lineHeight: "1.5",
      }}
    />
    <p>
      <strong>Hi, I’m Ruben, an aspiring full-stack developer.</strong>
    </p>

    <p>
      I’m embarking on an exciting journey into the world of software
      development. I am currently attending a comprehensive Full Stack Bootcamp,
      where I am learning to build interactive and responsive web applications
      using technologies like React, Node.js, Express.js, PostgreSQL, and
      Sequelize.
    </p>

    <p>
      This experience is teaching me not only the technical foundations of
      front-end and back-end development but also the value of problem-solving,
      collaboration, and writing clean, efficient code. I'm proud of the
      progress I've made so far, including tackling challenging projects that
      require turning ideas into functional solutions.
    </p>

    <p>
      As someone new to the field, my goal is to continue growing my skills and
      contributing to projects that make a meaningful impact. I’m excited to
      eventually join a team where I can learn from experienced developers,
      embrace new challenges, and create applications that enhance people's
      lives.
    </p>

    <p>
      This is just the beginning, and I’m looking forward to seeing where this
      journey takes me.
    </p>
  </section>
);

export default AboutMe;
