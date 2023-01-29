

class Btn extends HTMLElement {
    constructor() {
        super()
        const shaDom = this.attachShadow({ mode: 'open' })
        // this.p = this.h('p')
        // this.p.innerText = '小红'
        // this.p.setAttribute('style', 'width: 100px; height: 100px; border: 1px solid black')
        // shaDom.appendChild(this.p)

        const template = this.h('template')
        template.innerHTML = `
            <style>
                div {
                    width: 100px;
                    height: 100px;
                    border: 1px solid black;
                }
            </style>
            <div>小红</div>
        `
        shaDom.appendChild(template.content.cloneNode(true))
    }

    h(el) {
        return document.createElement(el)
    }

    // 生命周期
    // 当自定义元素第一次被连接到文档 DOM 时被调用。
    connectedCallback() {
        console.log('我已经插入了！！')
    }
    // 当自定义元与文档dom断开连接时调用
    disconnectedCallback() {
        console.log('我已经断开！！');
    }
    // 当自定义元素被移动到新文档时被调用
    adoptedCallback() {
        console.log('我被移动了！！');
    }
    // 当自定义元素的一个属性被增加、移除或更改时被调用
    attributeChangedCallback() {
        console.log('我改变了！！')
    }
}

window.customElements.define('xiao-hong', Btn)