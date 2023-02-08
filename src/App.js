import React, { useEffect, useState } from "react";
import Loadergif from './loader.gif';

const App = () => {
  const [data, setData] = useState([]);
  const [loader,setLoader]=useState(true)
  useEffect(() => {
      setLoader(true);
      const getimage = async () => {
        const response = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=vj2tY3RpTPOBtZGvl5d2lbqWF3215XnAtumLvcih"
          );
          const res = await response.json();
          setData(res);  
          setLoader(false);
        };
    getimage();

    
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
    {loader ? <div className="bg-black " >
      <img src={Loadergif} alt="" className="text-center" />
    </div> :
    <div className="flex-col bg-cover w-screen h-screen text-white" style={{backgroundImage: `url(${data.url})`}}   >
      
      <div>
      <div className="flex flex-col sm:flex-row ">
        <div className="sm:w-1/3 flex text-center sm:pr-8 sm:py-8">
          <div className="flex flex-col items-center text-center justify-center my-16">
            <h2 className="font-medium title-font mt-4 text-white text-4xl">
              {data.title}
            </h2>
            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
            <p className="text-base">{data.copyright}</p>
          </div>
        </div>
        <div className="sm:w-2/4 sm:pl-8 sm:py-8 border-gray-200 my-10  sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4">{data.explanation}</p>
          <a href="/" className="text-indigo-500 inline-flex items-center">
            Learn More
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      </div>
      <footer className="text-white bottom-2 text-center
       text-xl">Copyright@Omkar Raghu</footer>
    </div> }
    </div>
  );
};

export default App;
