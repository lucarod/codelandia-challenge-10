import Head from '../../Atoms/Head'
import PageTitle from '../../Atoms/PageTitle'
import Typography from '../../Atoms/Typography'
import SectionCards from '../../Organisms/SectionCards'
// import Flex from '../..//Atoms/Flex'
import SectionHighlightedCards from '../../Organisms/SectionHighlightedCards'

const HomeTemplate = () => {
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
        <SectionHighlightedCards
          title={title}
          category={category}
          imageUrl={imageUrl}
        />
        <SectionCards
          sectionTitle="Notícias mais recentes"
          columns={3}
          cardTitle={title}
          category={category}
          imageUrl={imageUrl}
        />
      </main>
    </>
  )
}

export default HomeTemplate
