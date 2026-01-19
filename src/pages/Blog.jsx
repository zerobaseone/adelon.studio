import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MDXProvider } from '@mdx-js/react';
import TerminalWindow from '../components/TerminalWindow';

const mdxComponents = {
  TerminalWindow
};

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const modules = import.meta.glob('../posts/*.mdx', { eager: true });
    
    const postsData = Object.entries(modules).map(([path, module]) => {
      const filename = path.split('/').pop().replace('.mdx', '');
      
      return {
        slug: module.frontmatter?.slug || filename,
        title: module.frontmatter?.title || 'Untitled',
        date: module.frontmatter?.date || '',
        excerpt: module.frontmatter?.excerpt || '',
        Component: module.default,
        path: path
      };
    });

    postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    setPosts(postsData);
  }, []);

  return (
    <MDXProvider components={mdxComponents}>
      <main>
        <section className="content">
          
          {posts.map((post) => (
            <article key={post.slug} className="blog-post">
              <div className="blog-title">{post.title}</div>
              <div className="blog-date">{post.date}</div>
              {post.excerpt && (
                <div className="blog-preview">{post.excerpt}</div>
              )}
              {/* for now, showing full content - mb add routing later */}
              <div className="blog-full-content">
                <post.Component />
              </div>
            </article>
          ))}


        </section>
      </main>
    </MDXProvider>
  );
}

export default Blog;