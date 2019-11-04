export class People {
  Id: number;
  Name: string;
  Salary: number;
  Type: PeopleType;
  constructor(id: number, name: string, salary: number, type: PeopleType) {
    (this.Id = id),
      (this.Name = name),
      (this.Salary = salary),
      (this.Type = type);
  }
}

export enum PeopleType {
  Temporary,
  Permanent,
  Contract
}
