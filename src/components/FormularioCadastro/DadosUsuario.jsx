import { TextField } from "@material-ui/core";
import {React, useState, useContext} from "react";
import {Button} from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosUsuario({aoEnviar}){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');  
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form onSubmit={(event) => {
            event.preventDefault();
            
            if(possoEnviar()){
                aoEnviar({email, senha}); 
            }            
        }}>
            <TextField 
                onChange={event => setEmail(event.target.value)}
                type="email" 
                name="email" 
                id="email" 
                label="E-mail" 
                fullWidth 
                margin="normal" 
                variant="outlined" 
                required/>

            <TextField 
                onChange={event => setSenha(event.target.value)}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                type="password" 
                name="senha" 
                id="senha"
                label="Senha" 
                fullWidth 
                margin="normal" 
                variant="outlined" 
                required/>
            
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>

    );
}

export default DadosUsuario;