// components/ArticlesSection.tsx
import ArticleCard from "@/components/ui/ArticleCard";
import Link from 'next/link';
import { getLatestArticles } from "@/sanity/schemas/sanity-utils";
import { Post } from "@/interfaces/post";

export default async function ArticlesSection() {
    const articles: Post[] = await getLatestArticles();

    return (
        <section className="container mx-auto px-4 py-12 md:px-8">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold tracking-widest text-gray-700 uppercase">
                    Latest Articles
                </h2>
                <span className="flex-1 border-t border-gray-200" />
                <Link href="/articles" className="font-bold text-sm text-purple-700 gradient-underline">
                    View All Articles
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <ArticleCard key={article._id} article={article} />
                ))}
            </div>
        </section>
    );
}