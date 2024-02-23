import Image, { StaticImageData } from "next/image";
import m from "./Button.module.scss";
import { useNavigate } from '@/helpers/useNavigate';
import { useCopyInBoard } from '@/helpers/useCopyInBoard'

type TProps = {
  text: string;
  icons: string | StaticImageData | null;
  content?: string;
  routePath?: string;
  isRouteBtn: boolean;
};

const Button = ({ text, icons, isRouteBtn, content, routePath }: TProps) => {
  const navigate = useNavigate();
  const copyElement = useCopyInBoard();

  const handleClick = () => {
    if (isRouteBtn === true) {
      navigate(routePath)
    } else {
      copyElement(content)
    }
  }

  return (
    <button className={m.button} onClick={() => handleClick()}>
      {text}
      {""}
      {icons && <Image src={icons} alt="" />}
    </button>
  );
};

export default Button;
