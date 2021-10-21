import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-two',
  templateUrl: './blog-two.component.html',
  styleUrls: ['./blog-two.component.scss']
})
export class BlogTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  blogs =[
    {
    "id":1,
    "post_type":"Featured post.",
    "name":"Woman wearing Silver-colore ring necklaces",
    "author":{
        "author_img":"assets/images/user-1.jpg",
        "author_name":"Billy Wade",
        "post_date": "14 Jan",
        "author_bio":"There's lot of hate out there for a text that amounts to little more than garbled words in an old language. The villagers are out there with a vengeance to get that Frankenstein, wielding torches and pitchforks, wanting to tar and feather it at the least, running it out of town in shame"
    },
    "banner_img":"assets/images/blogs/blog_post_1.jpg",
    "image":"assets/images/blogs/blog_post_1.jpg",
    "content":"<p> <span class='dropcap accent-color'>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). sometimes on purpose (injected humour and the like). </p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>",
    "short_content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
    "tags":["Shopping","Online"],
    "user_comments":[
        {
            "img":"assets/images/user-2.jpg",
            "name":"Jimmy Beck",
            "comment":"Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. ",
            "date":"Sept 13, 2018",
            "sub_comments":[
                {
                    "img":"assets/images/user-3.jpg",
                    "name":"Jessica Reed",
                    "comment":"You begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no afterthought, far from it, but it comes in a deserved second. ",
                    "date":"Sept 13, 2018"
                },
                {
                    "img":"assets/images/user-4.jpg",
                    "name":"Jeff Mackoay",
                    "comment":"But. A big but: Lorem Ipsum is not t the root of the problem, it just shows what's going wrong. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required",
                    "date":"Sept 15, 2018"
                }
            ]
        },
        {
            "img":"assets/images/user-3.jpg",
            "name":"Jessica Reed",
            "comment":"You begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no afterthought, far from it, but it comes in a deserved second. ",
            "date":"Sept 13, 2018"
        },
        {
            "img":"assets/images/user-4.jpg",
            "name":"Jeff Mackoay",
            "comment":"But. A big but: Lorem Ipsum is not t the root of the problem, it just shows what's going wrong. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required",
            "date":"Sept 15, 2018"
        }
    ]
    },
    {
      "id":2,
      "post_type":"Featured post.",
      "name":"White gold engagement rings for couples",
      "author":{
            "author_img":"assets/images/user-3.jpg",
            "author_name":"Demeon Phil",
            "post_date": "01 Aug",
            "author_bio":"Websites in professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it's about controlling hundreds of articles, product pages"
      },
      "banner_img":"assets/images/blogs/blog_post_2.jpg",
      "image":"assets/images/blogs/blog_post_2.jpg",
      "content":"<p> <span class='dropcap accent-color'>C</span>onsectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). sometimes on purpose (injected humour and the like). </p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>",
      "short_content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "tags":["Shopping","New Arrival"],
      "user_comments":[
            {
                "img":"assets/images/user-1.jpg",
                "name":"Emily Barn",
                "comment":"Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. ",
                "date":"Sept 13, 2018"
            },
            {
                "img":"assets/images/user-4.jpg",
                "name":"Lara Wilson",
                "comment":"You begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no afterthought, far from it, but it comes in a deserved second. ",
                "date":"Sept 13, 2018"
            },
            {
                "img":"assets/images/user-2.jpg",
                "name":"Jaby Gibbs",
                "comment":"But. A big but: Lorem Ipsum is not t the root of the problem, it just shows what's going wrong. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required",
                "date":"Sept 15, 2018"
            }
      ]
    },
    {
      "id":3,
      "post_type":"Featured post.",
      "name":"Shallow focus photo of gold-colored ring",
      "author":{
          "author_img":"assets/images/user-2.jpg",
          "author_name":"Luke Hobbs",
          "post_date": "20 Oct",
          "author_bio":"If the copy becomes distracting in the design then you are doing something wrong or they are discussing copy changes. It might be a bit annoying but you could tell them that that discussion would be best suited for another time."
      },
      "banner_img":"assets/images/blogs/blog_post_3.jpg",
      "image":"assets/images/blogs/blog_post_3.jpg",
      "content":"<p> <span class='dropcap accent-color'>T</span>onsectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). sometimes on purpose (injected humour and the like). </p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>",
      "short_content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "tags":["Shopping","New Arrival"],
      "user_comments":[
          {
              "img":"assets/images/user-4.jpg",
              "name":"Emily Barn",
              "comment":"Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. ",
              "date":"Sept 13, 2018"
          },
          {
              "img":"assets/images/user-1.jpg",
              "name":"Lara Wilson",
              "comment":"You begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no afterthought, far from it, but it comes in a deserved second. ",
              "date":"Sept 13, 2018"
          },
          {
              "img":"assets/images/user-3.jpg",
              "name":"Jaby Gibbs",
              "comment":"But. A big but: Lorem Ipsum is not t the root of the problem, it just shows what's going wrong. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required",
              "date":"Sept 15, 2018"
          }
      ]
    },
    {
      "id":4,
      "post_type":"Featured post.",
      "name":"Pearl necklace jewelry treasure box",
      "author":{
            "author_img":"assets/images/user-3.jpg",
            "author_name":"Demeon Phil",
            "post_date": "14 Sep",
            "author_bio":"Websites in professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it's about controlling hundreds of articles, product pages"
      },
      "banner_img":"assets/images/blogs/blog_post_4.jpg",
      "image":"assets/images/blogs/blog_post_4.jpg",
      "content":"<p> <span class='dropcap accent-color'>C</span>onsectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). sometimes on purpose (injected humour and the like). </p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>",
      "short_content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "tags":["Shopping","New Arrival"],
      "user_comments":[
            {
                "img":"assets/images/user-1.jpg",
                "name":"Emily Barn",
                "comment":"Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. ",
                "date":"Sept 13, 2018"
            },
            {
                "img":"assets/images/user-4.jpg",
                "name":"Lara Wilson",
                "comment":"You begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no afterthought, far from it, but it comes in a deserved second. ",
                "date":"Sept 13, 2018"
            },
            {
                "img":"assets/images/user-2.jpg",
                "name":"Jaby Gibbs",
                "comment":"But. A big but: Lorem Ipsum is not t the root of the problem, it just shows what's going wrong. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required",
                "date":"Sept 15, 2018"
            }
      ]
    },
    {
      "id":5,
      "post_type":"Featured post.",
      "name":"Woman wearing silver colore jewelery",
      "author":{
            "author_img":"assets/images/user-3.jpg",
            "author_name":"Demeon Phil",
            "post_date": "01 Aug",
            "author_bio":"Websites in professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it's about controlling hundreds of articles, product pages"
      },
      "banner_img":"assets/images/blogs/blog_post_5.jpg",
      "image":"assets/images/blogs/blog_post_5.jpg",
      "content":"<p> <span class='dropcap accent-color'>C</span>onsectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). sometimes on purpose (injected humour and the like). </p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>",
      "short_content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "tags":["Shopping","New Arrival"],
      "user_comments":[
            {
                "img":"assets/images/user-1.jpg",
                "name":"Emily Barn",
                "comment":"Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. ",
                "date":"Sept 13, 2018"
            },
            {
                "img":"assets/images/user-4.jpg",
                "name":"Lara Wilson",
                "comment":"You begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no afterthought, far from it, but it comes in a deserved second. ",
                "date":"Sept 13, 2018"
            },
            {
                "img":"assets/images/user-2.jpg",
                "name":"Jaby Gibbs",
                "comment":"But. A big but: Lorem Ipsum is not t the root of the problem, it just shows what's going wrong. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required",
                "date":"Sept 15, 2018"
            }
      ]
    },
    {
      "id":6,
      "post_type":"Featured post.",
      "name":"Gold bangle is top of the engagement band",
      "author":{
            "author_img":"assets/images/user-3.jpg",
            "author_name":"Demeon Phil",
            "post_date": "01 Aug",
            "author_bio":"Websites in professional use templating systems. Commercial publishing platforms and content management systems ensure that you can show different text, different data using the same template. When it's about controlling hundreds of articles, product pages"
      },
      "banner_img":"assets/images/blogs/blog_post_6.jpg",
      "image":"assets/images/blogs/blog_post_6.jpg",
      "content":"<p> <span class='dropcap accent-color'>C</span>onsectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). sometimes on purpose (injected humour and the like). </p> <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea libero nobis hic impedit similique, iste possimus. Libero delectus hic tempore suscipit blanditiis? Odit consequuntur facilis debitis quam accusamus ducimus? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p> <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </p>",
      "short_content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      "tags":["Shopping","New Arrival"],
      "user_comments":[
            {
                "img":"assets/images/user-1.jpg",
                "name":"Emily Barn",
                "comment":"Do you like Cheese Whiz? Spray tan? Fake eyelashes? That's what is Lorem Ipsum to many—it rubs them the wrong way, all the way. It's unreal, uncanny, makes you wonder if something is wrong, it seems to seek your attention for all the wrong reasons. ",
                "date":"Sept 13, 2018"
            },
            {
                "img":"assets/images/user-4.jpg",
                "name":"Lara Wilson",
                "comment":"You begin with a text, you sculpt information, you chisel away what's not needed, you come to the point, make things clear, add value, you're a content person, you like words. Design is no afterthought, far from it, but it comes in a deserved second. ",
                "date":"Sept 13, 2018"
            },
            {
                "img":"assets/images/user-2.jpg",
                "name":"Jaby Gibbs",
                "comment":"But. A big but: Lorem Ipsum is not t the root of the problem, it just shows what's going wrong. Chances are there wasn't collaboration, communication, and checkpoints, there wasn't a process agreed upon or specified with the granularity required",
                "date":"Sept 15, 2018"
            }
      ]
    },
  ];
}
