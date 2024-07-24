import Image from 'next/image';
import React from 'react';
import { FaComputer } from 'react-icons/fa6';

function Skills() {
  return (
    <section
      className="w-full h-fit px-[40px] max-xs:px-[20px] relative bg-white"
      id="skills"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <FaComputer className="w-4 h-4" />
            </span>
            使用言語
          </p>
        </div>
        {/* グリッドレイアウト */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-xs:grid-cols-1 mt-10">
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={'/assets/skills/nextjs-icon.svg'}
              width={100}
              height={100}
              alt="Next.js"
              className="mb-2"
            />
            <span>Next.js</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={'/assets/skills/tailwindcss-icon.svg'}
              width={100}
              height={100}
              alt="Tailwind CSS"
              className="mb-2"
            />
            <span>Tailwind CSS</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={'/assets/skills/microsoft-sql-server-logo.png'}
              width={100}
              height={100}
              alt="SQL Server"
              className="mb-2"
            />
            <span>SQL Server</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={'/assets/skills/java.svg'}
              width={100}
              height={100}
              alt="java"
              className="mb-2"
            />
            <span>java</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={'/assets/skills/mysql.svg'}
              width={100}
              height={100}
              alt="MySQL"
              className="mb-2"
            />
            <span>MySQL</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={'/assets/skills/python.svg'}
              width={100}
              height={100}
              alt="Python"
              className="mb-2"
            />
            <span>Python</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={'/assets/skills/html-5.svg'}
              width={100}
              height={100}
              alt="HTML"
              className="mb-2"
            />
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center bg-whitesmoke p-8 rounded-md text-center shadow-sm justify-center">
            <Image
              src={'/assets/skills/git-icon.svg'}
              width={100}
              height={100}
              alt="Git"
              className="mb-2"
            />
            <span>Git</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
