import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamService } from '../core/service/team.service';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  user!: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamService: TeamService
  ) {}

  ngOnInit() {
    const userId = this.activatedRoute.snapshot.params['id'];
    this.loadData(userId);
  }

  private loadData(userId: number) {
    this.teamService.getUser(userId).subscribe(
      (result) => {
        this.user = result;
      },
      (error) => {
        alert('Some error happens');
      }
    );
  }
}
