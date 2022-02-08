import { Theme } from './Theme.constant';

export enum ThemeVariant {
    Default = 'default',
}

export const ThemesProps: Record<ThemeVariant, typeof Theme> = {
    [ThemeVariant.Default]: Theme,
};

export type ThemePropsType = typeof ThemesProps[keyof typeof ThemesProps];
