import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

import type { TypedObject } from "@portabletext/types";

interface Post {
  title: string;
  slug: string;
  imageUrl: string | null;
  publishedAt: string;
  body: TypedObject[];
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
  const { slug } = await params; // Await params
  const post = await client.fetch<Post>(query, { slug });

  if (!post) {
    notFound();
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