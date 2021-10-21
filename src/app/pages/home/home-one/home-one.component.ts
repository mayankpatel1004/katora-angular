import { Component, OnInit } from '@angular/core';
import { KatoraService } from 'src/app/services/katora.service';



@Component({
  selector: 'app-home-one',
  templateUrl: './home-one.component.html',
  styleUrls: ['./home-one.component.scss']
})

export class HomeOneComponent implements OnInit {
  constructor(private katoraService : KatoraService) {
    
  }
 
  
  ngOnInit() {
    
  }

  onAddCart(product: any){

    this.katoraService.addProductToCart(product);  
    
  }

  products = [
    
    {
      server_time: 1576216365,
      products_id: 1,
      products_quantity: 1,
      products_model: null,
      products_image: 'assets/images/product_images/product_image_01.jpg',
      products_price: 285,
      products_date_added: '0000-00-00 00:00:00',
      products_last_modified: null,
      products_date_available: null,
      products_weight: '200',
      products_weight_unit: 'Gram',
      products_status: 1,
      is_current: 1,
      products_tax_class_id: 0,
      manufacturers_id: null,
      products_ordered: 0,
      products_liked: 0,
      low_limit: 0,
      is_feature: 1,
      is_new : 1,
      products_slug: 'smartwatch-motorola-moto-360',
      products_type: 0,
      products_min_order: 1,
      products_max_stock: 10,
      created_at: null,
      updated_at: null,
      id: 53,
      language_id: 1,
      products_name: 'Austrian Crystals Engagement Jewelry Ring',
      products_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      products_url: null,
      products_viewed: 0,
      products_left_banner: '',
      products_left_banner_start_date: null,
      products_left_banner_expire_date: null,
      products_right_banner: '',
      products_right_banner_start_date: null,
      products_right_banner_expire_date: null,
      manufacturer_name: null,
      manufacturer_image: null,
      manufacturers_slug: null,
      date_added: null,
      last_modified: null,
      manufacturers_image: null,
      manufacturers_url: null,
      discount_price: '50',
      currency: 'usd',
      images: ['assets/images/product_images/product_image_01_02.jpg'],
      categories: [
        {
          categories_id: 14,
          categories_name: 'Ring Collection',
          categories_image: '83',
          categories_icon: '83',
          parent_id: 0
        }
      ],
      rating: '0.00',
      total_user_rated: 0,
      five_ratio: 0,
      four_ratio: 0,
      three_ratio: 0,
      two_ratio: 0,
      one_ratio: 0,
      reviewed_customers: [],
      defaultStock: 0,
      isLiked: '0',
      attributes: [],
      quantity: 1
    },
    {
      server_time: 1576216365,
      products_id: 2,
      products_quantity: 1,
      products_model: null,
      products_image: 'assets/images/product_images/product_image_02.jpg',
      products_price: 285,
      products_date_added: '0000-00-00 00:00:00',
      products_last_modified: null,
      products_date_available: null,
      products_weight: '200',
      products_weight_unit: 'Gram',
      products_status: 1,
      is_current: 1,
      products_tax_class_id: 0,
      manufacturers_id: null,
      products_ordered: 0,
      products_liked: 0,
      low_limit: 0,
      is_feature: 0,
      is_new : 1,
      products_slug: 'slim-lcd-touch-screen-1',
      products_type: 0,
      products_min_order: 1,
      products_max_stock: 10,
      created_at: null,
      updated_at: null,
      id: 51,
      language_id: 1,
      products_name: 'Crystal Water Drop Wedding Function Earrings',
      products_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      products_url: null,
      products_viewed: 0,
      products_left_banner: '',
      products_left_banner_start_date: null,
      products_left_banner_expire_date: null,
      products_right_banner: '',
      products_right_banner_start_date: null,
      products_right_banner_expire_date: null,
      manufacturer_name: null,
      manufacturer_image: null,
      manufacturers_slug: null,
      date_added: null,
      last_modified: null,
      manufacturers_image: null,
      manufacturers_url: null,
      discount_price: null,
      currency: 'usd',
      images: ['assets/images/product_images/product_image_02_02.jpg'],
      categories: [
        {
          categories_id: 12,
          categories_name: 'Earrings',
          categories_image: '83',
          categories_icon: '83',
          parent_id: 0
        }
      ],
      rating: '0.00',
      total_user_rated: 0,
      five_ratio: 0,
      four_ratio: 0,
      three_ratio: 0,
      two_ratio: 0,
      one_ratio: 0,
      reviewed_customers: [],
      defaultStock: 0,
      isLiked: '0',
      attributes: [],
      quantity: 1
    },
    {
      server_time: 1576216365,
      products_id: 3,
      products_quantity: 1,
      products_model: null,
      products_image: 'assets/images/product_images/product_image_03.jpg',
      products_price: 85,
      products_date_added: '0000-00-00 00:00:00',
      products_last_modified: null,
      products_date_available: null,
      products_weight: '500',
      products_weight_unit: 'Gram',
      products_status: 1,
      is_current: 1,
      products_tax_class_id: 0,
      manufacturers_id: null,
      products_ordered: 0,
      products_liked: 0,
      low_limit: 0,
      is_feature: 0,
      is_new : 0,
      products_slug: 'mobile-phone-tablet-pc',
      products_type: 0,
      products_min_order: 1,
      products_max_stock: 10,
      created_at: null,
      updated_at: null,
      id: 39,
      language_id: 1,
      products_name: 'Women Crystal Zircon Wedding Function Rings',
      products_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis felis tempus feugiat maximus. Aliquam erat volutpat. Aenean eget viverra mi. Duis pulvinar elit massa, vitae posuere urna blandit sed. Praesent ut dignissim risus.',
      products_url: null,
      products_viewed: 0,
      products_left_banner: null,
      products_left_banner_start_date: 0,
      products_left_banner_expire_date: 0,
      products_right_banner: null,
      products_right_banner_start_date: 0,
      products_right_banner_expire_date: 0,
      manufacturer_name: null,
      manufacturer_image: null,
      manufacturers_slug: null,
      date_added: null,
      last_modified: null,
      manufacturers_image: null,
      manufacturers_url: null,
      discount_price: null,
      currency: 'usd',
      images: ['assets/images/product_images/product_image_03_02.jpg'],
      categories: [
        {
          categories_id: 11,
          categories_name: 'Ring Collection',
          categories_image: '83',
          categories_icon: '83',
          parent_id: 0
        }
      ],
      rating: '0.00',
      total_user_rated: 0,
      five_ratio: 0,
      four_ratio: 0,
      three_ratio: 0,
      two_ratio: 0,
      one_ratio: 0,
      reviewed_customers: [],
      defaultStock: 0,
      isLiked: '0',
      attributes: [],
      quantity: 1
    },
    {
      server_time: 1576216365,
      products_id: 4,
      products_quantity: 1,
      products_model: null,
      
      products_image: 'assets/images/product_images/product_image_04.jpg',
      products_price: 110,
      products_date_added: '0000-00-00 00:00:00',
      products_last_modified: null,
      products_date_available: null,
      products_weight: '500',
      products_weight_unit: 'Gram',
      products_status: 1,
      is_current: 1,
      products_tax_class_id: 0,
      manufacturers_id: null,
      products_ordered: 0,
      products_liked: 0,
      low_limit: 0,
      is_feature: 0,
      is_new : 0,
      products_slug: 'apple-iphone-6s-factory-unlock',
      products_type: 0,
      products_min_order: 1,
      products_max_stock: 10,
      created_at: null,
      updated_at: null,
      id: 37,
      language_id: 1,
      products_name: 'Women Crystal Zircon Engagement And Wedding Ring',
      products_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis felis tempus feugiat maximus. Aliquam erat volutpat. Aenean eget viverra mi. Duis pulvinar elit massa, vitae posuere urna blandit sed. Praesent ut dignissim risus.',
      products_url: null,
      products_viewed: 0,
      products_left_banner: null,
      products_left_banner_start_date: 0,
      products_left_banner_expire_date: 0,
      products_right_banner: null,
      products_right_banner_start_date: 0,
      products_right_banner_expire_date: 0,
      manufacturer_name: null,
      manufacturer_image: null,
      manufacturers_slug: null,
      date_added: null,
      last_modified: null,
      manufacturers_image: null,
      manufacturers_url: null,
      discount_price: '100',
      currency: 'usd',
      images: ['assets/images/product_images/product_image_04_02.jpg'],
      categories: [
        {
          categories_id: 11,
          categories_name: 'Rings',
          categories_image: '83',
          categories_icon: '83',
          parent_id: 0
        }
      ],
      rating: '0.00',
      total_user_rated: 0,
      five_ratio: 0,
      four_ratio: 0,
      three_ratio: 0,
      two_ratio: 0,
      one_ratio: 0,
      reviewed_customers: [],
      defaultStock: 0,
      isLiked: '0',
      attributes: [],
      quantity: 1
    },
    {
      server_time: 1576216365,
      products_id: 5,
      products_quantity: 1,
      products_model: null,
      products_image: 'assets/images/product_images/product_image_06.jpg',
      products_price: 185,
      products_date_added: '0000-00-00 00:00:00',
      products_last_modified: null,
      products_date_available: null,
      products_weight: '300',
      products_weight_unit: 'Gram',
      products_status: 1,
      is_current: 1,
      products_tax_class_id: 0,
      manufacturers_id: null,
      products_ordered: 0,
      products_liked: 0,
      low_limit: 0,
      is_feature: 0,
      is_new : 0,
      products_slug: 'electric-steam-irons',
      products_type: 0,
      products_min_order: 1,
      products_max_stock: 10,
      created_at: null,
      updated_at: null,
      id: 29,
      language_id: 1,
      products_name: 'Vienois Rose Gold Circle Bangle for Wedding',
      products_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis felis tempus feugiat maximus. Aliquam erat volutpat. Aenean eget viverra mi. Duis pulvinar elit massa, vitae posuere urna blandit sed. Praesent ut dignissim risus.',
      products_url: null,
      products_viewed: 0,
      products_left_banner: null,
      products_left_banner_start_date: 0,
      products_left_banner_expire_date: 0,
      products_right_banner: null,
      products_right_banner_start_date: 0,
      products_right_banner_expire_date: 0,
      manufacturer_name: null,
      manufacturer_image: null,
      manufacturers_slug: null,
      date_added: null,
      last_modified: null,
      manufacturers_image: null,
      manufacturers_url: null,
      discount_price: null,
      currency: 'usd',
      images: ['assets/images/product_images/product_image_06_02.jpg'],
      categories: [
        {
          categories_id: 15,
          categories_name: 'Bangle',
          categories_image: '83',
          categories_icon: '83',
          parent_id: 0
        }
      ],
      rating: '0.00',
      total_user_rated: 0,
      five_ratio: 0,
      four_ratio: 0,
      three_ratio: 0,
      two_ratio: 0,
      one_ratio: 0,
      reviewed_customers: [],
      defaultStock: 0,
      isLiked: '0',
      attributes: [],
      quantity: 1
    },
    {
      server_time: 1576216365,
      products_id: 6,
      products_quantity: 1,
      products_model: null,
      products_image: 'assets/images/product_images/product_image_05.jpg',
      products_price: 81,
      products_date_added: '0000-00-00 00:00:00',
      products_last_modified: null,
      products_date_available: null,
      products_weight: '2000',
      products_weight_unit: 'Gram',
      products_status: 1,
      is_current: 1,
      products_tax_class_id: 0,
      manufacturers_id: null,
      products_ordered: 0,
      products_liked: 0,
      low_limit: 0,
      is_feature: 0,
      is_new : 0,
      products_slug: 'slim-lcd-touch-screen',
      products_type: 0,
      products_min_order: 1,
      products_max_stock: 10,
      created_at: null,
      updated_at: null,
      id: 35,
      language_id: 1,
      products_name: 'Bracelet Women Metal Chain for Engagement',
      products_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis felis tempus feugiat maximus. Aliquam erat volutpat. Aenean eget viverra mi. Duis pulvinar elit massa, vitae posuere urna blandit sed. Praesent ut dignissim risus.',
      products_url: null,
      products_viewed: 0,
      products_left_banner: null,
      products_left_banner_start_date: 0,
      products_left_banner_expire_date: 0,
      products_right_banner: null,
      products_right_banner_start_date: 0,
      products_right_banner_expire_date: 0,
      manufacturer_name: null,
      manufacturer_image: null,
      manufacturers_slug: null,
      date_added: null,
      last_modified: null,
      manufacturers_image: null,
      manufacturers_url: null,
      discount_price: '20',
      currency: 'usd',
      images: ['assets/images/product_images/product_image_05_02.jpg'],
      categories: [
        {
          categories_id: 18,
          categories_name: 'Bracelet',
          categories_image: '83',
          categories_icon: '89',
          parent_id: 0
        }
      ],
      rating: '0.00',
      total_user_rated: 0,
      five_ratio: 0,
      four_ratio: 0,
      three_ratio: 0,
      two_ratio: 0,
      one_ratio: 0,
      reviewed_customers: [],
      defaultStock: 0,
      isLiked: '0',
      attributes: [],
      quantity: 1
    },
    {
      server_time: 1576216365,
      products_id: 7,
      products_quantity: 1,
      products_model: null,
      products_image: 'assets/images/product_images/product_image_07.jpg',
      products_price: 85,
      products_date_added: '0000-00-00 00:00:00',
      products_last_modified: null,
      products_date_available: null,
      products_weight: '250',
      products_weight_unit: 'Gram',
      products_status: 1,
      is_current: 1,
      products_tax_class_id: 0,
      manufacturers_id: null,
      products_ordered: 0,
      products_liked: 0,
      low_limit: 0,
      is_feature: 0,
      is_new : 0,
      products_slug: 'gaming-headset-deep-bass',
      products_type: 0,
      products_min_order: 1,
      products_max_stock: 10,
      created_at: null,
      updated_at: null,
      id: 33,
      language_id: 1,
      products_name: 'Gold Rhinestone Pageant Crown for Women',
      products_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis felis tempus feugiat maximus. Aliquam erat volutpat. Aenean eget viverra mi. Duis pulvinar elit massa, vitae posuere urna blandit sed. Praesent ut dignissim risus.',
      products_url: null,
      products_viewed: 0,
      products_left_banner: null,
      products_left_banner_start_date: 0,
      products_left_banner_expire_date: 0,
      products_right_banner: null,
      products_right_banner_start_date: 0,
      products_right_banner_expire_date: 0,
      manufacturer_name: null,
      manufacturer_image: null,
      manufacturers_slug: null,
      date_added: null,
      last_modified: null,
      manufacturers_image: null,
      manufacturers_url: null,
      discount_price: null,
      currency: 'usd',
      images: ['assets/images/product_images/product_image_07_02.jpg'],
      categories: [
        {
          categories_id: 17,
          categories_name: 'Crown',
          categories_image: '83',
          categories_icon: '89',
          parent_id: 0
        }
      ],
      rating: '0.00',
      total_user_rated: 0,
      five_ratio: 0,
      four_ratio: 0,
      three_ratio: 0,
      two_ratio: 0,
      one_ratio: 0,
      reviewed_customers: [],
      defaultStock: 0,
      isLiked: '0',
      attributes: [],
      quantity: 1
    },
    {
      server_time: 1576216365,
      products_id: 8,
      products_quantity: 1,
      products_model: null,
      products_image: 'assets/images/product_images/product_image_08.jpg',
      products_price: 85,
      products_date_added: '0000-00-00 00:00:00',
      products_last_modified: null,
      products_date_available: null,
      products_weight: '300',
      products_weight_unit: 'Gram',
      products_status: 1,
      is_current: 1,
      products_tax_class_id: 0,
      manufacturers_id: null,
      products_ordered: 0,
      products_liked: 0,
      low_limit: 0,
      is_feature: 0,
      is_new : 0,
      products_slug: 'mini-triangle-sandwich-maker',
      products_type: 0,
      products_min_order: 1,
      products_max_stock: 10,
      created_at: null,
      updated_at: null,
      id: 31,
      language_id: 1,
      products_name: 'Romantic Love Hollow Heart Necklace for Women',
      products_description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis felis tempus feugiat maximus. Aliquam erat volutpat. Aenean eget viverra mi. Duis pulvinar elit massa, vitae posuere urna blandit sed. Praesent ut dignissim risus.',
      products_url: null,
      products_viewed: 0,
      products_left_banner: null,
      products_left_banner_start_date: 0,
      products_left_banner_expire_date: 0,
      products_right_banner: null,
      products_right_banner_start_date: 0,
      products_right_banner_expire_date: 0,
      manufacturer_name: null,
      manufacturer_image: null,
      manufacturers_slug: null,
      date_added: null,
      last_modified: null,
      manufacturers_image: null,
      manufacturers_url: null,
      discount_price: null,
      currency: 'usd',
      images: ['assets/images/product_images/product_image_08_02.jpg'],
      categories: [
        {
          categories_id: 16,
          categories_name: 'Necklace',
          categories_image: '83',
          categories_icon: '83',
          parent_id: 0
        }
      ],
      rating: '0.00',
      total_user_rated: 0,
      five_ratio: 0,
      four_ratio: 0,
      three_ratio: 0,
      two_ratio: 0,
      one_ratio: 0,
      reviewed_customers: [],
      defaultStock: 0,
      isLiked: '0',
      attributes: [],
      quantity: 1
    }
  ];

  
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
 

  
  slideConfigCarousel = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "arrows" : false,

