import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import '../../sidebar.css';

function TrendingProduct() {
  const [products, getProducts] = useState([]); 

  useEffect(() => {
      async function loadProducts(){
          axios.get("http://tendawebsite.com/wp-json/wp/v2/tendaproducts")
          .then(res => {
              console.log("These are products from the data database", res.data)
              const homePostsProducts = res.data
              const homePostsProductsFiltered = homePostsProducts.filter(homePostProduct => {
                  return homePostsProducts.category_id === 4 && homePostProduct.pstatus === "published";
              })
              getProducts(homePostsProductsFiltered)
          })
          .catch(err => console.log(err))

      }
      loadProducts();
  }, [])
  return (
    <div className="trendingProductWrapper">
        <h6 className="postsWrapperHead">Most Trending @Tenda</h6>
        {/* <hr></hr> */}
        {products && (
            <div className="trending">
            {products.map((product, id) => (
              <Card className="eventCard" key={id}>
              <Card.Body className="p-1 m-1">
                  <Card.Title className="cardBar">
                  <Card.Subtitle className="mb-2">{product.title.rendered}</Card.Subtitle>
                  </Card.Title>
                  <Card.Text className="cardtext-data">
                    <p className="post-text">{product.slug}</p>
                  </Card.Text>
                      <Card.Img variant="top" src={product.featured_media} />
              </Card.Body>
          </Card>
            ))}
        </div>
        )}
    </div>
  )
}

export default TrendingProduct