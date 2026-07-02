import ResumePage from "../../../components/preview/ResumePage";

import Header from "./Header";
import Summary from "./Summary"
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

const Layout = ({ formData }) => {
    return (
        <ResumePage>

            <Header formData={formData} />

            <Summary formData={formData} />

            <Education formData={formData} />

            <Experience formData={formData} />

            <Projects formData={formData} />

            <Skills formData={formData} />

        </ResumePage>
    );
};

export default Layout;