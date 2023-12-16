// types.ts
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    // Other product properties
  }
  export interface ItemQuantity{
  itemQ:number
  }
  export interface handler{
    title:string,
    onClickHandler:()=>void
  }
  export interface ownerDataType{
    Name:string,
    index:number,
    Post:string,
    onClickHandler: ()=>void
  }