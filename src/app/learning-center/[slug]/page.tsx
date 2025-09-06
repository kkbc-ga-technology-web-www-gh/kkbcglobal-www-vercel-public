import { mockArticles } from '@/data/mockData';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = mockArticles.find(a => a.attributes.slug === params.slug);

  if (!article) return <div className="text-center p-8">Article not found</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{article.attributes.title}</h1>
      <p className="text-gray-500 mb-6">{article.attributes.publishDate}</p>
      {article.attributes.featuredImage.data && (
        <Image
          src={article.attributes.featuredImage.data.attributes.url}
          alt={article.attributes.title}
          width={800}
          height={400}
          className="rounded-lg mb-6"
        />
      )}
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose">
        {article.attributes.content}
      </ReactMarkdown>
    </div>
  );
}

export async function generateStaticParams() {
  return mockArticles.map(article => ({ slug: article.attributes.slug }));
}
