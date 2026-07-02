import ResumePage from "../../components/preview/ResumePage";

import Header from "./preview/Header";
import Education from "./preview/Education";
import Experience from "./preview/Experience";
import Projects from "./preview/Projects";
import Skills from "./preview/Skills";

const Preview = ({ formData }) => {
  return (
    <ResumePage>
      <Header formData={formData} />

      <Education formData={formData} />

      <Experience formData={formData} />

      <Projects formData={formData} />

      <Skills formData={formData} />
    </ResumePage>
  );
};

export default Preview;