export class ToastComponent {
    constructor(parent) {
        this.parent = parent;
    }

    getHTML(data) {
        return `
            <div id="toast" class="toast show position-fixed bottom-0 end-0 m-3" role="alert" style="z-index: 1050;">
                <div class="toast-header">
                    <strong class="me-auto text-primary">Финансы</strong>
                    <small>только что</small>
                    <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body">
                    ${data.message}
                </div>
            </div>
        `;
    }

    render(data) {
        const oldToast = document.getElementById('toast');
        if (oldToast) oldToast.remove();

        const html = this.getHTML(data);
        this.parent.insertAdjacentHTML('beforeend', html);

        setTimeout(() => {
            const toastElement = document.getElementById('toast');
            if (toastElement) toastElement.remove();
        }, 3000);
    }
}
