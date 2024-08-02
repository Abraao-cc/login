import Button from '../eventos/Button';
export default function Evento() {
    function meuEvento() {
        alert(`Ativando primeiro evento!`);
    }
    ;
    return(
            <>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
          
            </>);
};
