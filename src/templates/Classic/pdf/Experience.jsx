import { View, Text } from "@react-pdf/renderer";

import styles from "./PDFStyles";

import {
  displaySentence,
  displayTitle,
} from "../shared/formatters";

import { formatDateRange } from "../helpers";

const Experience = ({ formData }) => {
  const experience = formData.experience || [];

  if (!experience.length) return null;

  return (
    <View style={styles.section}>

      <Text style={styles.sectionTitle}>
        Experience
      </Text>

      {experience.map((item) => (
        <View
          key={item.id}
          style={styles.item}
        >
          <View style={styles.row}>

            <View style={{ flex: 1 }}>

              <Text style={styles.itemTitle}>
                {displayTitle(item.position)}
              </Text>

              {!!item.company && (
                <Text style={styles.italic}>
                  {displayTitle(item.company)}
                </Text>
              )}

            </View>

            <Text style={styles.date}>
              {formatDateRange(
                item.startDate,
                item.endDate,
                item.currentlyWorking
              )}
            </Text>

          </View>

          {(item.location || item.employmentType) && (
            <View style={styles.row}>

              <Text style={styles.smallText}>
                {displayTitle(item.location)}
              </Text>

              {!!item.employmentType && (
                <Text style={styles.smallText}>
                  {displayTitle(item.employmentType)}
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

export default Experience;