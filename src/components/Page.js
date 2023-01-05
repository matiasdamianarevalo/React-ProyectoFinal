import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio/Inicio";
import { ItemListContainer } from "./page/productos/ItemListContainer";
import { ItemDetailContainer } from "./page/productos/ItemDetailContainer";
/* import Shoe from "./page/inicio/Shoe";
import Clothing from "./page/inicio/Clothing"; */

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/category" exact component={ItemListContainer} />
        <Route path="/category/:id" exact component={ItemDetailContainer} />
{/*         <Route path="/shoe" element={<Shoe />} />
        <Route path="/clothing" element={<Clothing />} /> */}
			</Switch>
    </section>
  );
}
