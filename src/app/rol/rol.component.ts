import { Component, OnInit } from '@angular/core';
import { Rol } from './rol';

const roles:Rol[]=[{idrol:1 ,nomrol:'admin',estado:'1'}];

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css']
})
export class RolComponent implements OnInit {
  dpc: string [] = ['idrol', 'nomrol', 'estado'];
  dataSource = roles;
  constructor() { }

  ngOnInit(): void {
  }

}
