import {Button} from 'react-bootstrap'
function Tabs({filterCategory, tabsData}){
    return(
        <>

            <div className="text-center my-4">
            {
            tabsData.map((category, index)=>{
                return (
                    <Button type="button" className="portfolio-buttons mx-2 text-capitalize" onClick={()=> filterCategory(category)} key={index}>{category}</Button>
                )
            })
            }


            </div>
        </>
    )
}

export default Tabs;