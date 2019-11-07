export class Worker {
  id: number;
  name: string;
  salary: number;
  dateOfJoin: Date;
  constructor(id: number, name: string, sal: number, doj: Date) {
    this.id = id;
    this.name = name;
    this.salary = sal;
    this.dateOfJoin = doj;
  }
}
