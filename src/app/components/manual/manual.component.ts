import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manual',
  templateUrl: './manual.component.html',
})
export class ManualComponent implements OnInit {

  tamano: number = 16;

  constructor() { }

  ngOnInit(): void {
  }

}
