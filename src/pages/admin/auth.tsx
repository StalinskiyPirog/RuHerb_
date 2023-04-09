import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";




export default async function AuthPageAdmin(){
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
    const router = useRouter();
    useEffect(() => {
      setLoading(true)
      let admin = getCookie("admin");
      if (admin){
        fetch('/api/admin-access')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
      } else {
        setData(null);
        setLoading(false);
      }
    }, [])

    if (data !== null){
        return(<>sas</>)
    } else{ 
        
        return(
            <>
            {/* line chart */}
            <h1 className="w-[110px] mx-auto mt-10 text-xl font-semibold capitalize ">line Chart</h1>
            <div className="w-[1100px] h-screen flex mx-auto my-auto">
              <div className='border border-gray-400 pt-0 rounded-xl  w-full h-fit my-auto  shadow-xl'>
                <canvas id='myChart'></canvas>
              </div>
            </div>
          </>
        );
    }

    
}

