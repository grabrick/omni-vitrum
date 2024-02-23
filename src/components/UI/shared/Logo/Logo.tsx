import Image from 'next/image';
import m from './Logo.module.scss';
import LogoImg from "@/assets/icons/Logo.svg";

const Logo = () => {
  return (
    <div className={m.container}> 
      <Image className={m.img} src={LogoImg} alt="" />
      <div className={m.textWrapper}>
          <h1 className={m.logoTitle}>Omni Vitrum</h1>
          <label className={m.logoLable}>Производство и продажа</label>
      </div>
    </div>
  )
}

export default Logo;