import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import { Product } from '../typeorm/entities/Product';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}
class ShowProductService {
  public async execute({ id }: IRequest): Promise<Product> {
    const productsRepository = ProductRepository;

    const product = await productsRepository.findOneBy({ id });

    if (!product) throw new AppError('Product not found.');

    return product;
  }
}

export default ShowProductService;
