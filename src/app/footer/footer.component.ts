import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerText: string = "Copyright © Videocourses. All rights reserved."

  constructor() { }

  ngOnInit() {
  }

}
