function showHTML() {
    document.getElementById('introduction').style.display = 'none';

    const content = document.createElement('div');
    content.id = 'content';
    content.className = 'content';

    content.innerHTML = `
        <!-- HEADER ito -->
       <header class="header-ira">
  <nav class="nav ira-grid">
    <div class="nav__menu" id="nav-menu">
       <a href="#home" class="nav__link" onclick="setActiveLink(event, this)">Home</a>
        <a href="#about" class="nav__link" onclick="setActiveLink(event, this)">About</a>
       <a href="#project" class="nav__link" onclick="setActiveLink(event, this)">Project</a>
       <a href="#skills" class="nav__link" onclick="setActiveLink(event, this)">Skills</a>
       <a href="#contact" class="nav__link" onclick="setActiveLink(event, this)">Contact</a>
    </div>
    <div class="nav__toggle" id="nav-toggle">
      <i class='bx bx-menu'></i>
    </div>
  </nav>
</header>
<!-- MAIN CONTENT -->
<main class="main-ira">
  <section class="home ira-grid" id="home">
    <div class="home__data"></div>
    <div class="home__content">
      <h1 class="home__title">Hello! I'm <span class="home__title-color"><br>Ira Kristine</span></h1>
      <p class="home__description">
        Welcome to my web development portfolio! I'm Ira,
        a skilled and creative web developer with a passion
        for creating beautiful, responsive, and user-friendly websites <br></p>
        <img src="img head.png" alt="Profile Picture" class="profile-picture" />
      <a href="#contact" class="button"> Contact Me</a>
    </div>
    </div>
  </section>
  <!-- ABOUT SECTION -->
  <section class="about section"
    <h2 class="section-title">About</h2>
    <div class="about1">
      <h1> About Me </h1>
      <p>I am Ira Kristine 21 years old from Buenavista Marinduque, as a student, my journey in coding is not easy writing even the simplest lines of code felt overwhelming. I faced countless errors, frustrating bugs, and moments where I doubted if I could truly learn to program. But each problem became an opportunity to grow, and every solution taught me something new. Programming has taught me not only technical skills but also patience, problem-solving, and the importance of never giving up. It has shown me that mistakes are just stepping stones toward improvement. I am a beginner in web development, but I am driven by curiosity and a desire to learn more about building beautiful, responsive, and user-friendly websites. This portfolio is not just a display of my work—it’s a testament to my determination to grow and improve as a web developer. As someone who is passionate about creating functional and visually appealing websites, I’m excited to showcase my progress and share what I’ve learned so far.<br>
        I enjoy discovering how coding can be used to create amazing things and solve everyday problems.</p>
    </div>
    <!---PROJECTS SECTION--->
    </section>
    <div class="project-description">
      <h3> My Projects </h3>
      <p>This is my working project, it is a reflection of my beginnings in the world of web development.
       These projects help me to improve my skills in coding and learn something to create different websites and basic apps using different programming languages.</p>
    </div>
    <div id="SelectImages">
        <img src="images/img4.jpeg">
        <img src="images/img5.jpeg">
        <img src="images/img6.jpeg">
        <img src="images/img7.jpeg">
        <img src="images/img8.jpeg">
    
    <!-- SKILLS SECTION -->
    <section class="skills section" id="skills">
      <h2 class="section-title">Skills</h2>
      <div class="skills__container ira-grid">
      <p> Content ng skills mo </p>

        <!-- Content stays the same -->
      </div>
    </section>
    <!-- CONTACT SECTION -->
    <section class="contact section" data-reveal>
      <h2 class="section-title">Contact</h2>
        <div class="contact-right">
          <form action="#">
            <input type="text" name="name" placeholder="Name *" required>
            <input type="email" name="email" placeholder="Email *" required>
            <textarea name="message" placeholder="Message *" required></textarea>
            <button type="submit" class="send-message-btn">Send message</button>
          </form>
        </div>
      </div>
    </section>
  </main>
  <!-- FOOTER -->
  <footer class="footer">
    <p class="footer__title">Ira Kristine Soleta</p>
    <div class="footer__social">
      <a href="#" class="footer__icon"><i class='bx bxl-facebook'></i></a>
      <a href="#" class="footer__icon"><i class='bx bxl-instagram'></i></a>
    </div>
    <p class="footer__copy">&#169; 2024 Ira Kristine Soleta. All rights reserved.</p>
  </footer>

    `;

    document.body.appendChild(content);
}