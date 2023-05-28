import axios from "axios";
import { useEffect, useState } from "react";
import CategoryDiv from "../DivsReusable/CategoryDiv";
import { Link } from "react-router-dom";

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
    <>
      {categoryData.map((element) => (
        <Link key={element.id} to={`/exercises/${element.category}`}>
          <CategoryDiv categoryName={element} key={element.id} />
        </Link>
      ))}
    </>
  );
}
