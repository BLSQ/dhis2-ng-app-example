import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tracked-entity-list',
  templateUrl: './tracked-entity-list.component.html',
  styleUrls: ['./tracked-entity-list.component.scss'],
  providers: [ApiService]
})
export class TrackedEntityListComponent implements OnInit {
  members = [
    { id: 11, name: 'Bob Smith' },
    { id: 12, name: 'Sarah Shepard' },
    { id: 13, name: 'Tom Bombadil' },
    { id: 14, name: 'Froddo Baggins' },
    { id: 15, name: 'Same Gamegie' }
  ];

  entities;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getEntities().subscribe(result => { 
      this.entities = result["trackedEntityInstances"]
      console.log(this.entities[0])
    });
  }
}
