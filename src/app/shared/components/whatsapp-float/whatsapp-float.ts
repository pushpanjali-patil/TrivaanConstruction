import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-float',
  standalone: true,
  templateUrl: './whatsapp-float.html',
  styleUrl: './whatsapp-float.scss'
})
export class WhatsappFloat {

  phone = input('919511976895');

  message = input(
    'Hello Trivaan Constructions, I would like to discuss my construction project.'
  );

  whatsappUrl = computed(() =>
    `https://wa.me/${this.phone()}?text=${encodeURIComponent(this.message())}`
  );

}