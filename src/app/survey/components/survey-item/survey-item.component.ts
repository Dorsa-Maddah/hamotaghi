import { Component, Input } from '@angular/core';
import { Survey } from '../../models';

@Component({
  selector: 'survey-item',
  templateUrl: './survey-item.component.html',
  styleUrls: ['./survey-item.component.css'],
})
export class SurveyItemComponent {
  @Input() data: Survey.Question | null = null;
  public selectedIndex = -1;

  selectItem(index: number) {
    this.selectedIndex = index;
  }
}
