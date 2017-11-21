import {Ingridient} from '../shared/ingridients.model';

export class Recipe {
  public name: String;
  public descrpition: String;
  public imgurl: String;
  public ingridient: Ingridient[];
  constructor(name: String, descrpition: String, imgurl: String,ingridient: Ingridient[]) {
    this.name = name;
    this.descrpition = descrpition;
    this.imgurl = imgurl;
    this.ingridient = ingridient;
  }
}
