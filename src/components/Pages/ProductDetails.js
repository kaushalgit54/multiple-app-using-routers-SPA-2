import { useParams, Link } from "react-router-dom";

function ProductDetails(){
    const params = useParams();
   
   return (
   <>
    <h1>Product Details</h1>
    <p>{params.productId}</p>
    <p><Link to=".." relative="path">Back</Link></p>
    </>
   );
}
export default ProductDetails;

//Here for back Link we can use relative='path' or relative='route'
// If we use relative='path' then we will go backwards towards one back Path
// But if we use relative='route' then it will directly got to main Home Page  
