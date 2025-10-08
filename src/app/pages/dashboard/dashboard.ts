import { Component, CUSTOM_ELEMENTS_SCHEMA, signal, WritableSignal, OnInit } from '@angular/core';
import { Contact } from '../../core/models/alert.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.scss',
    imports: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Dashboard implements OnInit {
    public contacts: WritableSignal<Contact[]> = signal([]);

    public ngOnInit(): void {}
}
