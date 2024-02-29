import { StWrapper } from "./HeroButton.styled";

function HeroButton({ ...delegated}) {
  return (<StWrapper variant="primary" {...delegated}/>);
}

export default HeroButton;
