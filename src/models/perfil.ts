class Perfil {
  image: string
  name: string
  description: string
  buttonText: string
  id: number

  constructor(
    image: string,
    name: string,
    description: string,
    buttonText: string,
    id: number
  ) {
    this.image = image
    this.name = name
    this.description = description
    this.buttonText = buttonText
    this.id = id
  }
}

export default Perfil
