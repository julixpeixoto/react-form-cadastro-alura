import {React, useEffect, useState} from "react";
import {Button, TextField, Switch, FormControlLabel, Typography, Stepper, Step, StepLabel} from "@material-ui/core";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { validarCPF } from "../../models/cadastro";

function FormularioCadastro({aoEnviar, validacoes}){
    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    
    useEffect(() => {
        if(etapaAtual === formularios.length-1){
            console.log(dadosColetados);            
        }
    });    

    const formularios = [
        <DadosUsuario aoEnviar={coletarColetados} validacoes={validacoes} />,
        <DadosPessoais aoEnviar={coletarColetados} validacoes={validacoes} />,
        <DadosEntrega aoEnviar={coletarColetados} validacoes={validacoes} />,
        <Typography variant="h5">Obrigado pelo cadastro!</Typography>
    ];

    function coletarColetados(dados){        
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual + 1);       
    }

    return(
        <>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            { formularios[etapaAtual] }       
        </>
    );    
}

export default FormularioCadastro;