function NavBar({ user, onLogout }) {
  return (
    <nav >
      <div >
        <p >
          GraphQL Chat
        </p>
      </div>
      <div >
        {Boolean(user) && (
          <div >
            <button  onClick={onLogout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
