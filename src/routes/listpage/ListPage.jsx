import { listData } from "../../lib/dummydata";
import "./listpage.scss";
import Filter from "../../components/filter/Filter";
import Card from "../../components/card/Card";
import Map from "../../components/map/Map";


const ListPage = () => {
  const data = listData;

  return (
    <div className="ListPage">
      <div className="listcontainer">
        <div className="wapper">
         <Filter/>
         {data.map(item=>(
          <Card key={item.id} item={item}/>
         ))}
        </div>
      </div>

      <div className="mapcontainer">
        <Map item={data}/>
      </div>
    </div>
  );
};

export default ListPage;
