import './footerCard.css'

const FooterCard = () => {
  return (
    <div className='footer-card'>
      <p>© 2024 Diseñado por UX Ana Rangel</p>
      <div className='made-with'>
        <p>Hecho con</p>
        <video src='/assets/video/heart.webm' autoPlay loop muted />
        <p>por la comunidad</p>
      </div>
    </div>
  )
}

export default FooterCard
