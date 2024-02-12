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
                <div className="bg-custom-white py-20 text-center flex flex-col items-center">
                    <h2 className="font-semibold text-3xl mb-12">Entre em contato</h2>
                    <input className="w-96 px-6 py-5 mb-6 rounded" type="text" placeholder="Nome" />
                    <input className="w-96 px-6 py-5 mb-6 rounded" type="text" placeholder="Email" />
                    <input className="w-96 pl-6 py-5 mb-10 rounded" type="text" placeholder="Assunto da mensagem" />
                    <button className="bg-custom-purple w-96 py-4 text-white rounded placeholder: text-base font-bold">ENTRAR EM CONTATO</button>
                </div>
            </section>
        </>
    );
};