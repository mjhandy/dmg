import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

import { getPolicyEffectiveDate } from '../../../utils/policy-effective-date';

@Component({
  selector: 'app-privacy',
  imports: [DatePipe],
  templateUrl: './privacy.html',
  styleUrl: './privacy.scss'
})
export class Privacy {
  readonly effectiveDate = getPolicyEffectiveDate();
}
