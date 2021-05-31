import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogPhotosComponent } from './catalog-photos.component';

describe('CatalogPhotosComponent', () => {
  let component: CatalogPhotosComponent;
  let fixture: ComponentFixture<CatalogPhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogPhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
