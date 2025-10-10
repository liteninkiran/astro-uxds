import { Component, input } from '@angular/core';
import { Contact } from '../../core/models/contact.model';
import {
    RuxTable,
    RuxTableBody,
    RuxTableCell,
    RuxTableHeader,
    RuxTableHeaderCell,
    RuxTableHeaderRow,
    RuxTableRow,
} from '@astrouxds/angular';

@Component({
    selector: 'app-contact-list',
    imports: [
        RuxTable,
        RuxTableHeader,
        RuxTableHeaderRow,
        RuxTableHeaderCell,
        RuxTableBody,
        RuxTableRow,
        RuxTableCell,
    ],
    templateUrl: './contact-list.html',
    styleUrl: './contact-list.scss',
})
export class ContactList {
    public contacts = input.required<Contact[]>();
}
