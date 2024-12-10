import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        你好,我叫<HighlightSpan>李</HighlightSpan>!
      </p>
      <p>
        I'm a <HighlightAlt>student</HighlightAlt>,{" "}
        <HighlightAlt>programmer</HighlightAlt>, and{" "}
        <HighlightAlt>content creator</HighlightAlt>.
      </p>
      <p>
        <span>
          This terminal was created by satnaing on{" "}
          <a href="https://github.com/satnaing/terminal-portfolio">GitHub</a>
        </span>
      </p>
    </AboutWrapper>
  );
};

export default About;
