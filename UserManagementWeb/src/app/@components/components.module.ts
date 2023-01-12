/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxValidationMessageComponent } from './validation-message/validation-message.component';
import {
  NgxFilterByNumberComponent,
} from './custom-smart-table-components/filter-by-number/filter-by-number.component';

import { NbCheckboxModule } from '@nebular/theme';
import { CustomNg2CheckboxComponent } from './custom-smart-table-components/custom-checkbox/custom-checkbox.component';

const COMPONENTS = [
  NgxValidationMessageComponent,
  NgxFilterByNumberComponent
];

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        CommonModule,
        NbCheckboxModule
    ],
    exports: [...COMPONENTS],
    declarations: [...COMPONENTS, CustomNg2CheckboxComponent]
})
export class ComponentsModule {
}
