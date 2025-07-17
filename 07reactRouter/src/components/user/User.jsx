import { useParams } from "react-router"

export default function User(){
    const {userid} = useParams()
    return(<>
        <div className="justify-center flex">User : {userid}</div>
    </>)
}