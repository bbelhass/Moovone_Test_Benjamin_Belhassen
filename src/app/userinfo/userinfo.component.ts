import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {

  private FirstName: any;
  private LastName: any;
  private Email: any;

  constructor(private svc: UserService) {}

  ngOnInit() {
    this.svc.getUserInfo().subscribe(data => {
      this.FirstName = data.firstName;
      this.LastName = data.lastName;
      this.Email = data.email;
    },
    err => alert("Impossible d'acceder aux informations de l'utilisateur; error status:"+err.status)
  );
  }

  @Input('albumNumber') albumNumber: number;

}
