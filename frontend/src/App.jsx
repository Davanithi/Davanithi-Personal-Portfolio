
import './App.css'

// Contact Form Submit Function
const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.currentTarget;

  const formData = {
    name: form.elements.name.value.trim(),
    email: form.elements.email.value.trim(),
    subject: form.elements.subject.value.trim(),
    message: form.elements.message.value.trim()
  };

  // Empty field validation
  if (
    !formData.name ||
    !formData.email ||
    !formData.subject ||
    !formData.message
  ) {
    alert('Please fill in all fields!');
    return;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(formData.email)) {
    alert('Please enter a valid email address!');
    return;
  }

  try {
    const response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    alert(result.message);

    if (response.ok) {
      form.reset();
    }

  } catch (error) {
    alert('Unable to send message. Please try again.');
    console.error(error);
  }
};

function App() {
  return (
    <div className="portfolio">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2 className="logo">D<span>.</span></h2>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Davanithi</span>
          </h1>

          <h2>Electronics & Communication Engineer</h2>

          <p className="description">
            Passionate about technology, programming and building
            innovative solutions through software and hardware.
          </p>

          <a href="#projects" className="project-btn">
            Explore My Projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <p className="section-label">GET TO KNOW ME</p>

          <h2>About <span>Me</span></h2>

          <p>
            I am a pre-final year Electronics and Communication
            Engineering student with a strong interest in technology,
            programming and electronics.
          </p>

          <p>
            I have been learning programming languages such as Java
            and Python. I also enjoy working on hardware-based
            projects using Arduino.
          </p>

          <p>
            I believe in continuous learning and improving my
            technical knowledge through practical projects,
            experimentation and problem-solving.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <p className="section-label">MY TECHNICAL EXPERTISE</p>

        <h2>My <span>Skills</span></h2>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Java</h3>
            <p>Programming Language</p>
          </div>

          <div className="skill-card">
            <h3>Python</h3>
            <p>Programming Language</p>
          </div>

          <div className="skill-card">
            <h3>Arduino</h3>
            <p>Embedded Systems</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <p className="section-label">MY RECENT WORK</p>

        <h2>My <span>Projects</span></h2>

        <div className="projects-container">

          {/* Project 1 */}
          <div className="project-card">
            <div className="project-number">01</div>

            <h3>Smart Light System Using LDR and Arduino</h3>

            <p>
              Designed an automated lighting system using an LDR
              sensor and Arduino to control lights based on
              surrounding light intensity, reducing manual
              intervention and energy waste.
            </p>

            <div className="project-tech">
              <span>Arduino</span>
              <span>LDR Sensor</span>
              <span>Electronics</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <div className="project-number">02</div>

            <h3>Digital Thermometer Using Arduino & LM35</h3>

            <p>
              Developed a digital temperature measurement system
              using the LM35 sensor interfaced with Arduino
              to monitor real-time temperature readings.
            </p>

            <div className="project-tech">
              <span>Arduino</span>
              <span>LM35</span>
              <span>Embedded Systems</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <p className="section-label">GET IN TOUCH</p>

        <h2>Contact <span>Me</span></h2>

        <p className="contact-description">
          Have a project idea or an opportunity?
          Feel free to get in touch with me.
        </p>

        <div className="contact-container">

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>
      </section>

    </div>
  );
}

export default App;