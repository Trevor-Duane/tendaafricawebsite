function Items({data}){
    return (
        <div className="row ">
          {
            data.map((value)=>{
            const {id, image, title, description} = value;
            return (
              <div className="col-sm-3 my-3" key={id}>
                <div className="card bg-light text-center">
                    <img src={image} className="img-fluid pdt-overly" style={{height:"180px"}} alt="pproduct"/>
                    <h5 className="pdt-title mt-3">{title}</h5>
                    <p className="product-description">{description}</p>
                </div>
              </div>
            )
            })
          }

        </div>
    )
}

export default Items;