import { Component, OnInit } from '@angular/core';
import { DataService } from './../services/data.service';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.testGet().subscribe( res => console.log(res));
  }

}
