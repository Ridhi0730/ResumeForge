import ClassicPreview from "./Classic/Preview";
import ClassicPDF from "./Classic/PDF";
import classicMetadata from "./Classic/metadata";

import ModernPreview from "./Modern/Preview";
import ModernPDF from "./Modern/PDF";
import modernMetadata from "./Modern/metadata";

import MinimalPreview from "./Minimal/Preview";
import MinimalPDF from "./Minimal/PDF";
import minimalMetadata from "./Minimal/metadata";

export const templates = {
  classic: {
    ...classicMetadata,
    Preview: ClassicPreview,
    PDF: ClassicPDF,
  },

  modern: {
    ...modernMetadata,
    Preview: ModernPreview,
    PDF: ModernPDF,
  },

  minimal: {
    ...minimalMetadata,
    Preview: MinimalPreview,
    PDF: MinimalPDF,
  },
};