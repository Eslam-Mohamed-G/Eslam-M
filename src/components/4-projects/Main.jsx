import React, { useState } from 'react'
import { myProjects } from './MyProjects'
import './main.css'
import { AnimatePresence, motion } from 'framer-motion'


const Main = () => {
  const [currentActive, setcurrentActive] = useState('all')
  const [arr, setArr] = useState(myProjects);
  const [showMore, setShowMore] = useState(false)


  const handleClick = (projectCategory) => {
    setcurrentActive(projectCategory);
    const newArr = myProjects.filter((item) => {
      return item.category === projectCategory;
    });

    setArr(newArr);
  };
  return (
    <main id="projects" className='main_projects'>
      <section className="left-section">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects)
          }}
          className={currentActive === 'all' ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {handleClick("css")}}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {handleClick("JS")}}
          className={currentActive === "JS" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {handleClick("React")}}
          className={currentActive === "React" ? "active" : null}
        >
          React
        </button>
      </section>

      <section className="right-section">
        <AnimatePresence>
          {arr.map((item) => {
          return (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{type:"spring", damping: 8, stiffness:50}}
              key={item.id}
              className="card"
            >
              <img src={item.imgPath} alt="" />
              <div className="box">
                <h1>{item.projectTitle}</h1>
                <p>{item.description}</p>
                <div className="card-link">
                  <ul>
                    <li>
                      <a href={item.live} target="_blank" className="icon-link"></a>
                    </li>
                    <li>
                      <a href={item.link} target="_blank" className="icon-github"></a>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main