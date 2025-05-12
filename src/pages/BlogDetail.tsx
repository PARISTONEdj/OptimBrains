import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import AfterHeader from '../components/Afterheader';
import blogimage from '../images/simpleimage.avif';

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
  _id: string;
  titre: string;
  description: string;
  contenu: string;
  imageUrl: string;
  createdAt: string;
  category: BlogCategory;
  author: BlogAuthor;
  tags: { id: number; nom: string }[];
}

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchBlogDetail();
  }, [id]);

  const fetchBlogDetail = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`${API_URL}/${id}`);

      if (!response.ok) {
        throw new Error('Erreur lors de la récupération du blog');
      }

      const data: BlogPost = await response.json();
      setBlog(data);
    } catch (err: any) {
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-white text-center">Chargement...</p>;
  }

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!blog) {
    return <p className="text-white text-center">Aucun blog trouvé.</p>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 px-6"
    >
      <div className="container mx-auto">
        <AfterHeader titre={blog.titre} description="" imageURL={blogimage} />

        <div className="bg-navy-800 p-8 rounded-lg mt-8">
          <img
            src={blog.imageUrl}
            alt={blog.titre}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <div className="text-gray-300">
            <div className="flex justify-between items-center mb-4">
              <span className="text-blue-400 text-sm">
                {blog.category?.nom || 'Sans catégorie'}
              </span>
              <span className="text-sm">
                {new Date(blog.createdAt).toLocaleDateString('fr-FR')}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white mb-6">{blog.titre}</h1>
            <p className="mb-6">{blog.description}</p>
            <div
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.contenu }}
            ></div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Tags</h3>
            <div className="flex flex-wrap">
              {blog.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mr-2 mb-2"
                >
                  {tag.nom}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-white mb-4">Auteur</h3>
            <p className="text-gray-300">
              {blog.author.prenom} {blog.author.nom} - {blog.author.email}
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Retour
        </button>
      </div>
    </motion.div>
  );
};

export default BlogDetail;