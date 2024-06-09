import { GiPlayButton } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";
import { FaRegCirclePlay } from "react-icons/fa6";
// import { Link } from "react-router-dom";
const Banner = () => {
    return(
      <div className="banner">
        <div className="banner__contents">
          <h1 className="banner__title">STRANGER THINGS</h1>
          <div className="banner__buttons">
            <button className="banner__button-01">Play <GiPlayButton /> </button>
            <button className="banner__button-02">My List <IoMdAdd/> </button>
          </div>
          <a href="https://video.search.yahoo.com/search/video;_ylt=Awr92HsFw01mN14AujpXNyoA;_ylu=Y29sbwNncTEEcG9zAzEEdnRpZAMEc2VjA3Nj?type=E211US714G0&p=stranger+things+trailer&fr=mcafee&turl=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOVP.M9d70jVrvwohKm2WujascAHgFo%26pid%3DApi%26w%3D296%26h%3D156%26c%3D7%26p%3D0&rurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Db9EkMc79ZSU&tit=Stranger+Things+%7C+Official+Final+Trailer+%7C+Netflix&pos=01&vid=b86e58e076ea1788e10cba9d906b55a8&sigr=2_zcGZk4gjWb&sigt=PzssjqHSrcaZ&sigi=S.qLcUUggcpf">
          <button className="banner__button-03">Watch-Now <FaRegCirclePlay /> </button>
          </a>
          <h1 className="banner__description">
          When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl....
          </h1>
          
        </div>
        <div className="banner--fadeBottom"></div>
      </div>
    )
  }
  
  export default Banner;