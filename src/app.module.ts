import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './clientes/users.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from "@nestjs/platform-express";
import { CsvController } from './csvReader/csv.controller';
import { CsvModule } from './csvReader/csv.module';
import { SalesModule } from './sales/sales.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CsvModule, UsersModule, AuthModule, SalesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
