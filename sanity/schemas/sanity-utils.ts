import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config"; 

export const client = createClient(clientConfig);

// Query for the latest 3 blog posts
export async function getLatestArticles() {
  const query = groq`
    *[_type == "post"] | order(publishedAt desc) [0..2] {
      _id,
      title,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      body,
    }
  `;
  return client.fetch(query);
}

// Query to get the latest 3 projects
export async function getLatestProjects() {
  const query = groq`
    *[_type == "project"] | order(publishedAt desc) [0..2] {
      _id,
      title,
      "slug": slug.current,
      "imageUrl": mainImage.asset->url,
      body,
    }
  `;
  return client.fetch(query);
}