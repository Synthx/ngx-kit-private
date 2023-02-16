import { KT_FORM_CONFIG_TOKEN } from '../token/form-config-token';

export const KT_FORM_CONFIG_TOKEN_PROVIDER = {
    provide: KT_FORM_CONFIG_TOKEN,
    useValue: {
        required: 'This field is required',
    },
};
