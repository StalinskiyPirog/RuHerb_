import { Footer } from '@/lib/Layout/Footer';
import NavBar  from '@/lib/Layout/NavBar';
import  TabBar  from '@/lib/Layout/TabBar';
import { useRouter, NextRouter } from "next/router";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  let NavData: Array<String> = [
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
  <Component {...pageProps} />
  <TabBar  router={router} navigationData={NavData}/>
  <Footer />
  </div>
  );
}
