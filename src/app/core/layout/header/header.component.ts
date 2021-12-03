import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() pageTitle: string = 'Teste';
  searchForm: FormGroup;


  constructor(private router: Router, private route: ActivatedRoute) {

    this.searchForm = new FormGroup({
      searchInput: new FormControl('', [
        Validators.required
      ]),
    });
   }

  ngOnInit(): void {
  }

  doSearch(){
    if(!this.searchForm.invalid){
      const keyword = this.searchForm.controls['searchInput'].value.replace(' ','-');
      this.router.navigate([`/busca/${keyword}`])
      //
    }else{
      alert('voce precisa digital algo na busca');
    }
  }

}
