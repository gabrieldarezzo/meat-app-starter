import { Component, OnInit } from '@angular/core';


import { RadioOption } from '../shared/radio/radio-option.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  patymentOptions : RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Debito', value: 'DEB'},
    {label: 'Cartão de Refeição', value: 'REF'}


  ]

  constructor() { }

  ngOnInit() {
  }

}
