export interface Product{
    id: number,
    title: string,
    code: string,
    qty: number,
    price: number,
    image: string,
    sizes: number[],
    sizeSelected?: number,
} 