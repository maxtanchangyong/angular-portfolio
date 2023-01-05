import { state, animation, style, animate, trigger, keyframes, transition, query, group, animateChild, useAnimation } from '@angular/animations';

export const slideTopAndBottom = trigger('routeAnimation', [
    // need { optional: true } on the below or else will pop up error on the web console
    transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            })
        ], { optional: true }),
        query(':enter', [
            style({ top: '100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
            query(':leave', [
                animate('0.5s ease-out', style({ top: '-100%', opacity: 0 }))
            ], { optional: true }),
            query(':enter', [
                animate('0.5s 0.3s ease-out', style({ top: '0%', opacity: 1 }))
            ], { optional: true }),
            query('@*', animateChild(), { optional: true })
        ]),
    ])
]);

export const backgroundPanLeft = trigger('bgPanLeft', [
    transition(':enter', [
        animate('8s ease-in-out', keyframes([
            style({ backgroundPosition: '100% 0%', offset: 0 }),
            style({ backgroundPosition: '0% 100%', offset: 1 })
        ])),
    ])
])

export const trackingInExpand = trigger('trackingInExpand', [
    transition(':enter', [
        animate('3s ease-in-out', keyframes([
            style({ letterSpacing: '-0.5em', opacity: 0, offset: 0 }),
            style({ letterSpacing: '-0.25em', opacity: 0.2, offset: 0.4 }),
            style({ letterSpacing: '0em', opacity: 1, offset: 1 })
        ])),
    ])
]);

export const hoverUpToPortfolio = trigger('hoverUpToPortfolio', [
    state("false", style({
        border: '2px solid black',
        color: 'white',
        width: '20%',
        top: '0'
    })),
    state('true', style({
        backgroundColor: 'yellow',
        color: 'black',
        width: '20%',
        top: '-10px'
    })),
    transition('false <=> true', [
        animate('0.1s ease-out')
    ])
]);

// animation that can be customized
export const fadeInAnimationCustom = animation([
    style({
        opacity: '{{ opacity_before }}',
    }),
    animate(
        '{{ time }}',
        style({
            opacity: '{{ opacity_after }}'
        })
    )
]);