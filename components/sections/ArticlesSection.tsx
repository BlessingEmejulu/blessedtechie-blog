import Link from 'next/link';
import { client } from "@/lib/sanity.client";
import { groq } from "next-sanity";

interface Post {
    _id: string;
    title: string;
    excerpt?: string;
    body?: any;
    slug: string;
    imageUrl: string | null;
    publishedAt: string;
}

const query = groq`
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "excerpt": pt::text(body[0...3]),
    body,
    "slug": slug.current,
    "imageUrl": mainImage.asset->url,
    publishedAt,
    _createdAt
  }
`;

// Helper function to format date
const formatDate = (dateString: string) => {
    if (!dateString) return 'No date';
    
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return 'Invalid date';
        
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch (error) {
        return 'Invalid date';
    }
};

export default async function ArticlesSection() {
    let articles: Post[] = [];
    
    try {
        articles = await client.fetch<Post[]>(query);
        console.log("Fetched articles:", articles);
    } catch (error) {
        console.error("Error fetching articles:", error);
        articles = [];
    }

    if (articles.length === 0) {
        return null;
    }
    
    return (
        <section className="container mx-auto px-4 py-12 md:px-8">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold tracking-widest uppercase">
                    Latest Articles
                </h2>
                <span className="flex-1 border-t mx-4" />
                <Link href="/articles" className="font-bold text-sm gradient-underline">
                    View All Articles
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <div key={article._id} className="border p-4 rounded hover:shadow-lg transition-shadow">
                        {article.imageUrl && (
                            <div className="w-full h-32 bg-gray-200 rounded mb-3 overflow-hidden">
                                <img 
                                    src={article.imageUrl} 
                                    alt={article.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        
                        <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
                        
                        {article.excerpt && (
                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                {article.excerpt}
                            </p>
                        )}
                        
                        <span className="text-xs text-gray-500">
                            {formatDate(article.publishedAt)}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
