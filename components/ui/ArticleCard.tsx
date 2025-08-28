// components/ArticleCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Post } from '@/interfaces/post';

interface ArticleCardProps {
  article: Post;
}

const getFirstParagraph = (body: any): string => {
  if (!Array.isArray(body)) {
    return "";
  }
  const firstBlock = body.find(block => block && block._type === 'block');
  if (firstBlock && Array.isArray(firstBlock.children)) {
    return firstBlock.children.map((span: any) => span.text).join('');
  }
  return "";
};

export default function ArticleCard({ article }: ArticleCardProps) {
  if (!article || !article.slug || !article.slug.current) {
    return null;
  }

  const firstParagraph = getFirstParagraph(article.body);

  return (
    <div className="bg-[var(--background)] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
        {article.imageUrl && (
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#8367C7] dark:text-[#C2F8CB] mb-2">
          <Link href={`/articles/${article.slug.current}`} className="hover:underline">
            {article.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-600 dark:text-[#8367C7] line-clamp-3">
          {firstParagraph}
        </p>
      </div>
    </div>
  );
}