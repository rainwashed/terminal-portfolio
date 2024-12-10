import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";
import LiZJ from "../bigtexts/lizj";
import ProfileArt from "../bigtexts/profile";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          <LiZJ />
        </PreName>
        <div>
          你好,我是李. I am a programmer, student, AI hobbyist, and programming
          content creator. I am currently in my junior year at high school,
          where I enjoy subjects like mathematics and chemistry.
        </div>
        <Seperator>----</Seperator>
        <div>
          This project's is taken from <i>satnaing/terminal-portfolio</i> on
          GitHub. The source code can be found here:{" "}
          <Link href="https://github.com/satnaing/terminal-portfolio">
            GitHub repo
          </Link>
          .
        </div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          <ProfileArt />
        </PreImg>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
