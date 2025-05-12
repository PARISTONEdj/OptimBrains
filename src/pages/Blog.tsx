
// src/pages/Blog.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import blogimage from '../images/simpleimage.avif';
import AfterHeader from '../components/Afterheader';

const API_URL = 'https://apioptimbrains.onrender.com/api/blogs';

export interface BlogCategory {
  id: number;
  nom: string;
  slug: string;
}

export interface BlogAuthor {
  id: number;
  nom: string;
  prenom: string;
  email: string;
}

export interface BlogPost {
  id: string;
  titre: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  category: BlogCategory;
  author: BlogAuthor;
}

const Blog: React.FC = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des blogs');
      }

      const data: BlogPost[] = await response.json();
      setBlogs(data);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 px-6"
    >
      <div className="container mx-auto">
        <AfterHeader titre="Blog" description="" imageURL={blogimage} />

        {loading && <p className="text-white text-center">Chargement...</p>}
        {error && <p className="text-red-500 text-center">{error}</p>}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {blogs.map((post) => (
            <div
              onClick={() => navigate(`/blogs/${post.id}`)}
              key={post.id}
              className="cursor-pointer bg-navy-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
            >
              <img
                src={post.imageUrl}
                alt={post.titre}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-blue-400 text-sm">
                  {post.category.nom}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                  {post.titre}
                </h3>
                <p className="text-gray-300 mb-4">{post.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>
                    {post.author.prenom} {post.author.nom}
                  </span>
                  <span>
                    {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blog;
