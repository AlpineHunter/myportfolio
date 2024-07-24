import React, { useEffect } from 'react';
import { projects } from '@/constants/projects';

function ProjectFilter({ avtiveCategory, setActiveCategory, setFilterd }) {
  useEffect(() => {
    if (avtiveCategory === 'all') {
      setFilterd(projects);
      return;
    }

    const filltered = projects.filter((project) =>
      project.category.includes(avtiveCategory)
    );
    setFilterd(filltered);
  }, [avtiveCategory, setFilterd]);

  return (
    <div className="flex gap-5 my-10">
      <button
        className={
          avtiveCategory == 'all'
            ? 'bg-darkblue py-1 px-3 text-white rounded-lg'
            : null
        }
        onClick={() => setActiveCategory('all')}
      >
        全て
      </button>
      <button
        className={
          avtiveCategory == 'nextjs'
            ? 'bg-darkblue py-1 px-3 text-white rounded-lg'
            : null
        }
        onClick={() => setActiveCategory('nextjs')}
      >
        Next.js
      </button>
      <button
        className={
          avtiveCategory == 'vercel'
            ? 'bg-darkblue py-1 px-3 text-white rounded-lg'
            : null
        }
        onClick={() => setActiveCategory('vercel')}
      >
        Vercel
      </button>
      <button
        className={
          avtiveCategory == 'aws'
            ? 'bg-darkblue py-1 px-3 text-white rounded-lg'
            : null
        }
        onClick={() => setActiveCategory('aws')}
      >
        AWS
      </button>
    </div>
  );
}

export default ProjectFilter;
