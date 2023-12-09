import backIcon from "../assets/arrow_back.svg"
import { Link } from "react-router-dom";

const Info = ({title,img,description}) => {
  return (
    <div className="flex flex-col w-[100dvw] h-[100dvh] p-5">
      <nav>
        <Link
          to="/"
          className="flex items-center gap-2 my-5"
        >
          <img src={backIcon} alt="logo" className="ml-12 w-9 h-9 object-contain" />
        </Link>
      </nav>
      <div className="flex flex-row">
        <img className="ml-40 aspect-w-3 aspect-h-5 h-[80dvh] mx-5 my-0" src={img}/>
        <div className="ml-10 mr-40 flex flex-col justify-start items-start">
          <h3 className="mb-8 text-4xl w-[100%] text-center font-bold ">{title}</h3>
          {description.map((text,index)=> <p className="text-center my-3" key={index}>{text}</p>)}
        </div>
      </div>
    </div>
  )
}



export default Info;