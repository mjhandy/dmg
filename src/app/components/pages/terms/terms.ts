import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { getPolicyEffectiveDate } from '../../../utils/policy-effective-date';

@Component({
  selector: 'app-terms',
  imports: [DatePipe],
  templateUrl: './terms.html',
  styleUrl: './terms.scss'
})
export class Terms {
  readonly effectiveDate = getPolicyEffectiveDate();
}
