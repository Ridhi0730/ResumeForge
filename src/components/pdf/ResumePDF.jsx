import {
  Document,
  Page,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
  },

  heading: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },

  text: {
    fontSize: 12,
    marginBottom: 6,
  },
});

const ResumePDF = ({ formData }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.heading}>
          {formData.fullName || "Your Name"}
        </Text>

        <Text style={styles.text}>
          {formData.email}
        </Text>

        <Text style={styles.text}>
          {formData.phone}
        </Text>

        <Text style={styles.text}>
          {formData.city}
        </Text>
      </Page>
    </Document>
  );
};

export default ResumePDF;