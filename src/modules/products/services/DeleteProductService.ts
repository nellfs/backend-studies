import { ProductRepository } from '../typeorm/repositories/ProductsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  id: string;
}
class DeleteProductService {
  public async execute({ id }: IRequest): Promise<void> {
    const productsRepository = ProductRepository;

    const product = await productsRepository.findOneBy({ id });

    if (!product) throw new AppError('Product not found.');
    await productsRepository.remove(product);
  }
}

export default DeleteProductService;
