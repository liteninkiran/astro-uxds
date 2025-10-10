import { Component, input } from '@angular/core';
import { RUX_IMPORTS } from '../../core/rux.imports';
import { Contact } from '../../core/models/contact.model';

@Component({
    selector: 'app-contact-list',
    imports: [RUX_IMPORTS],
    templateUrl: './contact-list.html',
    styleUrl: './contact-list.scss',
})
export class ContactList {
    public contacts = input.required<Contact[]>();
}
