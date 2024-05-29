import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganismHeaderComponent } from './organism-header.component';

describe('OrganismHeaderComponent', () => {
  let component: OrganismHeaderComponent;
  let fixture: ComponentFixture<OrganismHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganismHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganismHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
