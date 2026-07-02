import { View, Text } from "@react-pdf/renderer";

const PDFHeader = ({ formData }) => {
  return (
    <View>
      <Text>{formData.fullName || "Your Name"}</Text>
      <Text>{formData.email}</Text>
      <Text>{formData.phone}</Text>
      <Text>{formData.city}</Text>
    </View>
  );
};

export default PDFHeader;