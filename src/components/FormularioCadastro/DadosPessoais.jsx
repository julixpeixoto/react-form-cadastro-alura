import {React, useState, useContext} from "react";
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";
import ValidacoesCadastro from "../../contexts/ValidacoesCadastro";
import useErros from "../../hooks/useErros";

function DadosPessoais({aoEnviar}){
    const[nome, setNome] = useState('');
    const[sobrenome, setSobreNome] = useState('');
    const[cpf, setCPF] = useState('');
    const[promocoes, setPromocoes] = useState(false);
    const[novidades, setNovidades] = useState(false);
    const validacoes = useContext(ValidacoesCadastro);
    const [erros, validarCampos, possoEnviar] = useErros(validacoes);

    return(
        <form
            onSubmit={
                (event) => {
                    event.preventDefault();

                    if(possoEnviar()){
                        aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
                    }                     
                }
            }
        >
            <TextField 
                onChange={e => {setNome(e.target.value)}}
                value={nome} 
                id="nome" 
                name="nome"
                label="Nome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />         
                        
            <TextField 
                onChange={e => {setSobreNome(e.target.value)}} 
                value={sobrenome} 
                id="sobrenome" 
                name="sobrenome"
                label="Sobrenome" 
                variant="outlined" 
                fullWidth 
                margin="normal"
            />             

            <TextField 
                onChange={e => {setCPF(e.target.value)}} 
                onBlur={validarCampos}
                error={!erros.cpf.valido} 
                helperText={erros.cpf.texto}
                value={cpf} 
                id="cpf" 
                name="cpf"
                label="CPF" 
                variant="outlined" 
                fullWidth
                margin="normal"
            />             

            <FormControlLabel 
                checked={promocoes} 
                onChange={e => {setPromocoes(e.target.checked)}} 
                value={promocoes} 
                label="Promoções" 
                control={<Switch name="promocoes" color="primary"/>}
            />

            <FormControlLabel 
                checked={novidades} 
                onChange={e => {setNovidades(e.target.checked)}} 
                value={novidades} 
                label="Novidades" 
                control={<Switch name="novodades" color="primary"/>}
            />

            <Button 
                type="submit" 
                variant="contained" 
                color="primary">Próximo
            </Button>
        </form>
    );

    
}

export default DadosPessoais;