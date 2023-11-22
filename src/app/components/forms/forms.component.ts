import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { GetUnitsService } from 'src/app/services/get-units.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit{
  results = []
  formGroup!: FormGroup

  constructor(private formBuilder: FormBuilder, private unitsService: GetUnitsService) {}

  ngOnInit(): void {
    this.unitsService.getAllUnits().subscribe((data) => console.log(data))
    this.formGroup= this.formBuilder.group({
      hour: '',
      showClosed: false,
    })
  }

  onSubmit(): void {
    console.log(this.formGroup.value)
  }

  onClean(): void {
    this.formGroup.reset()
  }
}
