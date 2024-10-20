import { Injectable } from '@angular/core';
import { SearchModel} from '../app/models/search.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private static instance: DataService

  private constructor() {
  }

  public static getInstance() {
    if (DataService.instance == null)
      DataService.instance = new DataService()

    return DataService.instance;
  }

  public formatDate(iso: string) {
    return new Date(iso).toLocaleString('sr-RS')
  }

  public getSearchCriteria(): SearchModel {
    if (!sessionStorage.getItem('search'))
      sessionStorage.setItem('search', JSON.stringify({
        title: null,
        director: null,
        runtime: null,
        genre: null
      }))

    return JSON.parse(sessionStorage.getItem('search')!)
  }

  public saveSearchCriteria(search: SearchModel) {
    sessionStorage.setItem('search', JSON.stringify(search))
  }
}
