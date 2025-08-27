
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

const query = groq`
  *[_type == "post" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    body,
  }
`;

export default async function PostPage({ params }: Props) {
  const post = await client.fetch(query, { slug: params.slug });

  if (!post) {
    return <div>404 - Post not found</div>;
  }

  return (
    <article className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      {post.imageUrl && (
        <Image
          src={post.imageUrl}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-lg mb-8"
        />
      )}
      <div className="prose dark:prose-invert">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}