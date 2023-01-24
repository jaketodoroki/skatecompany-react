import Companies from "./Companies";

const SkateCompanies = (props) => {
  return ( 
    <>
    <div>{props.name}
    <Companies name='Truck Companies' brands={['Ace', 'Independent', 'Krux']}/>
    <Companies name='Board Companies' brands={['Krooked', 'Frog', 'Alltimers']}/>
    <Companies name='Wheel Companies' brands={['Spitfire', 'OJ', 'Bones']}/>
    </div>
    </>
  );
}
 
export default SkateCompanies;