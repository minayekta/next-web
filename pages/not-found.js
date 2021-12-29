
import { internationalAssets } from "../next.config";
const NotFound = () => {
  return (
      <img className="setMargin404" src={`${internationalAssets}/img/404-ERROR.jpg`} />
  );
}

export default NotFound;