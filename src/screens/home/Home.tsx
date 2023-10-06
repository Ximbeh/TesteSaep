import './Home.css'
import Header from '../../components/header/Header'
import Navigation from '../../components/navigation/navigation'

function Home() {

  return (
    <div className='body'>
        <Header />
        <div className='sectionBody'>
          <Navigation />
          
          <main className='mainHome'>
            <section className='section1Home'>
              <article>
                <div className='buscar'>
                  <p>BUSCA</p>
                  <img src="" alt="" />
                </div>

                <div className='dashboard'>
                  <h1>DASHBOARD</h1>
                  <div className='gridGraficos'>
                    <div className='graficos'></div>
                    <div className='graficos'></div>
                    <div className='graficos'></div>
                  </div>
                </div>
              </article>

              <article className='avisos'>
                <h1>AVISOS/LEMBRETES</h1>
                <div className='avisosMain'>
                  <div className='avisosGrid'>
                    <div className='checklists'>
                      <p className='colunaText'>Coluna 1</p>
                      <input type="checkbox" name="" id="" />
                      <input type="checkbox" name="" id="" />
                      <input type="checkbox" name="" id="" />
                      <input type="checkbox" name="" id="" />
                      <input type="checkbox" name="" id="" />
                      <input type="checkbox" name="" id="" />
                    </div>
                    <div>
                      <p>Coluna 1</p>
                      <p>Coluna 2</p>
                      <p>Coluna 2</p>
                      <p>Coluna 2</p>
                      <p>Coluna 2</p>
                      <p>Coluna 2</p>
                      <p>Coluna 2</p>
                    </div>
                    <div>
                    <p>Coluna 1</p>
                      <p>Coluna 3</p>
                      <p>Coluna 3</p>
                      <p>Coluna 3</p>
                      <p>Coluna 3</p>
                      <p>Coluna 3</p>
                      <p>Coluna 3</p>
                    </div>
                    <div>
                    <p>Coluna 1</p>
                      <p>Coluna 4</p>
                      <p>Coluna 4</p>
                      <p>Coluna 4</p>
                      <p>Coluna 4</p>
                      <p>Coluna 4</p>
                      <p>Coluna 4</p>
                    </div>
                    <div>
                    <p>Coluna 1</p>
                      <p>Coluna 5</p>
                      <p>Coluna 5</p>
                      <p>Coluna 5</p>
                      <p>Coluna 5</p>
                      <p>Coluna 5</p>
                      <p>Coluna 5</p>
                    </div>
                    <div>
                    <p>Coluna 1</p>
                      <p>Coluna 6</p>
                      <p>Coluna 6</p>
                      <p>Coluna 6</p>
                      <p>Coluna 6</p>
                      <p>Coluna 6</p>
                      <p>Coluna 6</p>
                    </div>
                    <div>
                    <p>Coluna 1</p>
                      <p>Coluna 7</p>
                      <p>Coluna 7</p>
                      <p>Coluna 7</p>
                      <p>Coluna 7</p>
                      <p>Coluna 7</p>
                      <p>Coluna 7</p>
                    </div>
                  </div>
                </div>
              </article>

            </section>

            <section className='section2Home'>
              <div className='calendario'>

              </div>
              <div className='recados'>
                <div>
                </div>
                <div>
                </div>
                <div>
                </div>
              </div>
            </section>
          
          </main>

        </div>
    </div>
  )
}

export default Home
