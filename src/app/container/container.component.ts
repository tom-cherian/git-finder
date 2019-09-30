import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  [x: string]: any;
  search;
  isLoad = false;
  showCard = false;
  profile = {};
  baseUrl = 'https://api.github.com/users/';

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  showError() {
    this.toastr.error('User not found!', 'Sorry!');
  }

  showSuccess() {
    this.toastr.success('User found!');
  }

  pushData() {
    this.isLoad = true;
    this.showCard = true;
    this.httpClient.get(this.baseUrl + this.search)
      .subscribe(res => { this.showSuccess(); this.profile = res; this.isLoad = false; },
        error => { this.showError(); this.isLoad = false; this.showCard = false; },
      );

  }
  ngOnInit() {
  }


}
