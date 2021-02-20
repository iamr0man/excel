class Dom {
    constructor(selector) {
        // #app
        this.$el = typeof selector === 'string'
        ? document.querySelector(selector)
        : selector
    }

    append(node) {
        this.$el.append(node.$el || node)
        return this
    }

    on(eventType, fn) {
        this.$el.addEventListener(eventType, fn)
    }

    off(eventType) {
        this.$el.removeEventListener(eventType)
    }

    // getter && setter
    html(html) {
        if(typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }
}

export function $(selector) {
    return new Dom(selector)
}

$.create = (tagName = 'div', className = '') => {
    const el = document.createElement(tagName)
    el.classList.add(className)
    return $(el)
}
