import Card from "../../components/Card";
import style from './Main.module.css';

export default function Main() {
    return (
        <>
            <main className="flex flex-col mb-20">
                <h2 className="font-semibold text-3xl mb-28 mt-20 text-center">Artigos recomendados</h2>
                <div className={style.container__cards}>  {/* grid gap-4 grid-cols-3 grid-rows-3 */}
                    <div className={style.container__grid}>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
            </main>

            <section>
                <div className="bg-custom-white">
                    <h2>Entre em contato</h2>
                    <input type="text" placeholder="Nome" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Assunto da mensagem" />
                    <button>ENTRAR EM CONTATO</button>
                </div>
            </section>
        </>
    );
};