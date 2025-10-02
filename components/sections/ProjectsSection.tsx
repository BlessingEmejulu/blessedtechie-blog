// components/ProjectsSection.tsx
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
    publishedAt
  }
`;

export default async function ProjectsSection() {
    let projects: Post[] = [];
    
    try {
        projects = await client.fetch<Post[]>(query);
        console.log("Fetched projects:", projects);
    } catch (error) {
        console.error("Error fetching projects:", error);
        projects = [];
    }

    // Don't render section if no projects
    if (projects.length === 0) {
        return null;
    }

    return (
        <section className="container mx-auto px-4 py-12 md:px-8">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold tracking-widest uppercase">
                    Latest Projects
                </h2>
                <span className="flex-1 border-t mx-4" />
                <Link href="/projects" className="font-bold text-sm gradient-underline">
                    View All Projects
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map(project => (
                    <div key={project._id} className="border p-4 rounded hover:shadow-lg transition-shadow">
                        {/* Image */}
                        {project.imageUrl && (
                            <div className="w-full h-32 bg-gray-200 rounded mb-3 overflow-hidden">
                                <img 
                                    src={project.imageUrl} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}
                        
                        <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                        
                        {/* Summary/Excerpt */}
                        {project.excerpt && (
                            <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                                {project.excerpt}
                            </p>
                        )}
                        
                        <span className="text-xs text-gray-500">
                            {new Date(project.publishedAt).toLocaleDateString()}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}