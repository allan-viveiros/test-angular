import { Component, OnInit } from '@angular/core';

import {USERS} from '../data/users';

@Component({
  selector: 'app-my-name',                       // element selector
  // selector: '[app-my-name]',                     // attribute selector
  // selector: '[app-my-name=true]',                // attribute selector conditional
  // selector: '.app-my-name',                      // class selector
  templateUrl: './my-name.component.html',
  // template: '<div> Allan </div>',
  styleUrls: ['./my-name.component.css'],

  //  styles: [
  //    `
  //      .blue { color: blue; }
  //      .red { color: red; }
  //    `,
  //  ],
})
export class MyNameComponent implements OnInit {
  name = 'Allan Romero';
  className = 'red';
  isBold = true;
  isSansSerif = false;
  isLarge = false;
  isRed = false;
  isItalic = false;
  isUppercase = false;

  currentStyles = {};
  currentClasses = {};

  users = USERS;

  constructor() {
    setTimeout(() => {
      this.className = "blue"
    }, 3000);
   }

  ngOnInit(): void {
    this.setCurrentStyles();
    this.setCurrentClasses();
  }

  onNameMouseOver() {
    this.className = this.className === 'blue' ? 'red' : 'blue';
  }

  toggleBold() {
    this.isBold = !this.isBold;
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-family': this.isSansSerif ? 'sans-serif' : 'serif',
      'font-size': this.isLarge ? 'large' : 'small',
    };
  }

  setCurrentClasses() {
    this.currentClasses = {
      uppercase: this.isUppercase,
      italic: this.isItalic,
      red: this.isRed,
    };
  }

}
