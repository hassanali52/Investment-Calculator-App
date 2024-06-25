import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../Models/Investment-Input.model'; 


@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() Calculate = new EventEmitter<InvestmentInput>();

  eneteredInitialInvestment = 0;
  eneteredAnnualInvestment = 0;
  eneteredExpectedRetrun = 5;
  eneteredDuration = 10;

  OnSubmit()
  {
    this.Calculate.emit({
      initialInvestment : this.eneteredInitialInvestment,
      annualInvestment : this.eneteredAnnualInvestment,
      duration : this.eneteredDuration,
      expectedRetrun : this.eneteredExpectedRetrun
    });
  }
}
