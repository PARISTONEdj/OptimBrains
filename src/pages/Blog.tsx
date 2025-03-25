import React from 'react';
import type { BlogPost } from '../types';
import blogimage from "../images/simpleimage.avif";
import AfterHeader from '../components/Afterheader';
import { motion } from 'framer-motion';

const Blog = () => {
  const posts: BlogPost[] = [
    {
      id: 1,
      title: "L'IA au service de l'optimisation des processus industriels",
      excerpt: "Découvrez comment l'intelligence artificielle révolutionne l'industrie manufacturière.",
      content: "",
      category: "Intelligence Artificielle",
      date: "2024-03-15",
      author: "Sophie Martin",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Planification RH : les nouveaux enjeux",
      excerpt: "Les défis de la gestion des ressources humaines à l'ère du numérique.",
      content: "",
      category: "Ressources Humaines",
      date: "2024-03-10",
      author: "Thomas Dubois",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Machine Learning : tendances 2024",
      excerpt: "Les dernières avancées en matière d'apprentissage automatique.",
      content: "",
      category: "Intelligence Artificielle",
      date: "2024-03-05",
      author: "Marie Lambert",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <motion.div
    initial={{opacity : 0}}
    animate={{opacity : 1}}
    exit={{opacity : 0}}
     className="pt-24 px-6">
      <div className="container mx-auto">

        <AfterHeader titre={'Blog'} description={''} imageURL={blogimage}/>
        {/* <h1 className="text-4xl font-bold text-white mb-12 text-center">Blog</h1> */}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-navy-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-blue-400 text-sm">{post.category}</span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
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