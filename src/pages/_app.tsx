import { Footer } from '@/lib/Layout/Footer';
import NavBar  from '@/lib/Layout/NavBar';
import  TabBar  from '@/lib/Layout/TabBar';
import { useRouter, NextRouter } from "next/router";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  let NavData: Array<string> = [
    "/",
    "/search",
    "/cart",
    // "/congrats",
    "/profile",
    // "/profileEnter",
    // "/profileReg",
    // "/auth",
    // "/product",
  ];
  const router: NextRouter = useRouter();
  return (
  <div>
  <NavBar router={router}/>
  <div className="md:h-5" />
  <Component {...pageProps} />
  <div className="h-5" />
  <TabBar  router={router} navigationData={NavData}/>
  <Footer />
  </div>
  );
}
