import Link from 'next/link';
import { mockArticles } from '@/data/mockData';  // We'll create this next

export default function Home() {
  const featuredArticles = mockArticles.slice(0, 3);  // Show 3 mocks

  return (
    <div className="container mx-auto p-4">
      <section className="hero bg-blue-100 p-8 rounded-lg text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">AI-Driven B2B Marketing Solutions</h1>
        <p className="text-xl mb-6">Unlock growth with GEO, paid media, and SEO expertise.</p>
        <Link href="/learning-center" className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
          Explore Learning Center
        </Link>
      </section>
      <section>
        <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map(article => (
            <div key={article.id} className="border rounded-lg p-4 shadow">
              <h3 className="text-xl font-semibold mb-2">{article.attributes.title}</h3>
              <p className="mb-4">{article.attributes.excerpt}</p>
              <Link href={`/learning-center/${article.attributes.slug}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
