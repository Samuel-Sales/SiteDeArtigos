import ImagemDoCard from '../assets/ImagemDoCard.svg';

export default function Card() {
    // border-2 w-96 h-96
    return (
        <div>
            <section className=' w-96 h-96 rounded'> 
                <img className='w-full' src={ImagemDoCard} alt="Imagem do artigo" />
                <div className='border-2 p-6'>
                    <h4 className='font-semibold text-xl mb-3'>O que é linguagem de programação? Conheça as principais</h4>
                    <p className='font-normal text-lg mb-8'>Uma das mais populares vertentes da tecnologia da informação, a área de...</p>
                </div>
            </section>
        </div>
    );
};