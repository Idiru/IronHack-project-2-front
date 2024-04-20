import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import MainTitle from "../components/MainTitle";
import icono from '../assets/icono.svg';

function ProductCard() {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState(null);
  const [recommendedProducts, setRecommendedProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ironhack-project-2-api.adaptable.app/products"
        );
        setProducts(response.data);
        setLoading(false);

        const filteredProduct = response.data.find(
          (item) => item.item_id === id
        );
        if (filteredProduct) {
          setProductData(filteredProduct);

          const filteredRecommendations = response.data.filter(
            (item) =>
              item.item_category === filteredProduct.item_category &&
              item.item_id !== id
          );
          // Randomly pick up to 4 products from the filtered list
          setRecommendedProducts(
            filteredRecommendations.sort(() => 0.5 - Math.random()).slice(0, 4)
          );
        } else {
          setError("Product not found");
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const handleViewClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!productData) return <div>Product not found</div>;

  const handleQuantityChange = (event) => {
    const newQuantity = Math.max(
      0,
      Math.min(parseInt(event.target.value, 10), productData.item_stock)
    );
    setQuantity(newQuantity || 0); // Fallback to 0 if NaN
  };

  return (
    <div className="container-product-page">
      <MainTitle>
        <img
          src={icono}
          alt="Verde"
          style={{ width: "auto", height: "1em", verticalAlign: "bottom" }}
        />
        Product
      </MainTitle>
      <div className="product-container">
        <img
          className="product-image"
          src={productData.item_image_url}
          alt={productData.name}
          sx={{
            objectFit: "cover",
          }}
        />
        <div className="content-container">
          <h1>{productData.item_name}</h1>
          <p>{productData.item_description}</p>
          <p>{productData.item_price}</p>
          <div className="size-container">
            <ul>
              {productData.item_size.map((size, index) => (
                <li key={index}>{size}</li>
              ))}
            </ul>
          </div>
          <div>
            <TextField
              className="quantity-picker"
              label="Quantity"
              type="number"
              InputProps={{
                inputProps: { min: 0, max: productData.item_stock },
              }}
              value={quantity}
              onChange={handleQuantityChange}
              disabled={productData.item_stock === 0}
              variant="outlined"
            />
          </div>
          <Button
            className="button"
            variant="contained"
            disabled={quantity === 0 || productData.item_stock === 0}
            sx={{ backgroundColor: "#3D6C00", width: "150px" }}
          >
            Add to cart
          </Button>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Item care
            </AccordionSummary>
            <AccordionDetails>{productData.item_care}</AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="recommendations">
        <hr />
        <Typography variant="h4" sx={{ fontSize: "30px" }}>
          You May Also Like
        </Typography>
        <Grid className="container-recommendations" container spacing={2}>
          {recommendedProducts.map((product) => (
            <Grid item key={product.item_id} xs={12} sm={6} md={3}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.item_image_url}
                  alt={product.item_name}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{ fontSize: "20px" }}
                    component="div"
                  >
                    {product.item_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.item_description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    className="hyperlink"
                    size="small"
                    onClick={() => handleViewClick(product.item_id)}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default ProductCard;
