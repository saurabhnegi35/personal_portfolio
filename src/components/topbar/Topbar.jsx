import './Topbar.scss';
// import { Person, Mail } from '@material-ui/icons';
import {
  GithubOutlined,
  LinkedinOutlined,
  FilePdfOutlined,
  MailOutlined,
} from '@ant-design/icons';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio
          </a>
          <div className="itemContainer">
            <LinkedinOutlined className="icon" />
            <a
              href="https://www.linkedin.com/in/saurabhnegi35/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Linkedin</span>
            </a>
          </div>
          <div className="itemContainer">
            <GithubOutlined className="icon" />
            <a
              href="https://github.com/saurabhnegi35/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Github</span>
            </a>
          </div>
          <div className="itemContainer">
            <MailOutlined className="icon" />
            <span>reachsaurabhnegi@gmail.com</span>
          </div>

          <div className="itemContainer">
            <FilePdfOutlined className="icon" />
            <a
              href="https://github.com/saurabhnegi35/"
              target="_blank"
              rel="noreferrer"
            >
              <span>Resume</span>
            </a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
