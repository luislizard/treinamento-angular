import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() title: string = '';
  @Input() likes: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  adicionaLikes(){
    this.likes++;
  }

}
