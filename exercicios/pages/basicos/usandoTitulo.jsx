import Titulos from "../../components/Titulos"
export default function usandoTitulo(){
    return(
        <div>
           <Titulos 
            principal = "Página Cadastro"
            secundario = "Incluir, alterar e excluir coisas"
            pequeno = {true}
           />
        </div>
    )
} 