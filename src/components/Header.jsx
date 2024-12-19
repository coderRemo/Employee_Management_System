const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-medium">
        Hello, <br />
        <span className="text-3xl font-semibold">User 👋</span>
      </h1>
      <button className="border px-5 py-2 rounded-md bg-red-600 border-red-600 font-semibold">
        Log Out
      </button>
    </div>
  );
};

export default Header;
