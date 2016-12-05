"use strict";
var core_1 = require('@angular/core');
var id_1 = require("../utils/id");
var d3_1 = require('../d3');
var AreaComponent = (function () {
    function AreaComponent(element) {
        this.opacity = 1;
        this.startOpacity = 0.5;
        this.endOpacity = 1;
        this.gradient = false;
        this.clickHandler = new core_1.EventEmitter();
        this.initialized = false;
        this.element = element.nativeElement;
    }
    AreaComponent.prototype.ngOnChanges = function (changes) {
        if (!this.initialized) {
            this.loadAnimation();
            this.initialized = true;
        }
        else {
            this.update();
        }
    };
    AreaComponent.prototype.update = function () {
        var pageUrl = window.location.href;
        this.gradientId = 'grad' + id_1.id().toString();
        this.gradientFill = "url(" + pageUrl + "#" + this.gradientId + ")";
        this.animateToCurrentForm();
    };
    AreaComponent.prototype.loadAnimation = function () {
        this.areaPath = this.startingPath;
        setTimeout(this.update.bind(this), 100);
    };
    AreaComponent.prototype.animateToCurrentForm = function () {
        var node = d3_1.default.select(this.element).select('.area');
        node.transition().duration(750)
            .attr('d', this.path);
    };
    AreaComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'g[area]',
                    template: "\n    <svg:defs *ngIf=\"gradient\">\n      <svg:g svgLinearGradient\n        [color]=\"fill\"\n        orientation=\"vertical\"\n        [name]=\"gradientId\"\n        [startOpacity]=\"startOpacity\"\n        [endOpacity]=\"endOpacity\"\n      />\n    </svg:defs>\n    <svg:path\n      class=\"area\"\n      [attr.d]=\"areaPath\"\n      [attr.fill]=\"gradient ? gradientFill : fill\"\n      [attr.opacity]=\"opacity\"\n    />\n  ",
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush
                },] },
    ];
    /** @nocollapse */
    AreaComponent.ctorParameters = [
        { type: core_1.ElementRef, },
    ];
    AreaComponent.propDecorators = {
        'data': [{ type: core_1.Input },],
        'path': [{ type: core_1.Input },],
        'startingPath': [{ type: core_1.Input },],
        'fill': [{ type: core_1.Input },],
        'opacity': [{ type: core_1.Input },],
        'startOpacity': [{ type: core_1.Input },],
        'endOpacity': [{ type: core_1.Input },],
        'activeLabel': [{ type: core_1.Input },],
        'gradient': [{ type: core_1.Input },],
        'clickHandler': [{ type: core_1.Output },],
    };
    return AreaComponent;
}());
exports.AreaComponent = AreaComponent;
//# sourceMappingURL=area.component.js.map