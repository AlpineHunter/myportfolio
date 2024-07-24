'use client';
import React, { useState } from 'react';
import { AiFillBulb } from 'react-icons/ai';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import { AnimatePresence } from 'framer-motion';

function Projects() {
  //フィルタ用変数
  const [avtiveCategory, setActiveCategory] = useState('all');
  const [filltered, setFilterd] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(9);
  const loadMoreProjects = () => {
    setVisibleProjects((preVisivleProjects) => preVisivleProjects + 6);
  };

  return (
    <sevtion
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            開発実績
          </p>
        </div>
        {/* フィルター */}
        <ProjectFilter
          avtiveCategory={avtiveCategory}
          setActiveCategory={setActiveCategory}
          setFilterd={setFilterd}
        />
        {/* カード */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence>
            {filltered.slice(0, visibleProjects).map((project, index) => (
              <ProjectCard
                key={index}
                name={project.name}
                githubUrl={project.githubUrl}
                image={project.image}
                projectUrl={project.projectUrl}
                deployed={project.deployed}
              />
            ))}
          </AnimatePresence>
        </div>
        {/* もっと見る */}
        {visibleProjects < filltered.length && (
          <div className="text-center mt-4">
            <button
              className="bg-darkblue text-white px-2 py-1 rounded-md hover:bg-darkblue/75"
              onClick={loadMoreProjects}
            >
              もっと見る
            </button>
          </div>
        )}
      </div>
    </sevtion>
  );
}

export default Projects;
