import { Container, InputFild } from './styles'

export const Checkout = () => {
  return (
    <Container>
      <h3>Entrega</h3>
      <form action="">
        <InputFild>
          <label htmlFor="WhoReceiver">Quem irá receber</label>
          <input type="text" />
        </InputFild>
        <InputFild>
          <label htmlFor="Address">Endereço</label>
          <input type="text" />
        </InputFild>
        <InputFild>
          <label htmlFor="City">Cidade</label>
          <input type="text" />
        </InputFild>
        <InputFild maxWidth={true}>
          <label htmlFor="CEP">CEP</label>
          <input type="text" />
        </InputFild>
        <InputFild maxWidth={true}>
          <label htmlFor="Number">Número</label>
          <input type="number" />
        </InputFild>
        <InputFild>
          <label htmlFor="Complement">Complemento (opcional)</label>
          <input type="text" />
        </InputFild>
        <button>Continuar com o pagamento</button>
      </form>
    </Container>
  )
}
