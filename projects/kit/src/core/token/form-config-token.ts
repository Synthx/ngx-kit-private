import { InjectionToken } from '@angular/core';

export interface KtFormConfig {
    [key: string]: string;
}

export const KT_FORM_CONFIG_TOKEN = new InjectionToken<KtFormConfig>('kitFormConfig');
