import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'simulate';

  @Input() public id: string = '';

  public context: string = '';
  public fragment: string = '';
  public subscriptions: Subscription = new Subscription();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    const querySubscription = this.route.queryParamMap.subscribe((params) => {
      console.log('Query Params Received:', params);
      this.context = params.get('context') ?? 'No context';
    });
    this.subscriptions.add(querySubscription);
    const fragmentSubscription = this.route.fragment.subscribe((fragment) => {
      console.log('Fragment Received:', fragment);
      this.fragment = fragment ?? 'No fragment';
    });
    this.subscriptions.add(fragmentSubscription);
  }

  ngOnDestroy() {
    console.log('AppComponent destroyed');
    this.subscriptions.unsubscribe();
  }
}
