export interface Product{
    id: number,
    title: string,
    code: string,
    price: number,
    image: string,
    sizes: Sizes[],
    sizeSelected?: Sizes,
    qty:number
} 

export interface Sizes {
    size: number,
    qty: number,
}