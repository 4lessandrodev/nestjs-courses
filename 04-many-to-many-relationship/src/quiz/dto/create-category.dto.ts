export class CategoryDTO {
  id: number;
  name: string;
}
// tslint:disable-next-line:max-classes-per-file
export class CreateCategoryDTO {
  categories: CategoryDTO[];
}
