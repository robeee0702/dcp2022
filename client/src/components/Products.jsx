import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../style/products.css";
import { Link } from "react-router-dom";


const Products = ({ item, handleClick }) => {

  // const [rates, setRates] = useState([]);

  // useEffect(() => {
  //   axios.get('http://data.fixer.io/api/latest?access_key=8re8n4OLqt14vZ850q2Z7tusJTnmIC2t')
  //   .then(response => {
  //     setRates(response.data.rates);
  //   })
  // },[]);


  // console.log(rates)


  const format = (price) => {
    return Number(price*1)     // SET PRICE EURO CONVERTER !
      .toFixed(2)
      .replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  return (
    <div className="ps-card" key={item._id}>
      <div className="card-header">
        <h5 style={{ fontSize: "18px", fontWeight: "400", marginTop: "14px" }}>
          {item.subcategory}
        </h5>
        {/* <input type="text" value={rates}></input> */}
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="card-line"></div>
        </div>
      </div>
      <div className="card-body">
        <Link to={`/product/${item._id}`}>
          <img
            style={{ padding: "0", margin: "0 0 10px" }}
            src={item.image}
            alt={item.name}
          />
        </Link>
        <h4>{item.name}</h4>
        {(() => {
          if (item.price > 1) {
            return (
              <div>
                <span style={{ fontSize: "18px" }}>
                  {format(item.price)},-Ft
                </span>
                <div>
                  <button
                  className="cartChangeButton"
                    style={{
                      padding: "4px",
                      margin: "6px",
                      color: "black",
                    }}
                    onClick={() => {
                      handleClick(item);
                      toast("a Termék bekerült a kosárba", {
                        autoClose: 800,
                      });
                    }}
                  >
                    Kosárba
                    <AddShoppingCartIcon />
                  </button>
                </div>
              </div>
            );
          } else {
            return (
              <div>
                <span style={{ fontSize: "18px" }}></span>
                <Link to="/contact">
                  <button
                  className="cartChangeButton"
                  style={{
                    padding: "4px",
                    margin: "6px",
                    color: "black",
                  }}
                  >
                    Árajánlatkérés
                  </button>
                </Link>
              </div>
            );
          }
        })()}
      </div>
    </div>
  );
};

export default Products;
