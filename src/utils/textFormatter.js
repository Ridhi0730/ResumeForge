// Exact words that should never change
const PRESERVE = new Set([
  "B.Tech",
  "M.Tech",
  "BCA",
  "MCA",
  "MBA",
  "PhD",

  "ECE",
  "CSE",
  "IT",
  "AI",
  "ML",

  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",

  "AWS",
  "Azure",
  "GCP",

  "SQL",
  "MySQL",
  "PostgreSQL",

  "C",
  "C++",
  "C#",

  "CGPA",
]);

const ACRONYMS = new Set([
  "AI",
  "ML",
  "IT",
  "ECE",
  "CSE",
  "AWS",
  "SQL",
  "GCP",
  "API",
  "REST",
  "UI",
  "UX",
]);

function formatWord(word) {
  if (!word) return word;

  if (PRESERVE.has(word))
    return word;

  if (ACRONYMS.has(word.toUpperCase()))
    return word.toUpperCase();

  if (word.includes("-")) {
    return word
      .split("-")
      .map(formatWord)
      .join("-");
  }

  return word.charAt(0).toUpperCase() +
         word.slice(1).toLowerCase();
}

/*
|--------------------------------------------------------------------------
| Title Case
|--------------------------------------------------------------------------
*/

export function displayTitle(text = "") {
  return text
    .split(" ")
    .map(formatWord)
    .join(" ");
}

/*
|--------------------------------------------------------------------------
| Sentence Case
|--------------------------------------------------------------------------
*/

export function displaySentence(text = "") {
  if (!text) return "";

  return text.charAt(0).toUpperCase() + text.slice(1);
}

/*
|--------------------------------------------------------------------------
| Month Year
|--------------------------------------------------------------------------
*/

export function displayDate(date) {
  if (!date) return "";

  const [year, month] = date.split("-");

  return new Date(year, month - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}