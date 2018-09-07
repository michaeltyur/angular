export class Ingredient
{
    id:number;
    name:string;
    description:string;

    constructor(name,description?)
    {
      this.name=name;
      this.description=description;
    }
  }