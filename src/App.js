import React from "react";
import "./App.css";
import Sidebar from "./components/sidebar";
import UserCard from "./components/usercard";
import Posts from "./components/posts";

const baseURL = "https://jsonplaceholder.typicode.com";

class App extends React.Component {
  state = { users: [], posts: [] };

  async componentDidMount() {
    if (!this.props.match.params.user) this.props.history.push("/1");
    const users = await this.fetchUsers();
    const posts = await this.fetchPosts(users);
    this.setState({ users, posts });
  }

  fetchUsers = async () => {
    const users = await fetch(`${baseURL}/users`);
    return users.json();
  };

  fetchPosts = async users => {
    const posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${
        this.props.match.params.user
      }`
    );
    return await posts.json();
  };

  render() {
    return (
      <>
        <header>
          <h2>Lista de usuarios </h2>
        </header>
        <main className="container">
          <nav>
            <Sidebar users={this.state.users} />
          </nav>
          <section>
            <UserCard
              user={this.state.users[this.props.match.params.user - 1]}
            />
            {this.state.users.length > 0 && this.props.match.params.user ? (
              <h2>
                Posts from{" "}
                {this.state.users[this.props.match.params.user - 1].name}
              </h2>
            ) : null}
            <Posts posts={this.state.posts} />
          </section>
        </main>
        <footer>
          <p>Demo de Life Cycle Methods </p>
        </footer>
      </>
    );
  }
}

export default App;
