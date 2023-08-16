import "./Footer.css";

export default function Footer() {

  return (
    <div id="footer-container">
      <div id="footer-content">

        <div className="footer-col" id="creator">
          <i className="fa fa-user footer-header"></i>
          <span>Alex Basso</span>
          <a href="https://www.linkedin.com/in/alexjbasso/">–LinkedIn</a>
          <a href="https://github.com/alexjbasso">–Github</a>
        </div>

        <div className="footer-col" id="languages">
          <i className="fa fa-code footer-header"></i>
          <span>JavaScript</span>
          <span>React</span>
          <span>Redux</span>
          <span>Python</span>
          <span>Flask</span>
          <span>AWS</span>
        </div>

        <div className="footer-col" id="for">
          <i className="fa fa-school footer-header"></i>
          <span>App Academy</span>
          <span>August 2023</span>
          <a href="https://github.com/alexjbasso/vidi-capstone-proj">v1.0</a>
        </div>

      </div>
    </div>
  )

}
