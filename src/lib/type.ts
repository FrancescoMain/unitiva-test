export interface Product{
    id: number,
    title: string,
    code: string,
    price: number,
    image: string,
    sizes: Sizes[],
    sizeSelected?: number,
    qty:number
} 

interface Sizes {
    size: number,
    qty: number,
}