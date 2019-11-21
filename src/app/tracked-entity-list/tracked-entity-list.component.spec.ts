import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackedEntityListComponent } from './tracked-entity-list.component';

describe('TrackedEntityListComponent', () => {
  let component: TrackedEntityListComponent;
  let fixture: ComponentFixture<TrackedEntityListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackedEntityListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackedEntityListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
