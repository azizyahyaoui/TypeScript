type Products = {
  readonly productId: string;
  readonly productRefCode: string;
  productName: string;
  productPrice: number;
  productDescription: string;
  inStock: boolean;
  quantities: number
}

export default Products;