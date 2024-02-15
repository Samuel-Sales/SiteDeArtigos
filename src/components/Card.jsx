
export default function Card({ post }) {
    // border-2 w-96 h-96
    return (
        <div>
            <section className=' w-96 h-96 rounded'> 
                <img className='w-full' src={post.imagem} alt="Imagem do artigo" />
                <div className='border-2 p-6'>
                    <h4 className='font-semibold text-xl mb-3'>{post.titulo}</h4>
                    <p className='font-normal text-lg mb-8'>{post.conteudo}</p>
                </div>
            </section>
        </div>
    );
};