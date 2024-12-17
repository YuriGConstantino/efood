class Restaurant {
  image: string
  highlightTag: string
  categoryTag: string
  title: string
  rating: number
  description: string
  id: number

  constructor(
    image: string,
    categoryTag: string,
    title: string,
    rating: number,
    description: string,
    id: number,
    highlightTag: string
  ) {
    this.image = image
    this.highlightTag = highlightTag
    this.categoryTag = categoryTag
    this.title = title
    this.rating = rating
    this.description = description
    this.id = id
  }
}

export default Restaurant
