import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { NasaInfo } from '../../../../interface/NasaInfo';
import { NasaDataService } from '../../../../service/nasa-data.service';

@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {

  data: NasaInfo[] = [];
  private apiService = inject(NasaDataService);

  constructor(private crd: ChangeDetectorRef){}

  ngOnInit():void{
    this.apiService.getData().subscribe(response =>{
      // this.data = response?.data ?? [];
      console.log(response);
      this.crd.detectChanges();
    });
  }
 }

