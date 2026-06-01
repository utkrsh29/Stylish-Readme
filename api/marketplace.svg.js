export default function handler(req, res) {
  const { platform, id } = req.query;

  if (!platform || !id) {
    return res.status(400).send("Missing parameters");
  }

  let title = "Marketplace Badge";
  let color = "#4A90E2";

  if (platform === "producthunt") {
    title = `Product Hunt: ${id}`;
    color = "#ff6154";
  }

  if (platform === "chrome") {
    title = `Chrome: ${id}`;
    color = "#4285f4";
  }

  const svg = `
<svg width="320" height="80" xmlns="http://www.w3.org/2000/svg">
  <rect width="320" height="80" rx="12" fill="${color}"/>
  <text x="20" y="45" font-size="16" fill="white">${title}</text>
</svg>
  `;

  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(svg);
}
