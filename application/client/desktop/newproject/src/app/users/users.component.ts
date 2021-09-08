import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {
    public system = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }

    constructor (
        private usersService: UsersService,
    ) { }

    ngOnInit() {
        this.system.created_by = sessionStorage.getItem('email'); 
    }
    GpCreate() {
        this.usersService.GpCreate(this.system).subscribe(data => {
            this.system.name = ''
 	 	this.system.email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}