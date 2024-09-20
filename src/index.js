import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const author = "Jordan Moore";
const title = "Interesting Facts For Curious Minds";
const img = "/book-1.jpg"; // Remove 'public' from the path

/* ==== vanilla ==== */

// import React from "react";
// import ReactDOM from "react-dom/client";

// function Greeting() {
//   return <h2>My First Component</h2>;
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);

/* ==== formatted ==== */

// function Greeting() {
//   return (
//     <>
//       <div className="someValue">
//         <h3>hello people</h3>
//         <ul>
//           <li>
//             <a href="#">hello world</a>
//           </li>
//         </ul>
//       </div>
//       <h2>hello world</h2>
//       <input type="text" name="" id="" />
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);

/* ==== nested ==== */

// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   );
// }

// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>this is my message</p>;
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Greeting />);

/* ==== book list ==== */

// function BookList() {
//   return (
//     <section>
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
//     alt="Interesting Facts For Curious Minds"
//   />
// );
// const Title = () => {
//   return <h2>Interesting Facts For Curious Minds</h2>;
// };
// const Author = () => <h4>Jordan Moore </h4>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<BookList />);

/* ==== book list v2 ==== */

// function BookList() {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// }

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg"
//     alt="Interesting Facts For Curious Minds"
//   />
// );
// const Title = () => {
//   return <h2>Interesting Facts For Curious Minds</h2>;
// };
// const Author = () => <h4>Jordan Moore </h4>;

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<BookList />);

/* ==== props ==== */

function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book title={title} img={img} />
    </section>
  );
}

/* setting */
const Book = (props) => {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author} </h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);

/* ==== props v2 ==== */
