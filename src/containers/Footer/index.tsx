import Logo from '../../assets/images/logo.png'
import Face from '../../assets/images/facebook.png'
import Insta from '../../assets/images/insta.png'
import Twitter from '../../assets/images/twitter.png'
import * as S from './styles'

export const Footer = () => (
  <S.FooterContainer>
    <S.ContentContainer>
      <img src={Logo} alt="" />
      <S.SocialLinks>
        <a href="#">
          <img src={Insta} alt="" />
        </a>
        <a href="#">
          <img src={Face} alt="" />
        </a>
        <a href="#">
          <img src={Twitter} alt="" />
        </a>
      </S.SocialLinks>
      <S.About>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.About>
    </S.ContentContainer>
  </S.FooterContainer>
)
