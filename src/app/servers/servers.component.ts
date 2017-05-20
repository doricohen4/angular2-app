import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  AllowNewServer = false;
  serverCreationStatus = 'no server was create!';
  userCreationStatus = 'no server was create!';
  serverName = 'TestServer';
  userName = '';

  constructor() {
    setTimeout(() => {
      this.AllowNewServer = true;
    }, 2000);
  }


  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created Name is ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;

  }

  onCreateUserName(){

    this.userName = '';

  }

}
