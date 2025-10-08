import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    private dataUrl = 'data.json';
    private http = inject(HttpClient);

    public getContacts(): Observable<Contact[]> {
        return this.http.get<Contact[]>(this.dataUrl);
    }
}
