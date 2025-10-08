import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject, Signal } from '@angular/core';
import { Contact } from '../../core/models/contact.model';
import { ContactService } from '../../core/services/contact.service';
import { toSignal } from '@angular/core/rxjs-interop';

const options = { initialValue: [] };

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.scss',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Dashboard implements OnInit {
    private contactService = inject(ContactService);

    public contacts: Signal<Contact[]> = toSignal(this.contactService.getContacts(), options);

    public ngOnInit(): void {}
}
