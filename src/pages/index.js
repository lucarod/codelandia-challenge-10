import Head from '../components/Atoms/Head'
import PageTitle from '../components/Atoms/PageTitle'
import Link from '../components/Atoms/Link'

export default function Home() {
  return (
    <div>
      <Head title='Homepage' />

      <main>
        <PageTitle maxWidth='492px'>
          <h1>Mundo Nerd? <br /> Naped!</h1>
          <h2>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados
          </h2>
        </PageTitle>
        <Link href='#' name='Lorem' variant='smallTag' />
        <Link href='#' name='Lorem' variant='mediumTag' />
        <Link href='#' name='Lorem' variant='largeTag' />
        <Link href='#' name='Lorem' variant='postTag' />
        <Link href='#' name='Lorem' variant='primary' />
      </main>
    </div>
  )
}
