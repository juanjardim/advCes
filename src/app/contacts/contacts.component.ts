import { Component, OnInit } from '@angular/core'
declare var GMaps: any;
@Component({
    templateUrl: './contacts.component.html'
})
export class ContactsComponent implements OnInit {
    ngOnInit(): void {
        var element = document.getElementById('varzinLocation');
        if (!element)
            return;

        var map = new GMaps({
            zoom: 16,
            div: '#varzinLocation',
            lat: 41.381856,
            lng: -8.76329
        });
        map.addMarker({
            lat: 41.381856,
            lng: -8.76329,
            title: 'César Pires -Advogado',
            infoWindow: {
                content: '<p>César Pires - Advogado</p> <p>Rua Frei Sebastião de São Luís Nº 1A, 1º Andar Sala E 4490-639 Póvoa de Varzim - Portugal</p>'
            }
        });
    }
}
