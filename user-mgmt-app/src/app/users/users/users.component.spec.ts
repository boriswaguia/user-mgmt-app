import { HttpClientTestingModule } from '@angular/common/http/testing'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'

import { UsersComponent } from './users.component'

fdescribe('UsersComponent', () => {
    let component: UsersComponent
    let fixture: ComponentFixture<UsersComponent>;

    let modalService: NgbModal;

    let mockNgbModal: jasmine.SpyObj<NgbModal> = jasmine.createSpyObj<NgbModal>('NgbModal',['open']);

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [UsersComponent],
            providers: [
              {provide: NgbModal, useValue: mockNgbModal}
            ]
        }).compileComponents()
    })

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent)
        component = fixture.componentInstance

        modalService = TestBed.inject(NgbModal);

        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should open the modal when the user click on new user', () => {
      fixture.debugElement.query(By.css('.open-user-form-test')).nativeElement.click();
      expect(mockNgbModal.open).toHaveBeenCalledTimes(1);
    });
})
