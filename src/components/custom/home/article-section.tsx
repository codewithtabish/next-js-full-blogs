import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

// Sample articles data
const articles = [
  {
    id: 1,
    title: "The Future of AI in Web Development",
    category: "Technology",
    featuredImage: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: new Date().toISOString(),
    author: {
      name: "John Doe",
      imageUrl: "https://source.unsplash.com/100x100/?portrait",
    },
  },
  {
    id: 2,
    title: "10 Tips for a Healthier Lifestyle",
    category: "Health & Wellness",
    featuredImage: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: new Date().toISOString(),
    author: {
      name: "Jane Smith",
      imageUrl: "https://source.unsplash.com/100x100/?woman",
    },
  },
  {
    id: 3,
    title: "Exploring the Beauty of Nature",
    category: "Travel",
    featuredImage: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: new Date().toISOString(),
    author: {
      name: "Emily Brown",
      imageUrl: "https://source.unsplash.com/100x100/?travel",
    },
  },
  {
    id: 4,
    title: "Mastering React in 2025",
    category: "Programming",
    featuredImage: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: new Date().toISOString(),
    author: {
      name: "Michael Scott",
      imageUrl: "https://source.unsplash.com/100x100/?developer",
    },
  },
  {
    id: 5,
    title: "How to Start a Successful Blog",
    category: "Blogging",
    featuredImage: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: new Date().toISOString(),
    author: {
      name: "Sarah Johnson",
      imageUrl: "https://source.unsplash.com/100x100/?author",
    },
  },
  {
    id: 6,
    title: "The Rise of Crypto & Blockchain",
    category: "Finance",
    featuredImage: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=2992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdAt: new Date().toISOString(),
    author: {
      name: "David Wilson",
      imageUrl: "https://source.unsplash.com/100x100/?businessman",
    },
  },
];

export function TopArticles() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {articles.slice(0, 6).map((article) => (
        <Card
          key={article.id}
          className={cn(
            "group relative overflow-hidden transition-all hover:scale-[1.02]",
            "border border-gray-200/50 dark:border-white/10",
            "bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg"
          )}
        >
          <div className="p-6">
            <Link href={`/articles/${article.id}`}>
              {/* Image Container */}
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-xl">
                <Image
                  src={article.featuredImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={article.author.imageUrl} />
                  <AvatarFallback>{article.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{article.author.name}</span>
              </div>

              {/* Article Title */}
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
                {article.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                {article.category}
              </p>

              {/* Article Meta Info */}
              <div className="mt-6 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{new Date(article.createdAt).toDateString()}</span>
                <span>{Math.floor(Math.random() * 10) + 5} min read</span>
              </div>
            </Link>
          </div>
        </Card>
      ))}
    </div>
  );
}
