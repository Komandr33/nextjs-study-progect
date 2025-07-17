import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";

export const useLoader = () => {
  const router = useRouter();

  useEffect(() => {
    const startLoader = () => NProgress.start();
    const endLoader = () => NProgress.done();

    router.events.on("routeChangeStart", startLoader);
    router.events.on("routeChangeComplete", endLoader);
    router.events.on("routeChangeError", endLoader);
    return () => {
      router.events.off("routeChangeStart", endLoader);
      router.events.off("routeChangeComplete", endLoader);
      router.events.off("routeChangeError", endLoader);
    };
  }, [router]);
};
