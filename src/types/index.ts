export type Guitar = {
    id: number
    image: string
    name: string
    description: string
    price: number
}   

export type CartItem = Pick<Guitar, 'id' | 'name' | 'price' | 'image'> & {
    quantity: number
} 
