import { Products } from "../Components/Products";

export function Home() {
  return (
    <div id="home" className="container">
      <h4 id="h4Div">Welcome to redux shoppping center.</h4>

      <h5 id="pID">All products</h5>
      <div>
        <Products />
      </div>
    </div>
  );
}
