import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The dating app';
  users: any;

  constructor(private http: HttpClient){}

  ngOnInit() : void{
    this.getUsers();
  }

  getUsers (){
    this.http.get('https://localhost:5001/api/users').subscribe(response =>{
      this.users = response;
    }, error =>{
      console.log(error);
    })
  }
}