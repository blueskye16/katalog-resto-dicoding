import homeResto from "../views/pages/homeResto";
import detail from "../views/pages/detail";
import Favorite from "../views/pages/favorite";

const routes = {
  "/": homeResto, // default page
  "/detail/:id": detail,
  "/favorite": Favorite,
};

export default routes;
