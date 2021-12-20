import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


import { Home } from './views/Home';
import { ListarCliente } from './views/Cliente/ListarCliente';
import { ListarCompra } from './views/Compra/ListarCompra';
import { ListarProduto } from './views/Produto/ListarProduto';
import { Menu } from './components/Menu';
import { Item } from './views/Produto/Item';
import { Cadastrar } from './views/Produto/Cadastrar';

function App() {
  return (
    <div>
       <Router>
         <Menu/>
         <Switch>
           <Route exact path="/" component={Home}/>
           <Route path="/listar-cliente" component={ListarCliente}/>
           <Route path="/listar-compra" component={ListarCompra}/>
           <Route path="/listar-produto" component={ListarProduto}/>
           <Route path="/listar-compra/:id" component={Item}/>
           <Route path="/cadastrarproduto" component={Cadastrar}/>
         </Switch>
       </Router>
    </div>
  );
}

export default App;
