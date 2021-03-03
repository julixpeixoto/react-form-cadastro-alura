import {React, useState} from "react";
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core";

function FormularioCadastro({aoEnviar, validarCPF}){
    const[nome, setNome] = useState('');
    const[sobrenome, setSobreNome] = useState('');
    const[cpf, setCPF] = useState('');
    const[promocoes, setPromocoes] = useState('');
    const[novidades, setNovidades] = useState('');
    const[erros, setErros] = useState({cpf:{valido:true, texto:""}});

    return(
        <form
            onSubmit={
                (event) => {
                    event.preventDefault();
                    aoEnviar({nome, sobrenome, cpf, novidades, promocoes});
                }
            }
        >
            <TextField 
                onChange={e => {setNome(e.target.value)}}
                value={nome} 
                id="nome" 
                label="Nome" 
                variant="outlined" 
                fullWidth="true" 
                margin="normal"
            />         
                        
            <TextField 
                onChange={e => {setSobreNome(e.target.value)}} 
                value={sobrenome} 
                id="sobrenome" 
                label="Sobrenome" 
                variant="outlined" 
                fullWidth="true" 
                margin="normal"
            />             

            <TextField 
                onChange={e => {setCPF(e.target.value)}} 
                onBlur={(event => {
                    const ehValido = validarCPF(cpf)
                    setErros({cpf:ehValido})
                })}
                error={!erros.cpf.valido} 
                helperText={erros.cpf.texto}
                value={cpf} 
                id="cpf" 
                label="CPF" 
                variant="outlined" 
                fullWidth="true" 
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
                color="primary">Cadastrar
            </Button>
        </form>
    );

    
}

export default FormularioCadastro;