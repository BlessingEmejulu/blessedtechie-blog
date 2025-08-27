import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  apiVersion: "2025-08-24", 
  useCdn: true,
});