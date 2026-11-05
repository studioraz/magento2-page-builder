# Magento Page Builder Extra Features module 

## Features
1. Change the TinyMCE settings for the Page Builder
2. Adds new styles for the Text Area Editor in Page Builder
3. Accordion content type
4. HTML Video content type
5. Additional Preview Viewports: laptop (1024px - 1279px) and tablet (768px - 1023px)

## Installation

1. To access Studio Raz *private* packages in Composer, configure authentication for the project:
    ```
    composer config --auth http-basic.repo.packagist.com <username> <password>
    ```
2. Set up the custom repository with the following command
    ```
    composer config repositories.private-packagist composer https://repo.packagist.com/studioraz/
    composer config repositories.packagist.org false
    ```

3. Install this module within Magento 2 using composer
    ```
    composer require studioraz/magento2-page-builder
    ```

4. After this, enable the module as usual
    ```
    bin/magento mo:e SR_PageBuilder &&
    bin/magento s:up
    ```

## Releases

Releases follow the [shared Release Please guide](https://github.com/studioraz/ci-templates/blob/master/docs/release-please.md).
Use Conventional Commit PR titles (`feat: add support`, `fix: correct behavior`).
Squash merges use the PR title and body; single-commit PRs must have a matching commit title.

Pushes to `master`, the Monday 06:00 UTC schedule and manual runs maintain the release PR and synchronize shared configuration.
Merging a release PR creates a GitHub Release and an unprefixed SemVer tag, and updates the root `CHANGELOG.md`.
Enrollment preserves existing release history (verified baseline `1.10.0`).

The optional `RELEASE_TOKEN` is forwarded to the shared workflow. Without it, `GITHUB_TOKEN` is used and bot-created PRs do not trigger PR-title CI. Supply a PAT or GitHub App token when those checks are required.
