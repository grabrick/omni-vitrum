import Link from "next/link";
import m from "./CalculateBtn.module.scss";
import Image from "next/image";
import Calc from "@/assets/icons/Calculator.svg";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const CalculateBtn = () => {
  const route = useRouter();
  return (
    <>
      {(route.pathname !== "/calculate" && route.pathname !== '/404') && (
        <motion.div
          className={m.wrapper}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: -100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Link href="/calculate" className={m.button}>
            Калькулятор
            <Image src={Calc} alt="" />
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default CalculateBtn;
