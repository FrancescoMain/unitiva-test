import { createSlice } from "@reduxjs/toolkit";
import { Product } from "./type";



const initialState :Product[] =  [
    {
      id: 1,
      title: "Ray-Ban Wayfarer",
      code: "RB3210 2112A",
      qty: 1,
      price: 152,
      image: "https://images.ray-ban.com/is/image/RayBan/805289126577_0001.png?impolicy=SEO_4x3"
    },
    {
        id: 2,
        title: "Ray-Ban Round",
        code: "RB9210 1149",
        qty: 1, 
        price: 166, 
        image: "https://images.ray-ban.com/is/image/RayBan/805289126577_0001.png?impolicy=SEO_4x3"
    },
    {
      id: 3,
      title: "Ray-Ban Clubmaster",
      code: "RB3359 2112A",
      qty: 3,
      price: 152,
      image: "https://images.ray-ban.com/is/image/RayBan/805289126577_0001.png?impolicy=SEO_4x3"

    },
    {
      id: 4,
      title: "Ray-Ban RB3594",
      code: "RB3956 21122",
      qty: 0,
      price: 250.9,
      image: "https://images.ray-ban.com/is/image/RayBan/805289126577_0001.png?impolicy=SEO_4x3"

    },
    {
      id: 5,
      title: "Ray-Ban Aviator",
      code: "RB6211 2112A",
      qty: 0,
      price: 150.9,
      image: "https://images.ray-ban.com/is/image/RayBan/805289126577_0001.png?impolicy=SEO_4x3"

    },
  ];

  export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {

    }

  })

  export default ProductSlice.reducer;
