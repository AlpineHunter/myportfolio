import React from 'react';
import { AiFillBulb } from 'react-icons/ai';

function About() {
  return (
    <section
      className="w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        {/* セクションタイトル */}
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2">
            <span>
              <AiFillBulb className="w-4 h-4" />
            </span>
            Next.jsとは
          </p>
        </div>
        {/* メイン文 */}
        <div className="mt-7">
          <p className="mt-6 text-gray-600 text-lg md:text-xl leading-9">
            Reactをベースに開発された、フロントエンドフレームワークです。
            <br />
            ReactはJavaScript言語を用いた、Webサイト上のUIを構築するためのライブラリで、
            <br />
            フレームワークとは、開発を効率化するための枠組みです。
            <br />
            Next.jsは「URLルーティング」と呼ばれるリクエストされたURLに対して呼び出すアクションを決定する仕組みや、
            <br />
            Webアプリ開発を効率よくするための機能が多く含まれているのが特長です
          </p>
        </div>
        {/* 実績 */}
        <div className="mt-10">
          <div className="w-full">
            <ul className="flex justify-between gap-10 flex-col md:flex-row">
              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold">
                    1 month
                  </h3>
                  <span>Study</span>
                </div>
              </li>

              <li className="w-full shadow-sm">
                <div className="w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke">
                  <h3 className="text-4xl mb-1 text-darkblue font-bold">2</h3>
                  <span>PROJECTS</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
