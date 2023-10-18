import Image from 'next/image'

export default function Home() {
  return (
    <div className="container">
      <main>
        <h1>TODO APP</h1>
        <form>
          <input type="text" />
          <input type="submit" value="submit" />
        </form>
        <ul>
          <li>TODO1</li>
          <li>TODO2</li>
        </ul>
      </main>
    </div>
  )
}
