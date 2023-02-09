import axios from "axios";
import { useEffect } from "react";

const DatePersion = () => {


    useEffect(()=>{
        // axios.get("https://api.dastyar.io/api/Weather/132144").then((res)=> console.log(res.data.weather[0].main)).catch()
    },[])

    return ( 
        <div>
            <h1>تقویم فارسی</h1>
        </div>
     );
}
 
export default DatePersion;