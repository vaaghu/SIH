import icon from "../assets/Mona_Lisa.jpg"
import backIcon from "../assets/arrow_back.svg"
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="flex flex-col w-[100dvw] h-[100dvh] p-5">
      <nav>
        <Link
          to="/"
          className="flex items-center gap-2 my-5"
        >
          <img src={backIcon} alt="logo" className="w-9 h-9 object-contain" />
        </Link>
      </nav>
      <div className="flex flex-row">
        <img className="aspect-w-3 aspect-h-5 h-[80dvh] mx-5 my-0" src={icon}/>
        <div className="flex flex-col justify-start items-start">
          <p className="text-center my-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse ratione, dolorum incidunt officiis praesentium assumenda excepturi nulla vitae sed sint dignissimos reprehenderit tempore molestias quia odio? Iure sit molestias distinctio veritatis obcaecati dolorum autem ut, consequuntur sint asperiores aspernatur cupiditate culpa praesentium veniam reiciendis porro ullam ab dolores vel hic. Soluta perferendis, error sunt culpa delectus suscipit fuga dicta consequuntur quibusdam facere autem in cumque nulla ipsum adipisci? Eveniet incidunt quis, est voluptate saepe aspernatur, error dignissimos a cumque adipisci at sed obcaecati expedita! Id optio sapiente repellendus, mollitia quisquam, praesentium excepturi laboriosam facilis, obcaecati nam fuga. Perferendis, iusto rem!</p>
          <p className="text-center my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus beatae deserunt reiciendis mollitia dignissimos non tenetur voluptas exercitationem vero recusandae!</p>
          <p className="text-center my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, molestiae rerum suscipit assumenda aut velit ullam, deleniti sunt atque placeat iusto pariatur animi excepturi voluptatum.</p>
        </div>
      </div>
    </div>
  )
}

export default Info;