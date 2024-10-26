import './Home.css';
import profilePicture from '../assets/images/profilepic.png';

const Home = () => {
  return (
    <div className="home">
      <div className="intro-section">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h1>Welcome to my Portfolio 👨‍💻 </h1>
        <h2> Kia Ora ! 👋</h2>
        <p>Passionate software developer with an entrepreneurial mindset, dedicated to using technology to create impactful solutions that make a difference. With a strong foundation in IT and a current focus on Artificial Intelligence, I’m driven by the challenge of solving complex problems and turning ideas into real-world innovations.</p>
      </div>
      <div className="featured-projects">
        <h2>Featured Projects 🖌️</h2>
        <div className="projects-list">
          {/* Add project cards here */}
          <div className="project-card">
            <h3 >Project 1</h3>
            <p  >Short description of Project 1.</p>
          </div>
          <div className="project-card">
            <h3 >Project 2</h3>
            <p  >Short description of Project 2.</p>
          </div>
        </div>
      </div>
      <div className="skills-overview">
        <h2>Skills 🛠️ </h2>
        <ul>
          <li>JavaScript, TypeScript, React, Node.js</li>
          <li>Python, Django, Flask</li>
          <li>Machine Learning, Data Science</li>
          <li>HTML, CSS, SASS</li>
          <li>Git, Docker, CI/CD</li>
        </ul>
      </div>
      <div className="youtube-videos">
        <h2>My YouTube 📹</h2>
        <div className="video-list">
          <div className="video-card">
            <iframe src="https://www.youtube.com/embed/VlDTpzk_eyY?si=4FUUfw3MCUh0gTfu" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p >Life wisdom 🍃</p>
          </div>
          <div className="video-card">
            <iframe src="https://www.youtube.com/embed/2TBBFCy1eNA?si=hZfaw7CtXFAqIl_U" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p >The potential of networking 🌐</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;