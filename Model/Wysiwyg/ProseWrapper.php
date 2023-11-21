<?php
/*
 * Copyright © 2023 Studio Raz. All rights reserved.
 * See LICENSE.txt for license details.
 */

declare(strict_types=1);

namespace SR\PageBuilder\Model\Wysiwyg;

use Magento\Framework\DataObject;
use Magento\Framework\View\Asset\Repository;

class ProseWrapper
{
    public const PLUGIN_NAME = 'prosewrapper';

    /**
     * @param Repository $assetRepo
     */
    public function __construct(protected Repository $assetRepo)
    {}

    /**
     * Return config settings for widgets insertion plugin based on editor element config
     *
     * @param \Magento\Framework\DataObject $config
     * @return \Magento\Framework\DataObject
     */
    public function getPluginSettings(DataObject $config) : array
    {
        $proseWrapper = [
            [   'name' => self::PLUGIN_NAME,
                'src' => $this->getWysiwygJsPluginSrc(),
                'options' => [
                    'title' => __('TW Prose Wrapper'),
                    'class' => 'add-prose-wrapper plugin'
                ],
            ]
        ];

        $plugins = $config->getData('plugins');
        $widgetConfig['plugins'] = array_merge($plugins, $proseWrapper);
        return $widgetConfig;
    }

    /**
     * Return url to wysiwyg plugin
     *
     * @return string
     */
    public function getWysiwygJsPluginSrc()
    {
        return $this->assetRepo->getUrl(
            sprintf('SR_PageBuilder::js/tiny_mce/plugins/%s/editor_plugin.js', self::PLUGIN_NAME)
        );
    }
}
