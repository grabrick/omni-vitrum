import Logo from "../../shared/Logo/Logo";
import m from "./BurgerMenu.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import { RightToLeft, StepOutShadows } from "@/assets/animation/animation";

const BurgerMenu = ({ setIsActive, navRouters, pathname }: any) => {
  return (
    <motion.div 
      className={m.overlay} 
      onClick={() => setIsActive(false)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={StepOutShadows}
    >
      <motion.div 
        className={m.modal} 
        onClick={(e) => e.stopPropagation()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={RightToLeft}
      >
        <div className={m.head}>
          <Logo />
        </div>
        <div className={m.routeWrapper}>
          {navRouters.map((items: any) => (
            <div
              key={items.id}
            >
              {items.isSelector === false ? (
                <div
                  className={m.link}
                >
                  <Link href={`${items.routePath}`} className={pathname === items.routePath ? m.wrappActive : ''} key={items.id}>
                    {items.title}
                  </Link>
                </div>
              ) : (
                <div
                  className={m.link}
                >
                  <Link href={'/navigate'} className={pathname === '/navigate' ? m.wrappActive : ''} key={items.id}>
                    {items.title}
                  </Link>
                </div>
              )}
            </div>
          ))}
          <Link href="/calculate" className={pathname === "/calculate" ? m.wrappActive : m.link}>Калькулятор</Link>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BurgerMenu;
