import m from "./ProductSelector.module.scss";
import { productsData } from "../../data/routersMap";
import Link from "next/link";
import { motion } from "framer-motion";
import { bottomToTopSelector } from "@/assets/animation/animation";
import { useRouter } from "next/router";
import { useState } from "react";

type TProps = {
  setIsOpen: (value: boolean) => void;
};

const ProductSelector = ({ setIsOpen }: TProps) => {
  const router = useRouter();
  const [isActive, setIsActive] = useState({ id: 0, flag: false })
  const query = router.query.name;

  return (
    <motion.div
      className={m.select}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      custom={1}
      variants={bottomToTopSelector}
    >
      {productsData.map((items) => (
        <div key={items.id} className={m.card}>
          <h4 className={(isActive.flag === true && isActive.id === items.id) ? m.titleActive : m.title}>
            {items.title}
          </h4>
          <div 
            className={m.listWrapper}
            onMouseEnter={() => setIsActive({ id: items.id, flag: true })}
            onMouseLeave={() => setIsActive({ id: items.id, flag: false })}
          >
            {items.content.map((el) => (
              <>
                {query !== el.type ? (
                  <Link
                    className={m.notLink}
                    // style={{
                    //   fontSize: query === el.type ? "17px" : "",
                    //   fontWeight: query === el.type ? "600" : "",
                    // }}
                    key={el.id}
                    href={el.route}
                    onClick={() => setIsOpen(false)}
                  >
                    {el.title}
                  </Link>
                ) : (
                  <Link
                    className={m.link}
                    style={{
                      fontSize: query === el.type ? "17px" : "",
                      fontWeight: query === el.type ? "600" : "",
                    }}
                    key={el.id}
                    href={el.route}
                    onClick={() => setIsOpen(false)}
                  >
                    {el.title}
                  </Link>
                )}
              </>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default ProductSelector;
