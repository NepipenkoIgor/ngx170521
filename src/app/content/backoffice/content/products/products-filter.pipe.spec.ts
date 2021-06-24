import { ProductsFilterPipe } from "./products-filter.pipe";

const products = [
  {
    author: "Vlad",
    img: "assets/img/product-2.jpg",
    isFavorite: false,
    price: 221,
    title: "Product 2345",
    _id: "60d4b0dbe27130bc9be48e94",
  },
  {
    author: "Vlad",
    img: "assets/img/product-2.jpg",
    isFavorite: false,
    price: 3333,
    title: "Prod 11111",
    _id: "60d4b0dbe27130bc9be48e94",
  },
  {
    author: "Vlad",
    img: "assets/img/product-2.jpg",
    isFavorite: false,
    price: 1111,
    title: "Prod 22222",
    _id: "60d4b0dbe27130bc9be48e94",
  }
]

describe('Products filter pipe', () => {
  let productsFilterPipe: ProductsFilterPipe
  beforeEach(() => {
    productsFilterPipe = new ProductsFilterPipe();
  })

  it('should transform right', () => {
    expect(productsFilterPipe.transform(products, ''))
      .toEqual(products);
    const [, second] = products;
    expect(productsFilterPipe.transform(products, '11111'))
      .toEqual([second]);
  });
})
