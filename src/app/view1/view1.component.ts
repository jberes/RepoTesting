import { Component, OnInit } from '@angular/core';
import { NorthwindSwaggerTestService } from '../services/northwind-swagger-test.service';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {
  public northwindSwaggerTestApiCustomers: any = null;

  constructor(
    private northwindSwaggerTestService: NorthwindSwaggerTestService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.northwindSwaggerTestService.getApiCustomers().subscribe(data => this.northwindSwaggerTestApiCustomers = data);
  }
}
