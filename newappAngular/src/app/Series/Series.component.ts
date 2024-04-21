import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSeries } from './dataSeries';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-Series',
  templateUrl: './Series.component.html',
  styleUrls: ['./Series.component.css']
})

export class SeriesComponent implements OnInit {

  series: Array<Serie> = [];

  constructor(private serieService: SerieService) { }

  getSeriesList() {
    this.serieService.getSeries().subscribe(
      series => {
        this.series = series;}
    );
  }

  ngOnInit() {
    this.getSeriesList();
  }

}
