import { Injectable } from '@angular/core';
import { dataFake } from '../data/dataFake';

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  constructor() {}

  buscar(id:string) {
    return  dataFake.filter((article) => article.id == id)[0];

  }
}
