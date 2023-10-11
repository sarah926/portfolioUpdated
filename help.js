// // const cursor = document.querySelector(".cursor");
// // document.addEventListener("mousemove", (e) => {
// //     cursor.style.cssText = 
// //             top: ${e.y -80}px;
// //             left: ${e.x -80}px;
            
// //         cursor.computedStyleMap
// // });
// // var $cursor = $('.cursor');
// // function moveCursor(e){
// //     $cursor.css({
// //         "top": e.pageY,
// //         "left": e.pageX
// //     });
// // }
// // $(window).on('mousemove', moveCursor);

// document.body.onmousemove = function(e) {
//     document.documentElement.style.setProperty (
//       '--x', (
//         e.clientX+window.scrollX
//       )
//       + 'px'
//     );
//     document.documentElement.style.setProperty (
//       '--y', (
//         e.clientY+window.scrollY
//       ) 
//       + 'px'
//     );
//   }
// document.addEventListener("DOMContentLoaded", () => {
//     const title = document.querySelector(".title");
//     const cursor = document.createElement("div");
//     const cHeightHover = 100;
//     const cWidthHover = 100;
//     const cWidth = 25;
//     const cHeight = 25;
//     cursor.classList.add("cursor");
//     document.body.appendChild(cursor);

//     document.body.addEventListener("mousemove", (event) =>{
//         event.preventDefault();
//         let tempX = event.clientX;
//         let tempY = event.clientY;
//         const rectangle = title.getBoundingClientRect();
//         const titleBounds = 
//             tempX > rectangle.left && tempX < rectangle.right && tempY > rectangle.top && tempY < rectangle.bottom;

//         if(titleBounds){
//             cursor.style.width = cWidthHover + "px";
//             cursor.style.height = cHeightHover + "px";
//             cursor.style.top = (y- cHeightHover / 2) + "px";
//             cursor.style.left = (x- cWidthHover / 2) + "px";
//         } else{
//             cursor.style.width = cWidth + "px";
//             cursor.style.height = cHeight + "px";
//             cursor.style.top = (y- cHeight / 2) + "px";
//             cursor.style.left = (x- cWidth / 2) + "px";
//         }

//     })
// })
