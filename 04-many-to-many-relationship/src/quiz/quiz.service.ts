import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionEntity } from './question.entity';
import { Repository } from 'typeorm';
import { CategoryEntity } from './category.entity';
import { CreateCategoryDTO, CategoryDTO } from './dto/create-category.dto';
import { Category } from './interfaces/category.interface';
import { CreateQuestionDTO } from './dto/create-question.dto';
import { Question } from './interfaces/question.interface';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuestionEntity)
    private readonly questionsRepository: Repository<QuestionEntity>,
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategories(category: CreateCategoryDTO): Promise<Category[]> {
    return await this.categoryRepository.save(category.categories);
  }
  async createQuestion(question: CreateQuestionDTO): Promise<Question> {
    return await this.questionsRepository.save(question);
  }
}
