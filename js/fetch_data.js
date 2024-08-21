// Function der henter vores data
export async function fetchPosts() {
  try {
    const response = await fetch("./data/posts.json");
    const posts = await response.json();

    return posts;
  } catch (error) {
    console.error("Error fetching or parsing data:", error);
  }
}
