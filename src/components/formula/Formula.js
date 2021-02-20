import {ExcelComponent} from '@/listeners/ExcelComponent'

export class Formula extends ExcelComponent {
    static className = 'excel__formula'

    constructor($root) {
        super($root, {
            name: 'Formula',
            listeners: ['input', 'click']
        });

    }

    onInput() {
        console.log('Formula: onInput ', event)
    }

    onClick() {
        console.log('Formula: onClick ', event)
    }

    toHTML() {
        return `
            <div class="info">fx</div>
            <div class="input" contenteditable spellcheck="false"></div>
        `
    }
}