    "autoplay":true,
    "autoplaySpeed":5000,
    "speed":600,
    
    "pauseOnHover":false,

    "pauseOnDotsHover":true,
    "cssEase":'linear',
    
    // "fade":true,
    // "draggable":false,
    // "prevArrow":'<button class="PrevArrow"></button>',
    // "nextArrow":'<button class="NextArrow"></button>', 

    responsive: [
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  slideConfigTabFeatured = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": false,
    "arrows" : false,

    responsive: [
      {
      breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  slideConfigTabSpecial = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": false,
    "arrows" : false,

    responsive: [
      {
        breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  slideConfigTabLiked = {
    "slidesToShow": 4,
    "slidesToScroll": 4,
    "dots": true,
    "infinite": false,
    "arrows" : false,

    responsive: [
      {
        breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
      {
      breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
      breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };
  slidePopularConfig = {"slidesToShow": 2, "slidesToScroll": 2, "dots": true, "infinite": false,
  "arrows" : false,
  responsive: [
    {
      breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    {
    breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
    breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]  
};
  slideBlogConfig = {"slidesToShow": 4, "slidesToScroll": 4, "dots": true, "infinite": false,
  "arrows" : false,
  responsive: [
    {
      breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
    {
    breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
    breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  }; 



}
