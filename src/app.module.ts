import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products/products.module';
import { CategoriesService } from './modules/categories/categories.service';
import { CategoriesModule } from './modules/categories/categories.module';

@Module({
  imports: [ProductsModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService, CategoriesService],
})
export class AppModule {}
