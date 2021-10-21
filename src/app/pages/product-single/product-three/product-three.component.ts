import { Component, OnInit } from '@angular/core';
import { KatoraService } from 'src/app/services/katora.service';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-product-three',
  templateUrl: './product-three.component.html',
  styleUrls: ['./product-three.component.scss']
})
export class ProductThreeComponent implements OnInit {

  public productAddedToCart;
  public productTotal;

  constructor(private katoraService: KatoraService, private _lightbox: Lightbox) {
    this.loadAlbum();



  }
  loadAlbum() {
    this.products[0].images.forEach(element => {
      const src = element.image;
      const caption = 'caption here';
      const thumb = element.image;
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this._album.push(album);
    });
  }
  private _album = [];
  open(index: number): void {

    // open lightbox
    console.log('image');
    this._lightbox.open(this._album, index);
  }
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  onAddCart(product: any){
    this.katoraService.addProductToCart(product);
  }
  onAddWishlist(product: any){
    
    this.katoraService.addProductToWishlist(product);

  }
  
  ngOnInit() {
    this.productAddedToCart = this.katoraService.getProductFromCart();    
  }

  ngAfterContentChecked(){
    this.productAddedToCart = this.katoraService.getProductFromCart();    
    this.productTotal =  this.katoraService.calculateTotal().toFixed(2);
  }
  
  addQuantity(product: any){
    this.katoraService.onAddQuantity(product);

  }
  removeQuantity(product: any){
    this.katoraService.onRemoveQuantity(product); 
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
      images: [
        {
            "id": 1,
            "products_id": 1,
            "image": "assets/images/gallery/preview/Product_image_01.jpg",
            "htmlcontent": null,
            "sort_order": 1
        },
        {
            "id": 2,
            "products_id": 1,
            "image": "assets/images/gallery/preview/Product_image_02.jpg",
            "htmlcontent": null,
            "sort_order": 2
        },
        {
          "id": 3,
          "products_id": 1,
          "image": "assets/images/gallery/preview/Product_image_03.jpg",
          "htmlcontent": null,
          "sort_order": 3
        }
    ],
      
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
      products_name: 'Crystal Water Drop Wedding Function  Earrings',
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
      products_name: 'Crystal Wedding Function Rings',
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


  slideProductConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "infinite": false,
    //"asNavFor": "slideProductNavConfig",
    "asNavFor":".thumbs",
  };

  slideProductNavConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "asNavFor":".feedback",
    //"asNavFor": "slideProductConfig",
    "centerMode": true,
    "centerPadding": '60px',
    "dots": true,
    "arrows": false,
    "focusOnSelect": true
  };

  slideRelatedProductConfig = {
    "slidesToShow": 4,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": false,
    responsive: [
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
  slickInit(e) {
    console.log('slick initialized');
  }

}
