 import "./css/style.css";
 import "bootstrap/dist/css/bootstrap.css";
 import Tabela from "./Tabela";

 function Button (props) {
  return (
    <a href={props.destino} className="btn btn-primary">{props.children}</a>
  )
 }
 
 export default function App() {
  let estilo = {
    backgroundColor: 'red',
    color: 'white'
  }

  let titulo = 'Indetifique-se'

  return (
    <div>
      <h1 className="text-center">{titulo}</h1>

      <hr/>

      <form>
        <input className="form" placeholder="Email"/>
        <input className="form" placeholder="Senha"/>
        <button style={estilo}>Entrar</button>

        <Button destino="https://google.com.br">Cadastro</Button>
        <Button>TESTE</Button>
        <button>TESTE</button>
      </form>

    <Tabela/>
    </div>
  )
}
