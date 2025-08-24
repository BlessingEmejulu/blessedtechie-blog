import Image from 'next/image';
import Link from 'next/link';

interface Article {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="bg-[var(--background)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center p-4">
        {/* Placeholder for the image. In a real project, this would be dynamic from Sanity */}
        <Image
          src={article.imageUrl}
          alt={article.imageAlt}
          width={200}
          height={200}
          objectFit="contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#8367C7] mb-2">
          <Link href={`/articles/${article.id}`} className="hover:underline">
            {article.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 line-clamp-3">
          {article.summary}
        </p>
      </div>
    </div>
  );
}