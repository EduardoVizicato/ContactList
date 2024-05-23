import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcontatoComponent } from './editarcontato.component';

describe('EditarcontatoComponent', () => {
  let component: EditarcontatoComponent;
  let fixture: ComponentFixture<EditarcontatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarcontatoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditarcontatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
