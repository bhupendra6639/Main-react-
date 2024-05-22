// // import "./style/Blog.css";
// // function Blog(title, description, imgurl) {
// //     // title = "Securing Node.js in Production: Expert Practices for Every Developer";
// //     // description = "Perspiciatis sunt ducimus facere est voluptates tempora. Totam eius dignissimos dicta maiores.";
// //     // imgurl = "https://miro.medium.com/v2/da:true/resize:fill:140:140/0*3Xdd_WEaRxryzfLC";

// //     return (
// //         <>
// //             <div className="container">
// //                 <div className="description">
// //                     <h3>{title}</h3>
// //                     <p>{description}</p>
// //                 </div>
// //                 <div className="imgwrapper">
// //                     <img src={imgurl} />
// //                 </div>
// //             </div>
// //         </>
// //     );
// // }
// // export default Blog;
// import "./style/Blog.css";

// function Blog({ title, description, imgurl }) {
//     return (
//         <>
//             <div className="blogContainer">
//                 <div className="details">
//                     <h3>{title}</h3>
//                     <p>{description}</p>
//                 </div>
//                 <div className="imageWrapper">
//                     <img src={imgurl} alt="" />
//                 </div>
//             </div>
//         </>
//     )
// };

// export default Blog;

import "./style/Blog.css";
function Blog({ title, description, imgUrl }) {
    return (
        <>

            <div className="blogcontainer">
                <div className="description">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="imgwrapper">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </>
    );
};
export default Blog;