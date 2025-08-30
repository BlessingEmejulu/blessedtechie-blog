import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import ArticleCard from "@/components/ui/ArticleCard";
import { Post } from "@/interfaces/post";

const query = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    "imageUrl": mainImage.asset->url,
    body,
  }
`;

export default async function ArticlesPage() {
  const posts: Post[] = await client.fetch(query);

  if (!posts || posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <p className="text-center text-lg">No articles found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <ArticleCard key={post._id} article={post} />
        ))}
      </div>
    </div>
  );
}