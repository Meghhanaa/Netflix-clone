import { useEffect, useState } from "react";
import { fetchData } from "../api/api";

const List = ({ title, param }) => {
  const [list, setList] = useState([]);
  useEffect(()=>{
    fetchData(param).then( res => setList(res.data.results))
  },[param]);
  console.log(list)
  return(
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{ title }</h2>
        <div className="col">
          <div className="row__posters">
            {
              list.map(item => <img
                className="row__poster row__posterLarge"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}
              />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;

// const List = ({title}) => {
//     return(
//       <div className="list">
//         <div className="row">
//           <h2 className="text-white title">{title}</h2>
//           <div className="col">
//             <div className="row__posters">
//              <img
//                   className="row__poster row__posterLarge"
//                   src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbJ890Bo1eUwOt1l-9Rf30lbs-O-djj3XWV-nkCBbPTu4TeSLq"
//                   alt=""
//                 />

//                 <img
//                   className="row__poster row__posterLarge"
//                   src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbJ890Bo1eUwOt1l-9Rf30lbs-O-djj3XWV-nkCBbPTu4TeSLq"
//                   alt=""
//                 />

//                 <img
//                   className="row__poster row__posterLarge"
//                   src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbJ890Bo1eUwOt1l-9Rf30lbs-O-djj3XWV-nkCBbPTu4TeSLq"
//                   alt=""
//                 />

//                 <img
//                   className="row__poster row__posterLarge"
//                   src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbJ890Bo1eUwOt1l-9Rf30lbs-O-djj3XWV-nkCBbPTu4TeSLq"
//                   alt=""
//                 />
//                 <img
//                   className="row__poster row__posterLarge"
//                   src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbJ890Bo1eUwOt1l-9Rf30lbs-O-djj3XWV-nkCBbPTu4TeSLq"
//                   alt=""
//                 />
//                 <img
//                   className="row__poster row__posterLarge"
//                   src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbJ890Bo1eUwOt1l-9Rf30lbs-O-djj3XWV-nkCBbPTu4TeSLq"
//                   alt=""
//                 />
//                 <img
//                   className="row__poster row__posterLarge"
//                   src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbJ890Bo1eUwOt1l-9Rf30lbs-O-djj3XWV-nkCBbPTu4TeSLq"
//                   alt=""
//                 />
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  
//   export default List;