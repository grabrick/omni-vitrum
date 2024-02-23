import { useRouter } from "next/router"

const useNavigate = () => {
  const router = useRouter();
  
  const navigate = (routePath: any) => {
    router.push(routePath);
  };

  return navigate;
}

export { useNavigate };