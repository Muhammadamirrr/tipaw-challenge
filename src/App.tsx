import { Footer, Header, Tagline } from './components'
import { MainContainer, BodyContainer } from './App.styles'
import SignUp from './containers/Landing'

const App = () => (
  <MainContainer>
    <Header />

    <BodyContainer>
      <SignUp />
    </BodyContainer>

    <Tagline />
    <Footer />
  </MainContainer>
)

export default App
