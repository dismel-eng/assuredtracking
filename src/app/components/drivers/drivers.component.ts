import { Component, OnInit } from '@angular/core';
import { DriversService } from '../../drivers.service';
import { Driver } from '../../driver';

declare var $: any;

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  drivers: Driver[] = [];
  driversTable: any;

  constructor(
    private driversService: DriversService
  ) { }

  ngOnInit(): void {
    $(function () {
      
      //Tabel setup
      this.driversTable = $('#driversTable').DataTable({
        "responsive": true,
        "autoWidth": false,
        "aLengthMenu": [ 5, 10, 25, 50 ],
        "data": [],
        "columns": [
            { "data": 'firstName' },
            { "data": 'lastName' },
            { "data": 'id' }
        ]
      });

    });

    this.getUsers();
  }

  /**
   * This function get data from driversService and call the updateTable method
   */
  getUsers(){

    this.driversService.getDriversList()
    .subscribe(resp => {
      
      for (const data of resp.body["results"]) {

        let firstName = '';
        let lastName = '';
        let id = '';

        for (const key in data) {

          if (data.hasOwnProperty(key)){
            
            if(key === "name" && data[key].hasOwnProperty("first")){
              firstName = data[key]['first'];
              lastName = data[key]['last'];
            }

            if(key === "phone")
              id = data['phone'];
              
          }

        }

        this.drivers.push({
          firstName: firstName,
          lastName: lastName,
          id: id
        });
        
      }

      this.updateTable(this.drivers);

    })
  }

  /**  
   * This function update the table drivers given a drivers array
   * drivers: array of drivers
   * 
  */
  updateTable(drivers: any){

    $(function () {
      for (let index = 0; index < drivers.length; index++) {
        this.driversTable.row.add(drivers[index]).draw();
      }
    });
    
  } 

}
