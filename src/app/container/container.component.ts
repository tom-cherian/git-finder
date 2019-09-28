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
  profile = {};
  baseUrl = 'https://api.github.com/users/';

  constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.error('User not found!', 'Sorry!');
  }

  pushData() {
    this.httpClient.get(this.baseUrl + this.search + '?access_token=93864d79f03ae5344a6cdb0e45db19a542685691')
      .subscribe(res => { this.profile = res; },
        error => { this.showSuccess(); },



      );

  }
  ngOnInit() {
  }


}
