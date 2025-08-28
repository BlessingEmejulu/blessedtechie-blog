// components/ProjectsSection.tsx
import ArticleCard from "@/components/ui/ArticleCard";
import Link from 'next/link';
import { getLatestProjects } from "@/sanity/schemas/sanity-utils";
import { Post } from "@/interfaces/post"; // Use the same interface if the data structure is similar

export default async function ProjectsSection() {
    const projects = await getLatestProjects();

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
                {projects.map((project: Post) => (
                    <ArticleCard key={project._id} article={project} />
                ))}
            </div>
        </section>
    );
}