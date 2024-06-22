import "./homepage.scss";
import SeachBar from "../../components/searchBar/SeachBar";
const Homepage = () => {
  return (
    <div className="homepage">
      <div className="textcontainer">
        <div className="wapper">
          <h1 className="tittle">Find Real Estate & Get Your Dream Place</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio eum
            impedit labore sed! Doloremque nostrum, ipsa quae sunt fuga
            consectetur harum enim, nam quasi, itaque modi veritatis qui
            dignissimos numquam.
          </p>
          <SeachBar/>
          <div className="boxs">
            <div className="box">
              <h1 className="numb">16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1 className="numb">200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1 className="numb">1600+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgcontainer">
        <img src="bg.png" alt="" />
      </div>
    </div>
  );
};

export default Homepage;
