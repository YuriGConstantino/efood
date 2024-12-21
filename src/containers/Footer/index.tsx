import Logo from '../../assets/images/logo.png'
import Face from '../../assets/images/facebook.png'
import Insta from '../../assets/images/insta.png'
import Twitter from '../../assets/images/twitter.png'
import { About, ContentContainer, FooterContainer, SocialLinks } from './styles'

export const Footer = () => (
  <FooterContainer>
    <ContentContainer>
      <img src={Logo} alt="" />
      <SocialLinks>
        <a href="#">
          <img src={Insta} alt="" />
        </a>
        <a href="#">
          <img src={Face} alt="" />
        </a>
        <a href="#">
          <img src={Twitter} alt="" />
        </a>
      </SocialLinks>
      <About>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </About>
    </ContentContainer>
  </FooterContainer>
)
