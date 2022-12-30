import { ProductRepository } from '../typeorm/repositories/ProductRepository';
import { Product } from '../typeorm/entities/Product';

class ListProductService {
  public async execute(): Promise<Product[]> {
    const productsRepository = ProductRepository;

    const products = await productsRepository.find();

    return products;
  }
}

export default ListProductService;
