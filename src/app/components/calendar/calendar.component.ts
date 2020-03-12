import { Component, OnInit } from '@angular/core';
import { Client }    from '../../client';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  client = new Client(null,'',null,'','');
  submitted = false;
  calendar = [ ];

  getDaysCalendar() {

    var currentDate = moment();
    var weekStart = currentDate.clone().startOf('week');
    var weekEnd = currentDate.clone().endOf('week');
    for (let i = 0; i <= 6; i++) {
      let current = moment(weekStart).add(i, 'days');
      let month = current.format("MMM");
      let day = current.format("dd");
      let numDay = current.format("D");
        this.calendar.push({
          day,
          month,
          numDay,
          available:(current.format("dddd").indexOf('Friday') > -1 || current.format("dddd").indexOf('Saturday') > -1) ? false : true,
        });
    };
    console.table(this.calendar);
}
  constructor() {}
  ngOnInit() {
    let now = moment().format('LLLL');
    //moment.weekdaysShort();
    this.getDaysCalendar();
  }

  onSubmit() { this.submitted = true; }
  setGender(type){
    this.client.type = type;
  }
  setName(name){
    this.client.name = name;
  }
}
