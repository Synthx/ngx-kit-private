import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { KtIconComponent, ktIconData } from './icon.component';
import { NgForOf } from '@angular/common';

export default {
    title: 'Iconography',
    component: KtIconComponent,
    decorators: [
        moduleMetadata({
            imports: [NgForOf],
        }),
    ],
} as Meta<KtIconComponent>;

const Template: Story<KtIconComponent> = () => {
    const options = ktIconData;

    return {
        props: { options },
        styles: [
            `
            .icon-container {
                display: flex;
                flex-wrap: wrap;
                gap: 20px;
            }

            .icon-container > .icon {
                 height: 120px;
                 width: 120px;
                 box-sizing: border-box;
                 background-color: #ffffff;
                 border-radius: 8px;
                 padding: 15px;
                 display: flex;
                 flex-direction: column;
                 align-items: center;
                 justify-content: center;
                 gap: 8px;
            }

            .icon-container > .icon > kt-icon {
                 height: 32px;
                 width: 32px;
            }
        `,
        ],
        template: `
            <div class="icon-container">
                <div class="icon" *ngFor="let option of options">
                    <kt-icon [name]="option"></kt-icon>
                    {{ option }}
                </div>
            </div>`,
    };
};

export const Default = Template.bind({});
Default.args = {};
