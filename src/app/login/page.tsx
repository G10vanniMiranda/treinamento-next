import Link from "next/link"
import "./login.css"

export default function Login(){
    return(
        <div>
            
            <header>
                <h1>login</h1>   
                <Link href="/" className="btn-voltar">Voltar</Link >
            </header>
            
            <main>
                <div className="card">
                    <p className="text-login">FAÇA SEU LOGIN.</p>

                    <div className="dados">
                        <h2>Email</h2>
                        <input type="text" placeholder="e-mail" />

                        <h2>Senha</h2>
                        <input type="password" placeholder="********" />
                        <p className="text-esqueci">Esqueci minha senha</p>
                    </div>

                    <button className="btn-entrar">Entrar</button>
                </div>
            </main>

        </div>
    )
}