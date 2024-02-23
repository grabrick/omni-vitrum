import Image from "next/image";

import m from "./Header.module.scss";
import Routers from "./Routers/Routers";
import { useRouter } from "next/router";
import Logo from "../shared/Logo/Logo";
import { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Menu from "@/assets/icons/Menu.svg";
import { navRouters } from "./data/routersMap";

const Header = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <header className={m.container}>
      <div className={m.wrapper}>
        <Logo />
        <Routers routers={navRouters} pathname={router.pathname} />
        <div className={m.BurgerMenu}>
          <Image
            src={Menu}
            width={35}
            height={35}
            alt=""
            onClick={() => setIsActive(!isActive)}
          />
        </div>
      </div>
      {isActive && <BurgerMenu setIsActive={setIsActive} navRouters={navRouters} pathname={router.pathname} />}
    </header>
  );
};

export default Header;
