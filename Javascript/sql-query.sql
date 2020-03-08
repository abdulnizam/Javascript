// * Write pseudo-SQL statements to create database tables to store the products of a basic webshop.
// Each product has a name, a price, a creation date and may belong to several categories.
// Categories have a name and a flag to indicate whether the category is private or public.
// * Write a SQL query to find the list of products that belong to more than 5 public categories.
// * Write pseudo-SQL statements to create database tables to store the products of a basic webshop.
// Each product has a name, a price, a creation date and may belong to several categories.
// Categories have a name and a flag to indicate whether the category is private or public.
// * Write a SQL query to find the list of products that belong to more than 5 public categories.

CREATE TABLE `products` (
    `id` int AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `price` DECIMAL(10, 2) NOT NULL,
    `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_DATE(),
    PRIMARY KEY (`id`),
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

products
  id
  name
  price
  creation_date

CREATE TABLE `product_category_relationship` (
    `product_id` int,
    `category_id` int
) ENGINE=INNODB DEFAULT CHARSET=utf8;

product_category_relationship
  product_id,
  category_id

CREATE TABLE `categories` (
    `id` int AUTO_INCREMENT,
    `name` varchar(50) NOT NULL,
    `price` ENUM(‘public’,’private’),
    `creation_date` TIMESTAMP NOT NULL DEFAULT CURRENT_DATE(),
    PRIMARY KEY (`id`),
) ENGINE=INNODB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

categories
  id
  name
  type - private or public

select * from categories
left join product_category_relationship categories.id = product_category_relationship.category_id
left join products product_category_relationship.product_id = products.id

where type = public;


Select p.* from products p where p.product_id in
(select pc.product_id from product_category_relationship pc
  left join categories c on c.category_id = pc.category_id
  where c.category_type = 'public' group by pc.product_id
  having count(pc.product_id) > 5)
