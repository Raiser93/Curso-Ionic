import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit, AfterViewInit {

  @ViewChild('segmento', { static: false }) segmento: IonSegment;

  dataSuperHero: Observable<any>;
  publisher = '';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataSuperHero = this.dataService.getDataSuperHero();
  }

  ngAfterViewInit() {
    this.segmento.value = '';
    this.publisher = this.segmento.value;
  }

  segmentChanged(event) {
    const valueSegment = event.detail.value;
    this.publisher = valueSegment;

    console.log(valueSegment);
  }

}
