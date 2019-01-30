import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../../../../node_modules/@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  @Input() contactsList:boolean = false;
  @Input() contactDetail:boolean = false;
  @Input() isFavorite:boolean = false;

  constructor(private _location:Location) { }

  ngOnInit() {
  }

  public goBackToList(){
    this._location.back();
  }

}
