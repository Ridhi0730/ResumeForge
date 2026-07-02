import { displayDate, displayTitle } from "../../utils/textFormatter";

export const joinValues = (values, separator = " • ") =>
  values
    .map((v) => (typeof v === "string" ? v.trim() : v))
    .filter(Boolean)
    .join(separator);

export const hasItems = (items) =>
  Array.isArray(items) && items.length > 0;

export const formatLocation = (...parts) =>
  parts.filter(Boolean).join(", ");

export const formatDateRange = (
  start,
  end,
  current = false
) => {
  const startText = start ? displayDate(start) : "";

  const endText = current
    ? "Present"
    : end
    ? displayDate(end)
    : "";

  return [startText, endText]
    .filter(Boolean)
    .join(" - ");
};

export const formatDegree = (degree, branch) => {
  if (!degree && !branch) return "";

  if (!branch) return displayTitle(degree);

  return `${displayTitle(degree)} (${displayTitle(branch)})`;
};

export const formatGrade = (type, value) => {
  if (!value) return "";

  return `${type}: ${value}`;
};

export const getBullets = (item) => {
  if (item.ai?.bullets?.length) {
    return item.ai.bullets;
  }

  if (!item.description) {
    return [];
  }

  return item.description
    .split("\n")
    .filter((line) => line.trim());
};