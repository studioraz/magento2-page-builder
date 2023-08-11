/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/**
 * @api
 */
define([
    'Magento_Ui/js/form/components/fieldset',
    'underscore'
], function (Fieldset, _) {
    'use strict';

    return Fieldset.extend({
        defaults: {
            template: 'SR_PageBuilder/form/fieldset-with-description'
        },

        initConfig: function () {
            this._super();

            let label = JSON.parse(this.label.replaceAll('\n', ''));

            this.label = label.label;
            this.description = label.description;

            return this;
        }
    });
});
