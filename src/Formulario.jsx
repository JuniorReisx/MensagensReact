import style from './Formulario.module.css'

export function Formulario(){
    document.getElementById("enviar").addEventListener('click', (pare)=>{
        pare.preventDefault(); 
        const nome = document.getElementById("nome").value
        const email = document.getElementById("email").value
        const assunto = document.getElementById("assunto").value
        const mensagem = document.getElementById("mensagem").value
        const resposta = document.getElementById("resposta")
    
        if (nome.length === 0) {
            resposta.innerHTML = 'Preencha o campo nome.'
            resposta.style.color = 'red'

        } 
        else if (email.length === 0) {
            resposta.innerHTML = 'Preencha o campo email.'
            resposta.style.color = 'red'
        } 
        else if (assunto.length === 0) {
            resposta.innerHTML = 'Preencha o campo assunto.'
            resposta.style.color = 'red'
        } 
        else if (mensagem.length === 0) {
            resposta.innerHTML = 'Preencha o campo mensagem.'
            resposta.style.color = 'red'
        } 
        else if (!validateEmail(email)){
            resposta.innerHTML ='Coloque um email valido.'
            resposta.style.color = 'red'
        } 
        else {
            resposta.innerHTML = 'Pode enviar.'
            resposta.style.color = 'green'
        }
    });
    
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }
    
    return (
        <main className={style.main}>

                <div className={style.card1}>
                    <form className={style.form}>
                        <p className={style.header}>Mensagens</p>

                        <div className={style.field}>
                            <input required="" placeholder="Nome" id='nome' className={style.inputs} type="text" />
                        </div>

                        <div className={style.field}>
                            <input
                                required=""
                                placeholder="Email"
                                id='email'
                                className={style.inputs}
                                type="email"
                            />
                        </div>

                        <div className={style.field}>
                            <input
                                required=""
                                placeholder="Assunto"
                                id='assunto'
                                className={style.inputs}
                                type="text"
                            />
                        </div>

                        <div className={style.field}>
                            <textarea
                                required=""
                                placeholder="Mensagem"
                                id='mensagem'
                                cols="30"
                                rows="3"
                                className={style.inputs}
                            ></textarea>
                        </div>
                        <p id='resposta'></p>
                        <button id='enviar' className={style.btn}>Enviar</button>
                    </form>
                </div>
           
        </main>
    )
}
