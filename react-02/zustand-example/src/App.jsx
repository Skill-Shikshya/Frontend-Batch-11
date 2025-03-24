import { Button, Badge, Alert } from "shipfaster-ui";
import "shipfaster-ui/dist/shipfaster.css";
import "./App.css";

import Products from "./components/Products";

function App() {
  // const [products, setProducts] = useState([]);
  // console.log(products);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("https://fakestoreapi.com/products");
  //       setProducts(response.data);
  //       console.log(products);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="">
      <Products />

      {/* <Button
        size="sm"
        variant="link"
        disabled="true"
        startIcon={<BiShoppingBag />}
        endIcon={<FaSearchengin />}
      >
        Custom Button
      </Button> */}
    </div>
  );
}

export default App;
