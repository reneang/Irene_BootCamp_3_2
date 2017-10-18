import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-roomlist',
  templateUrl: './roomlist.component.html',
  styleUrls: ['./roomlist.component.css']
})
export class RoomlistComponent implements OnInit {

  constructor(private http:Http) { }

  ngOnInit() {
  }
  RoomList : object[] = [{'RoomNumber' : 'Room 101', 'vacant' : true , 'occupied' : true},{'RoomNumber' : 'Room 102', 'vacant' : true , 'occupied' : true},{'RoomNumber' : 'Room 103', 'vacant' : true, 'occupied' : true}];
  
    BookRoom() : object[] {
      var vacant : object[] = [];
      for (var i = 0; i < this.RoomList.length; i++) {
        var room = this.RoomList[i];
        if (room["vacant"] == true && room["occupied"] == false ) {
          vacant.push(room);
        }
      }
      return vacant;
    }
    
    Book(id) : void {
      for (var i = 0; i < this.RoomList.length; i++) {
        if (this.RoomList[i]['RoomNumber'] == id) {
          this.RoomList[i]['vacant'] = false;
          this.RoomList[i]['occupied'] = true;
          break;
        }
      }
    }
}
