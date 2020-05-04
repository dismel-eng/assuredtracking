import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      

      $('#driversTable').DataTable({
        "responsive": true,
        "autoWidth": false,
        "aLengthMenu": [ 5, 10, 25, 50 ]
      });

    });
  }

}
