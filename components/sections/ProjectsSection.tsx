import ArticleCard from "@/components/ui/ArticleCard";
import Link from 'next/link';

export default function ProjectsSection() {
    // Dummy data for demonstration purposes
    const articles = [
        { id: 1, title: 'Easy Way to Get the Number of Days in a Month', summary: 'Working with dates in JavaScript has a bit of a reputation for being...', imageUrl: '/images/js-icon.png', imageAlt: 'JavaScript icon' },
        { id: 2, title: '2024, A Year In My Life', summary: 'If 2023 was the year that taught me the value of taking a step back...', imageUrl: '/images/2024-life.png', imageAlt: 'Illustration of a person with a laptop' },
        { id: 3, title: 'How to Create Code Snippets in VS Code', summary: 'Visual Studio Code (VS Code) is a widely used source code editor th...', imageUrl: '/images/vs-code.png', imageAlt: 'Visual Studio Code icon' },
    ];

    return (
        <section className="container mx-auto px-4 py-12 md:px-8">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold tracking-widest text-gray-700 uppercase">
                    Latest Projects
                </h2>
                <span className="flex-1 border-t border-gray-200" />

                <Link href="/projects" className="font-bold text-sm text-purple-700 gradient-underline">
                    View All Projects
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
        </section>
    );
}