import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  public title?: string;
  public subtitle?: string;
  public web?: string;
  ngOnInit() {
    this.title = "Andrea L. Mendizabal";
    this.subtitle = "Desarrollo web y estudiante";
    this.web = "-";

    
  }

}
