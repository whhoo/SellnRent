// import { useState, useEffect } from "react"
// import { useAuth } from "../contexts/AuthContext";
// import { db } from "../firebase";

// export default function MyPosts () {
//     const [posts, setPosts] = useState([]);
//     const {currentUser} = useAuth();

//     useEffect(() => {
//         if (!currentUser) return;
//         db.collection("posts").where("email", "==", currentUser.email)
//             .get()
//             .then(docs => {
//                 docs.forEach(doc => console.log(doc.data()));
//             })
//     }, [currentUser]);

//     return (
//         <div>
//             {posts.length > 0 && posts[0].imgs}
//         </div>
//     )
// }