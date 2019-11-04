export class People {
  Id: number;
  Name: string;
  Salary: number;
  constructor(id: number, name: string, salary: number) {
    (this.Id = id), (this.Name = name), (this.Salary = salary);
  }
}
