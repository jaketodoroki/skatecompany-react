import Brands from "./Brands";

const Companies = (props) => {
  return ( 
    <div>
      {props.name}
      {props.brands?.map(brands=>
        <Brands name={brands}/>
        )}
    </div>  
  );
}
 
export default Companies;