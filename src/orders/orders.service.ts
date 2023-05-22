import { Body, Injectable, Post } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order)
    private orderModel: typeof Order,
  ) {}

  @Post()
  create(@Body() createOrderDto: CreateOrderDto) {
    return this.orderModel.create({ amount: createOrderDto.amount });
  }

  findAll() {
    return this.orderModel.findAll();
  }

  findOne(id: string) {
    return this.orderModel.findByPk(id);
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    return this.orderModel.update(
      { amount: updateOrderDto.amount },
      { where: { id: id } },
    );
  }

  remove(id: string) {
    return this.orderModel.destroy({ where: { id: id } });
  }
}
