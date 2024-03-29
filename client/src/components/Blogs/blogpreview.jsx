import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import './blogpreview.css'

const Blogpreview=(()=>{
  const navigate=useNavigate()
  const location = useLocation();
  const selectedProduct = location.state ? location.state.selectedProduct : null;

       return(
        <>
              
              <div className='blogimage'>
                <img
                  src={`data:image/png;base64, ${selectedProduct.image}`}
                  alt={`Item ${selectedProduct.title}`}
                />
              </div>
              <div className="tittle-date-meachine">
                  <h2>{selectedProduct.title.substring(0, 40)}</h2>
                  <p>{selectedProduct.publicationDate}</p><br/>
                </div>
              <div className='blogpreview-con'>
                <h2 className="desc-head">Description</h2>
                <p>{selectedProduct.description.substring(0, 100)}</p>
                <h2 className="desc-head">Keywords</h2>
                <p>{selectedProduct.keywords}</p>
              </div>
       
            
         
        </>
       )
})
export default Blogpreview