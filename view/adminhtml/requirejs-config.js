/**
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE for license details.
 */

var config = {
    config: {
        mixins: {
            'Magento_PageBuilder/js/modal/modal': {
                'SR_PageBuilder/js/modal/modal-mixin': true
            },
            'Magento_Ui/js/lib/validation/validator': {
                'SR_PageBuilder/js/form/element/validator-rules-mixin': true
            },
        }
    }
};
