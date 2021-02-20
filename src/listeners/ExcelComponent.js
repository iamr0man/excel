import {DomListener} from '@/listeners/DomListener'

export class ExcelComponent extends DomListener {
    constructor($root, options = {}) {
        super($root, options.listeners);
        this.name = options.name || ''
    }

    init() {
        this.initDomListeners()
    }

    // Возвращает шаблон компонента
    toHTML() {
    return ''
  }
}
