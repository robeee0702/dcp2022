import React, { useState } from "react";
import Products from "../components/Products";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { products, category } from "../data";
import ReactPaginate from "react-paginate";
import "../style/shoppage.css";
import SearchEngine from "../components/SearchEngine";
import { ToastContainer } from "react-toastify";

const ShopPage = ({ handleClick }) => {
  const [data, setData] = useState(products);

  const [search, setSearch] = useState("");

  console.log(data);
  console.log(category);

  const [categories, setCategories] = useState(category);

  const [pageNumber, setPageNumber] = useState(0);

  const productPerPage = 9;

  const pagesVisited = pageNumber * productPerPage;

  const displayProducts = data
    .filter((value,i) => {
      if (search === "") {
        return value;
      } else if (
        value.category?.toLowerCase().includes(search.toLowerCase()) ||
        value.desc?.toLowerCase().includes(search.toLowerCase()) ||
        value.name?.toLowerCase().includes(search.toLowerCase())
      ) {
        return value;
      }
    })
    .slice(pagesVisited, pagesVisited + productPerPage)
    .map((item) => (
      <Products handleClick={handleClick} item={item} key={item._id} />
    ));

  const pageCount = Math.ceil(data.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected); //if i click page number 2 than selected is number 2
  };

  //filter and all products
  const filterResult = (catItem) => {
    const newProduct = products.filter(
      (curDate) => curDate.category === catItem
    );
    setData(newProduct);
  };


  return (
    <div className="shop-container">
      <div className="shop-col">
        <div className="shop-menu">
          {/* show all category if exists */}

          <SearchEngine search={search} setSearch={setSearch} />

          <button
            style={{ left: 0, color: "red",marginLeft: "-120px"  }}
            className="shop-btn"
            onClick={() => products.filter(function(value) {
              return products 
            })}
          >
            AKCIÓK
            <ChevronRightIcon />
          </button>
          {/* <TextField
          type="text"
          placeholder="Keresés"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{marginBottom:"30px",maxWidth:"280px"}}
          /> */}

          {categories &&
            categories.map((item, i) => (
              <div key={i}>
                <button
                  className="shop-btn"
                  key={i}
                  onClick={() => filterResult(item.title)}
                >
                  {item.title}
                  <ChevronRightIcon style={{ marginLeft: "12px" }} />
                </button>
                <div
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div className="shop-line"></div>
                </div>
              </div>
            ))}
          <button
            style={{ left: 0,marginLeft:"-60px" }}
            className="shop-btn"
            onClick={() => setData(products)}
          >
            Összes
            <ChevronRightIcon />
          </button>
        </div>

        <div className="shop-products">
          {displayProducts}
          {/* {displayProducts2} */}
        </div>
        <ToastContainer/>
      </div>
      <div className="shop-pagination">
        <ReactPaginate
          previousLabel={"<<"} //for previous
          nextLabel={">>"} //for next
          pageCount={pageCount} //for page number
          onPageChange={changePage} //for selected page, current page
          containerClassName={"paginationBttns"} //class for style
          previousLinkClassName={"previousBttn"} //class for style
          nextLinkClassName={"nextBttn"} //class for style
          disabledClassName={"paginationDisabled"} //class for style
          activeClassName={"paginationActive"} //class for style
        />
      </div>
    </div>
  );
};

export default ShopPage;
