const fs = require("fs");
const Parser = require("rss-parser");
require("dotenv").config();

const parser = new Parser();
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;

// --- SECTION 1: GITHUB DATA ---
if (USE_GITHUB_DATA === "true" && GITHUB_USERNAME) {
  const https = require("https");
  const query = JSON.stringify({
    query: `{ user(login:"${GITHUB_USERNAME}") { name bio avatarUrl location pinnedItems(first: 6, types: [REPOSITORY]) { edges { node { ... on Repository { name description forkCount url id diskUsage stargazers { totalCount } primaryLanguage { name color } } } } } } }`
  });
  const options = {
    hostname: "://github.com",
    path: "/graphql",
    headers: {Authorization: `Bearer ${GITHUB_TOKEN}`, "User-Agent": "Node"},
    method: "POST"
  };
  const req = https.request(options, res => {
    let body = "";
    res.on("data", d => (body += d));
    res.on("end", () => {
      if (res.statusCode === 200)
        fs.writeFileSync("./public/profile.json", body);
    });
  });
  req.write(query);
  req.end();
}

// --- SECTION 2: SUBSTACK DATA (Direct Fetch) ---
(async () => {
  const SUBSTACK_USERNAME = "cloudwithotunba";
  const RSS_URL = `https://${SUBSTACK_USERNAME}://`;
  console.log(`Fetching Substack RSS directly from ${RSS_URL}...`);

  try {
    const feed = await parser.parseURL(RSS_URL);

    // Structure the data to match what your Blog.js expects
    const blogData = {
      status: "ok",
      items: feed.items.map(item => ({
        title: item.title,
        link: item.link,
        author: item.creator,
        pubDate: item.pubDate,
        content: item.content || item.contentSnippet,
        description: item.contentSnippet
      }))
    };

    fs.writeFileSync("./public/blogs.json", JSON.stringify(blogData, null, 2));
    console.log("✅ Successfully saved Substack blogs to public/blogs.json");
  } catch (error) {
    console.error("❌ Substack fetch failed:", error.message);
    // Create an empty valid structure so the site doesn't crash
    fs.writeFileSync(
      "./public/blogs.json",
      JSON.stringify({status: "failed", items: []})
    );
  }
})();
