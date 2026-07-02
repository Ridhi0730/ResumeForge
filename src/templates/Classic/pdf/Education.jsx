import { View, Text } from "@react-pdf/renderer";

import styles from "./PDFStyles";

import {
  displaySentence,
  displayTitle,
} from "../shared/formatters";

import { formatDateRange } from "../helpers";

// Formats the grade based on its type, instead of literally
// concatenating "gradeType: gradeValue" (which produced things like
// "Percentage: 91" instead of the more standard "91%").
const formatGrade = (gradeType, gradeValue) => {
  if (!gradeValue) return "";

  const type = (gradeType || "").toLowerCase();

  if (type.includes("percentage")) {
    return `${gradeValue}%`;
  }

  if (type.includes("cgpa") || type.includes("gpa")) {
    return `${gradeValue} ${displayTitle(gradeType)}`;
  }

  // Fallback for any other/custom grade type: keep the label, but
  // still avoid a bare, unlabeled number.
  return gradeType ? `${gradeValue} ${displayTitle(gradeType)}` : `${gradeValue}`;
};

const Education = ({ formData }) => {
  const education = formData.education || [];

  if (!education.length) return null;

  return (
    <View style={styles.section}>

      <Text style={styles.sectionTitle}>
        Education
      </Text>

      {education.map((item) => (
        <View
          key={item.id}
          style={styles.item}
        >
          <View style={styles.row}>

            <View style={{ flex: 1 }}>

              <Text style={styles.itemTitle}>
                {displayTitle(item.degree)}

                {item.branch
                  ? ` (${displayTitle(item.branch)})`
                  : ""}
              </Text>

              {!!item.institution && (
                <Text style={styles.italic}>
                  {displayTitle(item.institution)}
                </Text>
              )}

            </View>

            <Text style={styles.date}>
              {formatDateRange(
                item.startDate,
                item.endDate,
                item.currentlyStudying
              )}
            </Text>

          </View>

          {(item.location || item.gradeValue) && (
            <View style={styles.row}>

              <Text style={styles.smallText}>
                {displayTitle(item.location)}
              </Text>

              {!!item.gradeValue && (
                <Text style={styles.smallText}>
                  {formatGrade(item.gradeType, item.gradeValue)}
                </Text>
              )}

            </View>
          )}

          {!!item.description && (
            <Text style={styles.body}>
              {displaySentence(item.description)}
            </Text>
          )}

        </View>
      ))}

    </View>
  );
};

export default Education;