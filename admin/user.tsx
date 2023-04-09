import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";




export default function UserPageAdmin(){
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
      return(<>567</>);
   } else{ 
      
           return(<>765</>);
      
   }

    
}

