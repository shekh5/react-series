import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/shekh5")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

    const data = useLoaderData()
  return (
    <>
      <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        Github followers {data.following}
        <img src="https://avatars.githubusercontent.com/u/145361292?v=4" alt="profile" />
      </div>
    </>
  );
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/shekh5')
    return response.json()
}
