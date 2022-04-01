import { Component } from '@angular/core';
import{OnInit} from '@angular/core';
import { TestdataService } from './testdata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'testdemo';
  data=[];
  imageUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  constructor(private ds: TestdataService){}
  
  gotData(){
    this.ds.getData().subscribe(
      (success)=>{this.data=success.results},
      (error)=>{console.log(error)}
    );
  }
  getPokeImage(index: number) {
    return `${this.imageUrl}${index}.png`;
  }
  ngOnInit(){
    this.gotData();
  }
}

