// Special Words
const specialWords = {
  javascript: "JavaScript",
  typescript: "TypeScript",
  react: "React",
  "next.js": "Next.js",
  nextjs: "Next.js",
  "node.js": "Node.js",
  nodejs: "Node.js",
  express: "Express",
  mongodb: "MongoDB",
  mysql: "MySQL",
  postgresql: "PostgreSQL",
  firebase: "Firebase",
  github: "GitHub",
  gitlab: "GitLab",
  html: "HTML",
  css: "CSS",
  scss: "SCSS",
  tailwind: "Tailwind CSS",
  api: "API",
  rest: "REST",
  graphql: "GraphQL",
  aws: "AWS",
  gcp: "GCP",
  docker: "Docker",
  kubernetes: "Kubernetes",
  vscode: "VS Code",
  figma: "Figma",
  canva: "Canva",
  c: "C",
  "c++": "C++",
  "c#": "C#",
  java: "Java",
  python: "Python",
};

// Remove extra spaces
export const cleanText = (text = "") => {
  if (typeof text !== "string") return "";
  return text.replace(/\s{2,}/g, " ");
}

export const finalizeText = (text = "") =>
    cleanText(text).trim();

// Capitalize Every Word
export const titleCase = (text = "") => {
  if (typeof text !== "string") return "";

  const cleaned = cleanText(text);

  return cleaned
    .split(" ")
    .map((word) => {
      const key = word.toLowerCase();

      if (specialWords[key]) {
        return specialWords[key];
      }

      return (
        word.charAt(0).toUpperCase() +
        word.slice(1).toLowerCase()
      );
    })
    .join(" ");
};

// Capitalize Sentences
export const sentenceCase = (text = "") => {
  if (typeof text !== "string") return "";
  const cleaned = cleanText(text);

  return cleaned.replace(
    /(^\w|[.!?]\s+\w)/g,
    (char) => char.toUpperCase()
  );
};

// Do nothing except trim spaces
export const plainText = (text = "") => {
  if (typeof text !== "string") return "";

  cleanText(text)};