import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type Response = {
  orderId: string
}

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurantsList: builder.query<Restaurants[], void>({
      query: () => 'restaurantes'
    }),
    getRestaurantMenu: builder.query<Restaurants, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<Response, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsListQuery,
  useGetRestaurantMenuQuery,
  usePurchaseMutation
} = api
export default api
