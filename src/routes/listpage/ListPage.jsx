import { listData } from "../../lib/dummydata";
import "./listpage.scss";

const ListPage = () => {
  const data = listData;

  return (
    <div className="ListPage">
      <div className="listcontainer">
        <div className="wapper">
          <Filter/>
        </div>
      </div>

      <div className="mapcontainer">map</div>
    </div>
  );
};

export default ListPage;
