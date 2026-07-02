import { View, Text } from "@react-pdf/renderer";
import styles from "./PDFStyles";

const Summary = ({ formData }) => {
  if (!formData.summary?.trim()) return null;

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>
        PROFESSIONAL SUMMARY
      </Text>

      <Text style={styles.body}>
        {formData.summary}
      </Text>
    </View>
  );
};

export default Summary;