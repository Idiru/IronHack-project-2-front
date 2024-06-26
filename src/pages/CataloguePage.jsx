//CataloguePage.jsx
import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ItemCard from "../components/ItemCard";
import { useState, useEffect } from "react";
import Sort from '../components/Sort';
import MainTitle from '../components/MainTitle';
import icono from '../assets/icono.svg';
import axios from "axios";
import { Link } from 'react-router-dom';



export default function CataloguePage({ categoryFilter, setCategoryFilter }) {

  const [products, setProducts] = useState([]);
  const [sortedData, setSortedData] = useState(products.sort((a, b) => a.item_name.localeCompare(b.item_name))); 
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSortChange = (sortOption) => {
    const sorted = [...sortedData].sort((a, b) => {
      //sorting
      if (sortOption === 'NAME_ASC') {
        return a.item_name.localeCompare(b.item_name);
      } else if (sortOption === 'NAME_DESC') {
        return b.item_name.localeCompare(a.item_name);
      } else if (sortOption === 'PRICE_ASC') {
        return parseFloat(a.item_price.replace('€', '')) - parseFloat(b.item_price.replace('€', ''));
      } else if (sortOption === 'PRICE_DESC') {
        return parseFloat(b.item_price.replace('€', '')) - parseFloat(a.item_price.replace('€', ''));
      } else if (sortOption === 'BRAND_ASC') {
        return a.item_brand.localeCompare(b.item_brand);
      }
      return 0;
    });
    setSortedData(sorted);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://ironhack-project-2-api.adaptable.app/products");
        setProducts(response.data);
        setSortedData(response.data.sort((a, b) => a.item_name.localeCompare(b.item_name)));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  

  

  return (
  <div>

<MainTitle>
      <img src={icono} alt="Verde" style={{ width: 'auto', height: '1em', verticalAlign: 'bottom' }} />
      COLLECTION
    </MainTitle>      
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: 2 }}>
        <Sort onSortChange={handleSortChange} />
    </Box>

      <section>
        <Box sx={{ my: 6, flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {sortedData
              .filter(
                (item) =>
                  categoryFilter === "all" ||
                  item.item_category === categoryFilter
              )
              .map((item) => (
                <Grid item xs={12} sm={4} md={4} key={item.item_id}>
                <Link to={`/product/${item.item_id}`} className="card">
                <ItemCard
                    img={item.item_image_url}
                    name={item.item_name}
                    price={item.item_price}
                    category={item.item_category}
                    brand={item.item_brand}
                  />
                </Link>
                </Grid>
              ))}
          </Grid>
        </Box>
      </section>
    </div>
  );
}
