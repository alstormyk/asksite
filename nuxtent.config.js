const Prism = require('prismjs')
const externalLinks = require('markdown-it-link-attributes')
const emoji = require('markdown-it-emoji')

module.exports = {
  parsers: {
    md: {
        extend(config) {
          config.highlight = (code, lang) => {
            return `<pre class="language-${lang}"><code class="language-${lang}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
          }
        },
        plugins: [
            emoji,
            [ externalLinks, { target: '_blank', rel: 'noopener' } ]
        ]
    }
  },
  content: [
    [
      'posts',
      {
      page: 'blog/_post',
      permalink: ':year/:slug',
      isPost: true,
      generate: [ 
        'get', 
        'getAll' 
      ],
      }
    ],
    [
      'infos',
      {
        page: 'info/_page',
        permalink: ':slug',
        isPost: false,
        generate: [ 
          'get', 
          'getAll' 
        ],
      }
    ]
  ],
  api: {
    baseURL: 'http://localhost:3000',
    browserBaseURL: 'http://localhost:3000' /*'https://asksite.netlify.com'*/
  }
}
