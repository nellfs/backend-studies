import { AppDataSource } from 'src/data-source';
import { User } from '../entities/User';

export const UsersRepository = AppDataSource.getRepository(User).extend({
  async findByName(name: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        name,
      },
    });
    return user;
  },

  async findById(id: number): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        id,
      },
    });
    return user;
  },

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.findOne({
      where: {
        email,
      },
    });
    return user;
  },
});
