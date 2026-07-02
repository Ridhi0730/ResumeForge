import { View, Text, Link } from "@react-pdf/renderer";

import styles from "./PDFStyles";

import {
  displaySentence,
  displayTitle,
} from "../shared/formatters";

import {
  formatDateRange,
  getBullets,
} from "../helpers";

import config from "../config";

const Projects = ({ formData }) => {
  const projects = formData.projects || [];

  if (!projects.length) return null;

  return (
    <View style={styles.section}>

      <Text style={styles.sectionTitle}>
        {config.sectionTitles.projects}
      </Text>

      {projects.map((project) => {
        const bullets = getBullets(project);

        return (
          <View
            key={project.id}
            style={styles.item}
          >

            {/* Title + Dates */}

            <View style={styles.row}>

              <Text style={styles.itemTitle}>
                {displayTitle(project.title)}
              </Text>

              <Text style={styles.date}>
                {formatDateRange(
                  project.startDate,
                  project.endDate
                )}
              </Text>

            </View>

            {/* Role */}

            {!!project.role && (
              <Text style={styles.italic}>
                {displayTitle(project.role)}
              </Text>
            )}

            {/* Technologies */}

            {!!project.technologies?.length && (
              <Text style={styles.smallText}>
                {[...new Set(project.technologies)]
                  .map(displayTitle)
                  .join(", ")}
              </Text>
            )}

            {/* Bullet Points */}

            {bullets.map((bullet, index) => (
              <Text
                key={index}
                style={styles.body}
              >
                • {displaySentence(bullet)}
              </Text>
            ))}

            {/* Links — only rendered (and only adds spacing) when at
                least one link actually exists. Previously this row
                rendered unconditionally, so every project with no
                links still added an empty row's marginTop as extra
                trailing whitespace. */}

            {(project.githubLink || project.liveLink) && (
              <View
                style={{
                  flexDirection: "row",
                  gap: 12,
                  marginTop: 4,
                }}
              >

                {!!project.githubLink && (
                  <Link
                    src={project.githubLink}
                    style={styles.link}
                  >
                    GitHub
                  </Link>
                )}

                {!!project.liveLink && (
                  <Link
                    src={project.liveLink}
                    style={styles.link}
                  >
                    Live Demo
                  </Link>
                )}

              </View>
            )}

          </View>
        );
      })}

    </View>
  );
};

export default Projects;