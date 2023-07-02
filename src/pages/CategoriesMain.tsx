import Catcard from "../components/Catcard";
import { useEffect, useState } from "react";
import "../styles/CategoriesMain.css";
import Sidebar from "../components/Sidebar";

const Categories = () => {
  const [medicineCat, setMedicineCat] = useState([]);
  const [product, setProduct] = useState([]);

  const loadData = async () => {
    let response = await fetch(
      "http://localhost:5090/api/display/productdata",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    response = await response.json();

    setProduct(response[0]);
    setMedicineCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  const productsPerCategory = 3;
  const initialNumRows = 1;
  const [numRows, setNumRows] = useState({});
  const [expandedCategories, setExpandedCategories] = useState([]);

  useEffect(() => {
    const numRowsData = {};
    medicineCat.forEach((data) => {
      numRowsData[data.mainProductCategory] = initialNumRows;
    });
    setNumRows(numRowsData);
  }, [medicineCat]);

  const handleSeeMore = (category) => {
    setNumRows((prevNumRows) => ({
      ...prevNumRows,
      [category]: prevNumRows[category] + 1,
    }));
  };

  return (
    <div className="mainnsec">
      <div className="maindivonee">
        <div className="leftttpanel">
          <Sidebar />
        </div>
        <div className="rightttpanel">
          <div className="mainsection">
            <div className="categories">
              <div className="container">
                {medicineCat?.map((data) => {
                  const filteredProducts = product?.filter(
                    (item) =>
                      item.mainProductCategory === data.mainProductCategory
                  );
                  const visibleProducts = filteredProducts?.slice(
                    0,
                    numRows[data.mainProductCategory] * productsPerCategory
                  );

                  return (
                    <div className="rowmain" key={data._id}>
                      <div className="procattext">
                        {data.mainProductCategory}
                      </div>
                      <hr />
                      {visibleProducts?.length !== 0 ? (
                        <div className="col-12 mt-3">
                          <div>
                            <div className="card-grid">
                              {visibleProducts.map((filterItems) => (
                                <div
                                  className="card-item"
                                  key={filterItems._id}
                                >
                                  <Catcard
                                    className="catcard"
                                    productName={
                                      filterItems.mainProductCategory
                                    }
                                    subProduct={filterItems.productName}
                                    imgSrc={filterItems.productImages[0]}
                                    mrp={filterItems.MRP}
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div>No such data found</div>
                      )}

                      {filteredProducts?.length >
                        numRows[data.mainProductCategory] *
                          productsPerCategory && (
                        <button
                          className="seemore"
                          onClick={() =>
                            handleSeeMore(data.mainProductCategory)
                          }
                        >
                          See More ...
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
