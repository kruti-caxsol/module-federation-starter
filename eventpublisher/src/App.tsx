import '../src/style.css'
import Hoctest from './components/Hoctest'
 const App = () => {
  return (
    <>
      <h1>This is MFE-dashboard running in {process.env.NODE_ENV} mode</h1>
      <Hoctest>
        <div>hello test hoc</div>
      </Hoctest>
    </>
  )
}
export default App