import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'nx-mean-cart1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart1.component.html',
  styleUrls: ['./cart1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Cart1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
