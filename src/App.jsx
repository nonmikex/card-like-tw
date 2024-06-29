import Card from "./components/Card"
import { users } from './data/users'

function App() {
  return (
    <main className="main">
      <section className="app">
        {users.map(({ fullName, userName, isFollowing }) => {
          return (
            <Card key={fullName} fullName={fullName} userName={userName} initialFollowing={isFollowing} />
          )
        })}
      </section>
    </main>
  )
}

export default App