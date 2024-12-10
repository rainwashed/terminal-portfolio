import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>person</User>@<WebsiteName>lizj.xyz</WebsiteName>:~$
    </Wrapper>
  );
};

export default TermInfo;
