import { IWidgetAttributes } from './model/widget-attributes';

export class Widget {
    container: HTMLElement;
    attributes: IWidgetAttributes;
    template: string;
    
    constructor(id: string) {
        this.container = document.getElementById(id);
        // Initialise
        this.init();
    }

    render() {
        this.container.innerHTML = this.getInnerHtml();
    }

    getInnerHtml(): string {
        this.template = `<div class="bg-partner-widget-container" style="width: ${this.attributes.width}px; height: ${this.attributes.height}px;">
<div class="bg-partner-widget-container-inner"><div></div>`;
        return this.template;
    }

    private init(): void {
        // Get values from data attributes
        const containerId = this.container.getAttribute('id');
        const width = this.container.getAttribute('data-widget-width');
        const height = this.container.getAttribute('data-widget-height');
        const partnerId = this.container.getAttribute('data-partner-id');
        const customerPostcode = this.container.getAttribute('data-target-customer-postcode');

        this.attributes = {
            id: containerId,
            width: this.isNumeric(width) ? parseFloat(width) : 0,
            height: this.isNumeric(height) ? parseFloat(height) : 0,
            partnerId: partnerId || null,
            targetCustomerPostcode: customerPostcode || null
        };
    }

    private isNumeric(n: any) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
}
