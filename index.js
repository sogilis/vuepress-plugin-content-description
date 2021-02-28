module.exports = (options = {}) => ({
  extendPageData($page) {
    const {
      regularPath,
      path,
      frontmatter,
      _strippedContent,
    } = $page;

    if (!_strippedContent) {
      return $page;
    }

    if (frontmatter && frontmatter.description) {
      $page.description = frontmatter.description;
      return $page;
    }

    const excludePage =
      options.excludes &&
      options.excludes.some((p) => {
        const testRegex = new RegExp(p);
        return testRegex.test(path) || testRegex.test(regularPath);
      });

    if (excludePage) {
      return $page;
    }

    /**
     * Ass Hugo https://gohugo.io/content-management/summaries/
     */
    const numberOfWords = options.numberOfWords ? options.numberOfWords : 70;

    // Inspired from https://github.com/webmasterish/vuepress-plugin-feed/blob/3a7ecbeebe05ed759884d155b054a5ce1f646546/lib/Page.js#L277
    // DO NOT USE THEIR REGEX DEFINED AT https://github.com/webmasterish/vuepress-plugin-feed/blob/3a7ecbeebe05ed759884d155b054a5ce1f646546/index.js#L166 . Sometime it skip first paragraphs
    // Not that following node package are provied by vuepress-plugin-feed
    // And vuepress-plugin-feed is provides by @vuepress/plugin-blog,
    const REMOVE_MARKDOWN = require('remove-markdown');
    const STRIPTAGS = require('striptags');
    const match = STRIPTAGS(
      REMOVE_MARKDOWN(_strippedContent.trim(), { useImgAltText: false }),
    );
    if (match) {
      $page.description = match.split(' ').slice(0, numberOfWords - 1).join(' ');
    }

    return $page;
  },
});
