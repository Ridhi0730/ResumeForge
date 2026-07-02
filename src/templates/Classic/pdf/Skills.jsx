import { View, Text } from "@react-pdf/renderer";

import styles from "./PDFStyles";

import labels from "../shared/skillLabels";

// Fallback for any category not in the map above: capitalize the
// first letter rather than showing the raw key as-is.
const formatLabel = (key) =>
  labels[key] || key.charAt(0).toUpperCase() + key.slice(1);

const Skills = ({ formData }) => {
  const skills = formData.skills || {};

  const categories = Object.entries(skills).filter(
    ([, values]) => values?.length
  );

  if (!categories.length) return null;

  return (
    <View style={styles.section}>

      <Text style={styles.sectionTitle}>
        Skills
      </Text>

      {categories.map(([key, values]) => (
        <View
          key={key}
          style={{
            flexDirection: "row",
            marginBottom: 1,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 9.5,
              width: 90,
            }}
          >
            {formatLabel(key)}
          </Text>

          <Text style={[styles.body, { marginTop: 0, flex: 1 }]}>
            {values.join(", ")}
          </Text>

        </View>
      ))}

    </View>
  );
};

export default Skills;