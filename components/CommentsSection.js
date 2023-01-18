import { DiscussionEmbed } from 'disqus-react';

export default function CommentsSection({identifier, title}) {
    return (
      <DiscussionEmbed
        shortname='devador'
        config={
          {
            url: 'https://devador.com.br/blog/'+identifier,
            identifier,
            title,
            language: 'pt_BR' //e.g. for Traditional Chinese (Taiwan)	
          }
        }
      />
    )
}

