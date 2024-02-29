import Section from "../shared/Section/Section";
import Template from "../shared/Template/Template";
import m from "./Blog.module.scss";
import { blogData } from "./data/blogMap";
import { motion } from 'framer-motion';
import { topToBottom } from '@/assets/animation/animation';

const Blog = () => {
  return (
    <>
      <Section title="Блог" />
      <Template>
        <div className={m.content}>
          {blogData.map((items) => (
            <motion.div 
              key={items.id} 
              className={m.card}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={topToBottom}
            >
              <motion.div 
                className={m.header}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
                variants={topToBottom}
              >
                <div className={m.nameWrapper}>
                  <h1 className={m.title}>{items.title}</h1>
                  <div className={m.authorWrapper}>
                    <span className={m.left}>Автор:</span>
                    <span className={m.right}>{items.author}</span>
                  </div>
                </div>
                <div className={m.dateWrapper}>
                  <span className={m.date}>{items.postedDate}</span>
                </div>
              </motion.div>
              <motion.div 
                className={m.main}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
                variants={topToBottom}
              >
                <div className={m.textWrapper}>
                  <p className={m.desc}>{items.texts}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Template>
    </>
  );
};

export default Blog;
