import {
  Document,
  Page,
  StyleSheet,
} from "@react-pdf/renderer";

import Header from "./pdf/Header";
import Education from "./pdf/Education";
import Experience from "./pdf/Experience";
import Projects from "./pdf/Projects";
import Skills from "./pdf/Skills";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: "#ffffff",
  },
});

const ClassicPDF = ({ formData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

        <Header formData={formData} />

        <Education formData={formData} />

        <Experience formData={formData} />

        <Projects formData={formData} />

        <Skills formData={formData} />

      </Page>
    </Document>
  );
};

export default ClassicPDF;