import { View, Text } from "@react-pdf/renderer";

import styles from "./PDFStyles";

import { displayTitle } from "../shared/formatters";

import { joinValues } from "../helpers";
import { headerConfig } from "../shared/headerConfig";

const Header = ({ formData }) => {
  const contacts = joinValues(
    [
      displayTitle(formData.email),
      displayTitle(formData.phone),
      displayTitle(formData.city),
    ],
    headerConfig.separator
  );

  const links = joinValues(
    [
      displayTitle(formData.linkedin),
      displayTitle(formData.github),
    ],
    headerConfig.separator
  );

  return (
    <View style={styles.header}>
      <Text style={styles.name}>
        {displayTitle(formData.fullName) || "Your Name"}
      </Text>

      {!!contacts && (
        <Text style={styles.contact}>
          {contacts}
        </Text>
      )}

      {!!links && (
        <Text style={styles.link}>
          {links}
        </Text>
      )}
    </View>
  );
};

export default Header;