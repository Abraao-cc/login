import {useState} from 'react';
export default function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();
    function cadastrar(e) {
        e.preventDefault();
        setUserEmail(email)
    }
    function limparEmail() {       
        setUserEmail('')
    }
    return(<>
    <h2>Cadastre o seu e-mail:</h2>
    <form>
        <input type="email" placeholder="Digite o seu e-amil..." onChange={(e) => setEmail(e.target.value)}
               />
        <button type="submit" onClick={cadastrar}>Enviar Cadastro</button>
        {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                                 <button  onClick={limparEmail}>Limpar E-mail</button>
                    </div>)}
    </form>
    </>);
};