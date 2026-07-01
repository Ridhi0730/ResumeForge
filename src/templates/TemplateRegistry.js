import ClassicPreview from "./Classic/Preview";
import MinimalPreview from "./Minimal/Preview";
import ModernPreview from "./Modern/Preview";

import ClassicPDF from "./Classic/PDF";
import MinimalPDF from "./Minimal/PDF";
import ModernPDF from "./Modern/PDF";

export const templates = {
  classic: {
    id: "classic",
    name: "Classic",
    Preview: ClassicPreview,
    PDF: ClassicPDF,
    thumbnail: null,
  },

  minimal: {
    id: "minimal",
    name: "Minimal",
    Preview: MinimalPreview,
    PDF: MinimalPDF,
    thumbnail: null,
  },

  modern: {
    id: "modern",
    name: "Modern",
    Preview: ModernPreview,
    PDF: ModernPDF,
    thumbnail: null,
  },
};