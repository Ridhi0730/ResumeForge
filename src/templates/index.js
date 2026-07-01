import ClassicPreview from "./Classic/Preview";
import ClassicPDF from "./Classic/PDF";
import classicMetadata from "./Classic/metadata";

export const templates = {
  classic: {
    ...classicMetadata,
    Preview: ClassicPreview,
    PDF: ClassicPDF,
  },
};