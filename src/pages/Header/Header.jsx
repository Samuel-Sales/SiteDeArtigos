import BotaoDeSearch from "../../components/BotaoDeSearch";
import ImagemDoHeader from '../../assets/ImagemDoHeader.svg';

export default function Header() {
    return (
        <header className="bg-custom-white">
            <div className="flex items-center justify-between max-w-7xl mx-auto py-12">
                <div>
                    <h1 className="font-semibold text-4xl mb-8 text-custom-black">
                        Encontre os <span className="text-custom-purple">melhores artigos</span> <br />
                        de programação em um só lugar
                    </h1>
                    <p className="text-2xl mb-8 text-custom-black font-normal">
                        Explore o topo da programação em um só lugar! <br />
                        Seu destino único para dicas e tendências atuais.
                    </p>
                    <BotaoDeSearch />
                </div>

                <div className="ml-96">
                    <img src={ImagemDoHeader} alt="Imagem do principal do Header" />
                </div>
            </div>
        </header>
    );
};