
import { style, group, animate, transition, animateChild, trigger, query } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('ContactsList => ContactDetail', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ right: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ right: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ right: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('ContactDetail => ContactsList', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);