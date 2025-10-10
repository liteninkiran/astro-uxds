import { Component, OnInit, inject, Signal } from '@angular/core';
import { Contact } from '../../core/models/contact.model';
import { ContactService } from '../../core/services/contact.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContactList } from '../../components/contact-list/contact-list';
import { RuxContainer } from '@astrouxds/angular';

const options = { initialValue: [] };

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.scss',
    imports: [ContactList, RuxContainer],
})
export class Dashboard implements OnInit {
    private contactService = inject(ContactService);

    public contacts: Signal<Contact[]> = toSignal(this.contactService.getContacts(), options);

    public ngOnInit(): void {}
}
