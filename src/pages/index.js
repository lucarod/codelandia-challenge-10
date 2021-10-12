import Head from '../components/Atoms/Head'
import PageTitle from '../components/Atoms/PageTitle'

export default function Home() {
  return (
    <div>
      <Head title='Homepage' />

      <main>
        <PageTitle maxWidth='492px'>
          <h1>Mundo Nerd? <br/> Naped!</h1>
          <h2>
            O Naped pode ser sua fonte de informações sobre o mundo nerd e outros assuntos relacionados
          </h2>
        </PageTitle>
      </main>
    </div>
  )
}
