import NextHead from 'next/head'

const Head = ({ title, keywords, description }) => {
  return (
    <NextHead>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </NextHead>
  )
}

Head.defaultProps = {
  title: '',
  keywords: '',
  description: ''
}

export default Head
