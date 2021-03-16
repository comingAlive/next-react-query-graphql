import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-around p-4 text-xl bg-white">
      <div>Logo</div>
      <div className="flex space-x-8">
        <Link href="/">
          <a>Campaigns</a>
        </Link>

        <Link href={"/campaigns/new"}>
          <a>+</a>
        </Link>
      </div>
    </header>
  );
};
export default Header;
