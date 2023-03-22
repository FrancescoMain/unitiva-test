import { createReducer } from "@reduxjs/toolkit";

const initialProducts = [
    {
      id: 1,
      title: "Ray-Ban Wayfarer",
      code: "RB3210 2112A",
      Qty: 1,
      Price: 152,
    },
    { id: 2, title: "Ray-Ban Round", code: "RB9210 1149", Qty: 1, Price: 166 },
    {
      id: 3,
      title: "Ray-Ban Clubmaster",
      code: "RB3359 2112A",
      Qty: 3,
      Price: 152,
    },
    {
      id: 4,
      title: "Ray-Ban RB3594",
      code: "RB3956 21122",
      Qty: 0,
      Price: 250.9,
    },
    {
      id: 5,
      title: "Ray-Ban Aviator",
      code: "RB6211 2112A",
      Qty: 0,
      Price: 150.9,
    },
  ];

  export const productReducer = createReducer(initialProducts, builder =>
        builder
       
    
    )