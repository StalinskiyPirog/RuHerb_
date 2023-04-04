import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { deleteCookie, getCookie, getCookies, setCookie } from "cookies-next";
import { LoginForm } from "@/lib/ProfilePage/LoginForm";
import { SignUpForm } from "@/lib/ProfilePage/SignupForm";

interface ProfileFormProps {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

function ProfileForm({ isLogin, setIsLogin }: ProfileFormProps) {
  if (isLogin) {
    return <div className="flex justify-center md:h-[70vh] pt-12"><LoginForm setIsLogin={setIsLogin} /></div>;
  } else {
    return <div className="flex justify-center md:h-[70vh] pt-12"><SignUpForm setIsLogin={setIsLogin} /></div>;
  }
}

export default function RegisterPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [isLogin, setIsLogin] = useState(false);
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("/api/profile-data")
      .then(
        (res) => res.json(),
        (error) => {
          deleteCookie("login");
        }
      )
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (data) {
    return (
      <>
        <div className=" md:flex flex-col">
          <div className="">
            <div className="flex flex-col justify-center pt-12 ">
              <div className="flex flex-col w-9/12 place-self-center">
                <div className="flex flex-row  justify-center">
                  <h1 className="container text-3xl font-bold flex justify-start text-[#0000007b] ">
                    Мой аккаунт:
                  </h1>
                </div>
              </div>

              <div className="flex flex-row justify-center w-full h-52 pt-6 space-x-12 ">
                <a className="bg-[#98CC61] w-3/12 rounded-lg"></a>

                <a className="border-4 border-[#98CC61] w-3/12 rounded-xl ">
                  <div className="container static w-full h-full flex flex-row justify-center ">
                    <span className="flex place-self-center">
                      <svg
                        width="100"
                        height="90"
                        viewBox="0 0 37 41"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.5 20.3405C23.7163 20.3405 27.945 16.2349 27.945 11.1703C27.945 6.10566 23.7163 2 18.5 2C13.2836 2 9.05493 6.10566 9.05493 11.1703C9.05493 16.2349 13.2836 20.3405 18.5 20.3405Z"
                          stroke="#C17A0F"
                          stroke-width="3"
                        />
                        <path
                          d="M27.945 24.3276H28.6094C31.4673 24.3276 33.8781 26.3939 34.2326 29.1473L34.9703 34.8769C35.2521 37.0662 33.4938 39 31.2213 39H5.77857C3.50611 39 1.74787 37.0662 2.02973 34.8769L2.76739 29.1473C3.12188 26.3939 5.53265 24.3276 8.39067 24.3276H9.05494"
                          stroke="#C17A0F"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <h2 className=" text-[#0000007b]  text-3xl flex items-center justify-center">
                      Профиль
                    </h2>
                  </div>
                </a>
                <a className="border-4 border-[#98CC61] w-3/12 rounded-xl">
                  <div className="container static w-full h-full flex flex-row justify-center">
                    <span className="flex place-self-center">
                      <svg
                        width="100"
                        height="90"
                        viewBox="0 0 40 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 2C6.02944 2 2 6.3753 2 11.7725C2 16.1297 3.57439 26.4702 19.0775 36.925C19.6389 37.3037 20.3611 37.3037 20.9225 36.925C36.4255 26.4702 38 16.1297 38 11.7725C38 6.3753 33.9705 2 29 2C24.0295 2 20 7.92274 20 7.92274C20 7.92274 15.9706 2 11 2Z"
                          stroke="#C17A0F"
                          stroke-width="3"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <h2 className="text-[#0000007b]  text-3xl flex items-center justify-center">
                      Избранное
                    </h2>
                  </div>
                </a>
              </div>

              <div className="flex flex-row justify-center space-x-12 pt-12">
                <a className="border-4 border-[#98CC61] w-3/12 rounded-xl">
                  <div className="container static w-full h-full flex flex-row justify-center">
                    <span className="flex place-self-center">
                      <svg
                        width="90"
                        height="105"
                        viewBox="0 0 80 105"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.67632 37.254C6.84994 34.6822 8.65395 32.7004 10.8215 32.7004H68.6425C70.8103 32.7004 72.6143 34.6822 72.7877 37.254L76.4368 91.3077C76.8256 97.0695 73.0027 102.001 68.1464 102.001H11.3176C6.46153 102.001 2.63827 97.0695 3.02726 91.3077L6.67632 37.254Z"
                          stroke="#C17A0F"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M56.3663 47.5502V22.8001C56.3663 11.8648 48.9188 3 39.7322 3C30.5455 3 23.0981 11.8648 23.0981 22.8001V47.5502"
                          stroke="#C17A0F"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <h2 className="text-[#0000007b] text-3xl flex items-center justify-center">
                      Корзина
                    </h2>
                  </div>
                </a>
                <a className="border-4 border-[#98CC61] w-3/12 rounded-xl">
                  <div className="container static w-full h-full flex flex-row justify-center">
                    <span className="flex place-self-center">
                      <svg
                        width="97"
                        height="99"
                        viewBox="0 0 79 99"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M53.1875 12.7893H71.4375C73.9574 12.7893 76 14.9808 76 17.684V91.1051C76 93.8085 73.9574 95.9998 71.4375 95.9998H7.5625C5.04272 95.9998 3 93.8085 3 91.1051V17.684C3 14.9808 5.04272 12.7893 7.5625 12.7893H25.8125"
                          stroke="#C17A0F"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M25.8125 17.6842C25.8125 9.57437 31.9404 3 39.5 3C47.0596 3 53.1875 9.57437 53.1875 17.6842V22.5789H25.8125V17.6842Z"
                          stroke="#C17A0F"
                          stroke-width="6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <h2 className="text-[#0000007b] text-3xl flex items-center justify-center">
                      Доставка и оплата
                    </h2>
                  </div>
                </a>
                <a className=" border-4 border-[#98CC61] w-3/12 rounded-xl h-48">
                  <div className="container static w-full h-full flex flex-row justify-center">
                    <span className="flex place-self-center">
                      <svg
                        width="119"
                        height="106"
                        viewBox="0 0 119 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M80.2254 4.06221L8.91394 36.5607C3.99091 38.8043 1.6674 44.2818 3.72425 48.7952L26.0697 97.8278C28.1266 102.341 33.7849 104.181 38.7079 101.938L110.019 69.4391C114.942 67.1955 117.266 61.718 115.209 57.2047L92.8636 8.172C90.8068 3.65867 85.1485 1.81865 80.2254 4.06221Z"
                          stroke="#C17A0F"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M55.7717 44.8917C52.2788 43.4103 48.1333 43.3611 44.3299 45.0944C37.297 48.2995 34.0967 56.3857 37.1821 63.1559C40.2674 69.9261 48.4697 72.8158 55.5026 69.6107C59.306 67.8774 61.9886 64.7166 63.1621 61.1085M81.7518 42.8443C84.8371 49.6145 81.6368 57.7007 74.6041 60.9057C67.571 64.1108 59.3687 61.2211 56.2833 54.4509C53.198 47.6808 56.3983 39.5945 63.4314 36.3893C70.464 33.1844 78.6664 36.0741 81.7518 42.8443Z"
                          stroke="#C17A0F"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <h2 className="text-[#0000007b] text-3xl flex items-center justify-center">
                      Подарочная карта
                    </h2>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <ProfileForm isLogin={isLogin} setIsLogin={setIsLogin} />;
  }
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  let cookie = getCookie("login", { req, res });
  if (cookie !== undefined) {
    return {
      props: {
        data: true,
      },
    };
  } else {
    return {
      props: {
        data: false,
      },
    };
  }
};
