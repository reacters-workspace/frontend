import axios from "axios";
import { useEffect, useState } from "react";
import CategoryDiv from "../DivsReusable/CategoryDiv";
import { Link } from "react-router-dom";
import "../CategoryPage/CategoryPage.css"
import { Row } from "react-bootstrap";

export default function CategoryPage() {
  const [categoryData, setCategoryData] = useState([]);
  // const [categoryName,setcategoryName]=useState([])





  function fetchData() {
    axios
      .get(`https://reacters-fitness.onrender.com/get-categories-db`)
      .then((result) => {
        const categoryDB = result.data.data;


        setCategoryData(categoryDB);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="parentDiv" style={{ width: "100%" }}>
      <div style={{ width: "95%", margin: "auto" }}>
        <div className="cate-page  col-12">
          <h2>All Categories</h2>
          <Row >
            <div className="cate-content">


              {categoryData.map((element) => (

                <CategoryDiv categoryName={element} key={element.id} />


              ))}

            </div>
          </Row>
        </div>
      </div>
    </div>

  );
}
