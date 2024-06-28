import Slider from "../../components/slider/Slider";
import "./singlepage.scss";
import { singlePostData, userData } from "../../lib/dummydata";

const Singlepage = () => {
  return (
    <div className="Singlepage">
     
      <div className="details">
        <div className="wrappersp">
          <Slider images={singlePostData.images}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="pin.png" alt="" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price">$ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="" className="userimg"/>
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom"></div>
          </div>
        </div>
      </div>
     
      <div className="features">
        <div className="wrapperspg">
          f
        </div>
        
      </div>
    </div>
  );
};

export default Singlepage;
