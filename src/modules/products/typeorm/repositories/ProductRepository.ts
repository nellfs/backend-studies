import { AppDataSource } from 'src/data-source';
import { Product } from '../entities/Product';

export const ProductRepository = AppDataSource.getRepository(Product).extend({
  async findByName(name: string): Promise<Product | undefined> {
    const product = await ProductRepository.findOneOrFail({
      where: {
        name,
      },
    });
    return product;
  },
});
