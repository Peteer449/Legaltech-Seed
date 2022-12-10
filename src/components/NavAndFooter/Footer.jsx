import './style.css'

export default function Footer(){
  return(
    <footer>
      <ul className="nav justify-content-center d-flex mb-5">
        <li className="ms-3"><a href="https://www.instagram.com/legaltechseed/" rel='noreferrer' target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
        <li className="ms-3"><a href="https://twitter.com/legaltechseed" rel='noreferrer' target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
        <li className="ms-3"><a href="https://www.facebook.com/people/Legaltech-Seed/100025890133686/" rel='noreferrer' target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
        <li className="ms-3"><a href="mailto:legaltechseed@gmail.com" rel='noreferrer' target="_blank"><i class="fa-solid fa-inbox"></i></a></li>
        <li className="ms-3"><a href="https://www.youtube.com/channel/UCtdyphDjxSIFk5jk5ZRzm7Q" rel='noreferrer' target="_blank"><i class="fa-brands fa-youtube"></i></a></li>
      </ul>
      <div className='bg-black py-3 text-center'>
        <span className='text-light'>LegalTech Seed © 2023</span>
      </div>
    </footer>
  )
}