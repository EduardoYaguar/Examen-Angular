import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NasaInfo } from '../interface/NasaInfo';

@Injectable({
  providedIn: 'root'
})
export class NasaDataService {
  private apiUrl = "https://images-api.nasa.gov/search?q=galaxy&media_type=image";

  constructor(private http: HttpClient) { }

  getData(): Observable<{data: NasaInfo[]}>{
    return this.http.get<{data: NasaInfo[]}>(this.apiUrl);
  }

}
