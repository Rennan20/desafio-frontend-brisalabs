import { MainContainer, SectionTwo, Image } from "./LoginStyles";
import RightSection from "./RightSection";

const Main = () => {
  return (
    <>
      <MainContainer>
        <RightSection />
        <SectionTwo>
          <Image src="/assets/light 1.png" alt="banner" />
        </SectionTwo>
      </MainContainer>
    </>
  );
};

export default Main;
