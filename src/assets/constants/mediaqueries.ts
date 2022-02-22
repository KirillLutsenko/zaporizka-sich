import Breakpoint from './breakpoint';

const lower = (bp: Breakpoint): string => `@media (max-width: ${bp - 1}px)`;
const greater = (bp: Breakpoint): string => `@media (min-width: ${bp}px)`;
const between = (bpFrom: Breakpoint, bpTo: Breakpoint) => `@media (min-width: ${bpFrom}px) and (max-width: ${bpTo - 1}px)`;

export const mq = {
    lowerXxs:     lower(Breakpoint.Xxs),
    lowerXs:      lower(Breakpoint.Xs),
    lowerSm:      lower(Breakpoint.Sm),
    lowerMd:      lower(Breakpoint.Md),
    lowerLg:      lower(Breakpoint.Lg),
    lowerXl:      lower(Breakpoint.Xl),
    lowerXxl:     lower(Breakpoint.Xxl),
    greaterXs:    greater(Breakpoint.Xs),
    greaterSm:    greater(Breakpoint.Sm),
    greaterMd:    greater(Breakpoint.Md),
    greaterLg:    greater(Breakpoint.Lg),
    greaterXl:    greater(Breakpoint.Xl),
    greaterXxl:   greater(Breakpoint.Xxl),
    betweenXxsMd: between(Breakpoint.Xxs, Breakpoint.Md),
    betweenSmMd:  between(Breakpoint.Sm, Breakpoint.Md),
    betweenSmXl:  between(Breakpoint.Sm, Breakpoint.Xl),
    betweenSmLg:  between(Breakpoint.Sm, Breakpoint.Lg),
    betweenMdLg:  between(Breakpoint.Md, Breakpoint.Lg),
    betweenMdXl:  between(Breakpoint.Md, Breakpoint.Xl),
    betweenLgXl:  between(Breakpoint.Lg, Breakpoint.Xl),
    betweenXlXxl: between(Breakpoint.Xl, Breakpoint.Xxl),
    betweenXsSm:  between(Breakpoint.Xs, Breakpoint.Sm),
    betweenMdXxl: between(Breakpoint.Md, Breakpoint.Xxl),
};

export default mq;
