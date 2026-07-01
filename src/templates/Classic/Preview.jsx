import ResumePage from "../../components/preview/ResumePage";

import ResumeHeader from "./sections/ResumeHeader";
import ResumeEducation from "./sections/ResumeEducation";
import ResumeExperience from "./sections/ResumeExperience";
import ResumeProjects from "./sections/ResumeProjects";
import ResumeSkills from "./sections/ResumeSkills";

const Preview = ({ formData }) => {
  return (
    <ResumePage>
      <ResumeHeader formData={formData} />

      <ResumeEducation formData={formData} />

      <ResumeExperience formData={formData} />

      <ResumeProjects formData={formData} />

      <ResumeSkills formData={formData} />
    </ResumePage>
  );
};

export default Preview;