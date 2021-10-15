import Head from '../components/Atoms/Head'
import PageTitle from '../components/Atoms/PageTitle'
import Typography from '../components/Atoms/Typography'
import Card from '../components/Molecules/Card'

export default function Home() {
  const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.'
  const category = 'Lorem'
  const imageUrl = 'Vidas-ao-Vento-Naoko.jpg'

  return (
    <div>
      <Head title='Homepage' />

      <main>
        <PageTitle maxWidth='492px'>
          <Typography tag='h1' variant='title'>Mundo Nerd? <br /> Naped!</Typography>
          <Typography tag='h2' variant='subtitle'>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados
          </Typography>
        </PageTitle>
        <Card
          variant='highlightCard__small'
          title={title}
          category={category}
          imageUrl={imageUrl}
        />
      </main>
    </div>
  )
}
