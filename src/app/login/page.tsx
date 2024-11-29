'use client'

import Link from "next/link"
import "./login.css"
import { useState } from "react"

export default function Login() {
    const [show, setShow] = useState('')

    const aparecer = () => {
        // alert('oi')
        setShow('mostrar')
    }

    return(
        <div className="container-login">
            
            <header>
                <h1>login</h1>   
                <Link href="/" className="btn-voltar">Voltar</Link >
            </header>

            <form className={`form-esqueci ${show}`}>
                <h1>Deseja alterar a senha ?</h1>
                <div className="row">
                    <label htmlFor="senhaAntiga">senha antiga</label>
                    <input id="senhaAntiga" type="text"  />
                </div>
                <div className="row">
                    <label htmlFor="novaSenha">nova senha</label>
                    <input id="novaSenha" type="text"  />
                </div>
                <div className="row">
                    <label htmlFor="confirmSenha">confimar senha</label>
                    <input id="confirmSenha" type="text"  />
                </div>
                <button className="btn-fechar">x</button>
                <button className="btn-alterar">Alterar ?</button>
            </form>
            
            <main>
                <div className="card">
                    <p className="text-login">FAÇA SEU LOGIN.</p>

                    <div className="dados">
                        
                        <div className="row">
                            <label>Email</label>
                            <input type="text" placeholder="e-mail" />
                        </div>

                        <div className="row">
                            <label>Senha</label>
                            <input type="password" placeholder="********" />
                        </div>
                        
                        <p onClick={aparecer} className="text-esqueci">Esqueci minha senha</p>
                    </div>

                    <button className="btn-entrar"
                     onClick={ () => alert('hello') }
                    >Entrar</button>
                </div>
            </main>

        </div>
    )
}