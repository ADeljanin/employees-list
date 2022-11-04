import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeTableComponent,
  },
  {
    path: ':id/details',
    component: EmployeeDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
