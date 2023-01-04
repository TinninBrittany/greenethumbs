import * as React from "react";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#90EE90",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};
const headingAccentStyles = {
  color: "#663399",
};
const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
};
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
};

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
};

const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
];

const bestIndoorPlants = [
  {
    text: "String of Hearts",
    url: "https://en.wikipedia.org/wiki/Ceropegia",
    description:
      "Ceropegia is a genus of plants within the family Apocynaceae, native to Africa, southern Asia, and Australia.[1][2] It was named by Carl Linnaeus, who first described this genus in his Genera plantarum, which appeared in 1737.",
  },
  {
    text: "Snake Plant",
    url: "https://en.wikipedia.org/wiki/Dracaena_trifasciata",
    description:
      "Dracaena trifasciata is a species of flowering plant in the family Asparagaceae, native to tropical West Africa from Nigeria east to the Congo. It is most commonly known as the snake plant, Saint George's sword, mother-in-law's tongue, and viper's bowstring hemp, among other names.",
  },
  {
    text: "Peace Lily",
    url: "https://en.wikipedia.org/wiki/Spathiphyllum",
    description:
      "Spathiphyllum is a genus of about 47 species of monocotyledonous flowering plants in the family Araceae, native to tropical regions of the Americas and southeastern Asia. Certain species of Spathiphyllum are commonly known as spath or peace lilies.",
  },
  {
    text: "Monstera or Swiss Cheeese",
    url: "https://en.wikipedia.org/wiki/Monstera_deliciosa",
    description:
      "Monstera deliciosa, the Swiss cheese plant or split-leaf philodendron is a species of flowering plant native to tropical forests of southern Mexico, south to Panama. It has been introduced to many tropical areas, and has become a mildly invasive species in Hawaii, Seychelles, Ascension Island and the Society Islands.",
  },
  {
    text: "ZZ plant or Zanzibar",
    url: "https://en.wikipedia.org/wiki/Zamioculcas",
    description:
      "Zamioculcas is a genus of flowering plants in the family Araceae, containing the single species Zamioculcas zamiifolia. It is a tropical perennial plant, native to eastern Africa, from southern Kenya to northeastern South Africa",
  },
  {
    text: "Philodendron",
    url: "https://en.wikipedia.org/wiki/Philodendron",
    description:
      "Philodendron is a large genus of flowering plants in the family Araceae. As of September 2015, the World Checklist of Selected Plant Families accepted 489 species; other sources accept different numbers.",
  },
  {
    text: "Succulents",
    url: "https://en.wikipedia.org/wiki/Succulent_plant",
    description:
      'In botany, succulent plants, also known as succulents, are plants with parts that are thickened, fleshy, and engorged, usually to retain water in arid climates or soil conditions. The word succulent comes from the Latin word sucus, meaning "juice" or "sap".',
  },
  {
    text: "Pothos",
    url: "https://en.wikipedia.org/wiki/Epipremnum_aureum",
    description:
      "Epipremnum aureum is a species in the arum family Araceae, native to Mo'orea in the Society Islands of French Polynesia. The species is a popular houseplant in temperate regions but has also become naturalised in tropical and sub-tropical forests worldwide, including northern South Africa,[3] Australia, Southeast Asia, South Asia, the Pacific Islands and the West Indies, where it has caused severe ecological damage in some cases.",
  },
  {
    text: "Peacock Plant or Calathea",
    url: "https://en.wikipedia.org/wiki/Calathea",
    description:
      "Calathea is a genus of flowering plants belonging to the family Marantaceae. They are commonly called calatheas or (like their relatives) prayer plants. About 200 species formerly assigned to Calathea are now in the genus Goeppertia.",
  },
  {
    text: "Bromeliad(tropical plants)",
    url: "https://en.wikipedia.org/wiki/Bromeliaceae",
    description:
      "The Bromeliaceae (the bromeliads) are a family of monocot flowering plants of about 80 genera and 3700 known species, native mainly to the tropical Americas, with several species found in the American subtropics and one in tropical west Africa, Pitcairnia feliciana.",
  },
];

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>
        <span style={headingAccentStyles}>The Greene Thumb</span>
      </h1>
      <h2 style={headingStyles}>
        <span style={headingAccentStyles}>10 Best indoors Plants</span>
      </h2>
      <ul style={listStyles}>
        {bestIndoorPlants.map((link) => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
