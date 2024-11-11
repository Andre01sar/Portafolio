import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  contact = {
    name: '',
    email: '',
    message: ''
  };


  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.http.post('http://localhost:3700/api/send-email', this.contact).subscribe(
        response => {
          alert('Mensaje enviado con éxito.');
          form.reset();
        },
        error => {
          alert('Hubo un error al enviar el mensaje.');
        }
      );
    }
  }

  







}
