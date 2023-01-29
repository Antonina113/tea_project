import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {OrderService} from "../../shared/services/order.service";


@Component({
  selector: 'order-component',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public showForm: boolean = true;
  public sendError: boolean = false;
  public disTrue: boolean = true;
  public loading: boolean = false;

  constructor(private activateRoute: ActivatedRoute, private fb: FormBuilder, private orderService: OrderService) {
  }

  public formValues = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('^[А-Я][а-я]+$')]],
    last_name: ['', [Validators.required, Validators.pattern('^[А-Я][а-я]+$')]],
    phone: ['', [Validators.required, Validators.pattern("^[+]?[0-9]{11}$")]],
    productTitle: ['', Validators.required],
    comment: [''],
    country: ['', [Validators.required, Validators.pattern("^[а-яА-Я—\\s-]+$")]],
    zip: ['', [Validators.required, Validators.pattern("^[0-9]{5}$")]],
    address: ['', [Validators.required, Validators.pattern("^[а-яА-Я0-9—\\s-]+$")]],
  })

  ngOnInit() {
    this.formValues.get('productTitle')?.disable();
    const productParam = this.activateRoute.snapshot.queryParamMap.get('product');
    if (productParam) {
      this.formValues.patchValue({
        productTitle: productParam,
      })
    }
  }

  get name() {
    return this.formValues.get('name');
  }

  get last_name() {
    return this.formValues.get('last_name');
  }

  get phone() {
    return this.formValues.get('phone');
  }

  get country() {
    return this.formValues.get('country');
  }

  get zip() {
    return this.formValues.get('zip');
  }

  get productTitle() {
    return this.formValues.get('productTitle');
  }

  get address() {
    return this.formValues.get('address');
  }

  get comment() {
    return this.formValues.get('comment');
  }

  createOrder() {
    this.loading = true;
    this.orderService.sendOrder({
      name: this.formValues.get('name')?.value!,
      last_name: this.formValues.get('last_name')?.value!,
      phone: this.formValues.get('phone')?.value!,
      product: this.formValues.get('productTitle')?.value!,
      comment: this.formValues.get(' comment')?.value,
      country: this.formValues.get('country')?.value!,
      zip: this.formValues.get('zip')?.value!,
      address: this.formValues.get('address')?.value!,
    }).subscribe((response) => {
      this.loading = false;
      if (response.success === 1 && !response.message) {
        this.showForm = false;
      } else {
        this.sendError = true;
        setTimeout(() => {
          this.sendError = false;
        }, 3000)
      }
    })
  }
}
