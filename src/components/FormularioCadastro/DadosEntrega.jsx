import { TextField } from "@material-ui/core";
import {React, useState} from "react";
import {Button} from "@material-ui/core";

function DadosEntrega({aoEnviar}){
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');

    return(
        <form onSubmit={
            event => {
                event.preventDefault();
                aoEnviar({cep, endereco, numero, estado, cidade});
            }
        }>
            <TextField onChange={event => setCep(event.target.value)} type="number" name="cep" id="cep" label="CEP" margin="normal" variant="outlined" />
            <TextField onChange={event => setEndereco(event.target.value)} type="text" name="endereco" id="endereco" label="Endereço" fullWidth margin="normal" variant="outlined" />
            <TextField onChange={event => setNumero(event.target.value)} type="number" name="numero" id="numero" label="Número" margin="normal" variant="outlined" />
            <TextField onChange={event => setEstado(event.target.value)} type="text" name="estado" id="estado" label="Estado" margin="normal" variant="outlined" />
            <TextField onChange={event => setCidade(event.target.value)} type="text" name="cidade" id="cidade" label="Cidade" fullWidth margin="normal" variant="outlined" />
            
            <Button type="submit" variant="contained" color="primary">Salvar</Button>
        </form>

    );
}

export default DadosEntrega;