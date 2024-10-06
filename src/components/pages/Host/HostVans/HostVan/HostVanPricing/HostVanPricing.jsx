import { useOutletContext } from "react-router-dom";
import "./HostVanPricing.css";
const HostVanPricing = () => {
  const { hostVan } = useOutletContext();
  return (
    <div className="host-van-pricing">
      <h2>
        ${hostVan.price}
        <span>/day</span>
      </h2>
    </div>
  );
};

export default HostVanPricing;
