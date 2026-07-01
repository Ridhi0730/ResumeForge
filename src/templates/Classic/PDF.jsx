import {
  Document,
  Page,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 32,
    backgroundColor: "#fff",
  },
});

const ClassicPDF = ({ formData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>

      </Page>
    </Document>
  );
};

export default ClassicPDF;