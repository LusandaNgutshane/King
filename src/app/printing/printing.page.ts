import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-printing',
  templateUrl: './printing.page.html',
  styleUrls: ['./printing.page.scss'],
})
export class PrintingPage implements OnInit {

  showDetails = false; // Initialize showDetails as false to hide details by default

  // Define a function to toggle the showDetails property
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  constructor() { }

  ngOnInit() {
  }

}
