import { StyleSheet } from "@react-pdf/renderer";

// Mirrors the CSS custom properties in theme.css. @react-pdf/renderer
// can't read CSS variables directly, so these are duplicated here as
// plain JS constants — if the brand palette changes, update both
// places (this file and theme.css).
const COLORS = {
  primary: "#210124",       // --color-brand-primary
  primaryHover: "#3A0B3C",  // --color-brand-primary-hover
  accent: "#7C3AED",        // --color-brand-accent
  textPrimary: "#1E293B",   // --color-text-primary
  textSecondary: "#475569", // --color-text-secondary
  border: "#E5E7EB",        // --color-border
};

export default StyleSheet.create({

  page: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 42,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: COLORS.textPrimary,
  },

  header: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 6,
    marginBottom: 10,
    alignItems: "center",
  },

  name: {
    fontSize: 19,
    fontWeight: "bold",
    color: COLORS.primary,
  },

  contact: {
    fontSize: 9.5,
    marginTop: 4,
    color: COLORS.textSecondary,
  },

  link: {
    fontSize: 9.5,
    marginTop: 2,
    color: COLORS.accent,
  },

  section: {
    marginTop: 8,
  },

  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: COLORS.primary,
    borderBottomWidth: 1.5,
    borderBottomColor: COLORS.primary,
    paddingBottom: 2,
    marginBottom: 5,
  },

  item: {
    marginBottom: 6,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  itemTitle: {
    fontSize: 10.5,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },

  italic: {
    fontSize: 9.5,
    fontStyle: "italic",
    color: COLORS.textPrimary,
  },

  body: {
    marginTop: 2,
    fontSize: 9.5,
    lineHeight: 1.2,
    color: COLORS.textPrimary,
  },

  smallText: {
    fontSize: 8.5,
    color: COLORS.textSecondary,
  },

  date: {
    fontSize: 8.5,
    color: COLORS.textSecondary,
  },

});