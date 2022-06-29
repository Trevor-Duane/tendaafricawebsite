import { React, useState } from 'react';
import Tabs from "./Tabs";
import Items from "./Items";
import Data from "./Data";
import { Container } from 'react-bootstrap';
import './products.css';

export default function Products() {
    const [data, setData] = useState(Data);
    const categoryData = Data.map((value)=>{
          return value.category
     });
    const tabsData= ["all", ...new Set(categoryData)];
    
    const filterCategory=(category) =>{
        if(category==="all"){
            setData(Data);
            return;
        }
       const filteredData =  Data.filter((value)=>{
           return value.category === category;
       })
       setData(filteredData);
    }
  return (
    <div className="product-section" id="solutions">
        <Container className="our-products">
              <div className="we-done">
                  <h6 className="we-have-done">Our Great and Awesome Work</h6>
                  {/* <div className="orange-box"></div> */}
              </div>
              <div className="our-product">
                  <h4>OUR PRODUCTS</h4>
              </div>
              <div className="product-para">
                  <p>
                      Since 2018 our company offers top notch IT services for
                      companies all over the world. And we're just getting started
                      In addition to our portfolio, Tenda provides a number of ICT
                      services among which the core ones are indicated below.
                  </p>
              </div>
              <div className="row products-container">
                  <div className="col-sm-1 the-products-wrapper">
                  </div>
                  <div className="col-sm-12 the-products">
                  <Tabs className="pdt-tabs" filterCategory={filterCategory} tabsData={tabsData}/>
                  <Items data={data} />
                  </div>
                  <div className="col-sm-1">
                      
                  </div>
              </div>
              
            </Container>
    </div>
  )
}
