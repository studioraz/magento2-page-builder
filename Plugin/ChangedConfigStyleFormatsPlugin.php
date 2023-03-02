<?php
/**
 * Copyright © 2023 Studio Raz. All rights reserved.
 * For more information contact us at dev@studioraz.co.il
 */

declare(strict_types=1);

namespace SR\PageBuilder\Plugin;

use Magento\Framework\DataObject;
use Magento\PageBuilder\Model\Wysiwyg\DefaultConfigProvider;

/**
 * Class changes styles format configuration for the TinyMCE styles for the page builder
 */
class ChangedConfigStyleFormatsPlugin
{
    /**
     * @param  DefaultConfigProvider $subject
     * @param  DataObject            $result
     * @param  DataObject            $config
     * @return DataObject
     */
    public function afterGetConfig(DefaultConfigProvider $subject, DataObject $result, DataObject $config): DataObject
    {
        $settings = $result->getData('settings');

        if (!$settings) {
            return $result;
        }

        $styleFormat = ($settings['style_formats'] ?? '');

        if (!$styleFormat) {
            return $result;
        }

        $newStyleFormat = [];
        foreach ($styleFormat as $style) {
            $newStyleFormat[] = $style;
        }
        $settings['style_formats'] = $newStyleFormat;
        $result->setData('settings', $settings);

        return $result;
    }
}
