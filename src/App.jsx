// import './App.css'
// import Blog from './component/Blog'

// function App() {
//   const blogs = [
//     {
//       id: 1,
//       title: "Securing Node.js in Production: Expert Practices for Every Developer",
//       description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
//       imgurl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
//     },
//     {
//       id: 2,
//       title: "Securing Node.js in Production: Expert Practices for Every Developer",
//       description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
//       imgurl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
//     },
//     {
//       id: 2,
//       title: "Securing Node.js in Production: Expert Practices for Every Developer",
//       description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
//       imgurl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
//     },
//   ];
//   // blogs.map((blog) => {
//   //   console.log(blog.title, blog.description, blog.imgurl);
//   // });

//   return (
//     <>
//       {/* <Blog />
//       <Blog />
//       <Blog />
//       <Blog /> */}
//       <h2>BLOGS</h2>
//       {
//         blogs.map((blog) => (
//           <Blog
//             title={blog.title}
//             description={blog.description}
//             imgurl={blog.imgurl}
//           />
//         ))}
//     </>
//   )
// };
// export default App;

// // import "./App.css";
// // import Blog from "./component/Blog";
// // function App() {
// //   const blogs = [
// //     {
// //       id: 1,
// //       title: "Securing Node.js in Production: Expert Practices for Every Developer",
// //       description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
// //       imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
// //     },
// //     {
// //       id: 2,
// //       title: "Because of a Question About try…catch, I Failed My Interview",
// //       description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
// //       imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*oY_ucPmMlywwHFow"
// //     }
// //   ];

// //   const blogTitles = blogs.map((blog) => {
// //     return { blogId: blog.id, title: blog.title }
// //   });

// //   console.log(blogTitles);

// //   return (
// //     <>
// //       <h2>My Blogs</h2>

// //       {blogs.map((blog) => (
// //         <Blog
// //           title={blog.title}
// //           description={blog.description}
// //           imgUrl={blog.imgUrl}
// //         />
// //       ))}
// //     </>
// //   )
// // }

// // export default App;

import "./App.css"
import Blog from "./component/Blog";
import Card from "./component/Blog/Card1";
function App() {

    const blogs = [
        {
            id: 1,
            title: "Securing Node.js in Production: Expert Practices for Every Developer",
            description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
            imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
        },
        {
            id: 2,
            title: "Because of a Question About try…catch, I Failed My Interview",
            description: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
            imgUrl: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*oY_ucPmMlywwHFow"
        }
    ];
    const cards = [
        {
            id: 1,
            title2: "Securing Node.js in Production: Expert Practices for Every Developer",
            description2: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
            imgUrl2: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
        },
        {
            id: 2,
            title2: "Securing Node.js in Production: Expert Practices for Every Developer",
            description2: "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.",
            imgUrl2: "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC"
        },
    ];

    blogs.map((blog) => {
        console.log(blog.title + "/n/n/n" + blog.description + "/n/n");
    });
    return (
        <>
            <h3>Blog</h3>
            {blogs.map((blog) => (
                <Blog
                    title={blog.title}
                    description={blog.description}
                    imgUrl={blog.imgUrl}
                />
            ))}

            {cards.map((card) => (
                <Card
                    title2={card.title2}
                    description2={card.description2}
                    imgurl2={card.imgUrl2}
                />
            ))}
        </>
    );
};
export default App;