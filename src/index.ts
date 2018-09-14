import './styles/style';

import { Widget } from './widget';

// Instantiate Widget
const widgets: HTMLCollection = document.getElementsByClassName('bg-partner-widget');

for(let cnt=0;cnt<widgets.length;cnt++) {
    const randomId: number = Math.random();
    const widgetId: string = `widget_${randomId}`;

    widgets[cnt].setAttribute('id', widgetId);
    const widget = new Widget(widgetId);
    widget.render();
}
