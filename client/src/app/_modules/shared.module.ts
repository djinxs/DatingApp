import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ToastrModule } from 'ngx-toastr';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FileUploadModule } from 'ng2-file-upload';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { TimeagoModule } from "ngx-timeago";
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
    NgxGalleryModule,
    NgxSpinnerModule.forRoot({
      type: 'line-scale-party'
    }),
    PaginationModule.forRoot(),
    ButtonsModule.forRoot(),
    FileUploadModule,
    TimeagoModule.forRoot(),
    ModalModule.forRoot(),
  ],
  exports: [
    BsDropdownModule,
    BsDatepickerModule,
    TabsModule,
    ToastrModule,
    NgxGalleryModule,
    NgxSpinnerModule,
    PaginationModule,
    ButtonsModule,
    FileUploadModule,
    TimeagoModule,
    ModalModule,
  ]
})
export class SharedModule { }
