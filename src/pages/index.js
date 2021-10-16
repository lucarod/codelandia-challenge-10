import Head from '../components/Atoms/Head'
import PageTitle from '../components/Atoms/PageTitle'
import Typography from '../components/Atoms/Typography'
// import Flex from '../components/Atoms/Flex'
import Highlights from '../components/Organisms/Highlights'

export default function Home() {
  const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
  const category = 'Lorem'
  const imageUrl = 'vidas-ao-vento-naoko.jpg'

  return (
    <>
      <Head title='Homepage' />

      <main>
        <PageTitle maxWidth='492px'>
          <Typography tag='h1' variant='largeTitle'>Mundo Nerd? <br /> Naped!</Typography>
          <Typography tag='h2' variant='largeSubtitle'>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados
          </Typography>
        </PageTitle>
        <Highlights
          title={title}
          category={category}
          imageUrl={imageUrl}
        />
      </main>
    </>
  )
}
