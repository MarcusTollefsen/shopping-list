import Link from "next/link";

function Home() {
  return (
    <div className="wrapper">
      <h1>Velkommen til nettstedet ditt</h1>
      <nav>
        <ul>
          <li>
            <Link href="/api/shoppinglist" passHref>
              Gå til Handleliste
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;