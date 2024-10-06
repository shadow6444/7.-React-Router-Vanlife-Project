import { useOutletContext } from "react-router-dom";
import "./HostVanPhoto.css";
const HostVanPhoto = () => {
  const { hostVan } = useOutletContext();
  return (
    <div className="host-van-photo">
      <img src={hostVan.imageUrl} alt="van image" />
    </div>
  );
};

export default HostVanPhoto;
