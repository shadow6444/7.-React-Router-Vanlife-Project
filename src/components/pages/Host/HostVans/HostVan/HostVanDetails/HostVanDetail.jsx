import { useOutletContext } from "react-router-dom";
import "./HostVanDetail.css";
const HostVanDetail = () => {
  const { hostVan } = useOutletContext();
  return (
    <div className="host-van-details">
      <h3>
        Name: <span>{hostVan.name}</span>
      </h3>
      <h3 className="host-van-details-category">
        Category: <span>{hostVan.type}</span>
      </h3>
      <h3>
        Description: <span>{hostVan.description}</span>
      </h3>
      <h3>
        Visibility: <span>Public</span>
      </h3>
    </div>
  );
};
export default HostVanDetail;
