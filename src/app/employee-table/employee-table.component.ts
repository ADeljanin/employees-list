import { Component, OnInit } from '@angular/core';
import { TeamService } from '../core/service/team.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm = '';

  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.loadData();
  }

  search(value: string): void {
    this.filteredUsers = this.users.filter(val =>
      val.name.toLowerCase().includes(value.toLocaleLowerCase())
    );
  }

  private loadData() {
    this.teamService.getUsers().subscribe(
      (result) => {
        this.users = result;
        this.filteredUsers = [...result];
      },
      (error) => {
        alert('Some error happens');
      }
    );
  }
}
