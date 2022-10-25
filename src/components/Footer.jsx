import '../styles/components/footer.sass'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="first-line">
            <span>Brasil</span>
        </div>
        <div className="second-line">
            <div className="block-1">
                <span>Sobre</span>
                <span>Publicidade</span>
                <span>Negócios</span>
                <span>Como funciona a Pesquisa</span>
            </div>
            <div className="block-2">
                <span>Privacidade</span>
                <span>Termos</span>
                <span>Configurações</span>
            </div>
        </div>
    </div>
  )
}

export default Footer